import { MutableRefObject, RefObject } from 'react';

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
};

export default function Input({
  labelName,
  nameID,
  typeInput = 'text',
  classNameInput = '',
  classNameLabel = '',
  inputRef,
  required = true,
  maxLength = typeInput === 'password' ? 11 : 300,
  max = 100000000,
  step = '',
  register,
}: PropTypes) {
  return (
    <>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        <span className="label-text text-primary font-bold">{labelName}</span>
      </label>
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
        className={`input input-bordered shadow-primary shadow-sm text-primary input-md ${classNameInput}`}
      />
    </>
  );
}
