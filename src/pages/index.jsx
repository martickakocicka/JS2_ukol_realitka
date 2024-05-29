import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/header";
import { Estate } from "../components/Estate/estate";

const koncovka = window.location.pathname;
const stranka = koncovka.split(".");
console.log(stranka);

const response = await fetch(
  "https://apps.kodim.cz/daweb/trening-api/apis/realitka" + stranka[0]
);
const data = await response.json();

console.log(data);

document.querySelector("#root").innerHTML += render(
  <>
    <Header />
    <Estate
      nazev={data.title}
      src={`../img/${stranka[0]}.jpg`}
      lokace={data.city}
      popis={data.text}
      cena={data.price}
      jmeno={data.contact.name}
      mail={data.contact.email}
      tel={data.contact.phone}
    />
  </>
);
