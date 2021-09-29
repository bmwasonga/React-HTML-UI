import React from 'react';

export type DivProps = {
    background: React.CSSProperties['background'];
    color: React.CSSProperties['color'];
    flexDirection: React.CSSProperties['flexDirection'];
    alignItems: React.CSSProperties['alignItems'];
    justifyContent: React.CSSProperties['justifyContent'];
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
    padding: React.CSSProperties['padding'];
    margin: React.CSSProperties['margin'];
    marginTop: React.CSSProperties['marginTop'];
    marginLeft: React.CSSProperties['marginLeft'];
    marginBottom: React.CSSProperties['marginBottom'];
    marginRight: React.CSSProperties['marginRight'];
    shadow: React.CSSProperties['boxShadow'];
    radius: React.CSSProperties['borderRadius'];
    display: React.CSSProperties['display'];
    overflow: React.CSSProperties['overflow'];
    position: React.CSSProperties['position'];
    border: React.CSSProperties['border'];
    children: React.ReactNode;
};

const defaultProps = {
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 0 0 0',
    margin: '0 0 0 0',
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

export const Div = (props: Partial<DivProps>) => {
    let updatedProps = {
        ...defaultProps,
        ...props,
    };

    
    const {
        flexDirection,
        alignItems,
        justifyContent,
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        children,
        width, height, display, overflow, position, border
    } = updatedProps;


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
               padding, margin, boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
                display,
                position,
                border
            }}
        >
            
            {children}
        </div>
    );
};
