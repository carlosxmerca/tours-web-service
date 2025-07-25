import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export default function FormTextarea({
  name,
  label,
  ...rest
}: FormTextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        id={name}
        {...register(name)}
        {...rest}
        className="p-3 bg-gray-100 rounded resize-none min-h-[6rem] focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">
          {String(errors[name]?.message)}
        </span>
      )}
    </div>
  );
}
