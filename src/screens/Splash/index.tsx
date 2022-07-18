import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import { LoadAnimation } from '../../components/LoadAnimation';
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