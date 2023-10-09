import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      className="bg-purple-800 px-3 py-2 block my-2 w-full rounded-md"
      ref={ref}
      {...props}
    >
      {props.children}
    </textarea>
  );
});

export default Textarea;
