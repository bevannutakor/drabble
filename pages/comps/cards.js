import React, { useContext } from "react";
import { FiMessageSquare, FiBookmark, FiStar, FiArrowUp, FiArrowDown } from "react-icons/fi";
import styles from '../../styles/Cards.module.css'

function Card(props) {
    //favorites, upvote, downvote, comment props need to be added
    const { drabbleCardText, favoritePost } = props;
    return (
        <div className={styles.container}>
            <div className={styles.emojis}>
                ✨ 💀 😦
            </div>

            <div className={styles.words}>
                {/*Our cat, Puddles, never missed breakfast, until today. When I told my daughter, she said the dolls, which she tucked in their beds each night, were also missing. Puddles loved to play with them—carrying them by the hair, leaving a porcelain hand poking from under the couch or a tiny spikey shoe at the top of the steps. At last, we found them in the 1/12-scale gazebo, sipping plastic red wine. My daughter had forgotten she did not put them away, but that did not explain their sticky hands and faces or the shine in their open, painted eyes.*/}
                { drabbleCardText }

            </div>

            <div className={styles.bar}>
                <div className={styles.barleft}>
                    <FiMessageSquare className={styles.comments}/>
                    <FiBookmark className={styles.saves}/>
                </div>
                <div className={styles.barmid} onClick={favoritePost}>
                    <FiStar className={styles.favourites}/>
                </div>
                <div className={styles.barright}>
                    <FiArrowUp className={styles.upvote}/>
                    <FiArrowDown className={styles.downvote}/>
                </div>
            </div>
        </div>
    )
}

export default Card;