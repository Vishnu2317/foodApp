import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UNSAFE_DataRouterStateContext, useNavigate, useParams } from 'react-router-dom'
const url = "https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users"


const EditUser = () => {
   

    const [userDetail, setuserDetail] = useState( {
        name : "",
        mobile_number : "",
        email_id : ""
    } )

    const {id} = useParams()

    const nav = useNavigate()

   useEffect(()=>{
    fetch(`${url}/${id}`)
    .then((res)=>res.json())
    .then((data) => setuserDetail(data))
   },[])

    const handleEdit = async(e) => {
        e.preventDefault()
        try {
            await axios.put(`${url}/${id}`,userDetail)
            alert('user updated')
            nav('/users')
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <>
    <h1>Edit User</h1>
    <form onSubmit={handleEdit}>
    <label>Name : </label>
    <input type='text' required onChange={(e)=>setuserDetail({...userDetail,name:e.target.value})} value={userDetail.name} placeholder='Enter ur Name' />
    <br /><br />
    <label>Email : </label>
    <input type='email' required onChange={(e)=>setuserDetail({...userDetail,email_id:e.target.value})} value={userDetail.email_id} placeholder='Enter ur Email' />
    <br /><br />
    <label>Mobile Number : </label>
    <input type='text' required onChange={(e)=>setuserDetail({...userDetail,mobile_number:e.target.value})} value={userDetail.mobile_number} placeholder='Enter ur Mobile Number' />
    <br /><br />
    <button>Update User</button>
    </form>
    </>
  )
}

export default EditUser