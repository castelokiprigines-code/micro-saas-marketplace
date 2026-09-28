import { Link } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Software</Link>
      </div>

      <div className="header-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Buscar Software..."
        />
      </div>

      <div className="header-actions">
        <button>
          <Bell size={20} />
        </button>

        <Link to="/login">
          <User size={20} />
          <span>Entrar</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;