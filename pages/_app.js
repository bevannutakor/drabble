import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { UserProvider } from '../Contexts/UserProvider';


const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
