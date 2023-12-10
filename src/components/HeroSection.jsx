import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaGithub, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="home_page" id="home">
            <div className="container flex flex-col justify-between">
                <div className="middle_div flex w-full h-full justify-center items-center ">
                    <div className="home_wrapper  typewriter">
                        {/* <Fade top> */}
                        <h1 className="text-4xl md:text-6xl">I'm Probesh Deb Nath</h1>
                        {/* */}
                        <div>
                            <span >Based in Bangladesh. </span>

                            {/* <span>Founder of PDN Software. </span> */}

                            <span>Full Stack Web Developer.</span>
                        </div>
                        <div className="social_icon_link">
                            <ul className="flex pt-3">


                                <li>
                                    <Link target="_blank" to="https://www.youtube.com/channel/UCOI9Q9N-ZWHZYq3NFDeRplw">
                                        <FaYoutube />
                                    </Link>
                                </li>


                                <li>
                                    <Link target="_blank" to="https://www.facebook.com/profile.php?id=100018341802138">
                                        <FaFacebookF />
                                    </Link>
                                </li>

                                <li>
                                    <Link target="_blank" to="https://www.linkedin.com/in/probesh-deb-nath-782487225/">
                                        <FaLinkedinIn />
                                    </Link>
                                </li>

                                <li>
                                    <Link target="_blank" to="https://www.instagram.com/probeshdeb/">
                                        <FaInstagram />
                                    </Link>
                                </li>

                                <li>
                                    <Link target="_blank" to="https://github.com/probeshnath">
                                        <FaGithub />
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <a href="#about" className="scroolbar">
                        <img className="w-10 mx-auto" src="./scroll-down (1).gif" alt="scrool bar" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection