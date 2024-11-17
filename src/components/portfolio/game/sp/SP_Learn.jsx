import PropTypes from 'prop-types';

function SP_Learn({ onKeywordClick }) {
    return (
        <div>
            <ul className={"list-disc pl-5"}>
                <li>C++ and Unreal Engine functionalities</li>
                <li>Using Blueprints for the prototyping phase</li>
                <li>Working with <span onClick={() => onKeywordClick("dist/SledEventDispatcher.cpp", "c++")} className=" font-bold cursor-pointer underline">delegates</span> and how to use them</li>
                <li>Using materials for animations</li>
                <li>Implementing pawn <span onClick={() => onKeywordClick("dist/ProjectWinterCharacter.cpp", "c++")} className=" font-bold cursor-pointer underline">switching</span> at runtime and handling physics for sled vehicle</li>
                <li><span onClick={() => onKeywordClick("dist/Sled.cpp", "c++")} className=" font-bold cursor-pointer underline">Input mapping and action handling </span></li>
                <li>AI behavior trees</li>
            </ul>
        </div>
    );
}

SP_Learn.propTypes = {
    onKeywordClick: PropTypes.func.isRequired,
};

export default SP_Learn;
