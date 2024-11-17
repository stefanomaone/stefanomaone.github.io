import MR_Desc from "./mr/NumberRain.jsx";
import MR_Learn from "./mr/MR_Learn.jsx";
import DD_Learn from "./dd/DD_Learn.jsx";
import SP_Desc from "./sp/SP_Desc.jsx";
import SP_Learn from "./sp/SP_Learn.jsx";
import DD_Desc from "./dd/DDDesc.jsx";


const GameCompiler = [
    { gameId:1 , gameName: "Math Rain" ,gameTeam:"1 Member", gameTime:"3 Weeks", gameVideo: '../../assets/video/mr.mp4', gameDescription:<MR_Desc /> , gameLearning:<MR_Learn onKeywordClick={() => {}} />},
    { gameId:2 , gameName:"Dumby Dumblings",gameTeam:"6 Members", gameTime:"3 Months",  gameForm: "https://orbeetalstudios.github.io/BuildForPortfolioSite/", gameDescription:<DD_Desc />,gameLearning:<DD_Learn onKeywordClick={() => {}} />},
    { gameId:3 , gameName:"The Shattered Peak",gameTeam:"12 Members", gameTime:"3 Months", gameVideo: '../../assets/video/sp.mp4', gameDescription:<SP_Desc /> ,gameLearning:<SP_Learn onKeywordClick={() => {}} />},

    // Aggiungi altri giochi da compilare
];


export default GameCompiler;
