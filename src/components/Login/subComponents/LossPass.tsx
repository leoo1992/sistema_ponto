import { Link } from "react-router-dom";

export default function LossPass() {
  return (
    <label className="label flex justify-end text-end">
      <Link
        to="/losspass"
        className="link-hover link label-text-alt mb-2 text-end text-sm font-semibold"
      >
        Esqueceu sua senha ?
      </Link>
    </label>
  );
}
