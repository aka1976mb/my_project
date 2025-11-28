"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Valdi = void 0;
exports.useState = useState;
let currentState = [];
let stateIndex = 0;
let currentComponent = null;
let currentProps = null;
// The main Valdi object
exports.Valdi = {
    createElement(tag, props, ...children) {
        console.log('createElement - tag:', tag, 'props (initial):', props, 'children_rest_arg:', children);
        props = props || {};
        // Prioritize children passed directly in props, otherwise use rest arguments
        props.children = props.children !== undefined ? props.children : children;
        props.children = props.children.flat(); // Flatten the children array
        console.log('createElement - returning element with props:', props);
        return {
            tag,
            props,
        };
    },
    _renderComponent(component, props) {
        currentComponent = component;
        currentProps = props;
        stateIndex = 0;
        const element = component(props); // Execute the function component
        currentComponent = null;
        currentProps = null;
        return exports.Valdi.render(element); // Recursively render the returned element
    },
    render(element) {
        console.log('render - element:', element);
        if (typeof element === 'string' || typeof element === 'number') {
            return String(element);
        }
        if (typeof element.tag === 'function') {
            return this._renderComponent(element.tag, element.props);
        }
        console.log('render - element.props:', element.props);
        const childrenHTML = (element.props.children || []).map((child) => this.render(child)).join('');
        const attributesHTML = Object.keys(element.props)
            .filter(key => key !== 'children')
            .map(key => `${key}="${element.props[key]}"`)
            .join(' ');
        const attributesString = attributesHTML ? ` ${attributesHTML}` : '';
        return `<${element.tag}${attributesString}>${childrenHTML}</${element.tag}>`;
    },
};
// A simple Label component
const Label = (props) => {
    return exports.Valdi.createElement('label', props);
};
exports.Label = Label;
function useState(initialValue) {
    if (currentComponent === null) {
        throw new Error('useState can only be called inside a function component.');
    }
    const index = stateIndex++;
    if (currentState[index] === undefined) {
        currentState[index] = initialValue;
    }
    const setter = (newValue) => {
        currentState[index] = newValue;
        // Trigger re-render (for now, we'll just log a message)
        console.log(`State updated for component ${(currentComponent === null || currentComponent === void 0 ? void 0 : currentComponent.name) || 'unknown'}. Re-rendering needed!`);
        // In a real app, this would trigger a re-render of the currentComponent
        // Valdi.render(Valdi.createElement(currentComponent, currentProps));
    };
    return [currentState[index], setter];
}
