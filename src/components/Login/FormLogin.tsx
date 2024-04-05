import {useSubmit} from '../../hooks/useSubmit';
import LossPass from './Form/LossPass';
import PassInput from './Form/PassInput';
import UserInput from './Form/UserInput';

export default function FormLogin() {
    const formUse = useSubmit();

    return (
        <div className="card shrink-0 max-w-sm shadow-sm bg-base-100 shadow-primary">
            <form className="card-body p-5 sm:p-8" onSubmit={formUse.handleSubmit(formUse.onSubmit)}>
                <UserInput register={formUse.register} />
                <PassInput register={formUse.register} />
                <LossPass />
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}
