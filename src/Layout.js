import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <div>
       <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Kezdőoldal</Link>
                </li>
                <li className="nav-item">
                    <Link to="/urlap" className="nav-link">Űrlap</Link>
                </li>
                <li className="nav-item">
                    <Link to="/adatok" className="nav-link">Adatok</Link>
                </li>
            </ul>
       </nav>
       <article>
       {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
           <Outlet />
       </article>
    </div>
  );
}

export default Layout;
