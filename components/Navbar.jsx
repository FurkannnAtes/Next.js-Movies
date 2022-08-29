import Link from "next/link"

const Navbar = () => {


    return (
        <nav
            id="mainNavbar"
            className="navbar navbar-expand-lg navbar-dark position-fixed w-100 px-lg-5 "
        >
            <div className="container-fluid px-lg-5">
                <Link href="/"><a className="navbar-brand" >OFENOS</a></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="mainNavCollapse">
                    <div className="nav-srch-box  pt-2 pt-lg-0">
                        <input
                            className="nav-srch ps-3 rounded-2"
                            type="text"
                            placeholder="Search Movie" />
                    </div>
                    <ul className="navbar-nav ms-lg-3  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link  btn-close-collapse"
                            ><i className="bi bi-bookmark-plus-fill me-2"></i>Favorite</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link  btn-close-collapse" >Sign In</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact"><a className="nav-link  btn-close-collapse"
                            >Sign Up</a></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
