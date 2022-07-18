//React and React Native
import React, { useEffect } from 'react';

//Contexts
import { useAuth } from '../../hooks/auth';

import { 
  Container, 
} from './styles';

export default function Logout (){
 
 const { setIsLogged } = useAuth();

 useEffect(() => {
  setIsLogged(false);
 }, []);
 return (
   <Container></Container>
 )
}