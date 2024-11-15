
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">

        <div className="brand ms-3">
          <a className="navbar-brand navigation text-decoration-underline text-success fw-bold" href="...">E-Commerce</a>
        </div>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container-fluid p-2 justify-content-center text-center">

          <div className="menu1">

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav d-flex gap-4">
                <li className="nav-item">
                  <a className="nav-link text-success" href="...">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-link text-success fw-bolder" href="...">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success" href="...">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success" href="...">Contact</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="menu2 d-none d-lg-flex">

          <ul className="navbar-nav d-flex gap-3 me-5">
            <li className="nav-item">
              <a href="..." className="nav-link"><i className="fa-regular fa-heart text-success"></i></a>
            </li>
            <li className="nav-item">
              <a href="..." className="nav-link"><i className="fa-regular fa-cart-shopping text-success"></i></a>
            </li>
            <li className="nav-item">
              <a href="..." className="nav-link"><i className="fa-regular fa-user text-success"></i></a>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}
export default Nav