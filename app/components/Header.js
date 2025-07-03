'use client';

export default function Header() {
  return (
    <header className="uc-header">
      <div id="uc-global-topbar"></div>
      <nav className="uc-navbar">
        <div className="container d-none d-lg-block">
          <ul className="uc-navbar_nav">
            <li className="nav-item">
              <a href="/" className="uc-btn btn-inline">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/events" className="uc-btn btn-inline">Eventos</a>
            </li>
            <li className="nav-item">
              <a href="/admin" className="uc-btn btn-inline">Admin</a>
            </li>
          </ul>
        </div>
        <div className="uc-navbar_mobile d-block d-lg-none">
          <div className="uc-navbar_mobile-bar navbar-brand">
            <a
              href="javascript:void(0);"
              className="uc-navbar_mobile-button"
              data-collapse="mobileNav"
            >
              <span className="uc-icon"></span>
              Menú
            </a>
          </div>
          <div
            className="uc-navbar_mobile-content"
            data-toggle="mobileNav"
            data-open="false"
            style={{ height: 0 }}
          >
            <div className="uc-navbar_mobile-list">
              <a href="/" className="list-item">Inicio</a>
              <a href="/events" className="list-item">Eventos</a>
              <a href="/admin" className="list-item">Admin</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
