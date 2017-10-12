namespace Guid {
    const cryptoObject: Crypto = typeof crypto !== 'undefined' ? crypto : null;

    let lut: Array<string> = []; //[8 bit number]: hex string -- lookup table to skip toString and padding during generation
    for (let i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }

    function generateWithCrypto(): string {
        let hex = new Uint8Array(16);
        cryptoObject.getRandomValues(hex);

        return lut[hex[0]] + lut[hex[1]] + lut[hex[2]] + lut[hex[3]] + '-' +
            lut[hex[4]] + lut[hex[5]] + '-' +
            lut[hex[6]] + lut[hex[7]] + '-' +
            lut[hex[8]] + lut[hex[9]] + '-' +
            lut[hex[10]] + lut[hex[11]] + lut[hex[12]] + lut[hex[13]] + lut[hex[14]] + lut[hex[15]];
    }

    function generateWithoutCrypto() {
        const d0 = Math.random() * 0xffffffff | 0;
        const d1 = Math.random() * 0xffffffff | 0;
        const d2 = Math.random() * 0xffffffff | 0;
        const d3 = Math.random() * 0xffffffff | 0;
        return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
            lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' +
            lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
            lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' +
            lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] +
            lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
    }

    export function Generate() {
        return cryptoObject ? generateWithCrypto() : generateWithoutCrypto();
    }

    export function Empty() {
        return '00000000-0000-0000-0000-000000000000';
    }
}

export default Guid;