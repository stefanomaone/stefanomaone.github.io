import PropTypes from 'prop-types';

function DD_Learn({ onKeywordClick }) {
    return (
        <div>
            <ul className={"list-disc pl-5"}>
                <li>Shader material for water and studio name</li>
                <li>Using <a className={"font-bold"} href={"https://assetstore.unity.com/packages/tools/animation/leantween-3595?srsltid=AfmBOorykqSSbVDtuEq7eOjve-rXF8tyK3ZSQDP7j6kGAdJwc6ptDo4I"}>LeanTween</a>, and <a className={"font-bold"} href={"https://assetstore.unity.com/packages/tools/animation/more-effective-coroutines-free-54975?srsltid=AfmBOorQ1tHwY1S78W1N-3i8fbeBhDbCS7lAguwacIR5ftpSDz1s2ufu"}>MEC</a> plug-in for animations and routine</li>
                <li>Use of Scriptable Objects to allow designers to create  <span onClick={() => onKeywordClick("dist/CrewData.cs", "csharp")} className=" font-bold cursor-pointer underline">customizable characters</span>   directly</li>
                <li>Creation of particle effects for the ship trails</li>
                <li>Use of <span onClick={() => onKeywordClick("dist/RaycastTarget.cs", "csharp")} className=" font-bold cursor-pointer underline">raycasting </span>to change the material of the enemy ship</li>
                <li><span onClick={() => onKeywordClick("dist/AudioManager.cs", "csharp")} className=" font-bold cursor-pointer underline">AudioManager </span>for management sound in-game</li>
                <li>Development of the crew menu and logic for assigning pirates, managing data persistence related to in-game progress, including doubloons, crew, score, and leaderboard</li>
                <li>Creating the mobile version of the game (Android) and a web browser version</li>
            </ul>
        </div>
    );
}

DD_Learn.propTypes = {
    onKeywordClick: PropTypes.func.isRequired,
};

export default DD_Learn;
