import {Component} from 'react';
import {connect} from 'react-redux';

import createElement from '../../util/createElement';

const [div, textarea] = ['div', 'textarea'].map(createElement);

class Code extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return div({
            id: 'codeblock'
        },
            textarea({
                id: 'codeInput'
            }, ['xor eax, eax', 'inc eax', 'push eax', 'pop ecx', 'mov ebx, esp'].join(String.fromCharCode(0xa)))
        );
    }
}

export default connect(null, null)(Code);
