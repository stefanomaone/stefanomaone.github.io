// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

function Card({ img, hoverImg, nome, descrizione }) {
    const [currentImg, setCurrentImg] = useState(img);

    return (
        <div
            className="bg-white/5 backdrop-blur-md mx-4 border border-white/10 transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => setCurrentImg(hoverImg)}
            onMouseLeave={() => setCurrentImg(img)}
        >
            {/* Immagine che cambia al passaggio del mouse */}
            <img className="w-full h-48 object-cover" src={currentImg} alt="Project Gif" />

            {/* Contenuto della card */}
            <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{nome}</h2>
                <p className="mt-2 text-gray-600">{descrizione}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    hoverImg: PropTypes.string.isRequired,  // Definisci hoverImg come richiesta
    nome: PropTypes.string.isRequired,
    descrizione: PropTypes.string,
};

export default Card;
