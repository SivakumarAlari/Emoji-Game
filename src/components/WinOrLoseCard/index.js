// import './index.css'

// const WinOrLoseCard = props => {
//   const {isWon, resetTheGame, score} = props
//   const wonImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
//   const lossImgUrl =
//     'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

//   const imageUrl = isWon ? wonImgUrl : lossImgUrl
//   const textContent = isWon ? 'Best Score' : 'Score'
//   const content = isWon ? 'You Won' : 'You Lose'
//   return (
//     <div className="winOrLose-container ">
//       <div className="top-part-container">
//         <img src={imageUrl} alt="win or lose" className="react-img-design" />
//         <h1 className="won-heading">{content} </h1>
//       </div>
//       <div className="bottom-part-container">
//         <p id="score-paragraph">{textContent} </p>
//         <p className="count-score-heading"> {score}/12</p>
//         <button
//           className="click-btn-design"
//           type="button"
//           onClick={resetTheGame}
//         >
//           Play Again
//         </button>
//       </div>
//     </div>
//   )
// }
// export default WinOrLoseCard

// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
