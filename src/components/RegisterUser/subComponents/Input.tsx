import { useEffect, useState } from "react";
import { MutableRefObject, RefObject } from "react";

type PropTypes = {
  nameID: string;
  labelName: string;
  typeInput?: string;
  classNameInput?: string;
  classNameLabel?: string;
  inputRef: MutableRefObject<string> | RefObject<HTMLInputElement>;
  required?: boolean;
  maxLength?: number;
  max?: number;
  step?: string;
  register: any;
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
  disabled?: boolean;
  autoComplete?: string;
};

export default function Input({
  labelName,
  nameID,
  typeInput = "text",
  classNameInput = "",
  classNameLabel = "",
  classContainer = "",
  inputRef,
  required = true,
  maxLength = typeInput === "password" ? 20 : 300,
  max = typeInput === "number" ? 100000000 : undefined,
  step = "",
  register,
  Icon,
  classIcon,
  disabled = false,
  autoComplete = "off",
}: PropTypes) {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setHasValue(Boolean((inputRef as RefObject<HTMLInputElement>).current?.value));
    };

    const inputElement = (inputRef as RefObject<HTMLInputElement>).current;
    if (inputElement) {
      inputElement.addEventListener("input", handleChange);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("input", handleChange);
      }
    };
  }, [inputRef]);

  return (
    <div className={`w-full ${classContainer}`}>
      <label htmlFor={`${nameID}-input`} className={`label pt-1 px-0 pb-0 ${classNameLabel}`}>
        <span className="label-text pt-3 font-bold text-primary sm:ml-16">
          {labelName}
        </span>
      </label>
      <div className={`${classIcon}`}>
        {classIcon ? (
          <div
            className={`glass mr-3 hidden items-center justify-center rounded-2xl bg-primary-content px-3 text-primary shadow-sm shadow-primary sm:flex ${classIcon}`}
          >
            {Icon}
          </div>
        ) : null}
        <input
          {...register(nameID, { required: true })}
          id={`${nameID}-input`}
          ref={inputRef}
          type={typeInput}
          placeholder={labelName}
          maxLength={maxLength}
          max={max}
          step={step}
          required={required}
          className={`input input-md input-bordered ${
            hasValue ? "bg-primary-content bg-opacity-50 border-4" : ""
          } rounded-2xl text-primary shadow-sm shadow-primary ${classNameInput}`}
          icon={Icon ? Icon : null}
          disabled={disabled}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
}
