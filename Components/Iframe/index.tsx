import React from 'react';




export type IframeProps = {
    background: Record<'r' | 'g' | 'b' | 'a', number>;
    color: Record<'r' | 'g' | 'b' | 'a', number>;
    flexDirection: React.CSSProperties['flexDirection'];
    alignItems: React.CSSProperties['alignItems'];
    justifyContent: React.CSSProperties['justifyContent'];
    fillSpace: string;
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
    padding: string[];
    margin: string[];
    marginTop: React.CSSProperties['marginTop'];
    marginLeft: React.CSSProperties['marginLeft'];
    marginBottom: React.CSSProperties['marginBottom'];
    marginRight: React.CSSProperties['marginRight'];
    shadow: number;
    children: React.ReactNode;
    radius: React.CSSProperties['borderRadius'];
    display: React.CSSProperties['display'];
    overflow: React.CSSProperties['overflow'];
    position: React.CSSProperties['position'];
    border: string;
};

const defaultProps = {
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fillSpace: 'no',
    padding: ['0', '0', '0', '0'],
    margin: ['0', '0', '0', '0'],
    background: { r: 255, g: 255, b: 255, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    width: '100%',
    height: 'auto',
    display: 'block',
    overflow: 'auto',
    position: 'static' as 'static',
    border:'none'
};

export const Iframe = (props: Partial<IframeProps>) => {
    props = {
        ...defaultProps,
        ...props,
    };

    
    const {
        flexDirection,
        alignItems,
        justifyContent,
        fillSpace,
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        children,
        width, height, display, overflow, position, border
    } = props;

    

    




    return (
        <div
            
            style={{
                justifyContent,
                width, height,
                flexDirection,
                alignItems,
                overflow,
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
                flex: fillSpace === 'yes' ? 1 : 'unset',
                display, position,
                border
            }}
        >
            
            {children}
        </div>
    );
};

Iframe.craft = {
    displayName: 'Iframe',
    elementName: 'iframe',
    props: defaultProps,
    rules: {
        canDrag: (self: Node, helper) => true
    },
    related: {
        toolbar: IframeSettings,
    },
};
