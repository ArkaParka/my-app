import headStyle from './Header.module.css'
import pug_dog from '../../pug_dog.png'

function Header() {
    return (
    <header className={headStyle.header}>
        <a href="/"><img src={pug_dog}></img></a>
     </header>
    );
}

export default Header;
