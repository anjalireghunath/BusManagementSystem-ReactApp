import React from 'react'
import Header from './Header'

const View = () => {
    var viewbus=[
        {
           "route":"pta-konni-pathanapuram",
           "busname":"lekshmi",
           "busregno":"kl 03-4523",
           "ownername":"shaji",
           "contactnum":"8765456783"
        },
        {
            "route":"pta-konni-thannithod",
           "busname":"bluehill",
           "busregno":"kl 03-4567",
           "ownername":"bluehill",
           "contactnum":"8765456765"
        },
{
           "route":"punalur-konni-pathanmthitta",
           "busname":"malu",
           "busregno":"kl 02-4573",
           "ownername":"mahi",
           "contactnum":"8765456783"
}
    ]
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