import { useNavigate } from 'react-router-dom';

export default function LossPass() {
  const navigate = useNavigate();

  return (
    <label className="label">
      <button
        onClick={() => navigate('/losspass')}
        className="mb-2 label-text-alt link link-hover text-accent font-bold text-sm"
      >
        Esqueceu sua senha ?
      </button>
    </label>
  );
}
