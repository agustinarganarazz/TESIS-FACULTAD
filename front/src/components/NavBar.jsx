import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Cerrar dropdowns cuando se abre/cierra el menú móvil
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (linkId) => {
    setActiveDropdown(activeDropdown === linkId ? null : linkId);
  };

  const links = [
    {
      id: 1,
      path: "/",
      nombre: "inicio",
      dropdown: null,
    },
    {
      id: 2,
      path: "gorras",
      nombre: "gorras",
      dropdown: [
        { path: "gorras/deportivas", nombre: "Deportivas" },
        { path: "gorras/casuales", nombre: "Casuales" },
        { path: "gorras/snapback", nombre: "Snapback" },
        { path: "gorras/trucker", nombre: "Trucker" },
      ],
    },
    {
      id: 3,
      path: "remeras",
      nombre: "remeras",
      dropdown: [
        { path: "remeras/manga-corta", nombre: "Manga Corta" },
        { path: "remeras/manga-larga", nombre: "Manga Larga" },
        { path: "remeras/polo", nombre: "Polo" },
        { path: "remeras/tank-top", nombre: "Tank Top" },
      ],
    },
    {
      id: 4,
      path: "jeans",
      nombre: "jeans",
      dropdown: [
        { path: "jeans/skinny", nombre: "Skinny" },
        { path: "jeans/regular", nombre: "Regular" },
        { path: "jeans/wide", nombre: "Wide" },
        { path: "jeans/mom", nombre: "Mom Jeans" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          MiSitio
        </Link>

        {/* Botón hamburguesa - solo visible en móvil */}
        <button
          className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Menú de navegación */}
        <ul className={`nav-menu ${isMenuOpen ? "nav-menu-active" : ""}`}>
          {links.map(({ id, path, nombre, dropdown }) => (
            <li key={id} className="nav-item">
              <div className="nav-link-container">
                {/* Link principal */}
                {path === "/" ? (
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={closeMenu}
                  >
                    {nombre}
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/categoria/${path}`}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={dropdown ? undefined : closeMenu}
                  >
                    {nombre}
                  </NavLink>
                )}

                {/* Botón dropdown si tiene subcategorías */}
                {dropdown && (
                  <button
                    className={`dropdown-toggle ${activeDropdown === id ? "dropdown-active" : ""}`}
                    onClick={() => toggleDropdown(id)}
                    aria-label={`Abrir menú de ${nombre}`}
                  >
                    <svg
                      className="dropdown-arrow"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path d="M2 4l4 4 4-4H2z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Dropdown menu */}
              {dropdown && (
                <ul
                  className={`dropdown-menu ${activeDropdown === id ? "dropdown-menu-active" : ""}`}
                >
                  {dropdown.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <NavLink
                        to={`/categoria/${item.path}`}
                        className={({ isActive }) =>
                          isActive ? "dropdown-link active" : "dropdown-link"
                        }
                        onClick={closeMenu}
                      >
                        {item.nombre}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Cart en el menú móvil */}
          <li className="nav-item nav-item-cart">
            <Link to="/cart" onClick={closeMenu}>
              <div className="btn-cart-mobile">
                <CartWidget />
              </div>
            </Link>
          </li>
        </ul>

        {/* Cart widget para desktop */}
        <Link to="/cart" className="cart-desktop">
          <button className="btn-cart">
            <CartWidget />
          </button>
        </Link>
      </div>

      {/* Overlay para cerrar menú al hacer click fuera */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;
