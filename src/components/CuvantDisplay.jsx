import "./CuvantDisplay.css";

function CuvantDisplay({ cuvant, litereCorecte, jocTerminat, victorie }) {
  return (
    <div className="containerCuvant">
      {cuvant.split("").map((litera, index) => {
        const esteGhicita = litereCorecte.includes(litera);
        const esteGresita = jocTerminat && !victorie && !esteGhicita;

        return (
          <span
            key={index}
            className={`litera ${esteGhicita ? "corecta" : ""} ${esteGresita ? "gresita" : ""}`}
          >
            {esteGhicita || jocTerminat ? litera : "_"}
          </span>
        );
      })}
    </div>
  );
}

export default CuvantDisplay;
