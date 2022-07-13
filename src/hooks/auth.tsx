import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
} from "react"

interface AuthContextData {
  isLogged: boolean;
  isLoading: boolean;
  setIsLogged: (param: boolean) => void;
  setIsLoading: (param: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
      <AuthContext.Provider
         value={{
           isLogged,
           setIsLogged,
           isLoading,
           setIsLoading
         }}
      >
         {children}
      </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider,
    useAuth
}