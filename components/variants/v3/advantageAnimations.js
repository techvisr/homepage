// Original, self-contained Lottie shape animations. Coordinates use a 96px canvas.
const fixed = (k) => ({ a: 0, k });
const orange = [0.95, 0.39, 0.22, 1];
const ink = [0.2, 0.22, 0.27, 1];
const path = (vertices, closed = false) => ({
  ty: "sh", ks: fixed({ v: vertices, i: vertices.map(() => [0, 0]), o: vertices.map(() => [0, 0]), c: closed }),
});
const circle = (x, y, diameter) => ({ ty: "el", p: fixed([x, y]), s: fixed([diameter, diameter]), d: 1 });
const rect = (x, y, width, height, radius = 5) => ({ ty: "rc", p: fixed([x, y]), s: fixed([width, height]), r: fixed(radius), d: 1 });
const pulse = (from, to) => ({ a: 1, k: [
  { t: 0, s: [from], e: [to], o: { x: [0.42], y: [0] }, i: { x: [0.58], y: [1] } },
  { t: 36, s: [to], e: [from], o: { x: [0.42], y: [0] }, i: { x: [0.58], y: [1] } },
  { t: 72, s: [from] },
] });

function layer(shapes, index, accent = false) {
  return {
    ty: 4, ind: index, nm: accent ? "Animated accent" : "Outline", sr: 1,
    ip: 0, op: 90, st: 0, bm: 0,
    ks: { o: accent ? pulse(72, 100) : fixed(100), r: fixed(0), p: fixed([0, 0, 0]), a: fixed([0, 0, 0]), s: fixed([100, 100, 100]) },
    shapes: [...shapes,
      { ty: "st", c: fixed(accent ? orange : ink), o: fixed(100), w: fixed(3.4), lc: 2, lj: 2, ml: 4 },
      ...(accent ? [{ ty: "tm", s: fixed(0), e: pulse(65, 100), o: fixed(0), m: 1 }] : []),
    ],
  };
}

const artwork = [
  // Engineering: a code window with animated syntax strokes.
  [[rect(48, 46, 66, 52), path([[15, 32], [81, 32]]), path([[35, 80], [61, 80]])],
    [path([[36, 42], [28, 50], [36, 58]]), path([[60, 42], [68, 50], [60, 58]]), path([[52, 40], [44, 61]])]],
  // AI: processor and signal connections.
  [[rect(48, 48, 42, 42, 8), ...[36, 48, 60].flatMap((n) => [path([[n, 17], [n, 27]]), path([[n, 69], [n, 79]]), path([[17, n], [27, n]]), path([[69, n], [79, n]])])],
    [path([[37, 56], [43, 41], [53, 55], [60, 40]]), circle(43, 41, 5), circle(53, 55, 5)]],
  // Security: shield outline with a drawing checkmark.
  [[path([[48, 14], [75, 25], [73, 56], [65, 69], [48, 82], [31, 69], [23, 56], [21, 25]], true)],
    [path([[34, 47], [44, 57], [63, 36]])]],
  // End-to-end expertise: linked modules around a central system.
  [[rect(48, 48, 20, 20), rect(20, 20, 16, 16, 4), rect(76, 20, 16, 16, 4), rect(20, 76, 16, 16, 4), rect(76, 76, 16, 16, 4)],
    [path([[28, 20], [48, 20], [48, 38]]), path([[58, 48], [76, 48], [76, 28]]), path([[48, 58], [48, 76], [28, 76]]), path([[20, 28], [20, 48], [38, 48]]), path([[58, 48], [76, 48], [76, 68]])]],
  // Industry focus: concentric target and a precise directional arrow.
  [[circle(44, 52, 60), circle(44, 52, 36), circle(44, 52, 10)],
    [path([[44, 52], [77, 19]]), path([[62, 19], [77, 19], [77, 34]])]],
  // Scalable engagement: growing columns and an upward trajectory.
  [[path([[16, 79], [82, 79]]), rect(27, 66, 12, 26, 2), rect(48, 58, 12, 42, 2), rect(69, 48, 12, 62, 2)],
    [path([[18, 43], [37, 27], [50, 30], [75, 12]]), path([[62, 12], [75, 12], [75, 25]])]],
];

export function createAdvantageAnimation(index) {
  const [outline, accent] = artwork[index] || artwork[0];
  return { v: "5.12.2", fr: 30, ip: 0, op: 90, w: 96, h: 96, nm: `Techvisr advantage ${index + 1}`, ddd: 0, assets: [], layers: [layer(accent, 1, true), layer(outline, 2)] };
}
