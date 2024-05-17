import { forwardRef } from "react";

type PropTypes = {
  options: { id: string; name: string }[];
  labelName: string;
  nameDefault?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
  autoComplete?: string;
  register:any
};

export const Select = forwardRef<HTMLSelectElement, PropTypes>(
  (
    {
      options,
      labelName,
      nameDefault = "Selecione",
      classNameLabel = "",
      classNameSelect = "",
      classNameOption = "",
      classContainer = "",
      Icon,
      classIcon,
      autoComplete = "off",
      register,
    },
    ref,
  ) => {
    return (
      <div className={`form-group w-full ${classContainer}`}>
        <label className={`label px-0 pb-0 pt-1 ${classNameLabel}`}>
          <span className="label-text pt-3 pb-1 font-bold text-primary sm:ml-16">
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
            ref={ref}
            {...register}
            className={`input-md select select-bordered rounded-2xl text-primary shadow-sm 
        shadow-primary ${classNameSelect}`}
            defaultValue={""}
            autoComplete={autoComplete}
          >
            <option
              disabled
              value={""}
              className={`max-w-xs rounded-3xl p-3
          text-primary ${classNameOption}`}
            >
              {nameDefault}
            </option>

            {options.map((option, index) => (
              <option
                id={`select-${index}`}
                key={option.id ? option.id : index}
                value={option.id ? option.id : index}
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
  },
);
