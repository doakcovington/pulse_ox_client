import React, { Fragment, useEffect, useState } from "react";

const ListRecords = () => {

    const [records, setRecords] = useState([]);

    const getRecords = async () => {
        try {
            const response = await fetch("http://localhost:5000/records")
            const data =  await response.json()
            setRecords(data);
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getRecords();
    }, [])
    
    return (
        <Fragment>
        {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Oxygen</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record => (
                        <tr>
                            <td key={record.date}>{record.date}</td>
                            <td key={record.oxygen}>{record.oxygen}</td>
                            <td key={record.id}><button className="btn btn-danger">X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListRecords;