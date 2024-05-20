import { UseFormRegister } from "react-hook-form";
import { FormLogin } from "../../../types";
type Props = {
  register: UseFormRegister<FormLogin>;
};

export default function PassInput({ register }: Props) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold text-primary">Senha</span>
      </label>
      <input
        {...register("password", { required: true })}
        type="password"
        name="password"
        placeholder="Senha"
        className="input input-bordered text-primary shadow-sm shadow-primary"
        maxLength={11}
        required
        data-testid='pass'
      />
    </div>
  );
}
