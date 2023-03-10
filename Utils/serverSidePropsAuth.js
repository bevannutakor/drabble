import verifyTokenCookie from './verifyToken';
import { parseCookies } from 'nookies';

export default async function getServerSidePropsAuth(context){
    let propsObject = {
      authenticated: "",
      email: "",
      uid: ""
    }
    const cookies = parseCookies(context);

    if(cookies.user){
      const authentication = await verifyTokenCookie(cookies.user);
      propsObject.authenticated = authentication.isAuth;
      propsObject.email = authentication ? authentication.email: "";
      propsObject.uid = authentication ? authentication.uid: "";
    }
    return {
      props: propsObject,
    }
}