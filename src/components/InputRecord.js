import React, {  Fragment, useState } from 'react';

const InputRecord = () => {

    const [date, setDate] = useState();
    const [oxygen, setOxygen] = useState();

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { date, oxygen };
            const resposne = await fetch("http://localhost:5000/records", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(resposne)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pulse Ox:</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)}/>
                <input type="text" className="form-control" value={oxygen} onChange={e => setOxygen(e.target.value)} />
                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
    )
}

export default InputRecord;