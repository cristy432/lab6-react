import { stages } from "../constants/stages";
import "./DesenSpanzuratoare.css";
function DesenSpanzuratoare({ greseala }) {
  return (
    <div className="containerSpanzuratoare">
      <img src={stages[greseala]} className="spanzuratoreImagine" />
    </div>
  );
}

export default DesenSpanzuratoare;
