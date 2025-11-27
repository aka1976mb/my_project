// A simple representation of an element
interface ValdiElement {
  tag: any;
  props: any;
  children: any[];
}

// The main Valdi object
export const Valdi = {
  createElement(tag: any, props: any, ...children: any[]): ValdiElement {
    console.log(`Creating element: ${String(tag.name || tag)}`);
    props = props || {};
    props.children = children;
    return {
      tag,
      props,
      children,
    };
  },

  render(element: ValdiElement) {
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
export const Label = (props: { children?: any }) => {
  return Valdi.createElement('label', null, ...props.children);
};
