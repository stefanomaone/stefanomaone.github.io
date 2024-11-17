import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faClock, faTimesCircle, faCode} from "@fortawesome/free-solid-svg-icons";

const githubPagesUrl = (props, propName, componentName) => {
    const url = props[propName];
    if (url && (typeof url !== 'string' || !/^https:\/\/.*\.github\.io\/.+/.test(url))) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a GitHub Pages URL (e.g., "https://username.github.io/project").`
        );
    }
};

function Game({ gameName, gameVideo, gameForm, gameDescription, gameLearning, gameTeam, gameTime }) {
    return (
        <div className="game-container">
            <div>
                <h1 className="text-5xl mb-3 bg-amber-400 font-bold text-white text-center">{gameName}</h1>
            </div>

            {/* Only render the video if there's no form URL */}
            {!gameForm && (
                <video controls>
                    <source src={gameVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {gameForm && (
                <iframe
                    src={gameForm}
                    title="Game Form"
                    className="game-iframe"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                ></iframe>
            )}

            <div className="flex row">
                <div className=" bg-red-500/50 backdrop-blur-md  w-1/2 mt-4  text-white font-sans p-5">
                    <h2 className={" font-bold text-3xl mb-2"}>Project Info</h2>
                    <ul className={"mb-2"}>
                        <li><FontAwesomeIcon icon={faUser} className="mr-2" />Team Member: {gameTeam}</li>
                        <li><FontAwesomeIcon icon={faClock} className="mr-2" />Time: {gameTime}</li>
                    </ul>
                    <p className="text-white/70 text-lg   text-justify"> {gameDescription}</p>
                </div>
                <div className=" bg-blue-500/50 backdrop-blur-md w-1/2 mt-4   text-white font-sans p-5">
                    <h2 className={"font-bold text-3xl mb-2"}>What I learned</h2>
                    <ul className={"mb-2"}>
                        <li><FontAwesomeIcon icon={faCode} className="mr-2"/> See code by clicking the keyword</li>
                        <li><FontAwesomeIcon icon={faTimesCircle} className="mr-2"/>Click outside the form to close</li>
                    </ul>
                    <p className="text-white/70 text-lg  text-justify"> {gameLearning}</p>
                </div>
            </div>
        </div>
    );
}

// Updated prop types
Game.propTypes = {
    gameName: PropTypes.string.isRequired,
    gameVideo: PropTypes.string.isRequired,
    gameForm: githubPagesUrl, // Custom validator for an optional GitHub Pages URL
    gameDescription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired, // Accepts both strings and JSX elements
    gameLearning: PropTypes.bool.isRequired,
    gameTeam: PropTypes.string.isRequired,
    gameTime: PropTypes.string.isRequired
};

export default Game;
