import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const url = "https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users"


const UserDetails = () => {

    const [userDetail, setuserDetail] = useState(null)

    const {id} = useParams()

    const getSelectedUser = async() =>{
        try {
            const response = await axios.get(`${url}/${id}`)
            setuserDetail(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getSelectedUser()
    },[])
  return (
    <div>
        <h1>Name : {userDetail?.name} </h1>
        <h1>Email : {userDetail?.email_id}</h1>
        <h1>Mobile Number : {userDetail?.mobile_number} </h1>
    </div>
  )
}

export default UserDetails