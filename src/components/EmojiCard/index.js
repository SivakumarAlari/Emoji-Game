// import './index.css'

// const EmojiCard = props => {
//   const {ImgDetails, clickTheImg} = props
//   const {id, emojiName, emojiUrl} = ImgDetails

//   const onClickImgButton = () => {
//     clickTheImg(id)
//   }
//   return (
//     <li className="image-container">
//       <button className="imageButton" type="button" onClick={onClickImgButton}>
//         <img src={emojiUrl} alt={emojiName} className="emojiDesign" />
//       </button>
//     </li>
//   )
// }

// export default EmojiCard

// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
