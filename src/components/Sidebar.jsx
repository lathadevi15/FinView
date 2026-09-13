import { NavLink  } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>FinView</h2>

      <nav>
  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
  >
    Dashboard
  </NavLink>

  <NavLink
    to="/transactions"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
  >
    Transactions
  </NavLink>

  <NavLink
    to="/categories"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
  >
    Categories
  </NavLink>

  <NavLink
    to="/add"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
  >
    Add Transaction
  </NavLink>
</nav>
    </aside>
  );
}

export default Sidebar;