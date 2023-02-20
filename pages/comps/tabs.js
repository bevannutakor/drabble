import { useState, useContext} from 'react';
import axios from 'axios';
import styles from '../../styles/Tabs.module.css'
import Card from './cards';

import { UserContext } from '../../Contexts/UserProvider';

function Tabs(props) {
    const { currentUser } = useContext(UserContext);
    const { userDrabbles, likedDrabbles } = props;
    const [toggleState, setToggleState] = useState(1);
    const [favoriteToggleState, setFavoriteToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    const favoritePost = async (postId, posterUid) => {
        if(currentUser){
            await axios.post('/api/favorite', {
                headers: {
                 'Content-Type': 'application/json'
                },
                uid: currentUser.uid,
                posterUid: posterUid,
                postId: postId,
            })
            .then((res) => {
                console.log(res.data);
            })
        }
    }

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                vel voluptatum?
            </span>
            </div>

            <div
            className={ toggleState === 2 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <h2>Stories</h2>
                
                <div className={styles.cards}>
                    {userDrabbles && userDrabbles.map((post) => (
                        <Card drabbleCardText={post.text} favoritePost={() => favoritePost(post.postId, post.userId)}/>
                    ))}
                </div>
            </div>

            <div
            className={ toggleState === 3 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <h2>Favourites</h2>
                <div className={styles.cards}>
                        {likedDrabbles && likedDrabbles.map((post) => (
                            <Card drabbleCardText={post.text}/>
                        ))}
                </div>
            </div>

            <div
            className={ toggleState === 4 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>Followers</h2>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
            </span>
            </div>

            <div
            className={ toggleState === 5 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>Following</h2>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
            </span>
            </div>
        </div>
    </>
  )
}

export default Tabs