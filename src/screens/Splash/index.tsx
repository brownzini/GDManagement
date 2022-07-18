//React and React Native
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import { LoadAnimation } from '../../components/LoadAnimation';

//Contexts
import { useAuth } from '../../hooks/auth';
import { useProduct } from '../../hooks/product';

export default function Principal (){
  const { setIsLogged } = useAuth();
  const { setProducts } = useProduct();

  const dataKey = '@GDManagement:products';

  useEffect(() => {
    async function loadTransactions() {
      const data = await AsyncStorage.getItem(dataKey);
      if (data) {
          setProducts(JSON.parse(data));
      }
    }

    loadTransactions();

    setTimeout(() => {
      setIsLogged(true);
    },5000);
 }, []);
 return <LoadAnimation />;
}