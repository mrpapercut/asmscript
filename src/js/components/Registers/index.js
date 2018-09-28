import {Component} from 'react';
import {connect} from 'react-redux';

import createElement from '../../util/createElement';

const [div] = ['div'].map(createElement);

import EFLAGS from '../../util/EFLAGS';
import REGISTERS from '../../util/REGISTERS';

class Registers extends Component {
    constructor(props) {
        super(props);

        this.EFLAGS = new EFLAGS();
        this.REGISTERS = new REGISTERS();
    }

    render() {
        return div({
            id: 'registers'
        },
            'EFLAGS',
            div({
                id: 'eflags'
            },
                this.EFLAGS._flags.map(flag => flag.abbr !== '' ? div({
                    key: flag.abbr
                }, `${flag.abbr} ${Number(this.EFLAGS.isset(flag.abbr))}`) : null)
            )
        );
    }
}

export default connect(null, null)(Registers);
