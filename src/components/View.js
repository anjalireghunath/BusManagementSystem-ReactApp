import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewbus,setViewbus]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:4004/api/viewall").then((response)=>{
      console.log(response.data)
      setViewbus(response.data)
      setLoadstatus(false)
    })
    const deleteData=(id)=>{
      const data={"_id":id}
      console.log(data)
      axios.post("http://localhost:4004/api/delete",data).then((response)=>{
          if(response.data.status=="success")
          {
              alert("successfully deleted")
          }
          else
          {
              alert("failed to delete")
          }
      })
 }
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
{loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :
<table class="table table-primary table-striped">
  <thead className='table-danger'>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">BusRegNo</th>
      <th scope="col">OwnerName</th>
      <th scope="col">ContactNo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {viewbus.map((value,key)=>{
      return <tr>
      <td>{value.route}</td>
      <td>{value.busname}</td>
      <td>{value.busregno}</td>
      <td>{value.owner}</td>
      <td>{value.contactnum}</td>
      <button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button>
    </tr>
    })}
    
    
    
  </tbody>
</table>
}

                


                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default View