import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../../../types';
type Props = {
    register: UseFormRegister<FormData>; 
};

export default function PassInput({ register }: Props) {
    return (
        <div className="form-control">
        <label className="label">
            <span className="label-text">
                Senha
            </span>
        </label>
        <input
            {...register("pass", { required: true })}
            type="password"
            name="pass"
            placeholder="Senha"
            className="input input-bordered"
            maxLength={11}
            required
        />
    </div>
    );
}
