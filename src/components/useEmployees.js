import { useEffect, useState } from "react";

const useEmployees = () => {
    const [employeData, setEmployeeData] = useState([])
    console.log(employeData)

    useEffect(() => {
        fetch('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees')
            .then(res => res.json())
            .then(data => setEmployeeData(data))
    }, [])

    return [employeData, setEmployeeData]
};

export default useEmployees;
