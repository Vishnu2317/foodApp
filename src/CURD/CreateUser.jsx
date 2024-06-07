import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const url = "https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users"

const CreateUser = () => {
    const [name, setname] = useState("")
    const [email_id, setemail_id] = useState("")
    const [mobile_number, setmobile_number] = useState('')

    const nav = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const userDetails = {
            name : name,
            email_id : email_id,
            mobile_number: mobile_number
        }
        try {
            await axios.post(url,userDetails)
            .then((resp) => alert("user created"))
            nav('/users')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <h1>Create User</h1>
    <form onSubmit={handleSubmit}>
    <label>Name : </label>
    <input type='text' required onChange={(e)=>setname(e.target.value)} value={name} placeholder='Enter ur Name' />
    <br /><br />
    <label>Email : </label>
    <input type='email' required onChange={(e)=>setemail_id(e.target.value)} value={email_id} placeholder='Enter ur Email' />
    <br /><br />
    <label>Mobile Number : </label>
    <input type='text' required onChange={(e)=>setmobile_number(e.target.value)} value={mobile_number} placeholder='Enter ur Mobile Number' />
    <br /><br />
    <button>Create User</button>
    </form>
    </>
  )
}

export default CreateUser