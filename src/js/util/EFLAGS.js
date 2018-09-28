import {padLeft as p} from './pad';

class EFLAGS {
    constructor() {
        this._eflags = 0x0;

        this._flags = [{
            name: 'Carry flag',
            abbr: 'CF',
            bit: 0x1
        }, { // Reserved, should always be set to 1
            name: '',
            abbr: '',
            bit: 0x2
        }, {
            name: 'Parity flag',
            abbr: 'PF',
            bit: 0x4
        }, { // Reserved
            name: '',
            abbr: '',
            bit: 0x8
        }, {
            name: 'Adjust flag',
            abbr: 'AF',
            bit: 0x10
        }, { // Reserved
            name: '',
            abbr: '',
            bit: 0x20
        }, {
            name: 'Zero flag',
            abbr: 'ZF',
            bit: 0x40
        }, {
            name: 'Sign flag',
            abbr: 'SF',
            bit: 0x80
        }, {
            name: 'Trap flag',
            abbr: 'TF',
            bit: 0x100
        }, {
            name: 'Interrupt enable flag',
            abbr: 'IF',
            bit: 0x200
        }, {
            name: 'Direction flag',
            abbr: 'DF',
            bit: 0x400
        }, {
            name: 'Overflow flag',
            abbr: 'OF',
            bit: 0x800
        }];
    }

    toString() {
        return p(this._eflags.toString(2), 16);
    }

    _lookup(flag) {
        const flagObject = this._flags.filter(f => f.abbr === flag)[0];

        if (!flagObject) {
            throw new Error('Invalid EFLAGS flag');
        } else {
            return flagObject;
        }
    }

    toggleFlag(flag) {
        const flagObject = this._lookup(flag);

        this._eflags ^= flagObject.bit;
    }

    isset(flag) {
        const flagObject = this._lookup(flag);

        return (this._eflags & flagObject.bit) !== 0;
    }
}

export default EFLAGS;
