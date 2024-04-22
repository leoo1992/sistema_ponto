import { guardarTempo } from '../utils/guardarTempo.util';
import { pegarHoraAtual } from '../utils/pegarHoraAtual.util';

export default function StatsEffects({ statsUse }: any) {
  pegarHoraAtual({ statsUse });
  guardarTempo({ statsUse });

  return null;
}
