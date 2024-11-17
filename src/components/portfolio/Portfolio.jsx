// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CardCompiler from "./card/CardCompiler.jsx";
import Card from "./card/Card.jsx";
import PropTypes from "prop-types";
import GamePage from "./game/GamePage.jsx";

function Portfolio() {
    const [selectedGameId, setSelectedGameId] = useState(null);

    const handleCardClick = (game) => {
        setSelectedGameId(game.id); // Salviamo l'ID del gioco selezionato
    };

    // Funzione per tornare alla Portfolio
    const handleGoBack = () => {
        setSelectedGameId(null); //svuota l'id e torna al Portfolio
    };

    return (
        <div>
            {/* Se un gioco è selezionato, mostra la GamePage */}
            {selectedGameId ? (
                <GamePage gameId={selectedGameId} onGoBack={handleGoBack} />
            ) : (
                <div className="flex justify-between items-center z-10 px-48 w-full py-12">
                    <div>
                        <h1 className={"flex row text-4xl font-bold text-white"}>Portfolio</h1>
                        <p className="text-white/70 text-2xl text-left mb-6">Game Projects</p>
                        <div className={"flex row mx-8 justify-between items-center"}>
                            {CardCompiler.map((card) => (
                                <div
                                    key={card.id}
                                    className="cursor-pointer"
                                    onClick={() => handleCardClick(card)}
                                >
                                    <Card
                                        id={card.id}
                                        hoverImg={card.hoverImg}
                                        nome={card.nome}
                                        img={card.img}
                                        descrizione={card.descrizione}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

Portfolio.propTypes = {
    onCardClick: PropTypes.func.isRequired,
};

export default Portfolio;
