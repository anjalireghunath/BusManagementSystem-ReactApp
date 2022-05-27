import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewbus,setViewbus]=useState([])
    axios.get("http://localhost:4004/api/viewall").then((response)=>{
      console.log(response.data)
      setViewbus(response.data)
    })
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">BusRegNo</th>
      <th scope="col">OwnerName</th>
      <th scope="col">ContactNo</th>
    </tr>
  </thead>
  <tbody>
    {viewbus.map((value,key)=>{
      return <tr>
      <td>{value.route}</td>
      <td>{value.busname}</td>
      <td>{value.busregno}</td>
      <td>{value.ownername}</td>
      <td>{value.contactnum}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default View