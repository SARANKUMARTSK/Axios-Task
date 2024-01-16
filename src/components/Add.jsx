import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';

function Add() {
    let navigate = useNavigate()
    let[name,setName]=useState('')
    let[email,setEmail] = useState('')
    let[username,setUsername] = useState('')
    let[phone,setPhone]= useState('')
    let[company,setCompany]=useState('')
    const handleAdd=async()=>{
     let res = await axios.post(API_URL,{
        name , 
        email,
        username,
        phone,
        company
     })
     navigate('/dashboard')
    }
  return <>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>{setName(e.target.value)}} type="email" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={(e)=>{setUsername(e.target.value)}} type="email" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control onChange={(e)=>{setPhone(e.target.value)}} type="email" placeholder="Enter Contact Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Company</Form.Label>
        <Form.Control onChange={(e)=>{setCompany(e.target.value)}} type="email" placeholder="Company Name" />
      </Form.Group>
      <Button style={{margin:"20px"}} onClick={()=>{handleAdd()}} variant="success">Submit</Button>
    </Form>
  </>
}

export default Add