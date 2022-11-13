import { createContext, useState } from "react";


export let AuthContext= createContext()

let initialdata={email:"" ,password:""}


function AuthContextProvider({children}) {
    let [token,settoken] = useState("");
    let [status,setstatus] = useState(false)
    let [data,setdata] = useState(initialdata)

return <AuthContext.Provider value={{token,settoken,status,setstatus,data,setdata}}>{children}</AuthContext.Provider>


}

export default AuthContextProvider;
