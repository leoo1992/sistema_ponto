import { Link } from 'react-router-dom';

export default function LossPass() {
  return (
    <label className="label text-end flex justify-end">
      <Link
        to="/losspass"
        className="mb-2 label-text-alt link link-hover text-end font-semibold text-sm"
      >
        Esqueceu sua senha ?
      </Link>
    </label>
  );
}
