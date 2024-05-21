import { useSelector } from 'react-redux';
import Signin from './components/auth/Signin';

export default function Protected({children}){
    const user= useSelector((state)=>state.user.user)
return(
<>{user ? children : <Signin/>}</>



)

}