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
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
};

export default function Input({
  labelName,
  nameID,
  typeInput = 'text',
  classNameInput = '',
  classNameLabel = '',
  classContainer = '',
  inputRef,
  required = true,
  maxLength = typeInput === 'password' ? 11 : 300,
  max = 100000000,
  step = '',
  register,
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
          className={`input input-bordered shadow-primary rounded-2xl shadow-sm text-primary input-md ${classNameInput}`}
          icon={Icon}
        />
      </div>
    </div>
  );
}
