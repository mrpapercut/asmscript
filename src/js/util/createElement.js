import {createElement as E} from 'react';

const createElement = element => {
    return (props = {}, ...children) =>
        E(element, Object.assign({}, props), children.length > 0 ? children : null);
};

export default createElement;
