const Header = ({ usd, eur }) => {
  console.log(usd, eur);
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-name">Конвертер валют</h1>
        <h2 className="header-description">Офіційний курс НБУ по відношенню до гривні</h2>
      </header>

      <table className="table">
        <thead>
          <tr>
            <td>Валюта</td>
            <td>У гривнях</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{usd}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>EUR</td>
            <td>{eur}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
