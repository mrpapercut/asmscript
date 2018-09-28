import {Component, createElement as E} from 'react';
import {connect} from 'react-redux';

import Code from './Code';
import Registers from './Registers';
// import Stack from './Stack';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return E('div', {
            id: 'wrapper'
        },
            E(Code),
            E(Registers),
            // E(Stack)
        );
    }
}

const mapStateToProps = ({mainReducer}) => ({

});

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
