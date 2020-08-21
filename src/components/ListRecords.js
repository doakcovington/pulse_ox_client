import React, { Fragment, useEffect, useState } from "react";
import { format } from "date-fns"; 

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

    const deleteRecord = async (id) => {
        try {
            const removeRecord = await fetch(`http://localhost:5000/records/${id}`, {
                method: "DELETE"
            })
            setRecords(records.filter(record => record.id !== id)); //returns records that don't match id of deleted record
        } catch (error) {
            console.log(error.message);
        }
    }
    
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
                        <tr key={record.id}>
                            <td>{format(new Date(record.date), 'MM/dd/yyyy')}</td>
                            <td className={record.oxygen <= 93 ? "bg-danger text-white" : "bg-white"}>{record.oxygen}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteRecord(record.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListRecords;