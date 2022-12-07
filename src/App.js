import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventAdd from './component/EventAdd'
import HomePage from './component/HomePage'
import './App.css'
import './component/EventAdd.css'
import './component/EventList.css'
import './component/HomePage.css'
import './component/NavBar.css'
import EventList from './component/EventList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import NavigationBar from './component/NavigationBar'
import EventEdit from './component/EventEdit'

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/eventadd' element={<EventAdd />}></Route>
        <Route path='/eventlist' element={<EventList />}></Route>
        <Route path='/event-edit/:id' element={<EventEdit />}></Route>
      </Routes>
    </div>
  )
}

export default App
