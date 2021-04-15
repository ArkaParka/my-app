import headStyle from './Header.module.css'
import pug_dog from '../../images/pug_dog.png'

function Header() {
    return (
    <header className={headStyle.header}>
        <a href="/profile"><img src={pug_dog}></img></a>
     </header>
    );
}

export default Header;
