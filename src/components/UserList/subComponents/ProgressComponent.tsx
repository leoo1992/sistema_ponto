import { FadeLoader } from "react-spinners";

export const ProgressComponent = (
  <div
    className="my-20 flex w-full flex-col items-center justify-center gap-4 self-center
     p-4 text-center font-semibold text-primary"
  >
    <FadeLoader color="#4d00ff" radius={99} width={2} height={10} />
    Carregando...
  </div>
);
