export default function SubmittBtn({ isSubmitting, isFormValid, state }: any) {
  return (
    <div className="form-group flex w-full justify-center self-center align-middle">
      <button
        className={`text-md lg:2/12 btn glass btn-primary mt-8 w-6/12 rounded-badge bg-primary font-extrabold text-white sm:w-4/12 md:w-3/12`}
        disabled={isSubmitting || !isFormValid}
      >
        {isSubmitting ? "Enviando..." : state ? "Editar" : "Cadastrar"}
      </button>
    </div>
  );
}
