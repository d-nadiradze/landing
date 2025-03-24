import * as React from "react";

type ButtonProps = {
    variant?: string
}&React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <button
            className={'bg-purple min-w-[51px] rounded-[10px] text-white text-sm ' + className}
            ref={ref}
            {...rest}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export { Button };
