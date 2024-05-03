import { MutableRefObject, RefObject } from 'react';

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
};

export default function Select({
  nameID,
  options,
  labelName,
  nameDefault = 'Selecione',
  classNameLabel = '',
  classNameSelect = '',
  classNameOption = '',
  selectRef,
  required = true,
  register,
  classContainer = '',
  Icon,
  classIcon,
}: PropTypes) {
  return (
    <div className={`w-full ${classContainer}`}>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        <span className="sm:ml-16 label-text pt-3 text-primary font-bold">
          {labelName}
        </span>
      </label>
      <div className={`${classIcon}`}>
      {classIcon ? (
          <div
            className={`hidden bg-primary-content glass rounded-2xl px-3 shadow-sm shadow-primary sm:flex justify-center items-center text-primary mr-3 ${classIcon}`}
          >
            {Icon}
          </div>
        ) : null}
        <select
          {...register(nameID, { required: true })}
          ref={selectRef}
          name={nameID}
          id={nameID}
          className={`select  select-bordered shadow-primary rounded-2xl shadow-sm text-primary 
        input-md ${classNameSelect}`}
          defaultValue={0}
          required={required}
        >
          <option
            disabled
            value={0}
            className={`p-3 rounded-3xl max-w-xs
          text-primary ${classNameOption}`}
          >
            {nameDefault}
          </option>

          {options.map((option) => (
            <option
              key={option.id}
              value={option.id}
              className={`p-3 rounded-3xl max-w-xs border-dotted 
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
