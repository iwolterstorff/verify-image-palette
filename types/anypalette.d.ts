// Type definitions for anypalette 0.1.0
// Project: https://github.com/1j01/anypalette.js
// Definitions by: Ian Wolterstorff <https://github.com/iwolterstorff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Color {
    constructor(options: any);
    l: number;
    s: number;
    r: number;
    g: number;
    b: number;
    is(color: Color): boolean;
}
export class Palette {
    static from(p0: any): any;
    static isArray(p0: any): any;
    static of(): any;
    constructor(args: any);
    add(o: any): Palette;
    concat(p0: any): any;
    copyWithin(p0: any, p1: any): any;
    entries(): any;
    every(p0: any): any;
    fill(p0: any): any;
    filter(p0: any): any;
    finalize(): any;
    find(p0: any): any;
    findIndex(p0: any): any;
    forEach(p0: any): any;
    guess_dimensions(): any;
    includes(p0: any): any;
    indexOf(p0: any): number;
    join(p0: any): any;
    keys(): any;
    lastIndexOf(p0: any): any;
    map(p0: any): any;
    pop(): any;
    push(p0: any): any;
    reduce(p0: any): any;
    reduceRight(p0: any): any;
    reverse(): any;
    shift(): any;
    slice(p0: any, p1: any): any;
    some(p0: any): any;
    sort(p0: any): any;
    splice(p0: any, p1: any): any;
    toLocaleString(): any;
    unshift(p0: any): any;
}
export class RandomColor {
    is(): any;
    randomize(): any;
}
export class RandomPalette {
    static from(p0: any): any;
    static isArray(p0: any): any;
    static of(): any;
    loaded_as: any;
    loaded_as_clause: any;
    confidence: any;
    add(o: any): any;
    concat(p0: any): any;
    copyWithin(p0: any, p1: any): any;
    entries(): any;
    every(p0: any): any;
    fill(p0: any): any;
    filter(p0: any): any;
    finalize(): any;
    find(p0: any): any;
    findIndex(p0: any): any;
    forEach(p0: any): any;
    guess_dimensions(): any;
    includes(p0: any): any;
    indexOf(p0: any): any;
    join(p0: any): any;
    keys(): any;
    lastIndexOf(p0: any): any;
    map(p0: any): any;
    pop(): any;
    push(p0: any): any;
    reduce(p0: any): any;
    reduceRight(p0: any): any;
    reverse(): any;
    shift(): any;
    slice(p0: any, p1: any): any;
    some(p0: any): any;
    sort(p0: any): any;
    splice(p0: any, p1: any): any;
    toLocaleString(): any;
    unshift(p0: any): any;
}
export function loadPalette(options: AnyPalette.LoadPaletteOptions, callback: (error: Error, palette: Palette) => void): void;
export function loadPalette(file: File, callback: (error: Error, palette: Palette) => void): void;
export function loadPalette(filePath: string, callback: (error: Error, palette: Palette) => void): void;

declare namespace AnyPalette {
    export interface LoadPaletteOptions {
        file?: File;
        data?: string;
        filePath?: string;
        fileName?: string;
        fileExt?: string;
    }
}
