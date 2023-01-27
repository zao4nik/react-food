import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className=" teal darken-2">
      <div className="nav-wrapper">
        <div className="brand-logo">React Food</div>
        <ul
          id="nav-mobile"
          className="right hide-on-med-and-down"
        >
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
