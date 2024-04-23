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
}: PropTypes) {
  return (
    <>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        <span className="label-text text-primary font-bold">{labelName}</span>
      </label>
      <select
        {...register(nameID, { required: true })}
        ref={selectRef}
        name={nameID}
        id={nameID}
        className={`select  select-bordered shadow-primary shadow-sm text-primary 
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
    </>
  );
}
