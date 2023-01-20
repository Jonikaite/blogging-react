import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="Menu">
      <Link to="/create">Rašyti naują</Link>
    </div>
  );
}
