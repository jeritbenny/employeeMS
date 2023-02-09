import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaEdit,FaTrashAlt,FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

function Home() {

  const history=useNavigate();

  const handleDelete=(id)=>{
    alert(`Are you sure you want to delete`)
    console.log(Employee.map((item)=>item.id).indexOf(id)); //index of array value
    let index=Employee.map((item)=>item.id).indexOf(id)
    console.log(index);
    Employee.splice(index,1) //remove last item from array
    console.log(Employee);
    history('/')
  }

  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",salary);
  }

  return (
    <div>
        <h1 className='text-center mt-5'>Employee Management System</h1>
        <p className='ms-4 mt-4 p-4'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. An EMS securely stores and manages the personal and work-related details of employees. This makes it easier for the managers to store and access relevant data when needed.</p>

        <Link to={'/add'}>
          <Button className='btn btn-success ms-5'>Add  <FaUserPlus/></Button>
        </Link>
        

        <Table striped bordered hover variant="warning" style={{margin:"30px",border:"2px solid"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employee && Employee.length>0 ?

            Employee.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.empname}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to={'/edit'}>
                        <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaEdit/></Button>
                      </Link>
                      &nbsp;&nbsp;&nbsp;<Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaTrashAlt/></Button></td>
                </tr>
            ))

            : "No data available"
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Home