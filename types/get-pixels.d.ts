// Type definitions for get-pixels 3.3.2
// Project: https://github.com/scijs/get-pixels
// Definitions by: Ian Wolterstorff <https://github.com/iwolterstorff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ndarray from 'ndarray';

export = getPixels;

declare function getPixels(url: string, type: string, cb: (err: Error, pixels: ndarray) => void): void;
