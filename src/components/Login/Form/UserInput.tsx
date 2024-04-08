import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormData } from '../../../types';
type Props = {
    register: UseFormRegister<FormData>; 
};

export default function UserInput({ register }: Props) {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text text-primary font-bold">
                    Usuário
                </span>
            </label>
            <input
                {...register("user", { required: true } as RegisterOptions)}
                type="text"
                name="user"
                placeholder="Usuário"
                className="input input-bordered shadow-primary shadow-sm text-primary font-medium"
                maxLength={20}
                required
            />
        </div>
    );
}
