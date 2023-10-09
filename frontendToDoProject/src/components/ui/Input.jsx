import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      className="bg-purple-800 px-3 py-2 block my-2 w-full rounded-md"
      ref={ref}
      {...props}
    />
  );
});

export default Input;
