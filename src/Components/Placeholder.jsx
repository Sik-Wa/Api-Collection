import { useEffect, useState } from 'react'
import axios from 'axios'


function Placeholder() {
    const [records, setRecords] = useState([])
    useEffect(() =>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {setRecords(res.data)} )
      .catch(err => console.log(err))
    }, [])
  
    return (
      <>
    <div className=' flex items-center justify-center'>
      <table className=' '>
        <thead className=''>
          <tr className=' flex gap-x-16' >
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className=' absolute' >
  {records.map((r, i) => (
    <tr key={i }  className=' flex gap-x-16'>
      <td>{r.id}</td>
      <td>{r.name}</td>
    </tr>
  ))}
        </tbody>
      </table>
    </div>
      </>
    )
  }
  
  export default Placeholder
  