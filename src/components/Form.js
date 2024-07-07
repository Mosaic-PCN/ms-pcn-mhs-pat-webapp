import React, { useState } from 'react';
import './Form.css';
import Dropdown from './Dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log("Form submitted");
    };

    return (
        <main className="container mt-5">
            <form onSubmit={handleSubmit} method="POST">
                <div className="form-group standard-width">
                    <label htmlFor="workDate">Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="form-control"
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select a date"
                    />
                </div>
                <Dropdown label="Clinic Name" id="clinic_name" name="clinic_name" required={true} />
                <div className="form-group standard-width">
                    <label htmlFor="activity">Role</label>
                    <select className="form-control" id="activity" name="activity" required>
                        <option value="">Choose...</option>
                        <option value="emr">EMR</option>
                        <option value="pcc">PCC</option>
                        <option value="pf">PF</option>
                        <option value="hpf">HPF</option>
                        <option value="activity-membership-coord">Activity Membership Coordinator</option>
                    </select>
                </div>
            </form>
        </main>
    );
};

export default Form;