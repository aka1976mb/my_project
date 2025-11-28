let currentState: any[] = [];
let stateIndex = 0;
let currentComponent: Function | null = null;
let currentProps: any = null;

// A simple representation of an element
interface ValdiElement {
  tag: any;
  props: any;
}

// The main Valdi object
export const Valdi = {
  createElement(tag: any, props: any, ...children: any[]): ValdiElement {
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

  _renderComponent(component: Function, props: any): string {
    currentComponent = component;
    currentProps = props;
    stateIndex = 0;
    const element = component(props); // Execute the function component
    currentComponent = null;
    currentProps = null;
    return Valdi.render(element); // Recursively render the returned element
  },

  render(element: ValdiElement | string | number): string {
    console.log('render - element:', element);
    if (typeof element === 'string' || typeof element === 'number') {
      return String(element);
    }

    if (typeof element.tag === 'function') {
      return this._renderComponent(element.tag, element.props);
    }
    console.log('render - element.props:', element.props);
    const childrenHTML = (element.props.children || []).map((child: ValdiElement | string | number) => this.render(child)).join('');
    
    const attributesHTML = Object.keys(element.props)
      .filter(key => key !== 'children')
      .map(key => `${key}="${element.props[key]}"`)
      .join(' ');

    const attributesString = attributesHTML ? ` ${attributesHTML}` : '';

    return `<${element.tag}${attributesString}>${childrenHTML}</${element.tag}>`;
  },
};

// A simple Label component
export const Label = (props: { children?: any, className?: string }) => {
  return Valdi.createElement('label', props);
};

export function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  if (currentComponent === null) {
    throw new Error('useState can only be called inside a function component.');
  }

  const index = stateIndex++;
  if (currentState[index] === undefined) {
    currentState[index] = initialValue;
  }

  const setter = (newValue: T) => {
    currentState[index] = newValue;
    // Trigger re-render (for now, we'll just log a message)
    console.log(`State updated for component ${currentComponent?.name || 'unknown'}. Re-rendering needed!`);
    // In a real app, this would trigger a re-render of the currentComponent
    // Valdi.render(Valdi.createElement(currentComponent, currentProps));
  };

  return [currentState[index], setter];
}
