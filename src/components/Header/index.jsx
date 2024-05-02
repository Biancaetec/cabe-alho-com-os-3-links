import "./styles.css";
import logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <header className="header">
            <div className="menu_esquerda">
                <img src={logo} alt="logotipo do website" className="logo" />
                <h1>Gry estudos</h1>
            </div>

            <div className="menu_direita">
             <nav>
                <ul className="itens_navegacao">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
             </nav>
            </div>

        </header>
    );
};