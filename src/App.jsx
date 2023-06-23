import "./App.css";

import {
  Header,
  Solution,
  Goal,
  Companies,
  Platforms,
  Pricing,
  Footer,
} from "./containers/index";

function App() {
  return (
    <>
      <div className="header-background">
        <Header></Header>
      </div>
      <div className="solution-background">
        <Solution></Solution>
      </div>
      <Goal></Goal>
      <Companies></Companies>
      <Platforms></Platforms>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}

export default App;
