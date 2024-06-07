import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const url = "https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users"
const Users = () => {
    const [users, setusers] = useState([])

    const nav = useNavigate()

    const getUsers = async() =>{
        try {
            const response = await axios.get(url)
            setusers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getUsers()
    },[])

    const handleView = (id) =>{
        // nav('/users/'+id)
        nav(`/users/${id}`)
    }

    const handleUpdate = (id) =>{
        // nav('/users/'+id)
        nav(`/editusers/${id}`)
    }

    const handleDelete = (id) =>{
        axios.delete(`${url}/${id}`)
        alert("user deleted")
        getUsers()
    }
  return (
    <>
    <h1>User Details</h1>
    <h3>Create new users <Link to='/create'>Click here</Link></h3>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>EMail</th>
                    <th>Mobile Number</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {users.map((e,index)=>{
                    return (
                        <tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email_id}</td>
                            <td>{e.mobile_number}</td>
                            <td>
                                <button onClick={()=>handleView(e.id)} >View</button>
                                <button onClick={()=>handleUpdate(e.id)}>Edit</button>
                                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Users