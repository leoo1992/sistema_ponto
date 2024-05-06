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
  maxLength = typeInput === "password" ? 11 : 300,
  max = 100000000,
  step = "",
  register,
  Icon,
  classIcon,
}: PropTypes) {
  return (
    <div className={`w-full ${classContainer}`}>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
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
          ref={inputRef}
          name={nameID}
          type={typeInput}
          placeholder={labelName}
          maxLength={maxLength}
          max={max}
          step={step}
          required={required}
          className={`input input-md input-bordered rounded-2xl text-primary shadow-sm shadow-primary ${classNameInput}`}
          icon={Icon}
        />
      </div>
    </div>
  );
}
