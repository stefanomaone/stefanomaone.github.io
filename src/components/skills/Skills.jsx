
import logo from "./skillsCompiler.jsx";

function TechnicalExperience() {
    return (
        <div>
            <div className="flex justify-between items-center z-10 px-48">
                <div>
                    <h1 className="flex row text-4xl font-bold text-white">Technical Experience</h1>
                    <p className="text-white/70 text-2xl text-left mb-6">Skills</p>
                </div>
            </div>

            <div className=" z-10 px-48 mb-6">
                <div className="flex row  w-full justify-between p-5 text-white">
                    {logo.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/5 backdrop-blur-md border-white/10 p-4 flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center">
                                {item.icon}
                                <p className="ml-2 text-lg font-medium">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechnicalExperience;
