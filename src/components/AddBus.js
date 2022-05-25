import React, { useState } from 'react'
import Header from './Header'

const AddBus = () => {
    var [route,setRoute]=useState("")
    var [busname,setBusName]=useState("")
    var [busregno,setRegNo]=useState("")
    var [owner,setOwner]=useState("")
    var [contactnum,setContact]=useState("")
    const addBus=()=>{
        const data={"route":route,"busname":busname,"busregno":busregno,"owner":owner,"contactnum":contactnum}
        console.log(data)
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
                    <input onChange={(c)=>{setRoute(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">BusName</label>  
                    <input onChange={(c)=>{setBusName(c.target.value)}} type="text" className="form-control"/>    
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">BusRegNo</label>
                    <input onChange={(c)=>{setRegNo(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">OwnerName</label>
                    <input onChange={(c)=>{setOwner(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">ContactNumber</label>
                    <input onChange={(c)=>{setContact(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addBus} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddBus