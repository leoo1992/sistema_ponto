import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FormLossPass() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div
      className="card max-w-sm shrink-0 bg-gradient-to-b from-slate-100
     via-white to-white shadow-sm  shadow-primary"
    >
      <form
        className="card-body p-5 sm:w-96 sm:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-2 font-bold text-primary">
              Digite seu Email
            </span>
          </label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full font-medium text-primary shadow-sm shadow-primary"
            required
          />
        </div>
        <div
          className="form-control mt-10 flex w-full flex-row content-center 
        justify-between self-center align-middle"
        >
          <button
            onClick={() => navigate("/")}
            className="text-md btn glass btn-accent w-1/3 rounded-badge bg-accent font-extrabold shadow-md shadow-emerald-100"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="text-md btn glass btn-primary w-3/5 rounded-badge bg-primary font-extrabold text-white shadow-md shadow-gray-300"
          >
            Enviar Email
          </button>
        </div>
      </form>
    </div>
  );
}
