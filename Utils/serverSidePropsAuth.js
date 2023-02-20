import verifyTokenCookie from './verifyToken';
import { parseCookies } from 'nookies';

export default async function getServerSidePropsAuth(context){
    let propsObject = {
      authenticated: false,
      email: "",
      user: "",
      uid: ""
    }
    const cookies = parseCookies(context);

    if(cookies.user){
      const authentication = await verifyTokenCookie(cookies.user);
      propsObject.authenticated = authentication;
      propsObject.email = authentication ? authentication.email: "";
      propsObject.uid = authentication ? authentication.uid: "";
    }
  
    return {
      props: propsObject,
    }
}