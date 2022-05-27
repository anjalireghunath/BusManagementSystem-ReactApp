import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const SearchBus = () => {
    const [data,setData]=useState([
        {
            "busname":"",
            "owner":"",
            "busregno":"",
            "contactnum":""
        }
       
    ])

    var [route,setRoute]=useState("")
    const searchData=()=>{
        const data={"route":route}
        console.log(data)
        axios.post("http://localhost:4004/api/search",data).then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    }

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
<div className="container">
    <div className="row">
        <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(a)=>{setRoute(a.target.value)}} type="text" className="form-control"/>
                </div>   
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchData} className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
{data.map((value,key)=>{
return <div className="container">
    <div className="row">
        <div className='col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">BusName</label>
                <input type="text" className="form-control" value={value.busname}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">BusRegNo</label>
                <input type="text" className="form-control" value={value.busregno}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Owner</label>
                <input type="text" className="form-control" value={value.owner}/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">ContactNum</label>
                <input type="text" className="form-control" value={value.contactnum}/>
                </div>

            </div>

        </div>

    </div>
    <div className='col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12'>
<button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button>
    </div>

</div>
})}

    </div>
  )
}

export default SearchBus