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
  isEnabledTotal:boolean;
  isEnabledStatistics:boolean;
  isEnabledSettings:boolean;
  isEnabledProducts:boolean;
  setIsEnabledTotal: (isEnabledTotal: boolean) => void;
  setIsEnabledStatistics: (isEnabledStatistics: boolean) => void;
  setIsEnabledSettings: (isEnabledSettings: boolean) => void;
  setIsEnabledProducts: (isEnabledProducts: boolean) => void;
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

    const [isEnabledTotal, setIsEnabledTotal] = useState<boolean>(false);
    const [isEnabledStatistics, setIsEnabledStatistics] = useState<boolean>(true);
    const [isEnabledSettings, setIsEnabledSettings] = useState<boolean>(false);
    const [isEnabledProducts, setIsEnabledProducts] = useState<boolean>(false);

    return (
      <AuthContext.Provider
         value={{
           isLogged, setIsLogged,
           isLoading, setIsLoading,
           isEnabledTotal, setIsEnabledTotal,
           isEnabledStatistics, setIsEnabledStatistics,
           isEnabledSettings, setIsEnabledSettings,
           isEnabledProducts, setIsEnabledProducts,
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