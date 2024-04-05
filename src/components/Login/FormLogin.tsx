import {useSubmit} from '../../hooks/useSubmit';
import LossPass from './Form/LossPass';
import PassInput from './Form/PassInput';
import UserInput from './Form/UserInput';

export default function FormLogin() {
    const formUse = useSubmit();

    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={formUse.handleSubmit(formUse.onSubmit)}>
                <UserInput register={formUse.register} />
                <PassInput register={formUse.register} />
                <LossPass />
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-accent"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}
