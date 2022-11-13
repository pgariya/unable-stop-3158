import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Beaches from './Beaches'
import Home from './Home'
import Login from './Login'
import MindfulPage from './MindfulPage'
import Packages from './Packages'
import Payment from './Payment'
import PrivateRoute from './PrivateRoute'
import Singapore from './Singapore'
import SingleDomestic from './SingleDomestic'
import SingleMindful from './SingleMindful'
import SinglePartnership from './SinglePartnership'
import Success from './Success'

const AllRoutes = () => {
  return (
    <div>

<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/:id' element={<PrivateRoute><SinglePartnership/></PrivateRoute>}></Route>
<Route path='/singapore' element={<PrivateRoute><Singapore/></PrivateRoute>}></Route>
<Route path='/beaches' element={<PrivateRoute><Beaches/></PrivateRoute>}></Route>
<Route path='/packages' element={<PrivateRoute><Packages/></PrivateRoute>}></Route>
<Route path='/mindfulPage' element={<PrivateRoute><MindfulPage/></PrivateRoute>}></Route>
<Route path='/mindfulPage/:id' element={<PrivateRoute><SingleMindful/></PrivateRoute>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/mindfulPage/:id/payment' element={<Payment/>}></Route>
<Route path='/mindfulPage/:id/payment/success' element={<Success/>}></Route>
<Route path='/packages/:id' element={<PrivateRoute><SingleDomestic/></PrivateRoute>}></Route>

</Routes>



    </div>
  )
}

export default AllRoutes