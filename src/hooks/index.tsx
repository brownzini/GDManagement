import React, { ReactNode } from "react"
import { AuthProvider } from "./auth"
import { ProductProvider } from "./product"

interface AppProviderProps {
    children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
    return (
      <AuthProvider>
       <ProductProvider>
         {children}
       </ProductProvider>
      </AuthProvider>
    )
}

export { AppProvider }