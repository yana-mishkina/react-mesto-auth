import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return(
    <header className="header">
      <img className="header__logo" alt="Логотип проекта Место" src={logo} />
      <div className="header__container">
        <p className="header__email">{props.email}</p>
        <Link className="header__link" to={props.link}>{props.text}</Link>
      </div>
    </header>
  );
}

export default Header;