import { useState } from "react";
import ModalComponent from "../portfolio/game/CodeBlock/ModalComponent.jsx";


function Certification() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

    // Array di URL dei certificati (PDF o immagini)
    const certificates = [
        "src/assets/certificates/DBGA2.pdf",
        "src/assets/certificates/DBGA2.pdf",
        "src/assets/certificates/DBGA3.pdf"
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextCertificate = () => {
        setCurrentCertificateIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setCurrentCertificateIndex((prevIndex) =>
            prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <button onClick={openModal} className={"mt-2 text-white"}>View Certificates</button>

            {/* ModalComponent richiamato con carosello */}
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                title="Certificates"
            >
                {/* Visualizza il certificato attuale nel carosello */}
                <div style={{ textAlign: 'center' }}>
                    <button onClick={prevCertificate}>{"<"}</button>
                    <iframe
                        src={certificates[currentCertificateIndex]}
                        style={{ width: '100%', height: '50vh' }}
                        title={`Certificato ${currentCertificateIndex + 1}`}
                    ></iframe>
                    <button onClick={nextCertificate}>{">"}</button>
                </div>
            </ModalComponent>
        </div>
    );
}

function Education() {
    return (
        <div>
            <div className="flex justify-between items-center z-10 px-48">
                <div>
                    <h1 className="flex row text-4xl font-bold text-white">Education</h1>
                    <p className="text-white/70 text-2xl text-left mb-6">Course</p>
                </div>
            </div>

            <div className=" z-10 px-48 mb-6">
                <div className="flex row  w-full " >
                    <div className="p-4 w-1/2 bg-white/5 backdrop-blur-md border border-white/10 m-3 text-center">
                        <h2 className="text-2xl font-semibold text-white ">
                            Digital Bros Academy Online Blended
                        </h2>
                        <p className="mt-2 text-gray-600">Game Programming Training Journey (2024)</p>
                        <Certification />
                    </div>
                    <div className="p-4 w-1/2  bg-white/5 backdrop-blur-md border border-white/10 m-3 text-center" >
                        <h2 className="text-2xl font-semibold text-white ">
                            Istituto Tecnico Industriale &#34;Michael Faraday&#34;
                        </h2>
                        <p className="mt-2 text-gray-600">High School Diploma in Information Technology and Telecommunications, specialization in Computer Science<br/>(currently in progress - expected in 2025)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
