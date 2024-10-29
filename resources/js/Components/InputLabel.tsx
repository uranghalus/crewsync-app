import { LabelHTMLAttributes } from "react";

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium leading-6 text-gray-900 ` + className
            }
        >
            {value ? value : children}
        </label>
    );
}
