import { RefObject } from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

type PropTypes = {
  nameID: string;
  labelName: string;
  typeInput?: string;
  classNameInput?: string;
  classNameLabel?: string;
  inputRef: RefObject<HTMLInputElement>;
  required?: boolean;
  maxLength?: number;
  max?: number;
  step?: string;
  register: UseFormRegister<any>;
};

export default function Input({
  labelName,
  nameID,
  typeInput = 'text',
  classNameInput = '',
  classNameLabel = '',
  inputRef,
  required = true,
  maxLength = 60,
  max = 100000000,
  step = '',
  register,
}: PropTypes) {
  return (
    <div className="form-control">
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        <span className="label-text text-primary font-bold">{labelName}</span>
      </label>
      <input
        {...register(nameID, { required } as RegisterOptions)}
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
    </div>
  );
}
