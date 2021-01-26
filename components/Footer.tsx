import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center space-y-10 text-white bg-gray-900 h-1/3">
            <div className="flex space-x-10">
                <a href="">
                    <FontAwesomeIcon icon={faFacebook} size="3x" className="text-white" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} size="3x" className="text-white" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter}  size="3x" className="text-white" />
                </a>
            </div>
            <div className="text-center">
                <h1>Copyright Gmeasying™ All Rights Reserved.</h1>
                <h2>Powered by create Jay-flow.</h2>
            </div>
        </footer>
    )
}

export default Footer