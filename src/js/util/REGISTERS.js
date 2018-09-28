class REGISTERS {
    constructor() {
        this._GPR = [{
            '64w': 'RAX',
            '32w': 'EAX',
            '16w': 'AX',
            '8h': 'AH',
            '8l': 'AL',
            value: 0x0
        }, {
            '64w': 'RCX',
            '32w': 'ECX',
            '16w': 'CX',
            '8h': 'CH',
            '8l': 'CL',
            value: 0x0
        }, {
            '64w': 'RDX',
            '32w': 'EDX',
            '16w': 'DX',
            '8h': 'DH',
            '8l': 'DL',
            value: 0x0
        }, {
            '64w': 'RBX',
            '32w': 'EBX',
            '16w': 'BX',
            '8h': 'BH',
            '8l': 'BL',
            value: 0x0
        }, {
            '64w': 'RSP',
            '32w': 'ESP',
            '16w': 'SP',
            value: 0x0
        }, {
            '64w': 'RBP',
            '32w': 'EBP',
            '16w': 'BP',
            value: 0x0
        }, {
            '64w': 'RSI',
            '32w': 'ESI',
            '16w': 'SI',
            value: 0x0
        }, {
            '64w': 'RDI',
            '32w': 'EDI',
            '16w': 'DI',
            value: 0x0
        }];

        this._segmentRegisters = [{
            '16w': 'SS' // Points to stack
        }, {
            '16w': 'CS' // Points to code
        }, {
            '16w': 'DS' // Points to data
        }, {
            '16w': 'ES' // Points to Extra data
        }, {
            '16w': 'FS' // Points to more extra data
        }, {
            '16w': 'GS' // Points to still more extra data
        }];

        /*
        const p = (str, len = 2, padStr = '0') =>
            (Array(len).fill(padStr).join('') + str).substr(0 - len);

        let num = parseInt('7715d724', 16);

        console.log(p(num.toString(2), 32))
        console.log(p((num & 0xff).toString(2), 8));
        console.log(p((num & 0x1ffff).toString(2), 16));
        */
    }
}
