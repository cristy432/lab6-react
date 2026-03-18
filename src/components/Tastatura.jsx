import { letters } from "../constants/letters";
import "./Tastatura.css";

function Tastatura({ litereCorecte, cuvant, onSelectare, dezactivata }) {
  return (
    <div className="containerTastatura">
      {letters.map((litera) => {
        const apasata = litereCorecte.includes(litera);
        const eCorect = apasata && cuvant.includes(litera);
        const eGresit = apasata && !cuvant.includes(litera);

        return (
          <button
            key={litera}
            className={`butonLitera ${eCorect ? "corect" : ""} ${eGresit ? "gresit" : ""}`}
            onClick={() => onSelectare(litera)}
            disabled={apasata || dezactivata}
          >
            {litera}
          </button>
        );
      })}
    </div>
  );
}

export default Tastatura;
