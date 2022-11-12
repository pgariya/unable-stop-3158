import { createContext, useState } from "react";

export let AuthContext= createContext()

function AuthContextProvider({children}) {
    let [token,settoken] = useState("");
    let [status,setstatus] = useState(false)

return <AuthContext.Provider value={{token,settoken,status,setstatus}}>{children}</AuthContext.Provider>


}

export default AuthContextProvider;
