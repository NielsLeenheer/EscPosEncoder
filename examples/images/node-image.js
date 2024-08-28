import EscPosEncoder from "../../src/esc-pos-encoder.js";
import { getImageData, imageFromBuffer } from '@canvas/image';
import fs from 'node:fs';

let imageData = getImageData(await imageFromBuffer(fs.readFileSync('image.png')));

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(imageData, 64, 64, 'atkinson')
    .encode();

console.log(result);