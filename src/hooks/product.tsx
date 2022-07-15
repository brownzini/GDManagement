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
}

interface ProductProviderProps {
  children: ReactNode
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    return (
      <ProductContext.Provider value={{ products, setProducts }} >
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