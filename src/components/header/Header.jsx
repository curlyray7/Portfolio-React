import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <span className="header-logo">Asterion</span>
            <ul className="header-nav">
                <li><a href="/about" className="active">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </div>
    );
};

export default Header;