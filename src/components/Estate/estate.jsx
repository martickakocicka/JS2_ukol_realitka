import "./estate.css";

export const Estate = (props) => {
  return (
    <>
      <h2>{props.nazev}</h2>
      <h3>lokace {props.lokace}</h3>
      <img src={props.src} />

      <p>{props.popis}</p>
      <h3 className="cena">cena {props.cena} Kč</h3>
      <div className="kontakt">
        <h3 className="seznam">kontakt na makléře: </h3>
        <li className="jmeno">{props.jmeno}</li>
        <li>e-mail: {props.mail}</li>
        <li>telefon: {props.tel}</li>
      </div>
    </>
  );
};
