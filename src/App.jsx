/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading';
import { FaBeer } from "react-icons/fa";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Support from './components/pages/Support';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Login from './components/pages/Login';
let url = 'https://jsonplaceholder.typicode.com/users';


function App() {
  let str = 'abcdefghijklmnopqrstuvwxyz';

  const [sanoq, setSanoq] = useState(5);
  const [text, setText] = useState(str);
  const [student, setStudents] = useState([]);
  const [loading, setloading] = useState(false);

 

  const fetchData = async (url) => {
    setloading(true);
    try {
      const res =  await fetch(url);
      const data = await res.json();
      setStudents(data)
      setloading(false)
    } catch (error) {
      setloading(false);
    }
  } 
  
  const inc = (sanoq) => {
    setSanoq(sanoq + 1)
  };

  const dec = (sanoq) => {
    setSanoq(sanoq - 1)
  };

  const removeStudent = (id) => {
    const newItem = student.filter((item) => item.id != id)
    setStudents(newItem)
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/support' element={<Support />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

      
   

     
    </>
  )
}

export default App
