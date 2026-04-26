import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointments from './pages/Admin/AllApointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';


const App = () => {

  const {aToken}=useContext(AdminContext)
  const {dToken}=useContext(DoctorContext)

  return (aToken || dToken) ? (
      <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* admin routes */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllApointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorList/>}/>

          {/* doctor routes */}

          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appintments' element={<DoctorAppointments/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>

        </Routes>
      </div>
    </div>
  )

  :(
    <>
    <Login/>
    <ToastContainer/>
    {/* <Navbar/>
     <div className='flex items-start'>
        <Sidebar/>
      </div> */}
    </>
  )
}

export default App

// import React, { useContext, useEffect } from 'react'
// import Login from './pages/Login'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// import { AdminContext } from './context/AdminContext'
// import { DoctorContext } from './context/DoctorContext'

// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'

// import { Route, Routes, useNavigate } from 'react-router-dom'

// // Admin Pages
// import Dashboard from './pages/Admin/Dashboard'
// import AllApointments from './pages/Admin/AllApointments'
// import AddDoctor from './pages/Admin/AddDoctor'
// import DoctorList from './pages/Admin/DoctorList'

// // Doctor Pages
// import DoctorDashboard from './pages/Doctor/DoctorDashboard'
// import DoctorAppointments from './pages/Doctor/DoctorAppointments'
// import DoctorProfile from './pages/Doctor/DoctorProfile'

// const App = () => {

//   const { aToken } = useContext(AdminContext)
//   const { dToken } = useContext(DoctorContext)

//   const navigate = useNavigate()

//   // ✅ Auto redirect on refresh/login
//   useEffect(() => {
//     if (aToken) {
//       navigate('/admin-dashboard')
//     } else if (dToken) {
//       navigate('/doctor-dashboard')
//     }
//   }, [aToken, dToken])

//   // ✅ If not logged in → show Login
//   if (!aToken && !dToken) {
//     return (
//       <>
//         <Login />
//         <ToastContainer />
//       </>
//     )
//   }

//   return (
//     <div className='bg-[#F8F9FD]'>
//       <ToastContainer />

//       {/* ✅ Navbar only for Admin */}
//       {aToken && <Navbar />}

//       <div className='flex items-start'>

//         {/* ✅ Sidebar only for Admin */}
//         {aToken && <Sidebar />}

//         <div className='w-full'>
//           <Routes>

//             {/* ================= ADMIN ROUTES ================= */}
//             {aToken && (
//               <>
//                 <Route path='/admin-dashboard' element={<Dashboard />} />
//                 <Route path='/all-appointments' element={<AllApointments />} />
//                 <Route path='/add-doctor' element={<AddDoctor />} />
//                 <Route path='/doctor-list' element={<DoctorList />} />
//               </>
//             )}

//             {/* ================= DOCTOR ROUTES ================= */}
//             {dToken && (
//               <>
//                 <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
//                 <Route path='/doctor-appointments' element={<DoctorAppointments />} />
//                 <Route path='/doctor-profile' element={<DoctorProfile />} />
//               </>
//             )}

//           </Routes>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App