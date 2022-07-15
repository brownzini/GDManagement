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
    const [products, setProducts] = useState<Product[]>([]);

    function editProduct(data:Product) {
        const newProducts = products.map(product => {
            if (product.id === data.id) {
                return data
            }
            return product
        })
        setProducts(newProducts);
    }

    function deleteProduct (id:string) {
        setProducts(products.filter(product => product.id !== id));
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