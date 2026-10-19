#!/usr/bin/env python3
"""
CobblemonShowdown : dessine les fonds d'écran par défaut, des paysages en pixels
façon Cobblemon (blocs d'herbe, arbres à Noigrumes, Poké Balls), utilisés quand
le dossier fonds/ ne contient aucune image.

Il dessine aussi les fonds de combat (cobblemon/combat/), dans le même style.

Usage : python3 tools/fonds-pixel.py [dossier]   (par défaut client/play.pokemonshowdown.com/cobblemon/fonds)
Les fonds d'écran sont dessinés en 320 x 180 pixels puis agrandis 6 fois (1920 x 1080).
"""
import os
import random
import sys

from PIL import Image

W, H, SCALE = 320, 180, 6

SCENES = {
    'prairie': {
        'title': 'Prairie', 'seed': 7,
        'sky': [(118, 180, 255), (150, 200, 255), (182, 218, 255), (205, 232, 255)],
        'far': (126, 168, 214), 'mid': (92, 150, 96),
        'grass': (96, 176, 64), 'grass2': (76, 150, 52), 'dirt': (134, 96, 67), 'dirt2': (112, 78, 54),
        'stone': (125, 125, 125), 'stone2': (104, 104, 104),
        'sun': (255, 240, 150), 'cloud': (250, 252, 255), 'cloud2': (225, 234, 245), 'stars': False,
        'leaves': (58, 132, 46), 'leaves2': (44, 108, 36), 'trunk': (102, 76, 46),
    },
    'crepuscule': {
        'title': 'Crépuscule', 'seed': 21,
        'sky': [(70, 60, 140), (150, 80, 150), (235, 120, 110), (255, 180, 110)],
        'far': (120, 72, 120), 'mid': (78, 70, 96),
        'grass': (98, 150, 70), 'grass2': (78, 124, 58), 'dirt': (120, 84, 64), 'dirt2': (98, 68, 54),
        'stone': (110, 104, 112), 'stone2': (90, 86, 94),
        'sun': (255, 214, 120), 'cloud': (255, 190, 170), 'cloud2': (225, 150, 150), 'stars': False,
        'leaves': (64, 116, 54), 'leaves2': (48, 94, 44), 'trunk': (90, 64, 44),
    },
    'nuit': {
        'title': 'Nuit', 'seed': 3,
        'sky': [(12, 16, 44), (20, 28, 66), (30, 42, 88), (42, 58, 108)],
        'far': (36, 46, 84), 'mid': (30, 52, 60),
        'grass': (52, 100, 60), 'grass2': (40, 82, 50), 'dirt': (78, 58, 50), 'dirt2': (64, 48, 42),
        'stone': (74, 76, 88), 'stone2': (60, 62, 74),
        'sun': (236, 240, 255), 'cloud': (70, 82, 120), 'cloud2': (56, 66, 102), 'stars': True,
        'leaves': (34, 76, 44), 'leaves2': (26, 62, 36), 'trunk': (64, 48, 36),
    },
}

# Couleurs des Noigrumes (les fruits des arbres de Cobblemon).
APRICORNS = [(214, 52, 52), (246, 206, 60), (60, 110, 220), (70, 170, 70), (236, 120, 170), (40, 40, 44), (240, 240, 240)]

POKEBALL = [
    '..####..',
    '.#RRRR#.',
    '#RRRRRR#',
    '###WW###',
    '#WW##WW#',
    '#WWWWWW#',
    '.#WWWW#.',
    '..####..',
]


def shade(color, amount):
    return tuple(max(0, min(255, int(c * amount))) for c in color)


def heightmap(rng, base, rough, smooth):
    heights, h, slope = [], base, 0.0
    for _ in range(W):
        slope = slope * smooth + rng.uniform(-rough, rough)
        h += slope
        if h < base - 18 or h > base + 18:
            slope = -slope * 0.5
            h = max(base - 18, min(base + 18, h))
        heights.append(int(h))
    return heights


def draw(name, scene):
    rng = random.Random(scene['seed'])
    img = Image.new('RGB', (W, H))
    px = img.load()

    # Ciel en bandes, comme les dégradés des jeux en pixels.
    bands = scene['sky']
    for y in range(H):
        band = min(len(bands) - 1, y * len(bands) // 110)
        for x in range(W):
            px[x, y] = bands[band]
    if scene['stars']:
        for _ in range(140):
            x, y = rng.randrange(W), rng.randrange(95)
            px[x, y] = (255, 255, 230) if rng.random() < 0.7 else (180, 200, 255)

    # Soleil (ou lune) carré, avec un halo.
    sx, sy, size = 236, 22, 16
    for y in range(sy - 3, sy + size + 3):
        for x in range(sx - 3, sx + size + 3):
            px[x, y] = tuple((a + b) // 2 for a, b in zip(px[x, y], scene['sun']))
    for y in range(sy, sy + size):
        for x in range(sx, sx + size):
            px[x, y] = scene['sun']
    if scene['stars']:
        for (cx, cy) in [(sx + 4, sy + 5), (sx + 10, sy + 9), (sx + 6, sy + 11)]:
            for y in range(cy, cy + 2):
                for x in range(cx, cx + 2):
                    px[x, y] = shade(scene['sun'], 0.85)

    # Nuages plats et rectangulaires.
    for _ in range(7):
        cx, cy = rng.randrange(-20, W), rng.randrange(8, 60)
        for _ in range(rng.randrange(2, 4)):
            w, h = rng.randrange(14, 34), rng.randrange(4, 7)
            ox, oy = cx + rng.randrange(-10, 14), cy + rng.randrange(-3, 3)
            for y in range(oy, oy + h):
                for x in range(ox, ox + w):
                    if 0 <= x < W and 0 <= y < H:
                        px[x, y] = scene['cloud2'] if y == oy + h - 1 else scene['cloud']

    # Montagnes lointaines puis collines, en marches d'escalier.
    for layer, color, base in [('far', scene['far'], 92), ('mid', scene['mid'], 108)]:
        heights = heightmap(rng, base, 0.9 if layer == 'far' else 0.6, 0.85)
        for x in range(W):
            top = heights[x - x % 4]
            for y in range(top, H):
                px[x, y] = color if (y - top) > 0 else shade(color, 1.12)

    # Sol en blocs : herbe, terre puis pierre.
    ground = heightmap(rng, 136, 0.3, 0.8)
    ground = [ground[x - x % 8] for x in range(W)]
    for x in range(W):
        top = ground[x]
        for y in range(top, H):
            depth = y - top
            if depth < 3:
                color = scene['grass'] if rng.random() > 0.18 else scene['grass2']
            elif depth < 4 and rng.random() < 0.5:
                color = scene['grass2']
            elif depth < 30:
                color = scene['dirt'] if rng.random() > 0.22 else scene['dirt2']
            else:
                color = scene['stone'] if rng.random() > 0.25 else scene['stone2']
            # Joints de blocs : une ligne un peu plus sombre tous les 8 pixels.
            if (y - top) % 8 == 7 or x % 8 == 7:
                color = shade(color, 0.92)
            px[x, y] = color

    # Herbes hautes et fleurs.
    for x in range(W):
        if rng.random() < 0.18:
            top = ground[x]
            px[x, top - 1] = scene['grass2']
            if rng.random() < 0.35:
                px[x, top - 2] = rng.choice([(230, 60, 60), (250, 220, 70), (240, 240, 250), (170, 110, 230)])

    # Arbres, dont des arbres à Noigrumes.
    xs = sorted(rng.sample(range(16, W - 16, 22), 8))
    for i, tx in enumerate(xs):
        top = ground[tx]
        trunk_h = rng.randrange(12, 20)
        for y in range(top - trunk_h, top):
            for x in range(tx, tx + 2):
                px[x, y] = scene['trunk'] if x == tx else shade(scene['trunk'], 0.8)
        lw, lh = rng.randrange(14, 22), rng.randrange(11, 16)
        lx, ly = tx + 1 - lw // 2, top - trunk_h - lh + 3
        for y in range(ly, ly + lh):
            for x in range(lx, lx + lw):
                corner = (y in (ly, ly + lh - 1)) and (x in (lx, lx + lw - 1))
                if corner or not (0 <= x < W):
                    continue
                px[x, y] = scene['leaves'] if rng.random() > 0.25 else scene['leaves2']
        if i % 2 == 0:
            fruit = rng.choice(APRICORNS)
            for _ in range(6):
                fx, fy = rng.randrange(lx + 1, lx + lw - 2), rng.randrange(ly + 2, ly + lh - 1)
                for y in range(fy, fy + 2):
                    for x in range(fx, fx + 2):
                        if 0 <= x < W:
                            px[x, y] = fruit if (x, y) != (fx, fy) else shade(fruit, 1.25)

    # Deux Poké Balls posées dans l'herbe.
    colors = {'#': (30, 30, 36), 'R': (222, 52, 52), 'W': (244, 244, 244)}
    if scene['stars']:
        colors = {k: shade(v, 0.7) for k, v in colors.items()}
    for bx in rng.sample(range(40, W - 40, 10), 2):
        by = ground[bx] - 8
        for dy, row in enumerate(POKEBALL):
            for dx, ch in enumerate(row):
                if ch in colors and bx + dx < W:
                    px[bx + dx, by + dy] = colors[ch]

    return img.resize((W * SCALE, H * SCALE), Image.NEAREST)


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(root, 'client/play.pokemonshowdown.com/cobblemon/fonds')
    os.makedirs(out, exist_ok=True)
    for name, scene in SCENES.items():
        path = os.path.join(out, f'{name}.png')
        draw(name, scene).save(path, optimize=True)
        print(path, os.path.getsize(path) // 1024, 'Ko')



# --- Fonds de combat (753 x 500, comme fx/bg-*.png ; seul le centre 640 x 360 est visible) ---

BW, BH, BSCALE = 189, 125, 4
# Emplacement des Pokémon sur l'image : adversaire en haut à droite, joueur en bas à gauche.
FOE, PLAYER = (132, 60, 30, 9), (58, 99, 40, 12)

ARENAS = {
    'plaine': {'seed': 11, 'sky': [(130, 190, 255), (170, 214, 255)], 'ground': [(98, 172, 66), (88, 160, 58), (108, 182, 74)],
               'pad': (148, 118, 76), 'back': (70, 140, 60), 'far': (130, 170, 210), 'decor': 'oak'},
    'foret': {'seed': 12, 'sky': [(110, 170, 230), (150, 196, 236)], 'ground': [(70, 140, 52), (62, 126, 46), (80, 150, 60)],
              'pad': (120, 96, 64), 'back': (40, 96, 40), 'far': (60, 120, 70), 'decor': 'forest'},
    'desert': {'seed': 13, 'sky': [(150, 200, 250), (196, 224, 250)], 'ground': [(222, 206, 150), (212, 194, 138), (230, 214, 162)],
               'pad': (196, 150, 96), 'back': (210, 170, 110), 'far': (220, 190, 150), 'decor': 'cactus'},
    'neige': {'seed': 14, 'sky': [(170, 200, 230), (205, 222, 240)], 'ground': [(240, 246, 250), (226, 234, 242), (250, 252, 255)],
              'pad': (170, 196, 222), 'back': (40, 80, 64), 'far': (190, 205, 225), 'decor': 'spruce'},
    'plage': {'seed': 15, 'sky': [(120, 190, 250), (170, 220, 255)], 'ground': [(226, 214, 160), (216, 202, 148), (234, 222, 172)],
              'pad': (190, 168, 120), 'back': (60, 120, 210), 'far': (80, 150, 230), 'decor': 'sea'},
    'grotte': {'seed': 16, 'sky': [(36, 36, 44), (46, 46, 54)], 'ground': [(118, 118, 120), (104, 104, 108), (128, 128, 130)],
               'pad': (84, 84, 90), 'back': (70, 70, 76), 'far': (54, 54, 60), 'decor': 'cave'},
}


def put(px, x, y, color):
    if 0 <= x < BW and 0 <= y < BH:
        px[x, y] = color


def block_tree(px, rng, x, base, trunk, leaves, leaves2, height=None, spruce=False):
    height = height or rng.randrange(8, 13)
    for y in range(base - height, base):
        put(px, x, y, trunk)
        put(px, x + 1, y, shade(trunk, 0.8))
    if spruce:
        for i, w in enumerate([2, 4, 6, 4, 8, 6, 10]):
            y = base - height - 3 + i * 2
            for yy in (y, y + 1):
                for xx in range(x + 1 - w // 2, x + 1 + w // 2):
                    put(px, xx, yy, leaves if rng.random() > 0.2 else leaves2)
        return
    w, h = rng.randrange(9, 13), rng.randrange(7, 10)
    for y in range(base - height - h + 3, base - height + 3):
        for xx in range(x + 1 - w // 2, x + 1 + w // 2 + 1):
            put(px, xx, y, leaves if rng.random() > 0.25 else leaves2)


def draw_arena(name, arena):
    rng = random.Random(arena['seed'])
    img = Image.new('RGB', (BW, BH))
    px = img.load()
    horizon = 48
    ground = arena['ground']

    # Sol vu de dessus : un bloc tous les 4 pixels, chacun un peu différent.
    for by in range(horizon, BH, 4):
        for bx in range(0, BW, 4):
            base = rng.choice(ground)
            for y in range(by, min(BH, by + 4)):
                for x in range(bx, min(BW, bx + 4)):
                    color = base if rng.random() > 0.2 else shade(base, 0.93)
                    px[x, y] = color
    # Ciel, loin, puis la lisière du terrain.
    for y in range(horizon):
        for x in range(BW):
            px[x, y] = arena['sky'][0 if y < horizon - 20 else 1]
    if arena['decor'] == 'cave':
        for y in range(horizon):
            for x in range(BW):
                c = arena['back'] if rng.random() > 0.2 else shade(arena['back'], 0.85)
                if (x // 6 + y // 6) % 7 == 0 and rng.random() < 0.15:
                    c = rng.choice([(90, 200, 220), (230, 200, 70), (200, 60, 60)])
                px[x, y] = c
    else:
        heights = heightmap(rng, horizon - 12, 0.6, 0.8)
        for x in range(BW):
            for y in range(max(0, heights[x - x % 3] - 2), horizon):
                px[x, y] = arena['far']
    if arena['decor'] == 'sea':
        for y in range(horizon - 14, horizon):
            for x in range(BW):
                px[x, y] = arena['back'] if (x + y * 3) % 11 else shade(arena['back'], 1.25)
    # Bord du terrain, vu de côté : une rangée de blocs.
    edge = shade(ground[0], 0.75)
    for x in range(BW):
        for y in range(horizon - 2, horizon):
            px[x, y] = edge if rng.random() > 0.2 else shade(edge, 0.9)

    trunk, leaves, leaves2 = (102, 76, 46), (58, 132, 46), (44, 108, 36)
    if arena['decor'] in ('oak', 'forest'):
        count = 14 if arena['decor'] == 'forest' else 6
        for x in sorted(rng.sample(range(2, BW - 4, 7), count)):
            block_tree(px, rng, x, horizon - 1, trunk, leaves, leaves2, rng.randrange(10, 16))
            if rng.random() < 0.4:
                fruit = rng.choice(APRICORNS)
                for _ in range(3):
                    fx, fy = x + rng.randrange(-4, 5), horizon - rng.randrange(16, 22)
                    put(px, fx, fy, fruit)
    elif arena['decor'] == 'spruce':
        for x in sorted(rng.sample(range(2, BW - 4, 8), 9)):
            block_tree(px, rng, x, horizon - 1, (82, 60, 40), (36, 84, 60), (28, 70, 50), rng.randrange(8, 12), True)
    elif arena['decor'] == 'cactus':
        for x in sorted(rng.sample(range(4, BW - 4, 13), 6)):
            for y in range(horizon - rng.randrange(6, 11), horizon - 1):
                put(px, x, y, (60, 130, 50))
                put(px, x + 1, y, (48, 108, 40))

    # Deux terrains pour les Pokémon, avec un contour.
    for cx, cy, rx, ry in (FOE, PLAYER):
        for y in range(cy - ry - 1, cy + ry + 2):
            for x in range(cx - rx - 1, cx + rx + 2):
                d = ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2
                if d <= 1:
                    c = arena['pad'] if rng.random() > 0.2 else shade(arena['pad'], 0.92)
                    put(px, x, y, shade(c, 0.9) if d > 0.75 else c)
                elif d <= 1.25:
                    put(px, x, y, shade(px[x, y] if 0 <= x < BW and 0 <= y < BH else arena['pad'], 0.8))

    # Quelques détails au sol.
    for _ in range(40):
        x, y = rng.randrange(BW), rng.randrange(horizon + 2, BH)
        inside = any(((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1.3 for cx, cy, rx, ry in (FOE, PLAYER))
        if inside:
            continue
        if arena['decor'] in ('oak', 'forest'):
            put(px, x, y, rng.choice([(230, 60, 60), (250, 220, 70), (240, 240, 250), shade(ground[0], 0.8)]))
        elif arena['decor'] == 'cave':
            put(px, x, y, rng.choice([(90, 200, 220), (230, 200, 70), (60, 60, 64)]))
        else:
            put(px, x, y, shade(ground[0], 0.85))

    return img.resize((BW * BSCALE, BH * BSCALE), Image.NEAREST).crop((0, 0, 753, 500))


def main_arenas():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(root, 'client/play.pokemonshowdown.com/cobblemon/combat')
    os.makedirs(out, exist_ok=True)
    for name, arena in ARENAS.items():
        path = os.path.join(out, f'{name}.png')
        draw_arena(name, arena).save(path, optimize=True)
        print(path, os.path.getsize(path) // 1024, 'Ko')


if __name__ == '__main__':
    main()
    main_arenas()
