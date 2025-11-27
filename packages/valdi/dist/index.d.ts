interface ValdiElement {
    tag: any;
    props: any;
    children: any[];
}
export declare const Valdi: {
    createElement(tag: any, props: any, ...children: any[]): ValdiElement;
    render(element: ValdiElement): void;
};
export declare const Label: (props: {
    children?: any;
}) => ValdiElement;
export {};
