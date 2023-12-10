import { FaFacebookF, FaYoutube,FaLinkedinIn,FaInstagram ,FaGithub ,FaChevronUp    } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
    <div className="">
      <div className="flex flex-col justify-center items-center text-center py-10 -mt-20">
     
          <div className="absolute -mt-24">
            <Link href="#home" title="Back to Top">
              <FaChevronUp className="text-3xl text-gray-300 w-12 h-12 bg-gray-100 rounded-full footerAni hover:bg-orange-500"  />
            </Link>
          </div>
    
        <div className="social_icon_link">
          <ul className="flex pt-8 pb-3">
            
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
                  <FaLinkedinIn  />
                </Link>
              </li>
           
              <li>
                <Link target="_blank" to="https://www.instagram.com/probeshdeb/">
                  <FaInstagram  />
                </Link>
              </li>
           
              <li>
                <Link target="_blank" to="https://github.com/probeshnath">
                  <FaGithub />
                </Link>
              </li>
           
          </ul>
        </div>
       
          <p className="legalty">
            Made by <span>Probesh Deb Nath</span>
          </p>
       
      </div>
    </div>
  </div>
  )
}

export default Footer