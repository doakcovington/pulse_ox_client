import React, {  Fragment, useState } from 'react';

const InputRecord = () => {

    const [date, setDate] = useState("");
    const [oxygen, setOxygen] = useState("Insert Oxygen");

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pulse Ox:</h1>
            <form className="d-flex">
                <input type="date" className="form-control" value={date} onChange={e => setDate(e.date.value)}/>
                <input type="text" className="form-control" value={oxygen} onChange={e => setOxygen(e.oxygen.value)}/>
                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
    )
}

export default InputRecord;