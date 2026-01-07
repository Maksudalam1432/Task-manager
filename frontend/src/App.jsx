import React from 'react'
import { Router,Route } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Privateroute from './routes/Privateroute'
import Dashborad from './page/admin/Dashborad'
import CreateTask from './page/admin/CreateTask'
import ManageTask from './page/admin/ManageTask'
import ManageUser from './page/admin/manageUser'
import Userdaskboard from './page/user/Userdaskboard'
import Taskdetails from './page/user/Taskdetails'
import Mytask from './page/user/Mytask'
function App() {
  return (
    <div>

   <Router>

   <Route path='"/login' element={<Login/>} />
   <Route path='"/signuup' element={<Signup/>} />
<Route  element={<Privateroute allowoRoles={["admin"]} />}>

  
 <Route path='/admin/daskboard' element={<Dashborad/>} />
 <Route path='/admin/createtask' element={<CreateTask/>} />
 <Route path='/managetask' element={<ManageTask/>} />
 <Route path='/admin/manageuser' element={<ManageUser />} />
</Route>
 
 // USER//
 <Route element={<Privateroute allowRoles ={["user"]} />}>
   <Route path='/user/dashboard' element={<Userdaskboard/>} />
   <Route path='/user/task-details:/id' element={<Taskdetails/>} />
   <Route path='/user/tasks' element={<Mytask/>} />

 </Route>
   
   </Router>
     



    </div>
  )
}

export default App