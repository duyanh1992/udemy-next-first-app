import React from "react";
import { useFormStatus } from "react-dom";

const ShareMealSubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default ShareMealSubmitBtn;
