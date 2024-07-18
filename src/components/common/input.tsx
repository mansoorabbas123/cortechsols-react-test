/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";

type Props = {
  type: "text" | "number" | "email" | "password";
  label: string;
  error?: string | undefined;
  register?: any;
  inputClass?: string;
  readOnly?: boolean;
};

export const Input = forwardRef(
  ({ type, label, error, register }: Props, ref) => {
    return (
      <div className="mb-5">
        <label className="block mb-2"> {label}</label>
        <input
          type={type}
          className="w-full p-2 rounded bg-charcoal-solid"
          ref={ref}
          {...register}
        />
        {error && <small>{error}</small>}
      </div>
    );
  }
);
