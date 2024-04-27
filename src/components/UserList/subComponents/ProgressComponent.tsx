import { FadeLoader } from 'react-spinners';

export const ProgressComponent = (
    <div className="w-full my-20 text-center p-4 gap-4 flex flex-col justify-center
     items-center self-center font-semibold text-primary">
        <FadeLoader color="#4d00ff" radius={99} width={2} height={10}/>
      Carregando...
    </div>
  );
