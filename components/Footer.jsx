

const Footer = () => {
    return (
        <div className="footer-container">
            <div
                className="footer-head d-flex justify-content-center "
            >

                <div className="footer-social-medias d-flex justify-content-between">
                    <a href=""> <i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""> <i className="bi bi-google"></i></a>
                    <a href=""> <i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i></a>
                    <a href=""> <i className="bi bi-github"></i></a>
                </div>
            </div>
            <div
                className="footer-body d-flex flex-column flex-lg-row justify-content-evenly align-items-center"
            >

                <div className="footer-box">
                    <div className="footer-box-title">
                        <span>PRODUCTS</span>
                    </div>
                    <ul>
                        <li><a href=""> Angular</a></li>
                        <li><a href=""> React</a></li>
                        <li><a href=""> Vue</a></li>
                        <li><a href=""> Laravel</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <div className="footer-box-title">
                        <span>USEFUL LINKS</span>
                    </div>
                    <ul>
                        <li><a href=""> Pricing</a></li>
                        <li><a href=""> Settings</a></li>
                        <li><a href=""> Orders</a></li>
                        <li><a href=""> Help</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <div className="footer-box-title">
                        <span>CONTACT</span>
                    </div>
                    <ul>
                        <li><i className="bi bi-house"></i> + 01 234 567 88</li>
                        <li><i className="bi bi-envelope"></i> Example@hotmail.com</li>
                        <li><i className="bi bi-telephone-fill"></i> + 01 234 567 88</li>
                        <li>
                            <i className="bi bi-file-earmark-arrow-down"></i>+ 01 234 567 89
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-foot">
                <h2 className="text-center">© 2022 Copyright:Ofenos.com</h2>
            </div>
        </div>
    )
}

export default Footer
