import {
    RegisterOptions,
    UseFormReturn,
    FieldValues,
    Path,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: Path<T>;
    label: string;
    type?: "text" | "password";
    placeholder?: string;
    validation?: RegisterOptions<T, Path<T>>;
}

export const Input = <T extends FieldValues>({
    name,
    label,
    type = "text",
    placeholder,
    validation,
    form,
}: InputProps<T>) => {
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className={`mt-1 p-2 block w-full border rounded-md shadow-sm ${errors[name] ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring focus:border-blue-500`}
                {...register(name, validation)}
            />
            {errors[name] && (
                <p className="mt-1 text-xs text-red-500">
                    {errors[name]?.message?.toString()}
                </p>
            )}
        </div>
    );
};
