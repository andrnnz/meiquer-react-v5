import { useRouteError } from "react-router-dom";

import './assets/css/Styles.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="App">
      <h1>Oops!</h1>
      <p>Ha ocurrido un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}