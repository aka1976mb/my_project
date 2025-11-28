interface ValdiElement {
    tag: any;
    props: any;
}
export declare const Valdi: {
    createElement(tag: any, props: any, ...children: any[]): ValdiElement;
    _renderComponent(component: Function, props: any): string;
    render(element: ValdiElement | string | number): string;
};
export declare const Label: (props: {
    children?: any;
    className?: string;
}) => ValdiElement;
export declare function useState<T>(initialValue: T): [T, (newValue: T) => void];
export {};
