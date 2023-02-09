import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

  let history=useNavigate()
  
  const handleData=(e)=>{
    e.preventDefault();
    let ids=uuid()
    console.log(ids); //unique id
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({  //add data to employee array
      id: uniqueId,
      empname: empname,
      age: age,
      designation: designation,
      salary: salary,
    })
    history('/')
  }

  return (
    <div>
      <h1 className='text-center mt-5'>Add Employee Details</h1>
      <p className='ms-4 mt-4 p-4'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. </p>
      <Row>
        <Col className='ms-5' md={5}>
          <img className='m-5' src='https://cdn-icons-png.flaticon.com/512/3090/3090108.png'/>
        </Col>

        <Col md={6}>
          <Form className='border border-3 p-5 rounded'>
            <Form.Group className="mb-3">
              <h3 className='text-center'>Add Your Details</h3>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
                //  value={empname} 
                onChange={(e)=>setEmpname(e.target.value)} required
               />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" 
                // value={age} 
                onChange={(e)=>setAge(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter your designation" 
                // value={designation} 
                onChange={(e)=>setDesignation(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter your salary" 
                // value={salary} 
                onChange={(e)=>setSalary(e.target.value)} required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={(e)=>handleData(e)}>Add</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Add