import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import blog from "../../assets/img/icon/Blog.svg";
import findPartner from "../../assets/img/icon/Find Your Partner.svg";
import kazi from "../../assets/img/icon/Kazi.svg";
import lawyer from "../../assets/img/icon/Lawyer.svg";
import cart from "../../assets/img/icon/LogoMakr-02OEp4.png";
import membership from "../../assets/img/icon/LogoMakr-7XW4Bl.png";
import { default as agentProfile } from "../../assets/img/icon/LogoMakr-9dyVlR.png";
import course from "../../assets/img/icon/Online Course.svg";
// import Agent from "../../assets/img/icon/Agent.svg";
import register from "../../assets/img/icon/Profile Login Icon.svg";
import blackLogo from "../../assets/img/logo/Frame 5.png";
import white__logo from "../../assets/img/logo/Frame 6.png";
import RegisterModal from "../modal/RegisterModal";
import ScrollToTop from "../ScrollToTop";
import { toastifyAlertSuccess } from "../toast/toast";

function Header() {
    const { authenticated, currentUser } = useSelector(state => state.authValue);
    console.log("currentUser", currentUser);

    const [isActive, setIsActive] = useState(false);
    const [regShow, setRegShow] = useState(false);

    const handleRegClose = () => setRegShow(false);
    const handleRegShow = () => setRegShow(true);
    let [isHaderActive, setIsHeaderActive] = useState(false);

    let logOut = () => {
        window.localStorage.removeItem("matrimonial_auth_token");
        toastifyAlertSuccess("Logged out successfully", "top-center");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    const active = () => {
        setIsActive(!isActive);
    };
    useEffect(() => {
        // console.log("kk");
        window.addEventListener("scroll", function () {
            let scrollPosition = this.scrollY;

            if (scrollPosition <= 30) {
                setIsHeaderActive(false);
            } else if (scrollPosition >= 30) {
                setIsHeaderActive(true);
            }
        });
    }, [isHaderActive]);
    return (
        <>
            {/* <Loader /> */}

            <div className={isActive ? "overlay active" : "overlay"}></div>
            <ScrollToTop />
            <header className={isHaderActive ? "header-section  header-active" : " header-section"}>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <div className="header-wrapper">
                                <div className="header__iconWrpr">
                                    <Link to={"/"}>
                                        <img className="black__logo" src={blackLogo} alt="logo" />
                                        <img className="white__logo" src={white__logo} alt="logo" />
                                    </Link>

                                    <ul className={isActive ? "menu active" : "menu"}>
                                        <li>
                                            <Link to={"/partner"}>
                                                <a id="tooltipText" className="toolTipBig">
                                                    <img src={findPartner} alt="" srcSet="" className="img-fluid" />
                                                    <span className="tooltip__o">find your partner</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/membership"}>
                                                <a id="tooltipText" href="membership.php" className="pain">
                                                    <img src={membership} alt="" srcSet="" className="img-fluid" />

                                                    <span className="tooltip__o">Membership</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/blog"}>
                                                <a id="tooltipText" className="toolTipBig pain2">
                                                    <img src={blog} alt="" srcSet="" className="img-fluid" />

                                                    <span className="tooltip__o">Blog</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/course"}>
                                                <img src={course} alt="" srcSet="" className="img-fluid" />
                                                <span className="tooltip__o">Course</span>
                                            </Link>
                                        </li>
                                        {/* <li>
                      <Link to={"/shop"}>
                        <img
                          src={shop}
                          alt=""
                          srcSet=""
                          className="img-fluid"
                        />
                        <span className="tooltip__o">Shop</span>
                      </Link>
                    </li> */}
                                        <li>
                                            <Link to={"/lawyer"}>
                                                <img src={lawyer} alt="" srcSet="" className="img-fluid" />
                                                <span className="tooltip__o">Find a lawyer</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/kazi"}>
                                                <img src={kazi} alt="" srcSet="" className="img-fluid" />
                                                <span className="tooltip__o">Kazi</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/agent"}>
                                                <img src={agentProfile} alt="" srcSet="" className="img-fluid" />
                                                <span className="tooltip__o">Agent</span>
                                            </Link>
                                        </li>
                                        {/* <li
                      id="tooltipText"
                      className="user-profile d-flex header__login header__login2"
                    >
                      <img src={kaziAgent} alt="img" />
                      <span className="tooltip__o tooltip__02">
                        <Link to={""}></Link>
                        <Link to={""}></Link>
                      </span>
                    </li> */}
                                    </ul>
                                    <ul className={isActive ? "menu active" : "menu"}>
                                        {authenticated ? (
                                            <li id="tooltipText" className="user-profile d-flex">
                                                <Link to={`/profile/info/${currentUser.id}`}>
                                                    <img className="user-profile-login-icon" src={register} alt="img" />
                                                </Link>

                                                <span className="tooltip__o tooltip__02" onClick={logOut}>
                                                    <a>Logout</a>
                                                </span>
                                            </li>
                                        ) : (
                                            <li id="tooltipText" className="user-profile d-flex header__login">
                                                <img className="user-profile-login-icon" src={register} alt="img" />
                                                <span className="tooltip__o tooltip__02">
                                                    <Link to="/login">login</Link>
                                                    <a onClick={() => handleRegShow()}>Register as Member</a>
                                                    <Link to="/regAsProfessional">Register as a Professional</Link>
                                                </span>
                                            </li>
                                        )}

                                        <li className="user-profile">
                                            <Link id="tooltipText" to="/cart" className="positon-relative">
                                                <img src={cart} className="cart-bag img-fluid" alt="" />
                                                <span className="tooltip__o">Cart</span>
                                                <span className="cart-item">0</span>
                                            </Link>
                                        </li>
                                        <li className="user-profile pl-2">
                                            <select className="lanChange" name="lan" id="lan">
                                                <option value="">EN</option>
                                                <option value="">IN</option>
                                                <option value="">BN</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>

                                <div className={isActive ? "header-bar d-lg-none active" : "header-bar d-lg-none"} onClick={active}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="search-overlay">
                <div className="close">
                    <i className="fas fa-times"></i>
                </div>
                <form action="#">
                    <input type="text" placeholder="Write what you want.." />
                </form>
            </div>

            <RegisterModal show={regShow} handleClose={handleRegClose} handleShow={handleRegShow} />
        </>
    );
}

export default Header;
