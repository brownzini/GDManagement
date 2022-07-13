import React, { useEffect } from 'react';

import { LoadAnimation } from '../../components/LoadAnimation';
import { useAuth } from '../../hooks/auth';

export default function Principal (){

 const { setIsLogged } = useAuth();

 useEffect(() => {
    setTimeout(() => {
      setIsLogged(true);
    },5000);
  }, []);
 return <LoadAnimation />;
}