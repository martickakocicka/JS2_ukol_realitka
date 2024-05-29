import "./header.css";

export const Header = (props) => {
  return (
    <>
      <div className="hlavicka">
        <h1>Aktuální nabídka domů</h1>
      </div>
      <nav>
        <a href="dum01.html">první dům</a>
        <a href="dum02.html">druhý dům</a>
        <a href="dum03.html">třetí dům</a>
        <a href="dum04.html">čtvrtý dům</a>
      </nav>
    </>
  );
};
