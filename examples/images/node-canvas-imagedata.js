import EscPosEncoder from "../../src/esc-pos-encoder.js";
import { createCanvas, loadImage } from 'canvas';

let image = await loadImage('image.png');

let canvas = createCanvas(64, 64);
let ctx = canvas.getContext('2d');
ctx.drawImage(image, 0, 0, 64, 64);

let imageData = ctx.getImageData(0, 0, 64, 64);

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(imageData, 64, 64, 'atkinson')
    .encode();

console.log(result);