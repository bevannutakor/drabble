import styles from '../../styles/Footer.module.css'

import { UilMusic } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="privacy">
            <Link href={'/privacy'}>Privacy Policy</Link>
        </div>
        <div className={styles.icons}>
            <a  href={'https://www.instagram.com/drabbleinc'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div>
                    <UilInstagram size='1.2rem' className={styles.instagram}/> 
                    </div>
            </a>
            <a  href={'https://twitter.com/drabbleinc'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div>
                    <UilTwitter size='1.2rem' className={styles.twitter}/>
                    </div>
            </a>
            <a  href={'mailto:info@drabble.app'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div>
                    <UilEnvelope size='1.2rem' className={styles.mail}/> 
                    </div>
            </a>
            <a  href={'https://open.spotify.com/user/31ffstnuzbmi727uubacnznkvcfq'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div>
                    <UilMusic size='1.1rem' className={styles.music}/> 
                    </div>
            </a>
        </div>
        <div className={styles.copy}>
            © Drabble
        </div>
      </footer>
  )
}

export default Footer;