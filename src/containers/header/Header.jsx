import "./header.css";
import { Nav, Main } from "../../components/index";
function Header() {
  return (
    <div className="inside-container container-padding">
      <Nav></Nav>
      <Main></Main>
    </div>
  );
}

export default Header;
