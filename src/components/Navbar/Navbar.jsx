import navStyle from './Navbar.module.css'

function Navbar() {
    return (
    <nav className={navStyle.nav}>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;
