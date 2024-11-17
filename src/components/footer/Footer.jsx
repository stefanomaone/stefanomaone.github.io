import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";  // Icona di copyright
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importa le icone necessarie


const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <section id={"footer"}
            className="flex-col mb-2 w-full p-5 text-white text-center justify-center bg-white/5 backdrop-blur-md border border-white/10 mt-10">
            <h1 className={"text-3xl"}>Stefano Maone</h1>
            <div className="contacts flex space-x-6 m-4 items-center justify-center">
                {/* Icona Email */}
                <a href="mailto:stef2n9@gmail.com" className="text-white-800 hover:text-blue-900">
                    <FaEnvelope size={30}/>
                </a>

                {/* Icona GitHub */}
                <a href="https://github.com/2tefan9" target="_blank" rel="noopener noreferrer"
                   className="text-white-800 hover:text-blue-900">
                    <FaGithub size={30}/>
                </a>

                {/* Icona LinkedIn */}
                <a href="https://www.linkedin.com/in/stefano-maone-99945b319/" target="_blank" rel="noopener noreferrer"
                   className="text-white-800 hover:text-blue-900">
                    <FaLinkedin size={30}/>
                </a>
            </div>
            <h3><FontAwesomeIcon icon={faCopyright} className="mr-2"/>
                Copyright {currentYear} </h3>
        </section>
    );
}

export default Footer;
