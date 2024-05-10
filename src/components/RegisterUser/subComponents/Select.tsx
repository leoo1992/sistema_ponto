import { useEffect, useState } from "react";
import { MutableRefObject, RefObject } from "react";

type PropTypes = {
  nameID: string;
  options: { id: string; name: string }[];
  labelName: string;
  nameDefault?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
  selectRef: MutableRefObject<HTMLSelectElement> | RefObject<HTMLSelectElement>;
  required?: boolean;
  register: any;
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
  autoComplete?: string;
};

export default function Select({
  nameID,
  options,
  labelName,
  nameDefault = "Selecione",
  classNameLabel = "",
  classNameSelect = "",
  classNameOption = "",
  selectRef,
  required = true,
  register,
  classContainer = "",
  Icon,
  classIcon,
  autoComplete = "off",
}: PropTypes) {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setHasValue(Boolean((selectRef as RefObject<HTMLSelectElement>).current?.value));
    };

    const selectElement = (selectRef as RefObject<HTMLSelectElement>).current;
    if (selectElement) {
      selectElement.addEventListener("change", handleChange);
    }

    return () => {
      if (selectElement) {
        selectElement.removeEventListener("change", handleChange);
      }
    };
  }, [selectRef]);

  return (
    <div className={`w-full ${classContainer}`}>
      <label
        htmlFor={`${nameID}-select`}
        className={`label max-w-xs ${classNameLabel}`}
      >
        <span className="label-text pt-3 font-bold text-primary sm:ml-16">
          {labelName}
        </span>
      </label>
      <div className={`${classIcon}`}>
        {classIcon ? (
          <div
            className={`glass mr-3 hidden items-center justify-center rounded-2xl bg-primary-content px-3 
            text-primary shadow-sm shadow-primary sm:flex ${classIcon}`}
          >
            {Icon}
          </div>
        ) : null}
        <select
          {...register(nameID, { required: true })}
          ref={selectRef}
          id={`${nameID}-select`}
          className={`input-md  select select-bordered rounded-2xl text-primary shadow-sm 
        shadow-primary ${classNameSelect} ${hasValue ? "bg-primary-content bg-opacity-50 border-4" : ""}`}
          defaultValue={0}
          required={required}
          autoComplete={autoComplete}
        >
          <option
            disabled
            value={0}
            className={`max-w-xs rounded-3xl p-3
          text-primary ${classNameOption}`}
          >
            {nameDefault}
          </option>

          {options.map((option, index) => (
            <option
              id={`select-${index}`}
              key={option.id ? option.id : index}
              value={option.id}
              className={`max-w-xs rounded-3xl border-dotted p-3 
            text-base-content ${classNameOption}`}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
