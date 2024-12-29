import { VariantDaisyUI } from "@/types/variants-daisy-ui";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
    title: string;
    variant?: VariantDaisyUI
    outline?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export const Button: React.FC<ButtonProps> = ({ title, variant = 'neutral', outline, ...rest }) => {
    return (
        <button
            {...rest}
            className={`btn btn-${variant} ${outline && 'btn-outline'}`}
        >
            {title}
        </button>
    );
};
