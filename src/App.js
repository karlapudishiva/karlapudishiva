import Header from "./compnent/Layout/Header"
import Meals from "./compnent/Meals/Meals";
import { Fragment } from "react";




function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
