function Navigation() {
  const items = ["About Me", "Portfolio", "Contact", "Resume"];

  // event handler
  const handleClick = (event) => console.log(event);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Abi Kumagai
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {items.map((item) => (
                <li className="nav-item" key={item} onClick={handleClick}>
                  <a className="nav-link active" aria-current="page" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navigation };
