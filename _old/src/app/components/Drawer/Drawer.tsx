import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type DrawerBaseProps = {
    visible: boolean;
}

type DrawerProps = DrawerBaseProps & PropsWithChildren<{

}>;


export function Drawer(props: DrawerProps) {
    const { children, visible } = props;
    return (
        <DrawerContentContainer visible={visible}>
            {children}
        </DrawerContentContainer>
    )
}

const DrawerContentContainer = styled.div<DrawerBaseProps>`
height: 0;

> * {
    overflow: hidden;
    transform: scaleY(0);
    transform-origin: top;
    background-color: ${p => p.theme.backgroundVariant};

    transition: transform 0.15s ease-out;
}

> * {
    ${p => p.visible && css`
        transform: scaleY(1);
    `}    
}
`;
