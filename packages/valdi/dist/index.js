"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Valdi = void 0;
// The main Valdi object
exports.Valdi = {
    createElement(tag, props, ...children) {
        console.log(`Creating element: ${String(tag.name || tag)}`);
        props = props || {};
        props.children = children;
        return {
            tag,
            props,
            children,
        };
    },
    render(element) {
        if (typeof element.tag === 'function') {
            this.render(element.tag(element.props));
            return;
        }
        console.log('--- Rendering ---');
        console.log(JSON.stringify(element, null, 2));
        console.log('--- End Rendering ---');
    },
};
// A simple Label component
const Label = (props) => {
    return exports.Valdi.createElement('label', null, ...props.children);
};
exports.Label = Label;
