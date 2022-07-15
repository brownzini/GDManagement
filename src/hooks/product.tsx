import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
} from "react"

interface Product {
  id:string;
  category: string;
  date: string;
  name: string;
  price: number;
}

interface ProductContextData {
  products: Product[];
  setProducts: (param: Product[]) => void;
  editProduct: (data:Product) => void;
  deleteProduct: (id:string) => void;
}

interface ProductProviderProps {
  children: ReactNode
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

function ProductProvider({ children }: ProductProviderProps) {
    const dataKey = '@gofinance:transactions';
    const [products, setProducts] = useState<Product[]>([]);

    async function editProduct(data:Product) {
        const index = products.findIndex(product => product.id === data.id);
        if (index > -1) {
            products[index] = data;
            setProducts([...products]);
        }
        await AsyncStorage.setItem(dataKey, JSON.stringify(products));
    }

    async function deleteProduct (id:string) {
        const index = products.findIndex(product => product.id === id);
        if (index > -1) {
            products.splice(index, 1);
            setProducts([...products]);
        }
        await AsyncStorage.setItem(dataKey, JSON.stringify(products));
    }

    return (
      <ProductContext.Provider 
        value={{ 
          products, setProducts, 
          editProduct, deleteProduct 
        }}>
         {children}
      </ProductContext.Provider>
    )
}

function useProduct(): ProductContextData {
    const context = useContext(ProductContext)
    return context
}

export {
    ProductProvider,
    useProduct
}