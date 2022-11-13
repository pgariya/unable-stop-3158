import { createContext, useState } from "react";

export let AppContext= createContext()


let inintalformdata= {
    email:"p@gmail.com",
    name:"Prakash Gariya",
    contact_no:"9587459875",
    departure_city:"Haldwani"
}

function AppContextProvider({children}) {
    let [formdata,setformdata]= useState(inintalformdata);

return <AppContext.Provider value={{formdata,setformdata}}>{children}</AppContext.Provider>


}

export default AppContextProvider;
