import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      className="bg-sky-800 px-3 py-2 block my-2 w-full rounded-md focus:outline-none hover:bg-sky-700"
      ref={ref}
      {...props}
    >
      {props.children}
    </textarea>
  );
});

export default Textarea;
