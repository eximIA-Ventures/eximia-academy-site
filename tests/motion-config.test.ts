import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateParallaxShift,
  getRevealDelayMs,
  normalizeBreatheDuration,
  normalizeParallaxFactor,
} from "../src/components/motion/config";

test("parallax aplica teto duro de 48 px nos dois sentidos", () => {
  assert.equal(calculateParallaxShift(1_000, 0.12), 48);
  assert.equal(calculateParallaxShift(-1_000, 0.12), -48);
});

test("fator de parallax fica limitado a 0,12", () => {
  assert.equal(normalizeParallaxFactor(0.4), 0.12);
  assert.equal(normalizeParallaxFactor(-0.4), -0.12);
});

test("respiração fica entre 9 e 12 segundos", () => {
  assert.equal(normalizeBreatheDuration(4), 9);
  assert.equal(normalizeBreatheDuration(10), 10);
  assert.equal(normalizeBreatheDuration(20), 12);
});

test("stagger avança em passos opcionais de 70 ms", () => {
  assert.equal(getRevealDelayMs(0), 0);
  assert.equal(getRevealDelayMs(3), 210);
  assert.equal(getRevealDelayMs(-2), 0);
});

