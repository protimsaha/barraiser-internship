import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './Table.css'
import useEmployees from './useEmployees';

const TableData = () => {
    const navigate = useNavigate()

    const [employeData, setEmployeeData] = useEmployees()
    const [searchText, setSearchText] = useState('')

    const details = (id) => {
        navigate(`details/${id}`)
    }

    const searchData = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
        const searchedName = employeData.filter(ed => ed.first_name.includes(searchText))
        setEmployeeData(searchedName)
    }

    useEffect(() => {
        if (searchText === '') {
            fetch('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees')
                .then(res => res.json())
                .then(data => setEmployeeData(data))
        }
    }, [searchText, setEmployeeData])

    return (
        <div>
            <div className='my-4 d-flex justify-content-around align-items-center'>
                <h1 className='text-center'>React Employee Table</h1>
                <Link to='colaps' className='text-dark'>Colaps</Link>
                <input placeholder='Search by First Name' className='searchField' type="text" onChange={searchData} />
            </div>
            <table className='table d-table mx-auto'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Date of Birth</td>
                        <td>Address</td>
                        <td>Date of Joining</td>
                        <td>Salary</td>
                        <td>Designation</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeData.map(ed => <tr key={ed.id}>
                            <td onClick={() => details((ed.id))}>{ed.id}</td>
                            <td>{ed.first_name}</td>
                            <td>{ed.last_name}</td>
                            <td>{ed.date_of_birth}</td>
                            <td>{ed.address}</td>
                            <td>{ed.date_of_joining}</td>
                            <td>{ed.salary}</td>
                            <td>{ed.designation}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableData;