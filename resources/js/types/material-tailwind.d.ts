import "@material-tailwind/react";

import '@material-tailwind/react';

declare module '@material-tailwind/react' {
    interface GenericProps {
        placeholder?: unknown;
        onPointerEnterCapture?: unknown;
        onPointerLeaveCapture?: unknown;
    }

    export type ButtonProps = GenericProps;
    export type CardProps = GenericProps;
    export type NavbarProps = GenericProps;
    export type TypographyProps = GenericProps;
    export type IconButtonProps = GenericProps;
}
