import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function FormLossPass() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    navigate('/');
  };

  return (
    <div
      className="card shrink-0 max-w-sm shadow-sm bg-gradient-to-b
     from-slate-100 via-white to-white  shadow-primary"
    >
      <form
        className="card-body p-5 sm:p-8 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-primary font-bold mt-2">
              Digite seu Email
            </span>
          </label>
          <input
            {...register('email', {
              required: true,
            })}
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered shadow-primary shadow-sm text-primary font-medium w-full"
            required
          />
        </div>
        <div
          className="form-control w-full flex flex-row justify-between align-middle 
        self-center content-center mt-10"
        >
          <button
            onClick={() => navigate('/')}
            className="btn btn-accent bg-accent rounded-badge glass font-extrabold text-md shadow-md shadow-emerald-100 w-1/3"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="btn btn-primary bg-primary text-white rounded-badge glass font-extrabold text-md shadow-md shadow-gray-300 w-3/5"
          >
            Enviar Email
          </button>
        </div>
      </form>
    </div>
  );
}
