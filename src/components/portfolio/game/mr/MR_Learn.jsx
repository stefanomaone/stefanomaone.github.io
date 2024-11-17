import PropTypes from 'prop-types';

function MR_Learn({ onKeywordClick }) {
    return (
        <div>
            <ul className={"list-disc pl-5"}>
                <li>Basics of C# ad Unity Engine</li>
                <li>Using prefabs for spawning operations</li>
                <li>How to work with the UI system in Unity</li>
                <li> Creating <span onClick={() => onKeywordClick("dist/CodeCollection.cs", "csharp")} className=" font-bold cursor-pointer underline">collections</span> as groups of operations</li>
                <li><span onClick={() => onKeywordClick("dist/GameController.cs", "csharp")} className=" font-bold cursor-pointer underline">Finite State Machines</span> to manage game-state changes</li>
                <li> <span onClick={() => onKeywordClick("dist/ObjectPool.cs", "csharp")} className=" font-bold cursor-pointer underline">Object pooling</span>, and a persistent save system.</li>
            </ul>
        </div>
    );
}

MR_Learn.propTypes = {
    onKeywordClick: PropTypes.func.isRequired,
};

export default MR_Learn;
