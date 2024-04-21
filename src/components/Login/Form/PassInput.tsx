import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../../../types';
type Props = {
  register: UseFormRegister<FormData>;
};

export default function PassInput({ register }: Props) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-primary font-bold">Senha</span>
      </label>
      <input
        {...register('password', { required: true })}
        type="password"
        name="password"
        placeholder="Senha"
        className="input input-bordered shadow-primary shadow-sm text-primary"
        maxLength={11}
        required
      />
    </div>
  );
}
