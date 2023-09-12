import React from 'react'

import ProgressBar from '@ramonak/react-progress-bar'
import { Link } from 'react-router-dom'
import './profile.css'

function Profile() {
    return (
        <div className='container'>
            <div className="id-photo">
                <div className='text-center mt-4 d-flex justify-content-center'>
                    <img src="./images/photo.jpg" alt="" className='rounded-circle border border-primary ' style={{ width: "200px", height: "200px" }} />
                </div>
            </div>

            <div className="container text-center my-3">
               <Link className="navbar-brand" to="#"> <h6>Edit Profile</h6></Link>
            </div>

            <div className="id-details-section d-flex justify-content-center align-items-center">
                <div className=" position-relative course border-end border-dark border-3 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px"}} >
                        <h2 style={{backgroundImage:'none',color:'#a11afe',paddingRight:'40px'}} >3</h2>
                    <p className='position-absolute m-0' style={{right:"%", left:'%', bottom:"8%"}}>courses</p>
                </div>
                <div className="course position-relative border-end border-dark border-3 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px"}} >
                    <h2 style={{backgroundImage:'none',color:'#a11afe',paddingRight:'40px'}} >0</h2>
                    <p className='position-absolute m-0' style={{right:"%", left:'%', bottom:"8%"}}>complete</p>
                </div>
                <div className="course position-relative  border-end border-dark border-3 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }} >
                    <h2 style={{backgroundImage:'none',color:'#a11afe',paddingRight:'40px'}}>0</h2>
                    <p className='position-absolute m-0' style={{right:"%", left:'%', bottom:"8%"}}>certificate</p>

                </div>
                <div className="course position-relative d-flex align-items-center justify-content-center  border-end border-dark border-3" style={{ width: "100px", height: "100px" }} >
                    <h2 style={{backgroundImage:'none',color:'#a11afe',paddingRight:'40px'}} >10</h2>
                    <p className='position-absolute m-0' style={{right:"%", left:'%', bottom:"8%"}}>Points</p>

                </div>
            </div>



            <div className="id-course mt-4 position-relative">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{ text: "#004aad" }}>1.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>Learn Ethical Hacking from scratch</h5>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "28.7%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "62%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>80%  complete</label>
                    </div>
                    <div className="progressBar container mx-4 py-4" >
                        <ProgressBar completed={80} customLabel=' ' height='7px' width='90%' animateOnRender={true}/>
                    </div>
                </div>
            </div>

            <div className="id-course mt-4 position-relative">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{ text: "#004aad" }}>2.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>100 days python complete bootcamp</h5>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "28.7%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "62%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>40%  complete</label>
                    </div>
                    <div className="progressBar container mx-4 py-4" >
                        <ProgressBar completed={40} customLabel=' ' height='7px' width='90%' animateOnRender={true}/>
                    </div>
                </div>
            </div>
            <div className="id-course mt-4 position-relative">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{ text: "#004aad" }}>3.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>100 days python complete bootcamp</h5>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "28.7%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "62%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>0%  complete</label>
                    </div>
                    <div className="progressBar container mx-4 py-4" >
                        <ProgressBar completed={0} customLabel=' ' height='7px' width='90%' animateOnRender={true} />
                    </div>
                </div>
            </div>
            <div className="id-course mt-4 position-relative mb-5">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{ text: "#004aad" }}>3.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>100 days python complete bootcamp</h5>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "28.7%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{ top: "45%", left: "62%" }} >
                        <label className='' style={{ fontSize: "0.7rem" }}>0%  complete</label>
                    </div>
                    <div className="progressBar container mx-4 py-4" >
                        <ProgressBar completed={0} customLabel=' ' height='7px' width='90%' animateOnRender={true} />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Profile