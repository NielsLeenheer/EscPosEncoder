import EscPosEncoder from "../../src/esc-pos-encoder.js";
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

let image = await loadImage('image.png');

let encoder = new EscPosEncoder({
    createCanvas
});

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);