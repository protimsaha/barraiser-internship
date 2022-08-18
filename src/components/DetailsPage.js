import React from 'react';
import { useParams } from 'react-router-dom'
import './Table.css'
import useEmployees from './useEmployees';

const DetailsPage = () => {
    const { id } = useParams()
    // const { name } = useParams()

    const [employeData] = useEmployees()
    const selected = employeData.find(ed => ed.id === id)

    // Your detail API have an issue that's why I used filter the genuin code I am giving below 

    // const [deatail, setDetail] = useState({})

    // useEffect(() => {
    //     fetch(`https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${name}`)
    //         .then(res => res.json())
    //         .then(data => setDetail(data))
    // }, [name])


    return (
        <table className='table d-table mx-auto mt-5'>
            <thead>
                <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            {
                selected && <tbody>
                    <tr >
                        <td>First Name</td>
                        <td>{selected.first_name}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{selected.last_name}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>{selected.date_of_birth}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{selected.address}</td>
                    </tr>
                    <tr>
                        <td>Date of Joining</td>
                        <td>{selected.date_of_joining}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>{selected.salary}</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>{selected.designation}</td>
                    </tr>
                </tbody>
            }
        </table>
    );
};

export default DetailsPage;