/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

import "bootstrap";

import { animate, splitText, stagger } from "animejs";

const titleTarget = ".poster-title";

const split = splitText(titleTarget, {
  lines: true,
  words: true,
  chars: true,
});

split.addEffect(({ chars }) => {
  return animate(chars, {
    opacity: [0, 1],
    y: [20, 0],
    duration: 600,
    delay: stagger(30),
    ease: "out(4)",
  });
});
