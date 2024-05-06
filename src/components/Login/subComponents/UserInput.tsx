import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormLogin } from "../../../types";
type Props = {
  register: UseFormRegister<FormLogin>;
};

export default function UserInput({ register }: Props) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold text-primary">Usuário</span>
      </label>
      <input
        {...register("email", { required: true } as RegisterOptions)}
        type="email"
        name="email"
        placeholder="Usuário"
        className="input input-bordered font-medium text-primary shadow-sm shadow-primary"
        maxLength={300}
        required
      />
    </div>
  );
}
