'use strict';

const anypalette = require('anypalette');
const getPixels = require('get-pixels');

// FilePath FilePath -> boolean
function verifyPalette(imgPath, palettePath) {
    let pixArray; // ndarray
    getPixels(imgPath, (err, pixels) => {
        if (err) {
            throw "Invalid image path.";
        } else {
            pixArray = pixels;
        }
    });

    let palette;
    anypalette.load(palettePath, (err, pal) => {
        if (err) {
            throw "Invalid palette path.";
        } else {
            palette = pal;
        }
    });

    for (let i = 0; i < pixArray.shape[0]; i++) {
        for (let j = 0; j < pixArray.shape[1]; j++) {

        }
    }
}

// ndarray anypalette.Palette -> boolean
function verif(pixArray, palette) {
    for (let width = 0; width < pixArray.shape[0]; width++) {
        for (let height = 0; height < pixArray.shape[1]; height++) {

        }
    }
}