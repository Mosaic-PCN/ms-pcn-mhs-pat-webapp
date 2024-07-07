// import React, { useEffect, useState } from 'react';
import React from 'react';

import './Form.css';
import Dropdown from './Dropdown';


const Form = () => {
    // const [options, setOptions] = useState([]);

    // useEffect(() => {
    //     fetch('/clinic-options.txt')
    //         .then(response => response.text())
    //         .then(data => {
    //             const parsedOptions = data.split('\n').map(option => option.trim()).filter(option => option);
    //             setOptions(parsedOptions);
    //         })
    //         .catch(error => console.error('Error fetching options:', error));
    // }, []);

    return (
        <main className="container mt-5">
            {/* <h3>Encounter Information</h3> Ensure this title is correctly placed */}
            <form action="/submit" method="POST">
                <div className="form-group standard-width">
                    <label htmlFor="workDate">Date</label>
                    <input type="date" className="form-control" id="workDate" name="workDate" required />
                </div>
                {/* <div className="form-group standard-width">
                    <label htmlFor="clinic_name">Clinic Name</label>
                    <select id="clinic_name" name="clinic_name" className="form-control" required>
                        <option value="">Choose...</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div> */}
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
                {/* <button type="submit" className="btn btn-primary">Next</button> */}
            </form>
        </main>
    );
};

export default Form;