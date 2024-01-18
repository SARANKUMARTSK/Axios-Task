import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL } from '../App';

function Edit() {
    let {id} = useParams();
    let[name,setName]=useState('')
    let[email,setEmail] = useState('')
    let[username,setUsername] = useState('')
    let[phone,setPhone]= useState('')
    let[company,setCompany]=useState('')

  useEffect(()=>{
      let fetchUserDetails = async ()=>{
      // console.log(id);
      try{
      let response = await axios.get(`${API_URL}/${id}`)
      let blogDetails = response.data;
      setName(blogDetails.name);
      setEmail(blogDetails.email);
      setUsername(blogDetails.username);
      setPhone(blogDetails.phone);
      setCompany(blogDetails.company);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchUserDetails();
  },[id]);
let navigate = useNavigate()
  const handleUpdate = async ()=>{
    try{
      const updateData = {
        name , 
        email,
        username,
        phone ,
        company
      };
      const response = await axios.put(`${API_URL}/${id}`,updateData);
    }catch(error){
      console.log(error);
    }
    navigate('/home')
  };

  return <>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>{setName(e.target.value)}} type="email" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control value={username} onChange={(e)=>{setUsername(e.target.value)}} type="email" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="email" placeholder="Enter Contact Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Company</Form.Label>
        <Form.Control value={company} onChange={(e)=>{setCompany(e.target.value)}} type="email" placeholder="Company Name" />
      </Form.Group>
      <Button style={{margin:"20px"}} variant="success" onClick={()=>{handleUpdate()}}>Update</Button>
    </Form>
  </>
}

export default Edit