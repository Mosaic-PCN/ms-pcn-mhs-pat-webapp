import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialFormData = {

    };

    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : initialFormData;
    });

    const [errors, setErrors] = useState({});

    const updateFormData = (newData) => {
        setFormData(prevData => {
            const updatedData = { ...prevData, ...newData };
            localStorage.setItem('formData', JSON.stringify(updatedData));
            return updatedData;
        });
    };

    const resetFormData = () => {
        setFormData(initialFormData);
        setErrors({});
        localStorage.removeItem('formData');
    };

    const fieldExplanations = {
        memberPhysMHSP: 'Member physicians who are currently participanting MHSP',
        memberPhysGen: 'Member physicians who are not currently participanting MHSP',
        nonMemberPhys: 'Pphysicians who are not MPCN member',
        NpMhsp: 'Member nurse practitioner (NP) who are currently participanting MHSP',
        NpGen: 'Member nurse practitioner (NP) who are not currently participanting MHSP',
        MOE: 'Medical office Assistant in any clinic (including Mosaic MOA and MOA from other clinics)',
        clinMgr: 'Clinical manager of primary care clinic',
        clinOwn: 'Clinical owner of primary care clinic',
        pccMosaic: 'Mosaic Primary care coordinator',
        pccClinic: 'Clinic Primary care coordinator',
        PF: 'Practice Facilatitor Mosaic PCN',
        EMRS: 'EMR specialist in Mosaic PCN',
        HPF: '',
        memberCoord: 'Membership Coordinator in Mosaic PCN.',
        MDT: 'Multidiciplinary team members in Mosaic PCN',
        DYAD: 'Dyad including another Mosaic staff: PF, PCC, EMRs.',
        CcVisit: 'Documentation for quarterly Communication and Continuty visit.',
        QiTemplate: 'Documentation for quality improvement project template',
        ServiceTemplates: 'Documentation for Menu of Service templates',
        DocumentationClinicProcesses: 'Documentation for clinic processes, for example the creating resources and tools for clinic to use',
        DocumentationOther: 'Documentation for other purposes anything else not included above',
        SchedulingAppointments: 'Scheduling appointment with clinics/providers',
        LiaiseWithExternalPartners: 'Activities of taking care the questions and inquiries from clinic and providers including the time on research to get the answers',
        ProvideOrClinicInquiry: 'Supporting clinic inquiries, EMR vendors',
        EmrMapping: 'EMR optimization such as configeration or referral form etc',
        EmrSearches: 'Search/create searches specific information from EMR',
        EmrDataCollection: 'how many physicians the data collection process served and how much time spent on the data collection as direct time , preparation/documentation as indirect time',
        EmrDataEntry: 'how many physicians the data entry into MHSapp process served and how much time spent on the data entry as direct time , preparation/documentation as indirect time',
        MeetingCC: 'how much time spent on the new member meet and greet visit with provider and staff as direct time, how much time spent on preparation/documentation as indirect time',
        MeetingNewMember: 'how much time spent on the new member meet and greet visit with provider and staff as direct time, how much time spent on preparation/documentation as indirect time',
        MeetingCIICPAR: 'how much time spent on the CII/CPAR meeting with provider and staff as direct time, how much time spent on preparation/documentation as indirect time',
        MeetingQI: 'how much time spent on the QI meeting with the clinic as direct time, how much time spent on preparation/documentation as indirect time',
        MaterialDropoff: 'how much time spent on dropping off documents to the clinic. Minutes spent with physician/staff as direct time. Travel time as indirect time',
        ClinicActivityOther: 'how much time spent on other activities with the clinic but not listed above',
        RecievingTraining: 'Training sessions received regarding the clinic supports. E.g, AMA, EMR user group',
        TrainingMaterialCreation: 'Time spent on creating the tranning materials',
        TrainingClinicAdmins: 'Providing trainning for clinic administrative staff',
        TrainingClinicProviders: 'Providing trainning for clinic providers (physician, NP, MDT)',
        BeingTrainedByEMR: 'Training sessions received regarding the clinic supports',
        PatientCalls: 'How many patient calls made for screening, panel management, team-based care etc',
        Netcare: 'How many patients netcare that have been check for screening, panel management, team-based care, EMR optimization etc',
        PanelCleanUp: 'How much time spent  for how many physicians on quarterly  panel clean up?',
        SchedulingPatientAppointment: 'How many patients appointments were booked for screening, team-based care etc',
        ScreeningOffersPapTest: 'How many patient were offered pap test',
        ScreeningOffersMammogram: 'How many patient were offered mammogram screening',
        ScreeningOffersColorectal: 'How many patient were offered colorectal cancer screening',
        ScreeningOffersAnnualPhysical: 'How many patient were offered  annual physical (Cpx) screening',
        ScreeningOffersDiabetes: 'How many patient were offered diabetes screening',
        ScreeningOffersLipidProfile: 'How many patient were offered lipid profile screening',
        ScreeningOffersCVRisk: 'How many patient were offered CV risk screening',
        ScreeningOffersLungCancerTobaccoe: 'How many patient were offered lung cancer and/or tobacco cessation screening',
        ScreeningOffersOther: 'How many patient were offered other screening that are not list above',
        QIProjectsStarted: 'How many QI projects started with the clinic on this date',
        QIProjectsAdopted: 'How many QI projects adopted with the clinic on this date',
        QIProjectsAdapted: 'How many QI projects adapted with the clinic on this date',
        QIProjectsAbandoned: 'How many QI projects abandoned with the clinic on this date',
        QIProjectCancelled: 'How many QI projects cancelled with the clinic on this date',
        CreatingEvaluationFrameworks: 'How many frameworks the staff work on? And how many minutes the staff working meeting, documentation with parterner: REDI, clinic etc. This is for external/clinic or internal only',
        DataAnalysis: 'How much time spent on data analysis by the staff by themselves',
        EnvironmentalScanAnalysis: 'How much time spent on environmental scan, literature review, situational analysis',
        CollaborationWithEvalPartners: 'How much time spent on meeting and documentations and other format of collaboration with REDI, HQCA',

    };

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        // <AppContext.Provider value={{ formData, updateFormData, resetFormData, errors, validateForm }}>
        <AppContext.Provider value={{ formData, updateFormData, resetFormData, errors, fieldExplanations }}>

            {children}
        </AppContext.Provider>
    );
};