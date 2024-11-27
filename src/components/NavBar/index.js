// import './index.css'

// const NavBar = props => {
//   const {score, topScore, isGameInProgress} = props

//   return (
//     <nav className="navbarDesign">
//       <div className="nav-main-container">
//         <div className="img-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
//             className="imgDesign"
//             alt="emoji logo"
//           />
//           <h1 className="game-heading">Emoji Game </h1>
//         </div>
//         {isGameInProgress && (
//           <div className="score-container ">
//             <p id="paragraph"> Score:{score}</p>
//             <p id="paragraph"> Top Score:{topScore}</p>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }
// export default NavBar

import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
