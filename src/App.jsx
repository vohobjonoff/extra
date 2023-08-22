/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading';
import { FaBeer } from "react-icons/fa";
let url = 'https://jsonplaceholder.typicode.com/users';


function App() {
  let str = 'abcdefghijklmnopqrstuvwxyz';

  const [sanoq, setSanoq] = useState(5);
  const [text, setText] = useState(str);
  const [student, setStudents] = useState([]);
  const [loading, setloading] = useState(false);

  // const fetchData = async (url) => {
  //   fetch(url)
  //   .then((res) => res.json())
  //     .then((data) => {
  //       setStudents(data);
        
  // })
  // }

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
      
      <div>
        {/* <button onClick={() => setloading(!loading)}>
          {loading ? 'trueL' : 'falseL'}
        </button> */}
        {loading && <Loading />}
      </div>


      <button onClick={() => dec(sanoq)}>dec</button>
      <h2>{sanoq}</h2> 
      {sanoq > 5 ? text : 'please wait'}
      <button onClick={() => inc(sanoq)}>inc</button>
      
      {student.map((item) => {
        const { name, id } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <FaBeer />
            <button onClick={() => removeStudent(id)}>delete</button>
          </div>
        )
      })}
    </>
  )
}

export default App
