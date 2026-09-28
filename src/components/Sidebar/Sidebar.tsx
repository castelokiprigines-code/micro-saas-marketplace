import { Link } from "react-router-dom";
import {
  Home,
  Store,
  Package,
  Crown,
  Headphones,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        Menu
      </div>

      <nav className="sidebar-nav">
        <Link to="/">
          <Home size={20} />
          <span>Início</span>
        </Link>

        <Link to="/marketplace">
          <Store size={20} />
          <span>Marketplace</span>
        </Link>

        <Link to="/product/1">
          <Package size={20} />
          <span>Meus SaaS</span>
        </Link>

        <div className="sidebar-divider" />

        <a href="#">
          <Crown size={20} />
          <span>Seja Premium</span>
        </a>

        <a href="#">
          <Headphones size={20} />
          <span>Suporte</span>
        </a>

        <a href="#">
          <Settings size={20} />
          <span>Configurações</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;