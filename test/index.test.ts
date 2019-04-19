import verifyImage from '../src/index';

import path from 'path';

test('importing a palette from an invalid path throws an error', async () => {
    expect.assertions(1);
    const badLoad: Promise<boolean> = verifyImage(path.resolve(__dirname, 'assets', 'InkypHAT-212x104.png'), 'potato');
    return badLoad.catch(e => expect(e.code).toEqual('ENOENT'));
});

test('importing an image from an invalid path throws an error', async () => {
    expect.assertions(1);
    const badLoad: Promise<boolean> = verifyImage('potato', path.resolve(__dirname, 'assets', 'inky-palette.gpl'));
    return badLoad.catch(e => expect(e.code).toMatch('ENOENT'));;
});

test('verifying an image with its palette returns true', async () => {
    const result: boolean = await verifyImage(
        path.resolve(__dirname, 'assets', 'InkypHAT-212x104.png'),
        path.resolve(__dirname, 'assets', 'inky-palette.gpl'));
    expect(result).toBeTruthy();
});