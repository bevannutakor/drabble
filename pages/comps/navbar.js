import React, {useContext} from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

import Logo from './logo.png'

import { UilUser } from '@iconscout/react-unicons'
import Menu from './menu'
import { UserContext } from '../../Contexts/UserProvider';

function Navbar() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className={styles.navwrapper}>
        <div className={styles.navleft}>
          {currentUser ? (
            <Menu />
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
        <div className={styles.navmid}>
            <div className={styles.logo}>
              <a href="/">
                <Image class="filter dark:brightness-0 dark:invert"
                  src={Logo}
                  alt="Drabble logo"
                  width="364px"
                  height="164px"
                  style={styles.image}
                  layout="responsive"
                />
              </a>
            </div>
        </div>
        <div className={styles.navright}>
        <a href="/profile">
          <UilUser size='1.5rem' className={styles.profile} />
        </a>
        </div>
      </div>
  )
}

export default Navbar;