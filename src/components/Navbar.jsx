
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Navegação principal">
                <Link to="/" className="logo" onClick={closeMenu}>
                    ALIA<span>.</span>
                </Link>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    aria-controls="nav-links"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                <div id="nav-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>Início</Link>
                    <a href="/#como-funciona" onClick={closeMenu}>Como funciona</a>
                    <a href="/#conscientizacao" onClick={closeMenu}>Conscientização</a>
                    <a href="/#rede-apoio" onClick={closeMenu}>Rede de apoio</a>
                    <Link to="/central" className="nav-central" onClick={closeMenu}>
                        Central ALIA
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
