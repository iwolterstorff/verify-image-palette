'use strict';

import * as AnyPalette from 'anypalette';
import getPixels from 'get-pixels';
import ndarray from 'ndarray';
import {promisify} from 'util';

async function verifyImage(imagePath: string, palettePath: string): Promise<boolean> {
    const pGetPixels: Function = promisify(getPixels);
    const pLoadPalette: Function = promisify(AnyPalette.loadPalette);

    const palette: AnyPalette.Palette = await pLoadPalette(palettePath);
    const image: ndarray = await pGetPixels(imagePath);

    let reds: ndarray<number> = image.pick(null, null, 0);
    let greens: ndarray<number> = image.pick(null, null, 1);
    let blues: ndarray<number> = image.pick(null, null, 2);
    let pixs: Array<AnyPalette.Color> = new Array<AnyPalette.Color>();
    for (let x = 0; x < image.shape[0]; ++x) {
        for (let y = 0; y < image.shape[1]; ++y) {
            let color: AnyPalette.Color = new AnyPalette.Color({r: reds.get(x, y), g: greens.get(x, y), b: blues.get(x, y)});
            pixs.push(color);
        }
    }
    return pixs.every((color: AnyPalette.Color) => palette.includes(color));
}

module.exports.verifyImage = verifyImage;