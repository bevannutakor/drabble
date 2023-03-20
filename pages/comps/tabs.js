import { useState, useContext} from 'react';
import styles from '../../styles/Tabs.module.css'
import Card from './cards';

import { UserContext } from '../../Contexts/UserProvider';
import favoritePost from '../../Utils/favoritePost';


function Tabs(props) {
    const { currentUser } = useContext(UserContext);
    const { userDrabbles, likedDrabbles } = props;
    const [toggleState, setToggleState] = useState(1);
    const [favoriteToggleState, setFavoriteToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <>
        <div className={styles.tabs}>
            <div className={ toggleState === 1 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(1)}
            >
                About
            </div>
            <div className={ toggleState === 2 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(2)}
            >
                Stories
            </div>
            <div className={ toggleState === 3 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(3)}
            >
                Favourites
            </div>
            <div className={ toggleState === 4 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(4)}
            >
                Followers
            </div>
            <div className={ toggleState === 5 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(5)}
            >
                Following
            </div>
        </div>

        <div className="content-tabs">
            <div
            className={ toggleState === 1 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>About</h2>
            <span>
                Coming Soon
            </span>
            </div>

            <div
            className={ toggleState === 2 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <h2>Stories</h2>
                
                <div className={styles.cards}>

                    {
                        userDrabbles ? userDrabbles.map((drabble) => (
                            <Card drabbleCardText={drabble[0]} drabbleEmojis={drabble[1]} favoritePost={() => favoritePost(currentUser,drabble[2], drabble[3])}/>
                        )) : 
                        
                        <div>You currently have no drabble posts</div>
                    }
                </div>
            </div>

            <div
            className={ toggleState === 3 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <h2>Favourites</h2>
                {/*Unlike logic needed*/}
                <div className={styles.cards}>
                        {
                            likedDrabbles ? likedDrabbles.map((drabble) => (
                                <Card drabbleCardText={drabble[0]} drabbleEmojis={drabble[1]}/>
                            )) : 
                            <div>You currently have no favorite posts</div>
                        }
                </div>
            </div>

            <div
            className={ toggleState === 4 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <h2>Followers</h2>
                <span>Coming soon</span>        
            </div>

            <div
            className={ toggleState === 5 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>Following</h2>
            <span>Coming soon</span>
            </div>
        </div>
    </>
  )
}

export default Tabs