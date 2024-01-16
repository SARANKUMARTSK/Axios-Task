import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare , faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../App';

function Home() {
    let navigate = useNavigate()
    let [user , setUser] = useState([])
    const getUser = async()=>{
        try{
        let res = await axios.get('https://65a62c9d74cf4207b4ef648d.mockapi.io/user')
        setUser(res.data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    const  handleDelete= async(user)=>{
        try{
         let res = await axios.delete(`${API_URL}/${user.id}`)
         getUser();
        }catch(error){
          console.log(error);
        }
    }
  return <>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User-Name</th>
          <th>E-Mail</th>
          <th>Phone Number</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {user.map((e,i)=>{
            return <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
            <td>{e.company}</td>
            <td>
                <FontAwesomeIcon onClick={()=>{handleEdit(e)}} icon={faPenToSquare}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon onClick={()=>{handleDelete(e)}} icon={faTrashCan} /></td>
          </tr>
        })}
        
      </tbody>
    </Table>
  </>
}

export default Home