import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Beaches from './Beaches'
import Home from './Home'
import Packages from './Packages'
import Singapore from './Singapore'
import SinglePartnership from './SinglePartnership'

const AllRoutes = () => {
  return (
    <div>

<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/:id' element={<SinglePartnership/>}></Route>
<Route path='/singapore' element={<Singapore/>}></Route>
<Route path='/beaches' element={<Beaches/>}></Route>
<Route path='/packages' element={<Packages/>}></Route>


</Routes>



    </div>
  )
}

export default AllRoutes