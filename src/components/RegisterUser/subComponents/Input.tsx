import { forwardRef } from 'react';

type PropTypes = {
  labelName: string;
  typeInput?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
  autoComplete?: string;
  register: any;
  onBlur?: any;
  onChange?: any;
  maxLength?: number;
  minLength?: number;
};

export const Input = forwardRef<HTMLInputElement, PropTypes>(({
  labelName,
  typeInput = "text",
  classNameInput = "",
  classNameLabel = "",
  classContainer = "",
  Icon,
  classIcon,
  autoComplete = "off",
  register,
  onBlur,
  onChange,
  maxLength,
  minLength
}, ref) => {
  return (
    <div className={`form-group w-full ${classContainer}`}>
      <label
        className={`label px-0 pb-0 pt-1 ${classNameLabel}`}
      >
        <span className="label-text pt-3 pb-1 font-bold text-primary sm:ml-16">
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
          minLength={minLength}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          maxLength={maxLength}
          {...register}
          type={typeInput}
          placeholder={labelName}
          className={`input input-md input-bordered rounded-2xl text-primary shadow-sm shadow-primary ${classNameInput}`}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
});
