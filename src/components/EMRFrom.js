
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import './StakeholdersForm.css';

const EMRForm = () => {

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    return (
        <main className="container mt-5">
            <stakeholder-form>
                <div className="column">
                    <TripleDropdown label="Documentation - C&C visit" id="C_C_visit" name="C_C_visit" required={true} options={options} />
                    <TripleDropdown label="Documentation - QI template" id="QI_template" name="QI_template" required={true} options={options} />
                    <TripleDropdown label="Documentation - Menu of Service templates" id="Service_templates" name="Service_templates" required={true} options={options} />
                    <TripleDropdown label="Documentation - Clinic Processes" id="inputId" name="inputName" required={true} options={options} />
                    <TripleDropdown label="Documentation - Other" id="inputId" name="inputName" required={true} options={options} />
                    <TripleDropdown label="Scheduling appointments" id="inputId" name="inputName" required={true} options={options} />
                    <TripleDropdown label="MHS team game planning" id="inputId" name="inputName" required={true} options={options} />
                    <TripleDropdown label="Provider or clinic inquiry" id="inputId" name="inputName" required={true} options={options} />
                    <TripleDropdown label="Liaise with external partners (e.g. EMR vendor)" id="inputId" name="inputName" required={true} options={options} />








                    {/* <NumberDropdown label="Member phys MHSP" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} />
                    <NumberDropdown label="Member phys General" id="Member_phys_General" name="Member_phys_General" required={true} max={10} />
                    <NumberDropdown label="Non-Member Phys" id="Non_Member_Phys" name="Non_Member_Phys" required={true} max={10} />
                    <NumberDropdown label="NP - MHSP" id="NP_MHSP" name="NP_MHSP" required={true} max={10} />
                    <NumberDropdown label="NP - General" id="NP_General" name="NP_General" required={true} max={10} />
                    <NumberDropdown label="MOA" id="MOA" name="MOA" required={true} max={10} />
                    <NumberDropdown label="CLIN MGR" id="CLIN_MGR" name="CLIN_MGR" required={true} max={10} />
                    <NumberDropdown label="CLIN OWN" id="CLIN_OWN" name="CLIN_OWN" required={true} max={10} /> */}
                </div>
                <div className="column">
                </div>
            </stakeholder-form>
        </main>
    );
};

export default EMRForm;