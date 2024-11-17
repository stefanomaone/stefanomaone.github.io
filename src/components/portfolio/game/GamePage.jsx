import GameCompiler from './GameCompiler.jsx';
import Game from './Game.jsx';
import HoverTextGrey from "../../Effects/HoverTextGrey.jsx";
import PropTypes from 'prop-types';
import CodeFileDisplay from "./CodeBlock/CodeDisplay.jsx";
import React, {useState} from "react";
import ModalComponent from "./CodeBlock/ModalComponent.jsx";

function GamePage({ gameId, onGoBack }) {
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");

    // Trova il gioco selezionato usando l'ID
    const selectedGame = GameCompiler.find(game => game.gameId === gameId);

    if (!selectedGame) {
        return <div>Game not found!</div>;
    }

    // Funzione per aprire il modale con il file specifico
    const openCodeModal = (filePath, language) => {
        setSelectedFile(filePath);
        setSelectedLanguage(language);
        setIsCodeModalOpen(true);
    };

    // Funzione per chiudere il modale
    const closeCodeModal = () => setIsCodeModalOpen(false);

    return (
        <div className="flex z-10 px-48 w-full py-12">
            <div>
                <div onClick={onGoBack}>
                    <h1 className="flex row text-4xl font-bold text-white">
                        <HoverTextGrey> Go Back </HoverTextGrey>
                    </h1>
                    <p className="text-white/70 text-2xl text-left mb-6">Portfolio</p>
                </div>

                {/* Mostra il gioco selezionato */}
                <div className=" mx-8  bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 shadow-lg">
                    <div>
                        <Game
                            gameName={selectedGame.gameName}
                            gameVideo={selectedGame.gameVideo}
                            gameForm={selectedGame.gameForm}
                            gameDescription={selectedGame.gameDescription}
                            gameLearning={React.cloneElement(selectedGame.gameLearning, {onKeywordClick: openCodeModal})}
                            gameTeam={selectedGame.gameTeam}
                            gameTime={selectedGame.gameTime}


                        />
                    </div>
                    {/* Modale che si apre quando isCodeModalOpen è true */}
                    <ModalComponent
                        isOpen={isCodeModalOpen}
                        onRequestClose={closeCodeModal}
                    >
                        <CodeFileDisplay
                            filePath={selectedFile}
                            language={selectedLanguage}
                            showLineNumbers={true}
                        />
                    </ModalComponent>


                </div>
                <div onClick={onGoBack}>
                    <h1 className="flex row text-4xl font-bold text-white mt-6">
                        <HoverTextGrey> Other Project </HoverTextGrey>
                    </h1>
                    <p className="text-white/70 text-2xl text-left mb-6">Game</p>
                </div>
            </div>
        </div>
    );
}

GamePage.propTypes = {
    gameId: PropTypes.number.isRequired,
    onGoBack: PropTypes.func.isRequired,
};

export default GamePage;
