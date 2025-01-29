import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <span className="material-symbols-outlined">add_card</span>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <span className="material-symbols-outlined">list_alt</span>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <span className="material-symbols-outlined">orders</span>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
