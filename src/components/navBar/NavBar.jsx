
import links from "./Socialinks.jsx";
import Social from "./Social.jsx";
import HoverTextGrey from "../../components/effects/HoverTextGrey.jsx";
import PropTypes from "prop-types";

function createIcon(iconProps) {
    return (
        <Social
            key={iconProps.id}
            id={iconProps.id}
            url={iconProps.url}
            icon={iconProps.icon}
        />
    );
}

function NavBar({ aboutRef, portfolioRef, educationRef }) {
    // Funzione per gestire il click e far scorrere la pagina alla sezione
    const handleScroll = (ref) => {
        const offset = 150;
        window.scrollTo({
            top: ref.current.offsetTop - offset,
            behavior: "smooth"
        });
    };

    return (
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 fixed top-0 left-0 z-20 w-full py-4 px-48">
            {/* Name and Role */}
            <div>
                <h1 className="text-white text-5xl font-bold">Stefano Maone</h1>
                <p className="text-white/70 text-2xl text-left">Programmer</p>
            </div>

            {/* Social icons at center */}
            <div className="flex space-x-8">
                {links.map(createIcon)}
            </div>

            {/* anchor links */}
            <div className="flex row pl-4 text-xl text-white space-x-2.5">
                <HoverTextGrey>
                    <button
                        onClick={() => handleScroll(aboutRef)}
                        aria-label="Go to About Me section"
                    >
                        <p>About Me</p>
                    </button>
                </HoverTextGrey>
                <HoverTextGrey>
                    <button
                        onClick={() => handleScroll(portfolioRef)}
                        aria-label="Go to Portfolio section"
                    >
                        <p>Portfolio</p>
                    </button>
                </HoverTextGrey>
                <HoverTextGrey>
                    <button
                        onClick={() => handleScroll(educationRef)}
                        aria-label="Go to Education section"
                    >
                        <p>Education</p>
                    </button>
                </HoverTextGrey>
            </div>
        </div>
    );
}

NavBar.propTypes = {
    aboutRef: PropTypes.object.isRequired,
    portfolioRef: PropTypes.object.isRequired,
    educationRef: PropTypes.object.isRequired,
};

export default NavBar;
