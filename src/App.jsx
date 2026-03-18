import { useState } from "react";
import DesenSpanzuratoare from "./components/DesenSpanzuratoare";
import Tastatura from "./components/Tastatura";
import CuvantDisplay from "./components/CuvantDisplay";
import { words } from "./constants/words";
import "./App.css";

const MAX_GRESELI = 7;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [greseala, setGreseala] = useState(0);
  const [litereCorecte, setLitereCorecte] = useState([]);
  const [cuvant, setCuvant] = useState(getRandomWord);

  const toateLitereleGhicite = cuvant
    .split("")
    .every((l) => litereCorecte.includes(l));

  const jocPierdut = greseala >= MAX_GRESELI;
  const jocCastigat = toateLitereleGhicite;
  const jocTerminat = jocPierdut || jocCastigat;

  function selectareLitere(literaApasata) {
    if (litereCorecte.includes(literaApasata) || jocTerminat) return;
    setLitereCorecte((prev) => [...prev, literaApasata]);
    if (!cuvant.includes(literaApasata)) {
      setGreseala((prev) => prev + 1);
    }
  }

  function restartJoc() {
    setCuvant(getRandomWord());
    setLitereCorecte([]);
    setGreseala(0);
  }

  return (
    <div className="app">
      <h1>Spanzuratoarea</h1>

      <DesenSpanzuratoare greseala={greseala} />

      <CuvantDisplay
        cuvant={cuvant}
        litereCorecte={litereCorecte}
        jocTerminat={jocTerminat}
        victorie={jocCastigat}
      />

      {jocTerminat && (
        <div className="mesaj">
          {jocCastigat ? (
            <p className="victorie">Ai castigat!</p>
          ) : (
            <p className="infrangere">Ai pierdut! Cuvantul era: {cuvant}</p>
          )}
          <button onClick={restartJoc} className="butonRestart">
            Joaca din nou
          </button>
        </div>
      )}

      <Tastatura
        litereCorecte={litereCorecte}
        cuvant={cuvant}
        onSelectare={selectareLitere}
        dezactivata={jocTerminat}
      />
    </div>
  );
}

export default App;
