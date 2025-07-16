import { InputType } from "@/@types/InputType";
import { FC } from "react";

const Input: FC<InputType> = ({ placeholder, type, classList }) => {
  return (
    <input
      className={`outline-none px-5 py-[19px] text-black bg-white rounded-[20px] text-[16px] ${classList}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;