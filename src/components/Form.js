import React from 'react';

const Form = () => {
    return (
        <main className="container mt-5">
            <h3>Welcome to MHS-PAT! Please submit the forms. </h3>
            <form action="/submit" method="POST">
                <div className="form-group">
                    <label htmlFor="workDate">Date</label>
                    <input type="date" className="form-control" id="workDate" name="workDate" required />
                </div>
                <div className="form-group">
                    <label htmlFor="clinic_name">Clinic Name</label>
                    <select id="clinic_name" name="clinic_name" className="form-control" required>
                        <option value="">Choose...</option>
                        <option value="clinic1">Clinic 1</option>
                        <option value="clinic2">Clinic 2</option>
                        <option value="clinic3">Clinic 3</option>
                    </select>
                </div>
                <div className="form-group">
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
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        </main>
    );
};

export default Form;