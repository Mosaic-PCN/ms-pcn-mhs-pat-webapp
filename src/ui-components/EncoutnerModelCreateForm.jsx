/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  SelectField,
  SwitchField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { EncoutnerModel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function EncoutnerModelCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    clinic_name: "",
    date: "",
    in_person: undefined,
    group: false,
    non_visit: false,
    org_time: "",
  };
  const [clinic_name, setClinic_name] = React.useState(
    initialValues.clinic_name
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [in_person, setIn_person] = React.useState(initialValues.in_person);
  const [group, setGroup] = React.useState(initialValues.group);
  const [non_visit, setNon_visit] = React.useState(initialValues.non_visit);
  const [org_time, setOrg_time] = React.useState(initialValues.org_time);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClinic_name(initialValues.clinic_name);
    setDate(initialValues.date);
    setIn_person(initialValues.in_person);
    setGroup(initialValues.group);
    setNon_visit(initialValues.non_visit);
    setOrg_time(initialValues.org_time);
    setErrors({});
  };
  const validations = {
    clinic_name: [],
    date: [],
    in_person: [],
    group: [],
    non_visit: [],
    org_time: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.large.value}
      columnGap="15px"
      padding={tokens.space.xl.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          clinic_name,
          date,
          in_person,
          group,
          non_visit,
          org_time,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new EncoutnerModel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EncoutnerModelCreateForm")}
      {...rest}
    >
      <SelectField
        label="Clinic name"
        placeholder="Please select an option"
        isDisabled={false}
        value={clinic_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clinic_name: value,
              date,
              in_person,
              group,
              non_visit,
              org_time,
            };
            const result = onChange(modelFields);
            value = result?.clinic_name ?? value;
          }
          if (errors.clinic_name?.hasError) {
            runValidationTasks("clinic_name", value);
          }
          setClinic_name(value);
        }}
        onBlur={() => runValidationTasks("clinic_name", clinic_name)}
        errorMessage={errors.clinic_name?.errorMessage}
        hasError={errors.clinic_name?.hasError}
        {...getOverrideProps(overrides, "clinic_name")}
      >
        <option
          children="1000 Voices"
          value="1000 Voices"
          {...getOverrideProps(overrides, "clinic_nameoption0")}
        ></option>
        <option
          children="105A - 4909 17th Ave SE"
          value="105A - 4909 17th Ave SE"
          {...getOverrideProps(overrides, "clinic_nameoption1")}
        ></option>
        <option
          children="17 Ave SE Medical Centre"
          value="17 Ave SE Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption2")}
        ></option>
        <option
          children="52 Street Plaza Medical Clinic"
          value="52 Street Plaza Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption3")}
        ></option>
        <option
          children="Abbeydale Medical Clinic"
          value="Abbeydale Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption4")}
        ></option>
        <option
          children="ACT Medical Northeast"
          value="ACT Medical Northeast"
          {...getOverrideProps(overrides, "clinic_nameoption5")}
        ></option>
        <option
          children="Advanced Cardiology"
          value="Advanced Cardiology"
          {...getOverrideProps(overrides, "clinic_nameoption6")}
        ></option>
        <option
          children="Affinity Medical Clinic"
          value="Affinity Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption7")}
        ></option>
        <option
          children="AgeCare SkyPointe"
          value="AgeCare SkyPointe"
          {...getOverrideProps(overrides, "clinic_nameoption8")}
        ></option>
        <option
          children="Ahmadiyaa Flu Clinic"
          value="Ahmadiyaa Flu Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption9")}
        ></option>
        <option
          children="AISH Calgary"
          value="AISH Calgary"
          {...getOverrideProps(overrides, "clinic_nameoption10")}
        ></option>
        <option
          children="Alberta Works - Calgary East"
          value="Alberta Works - Calgary East"
          {...getOverrideProps(overrides, "clinic_nameoption11")}
        ></option>
        <option
          children="Alexandra Medical Clinic"
          value="Alexandra Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption12")}
        ></option>
        <option
          children="Amenida Residences Calgary"
          value="Amenida Residences Calgary"
          {...getOverrideProps(overrides, "clinic_nameoption13")}
        ></option>
        <option
          children="Apex Medical Clinic"
          value="Apex Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption14")}
        ></option>
        <option
          children="Apex Sky Medical Clinic"
          value="Apex Sky Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption15")}
        ></option>
        <option
          children="Asian Medical Centre"
          value="Asian Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption16")}
        ></option>
        <option
          children="Aspen Medical and Laser Clinic"
          value="Aspen Medical and Laser Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption17")}
        ></option>
        <option
          children="Associate Clinic Pediatrics"
          value="Associate Clinic Pediatrics"
          {...getOverrideProps(overrides, "clinic_nameoption18")}
        ></option>
        <option
          children="Aurora Medical Clinic"
          value="Aurora Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption19")}
        ></option>
        <option
          children="Beacon Hill Medical Clinic"
          value="Beacon Hill Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption20")}
        ></option>
        <option
          children="Best Western Premier Calgary Plaza Hotel"
          value="Best Western Premier Calgary Plaza Hotel"
          {...getOverrideProps(overrides, "clinic_nameoption21")}
        ></option>
        <option
          children="Blue Diamond Medical"
          value="Blue Diamond Medical"
          {...getOverrideProps(overrides, "clinic_nameoption22")}
        ></option>
        <option
          children="Bob Bahan Aquatic & Fitness Centre"
          value="Bob Bahan Aquatic & Fitness Centre"
          {...getOverrideProps(overrides, "clinic_nameoption23")}
        ></option>
        <option
          children="Boys And Girls Clubs Of Calgary"
          value="Boys And Girls Clubs Of Calgary"
          {...getOverrideProps(overrides, "clinic_nameoption24")}
        ></option>
        <option
          children="Braeside on 24th Medical Clinic"
          value="Braeside on 24th Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption25")}
        ></option>
        <option
          children="Brentwood Medical Clinic"
          value="Brentwood Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption26")}
        ></option>
        <option
          children="C Med Clinic Ltd."
          value="C Med Clinic Ltd."
          {...getOverrideProps(overrides, "clinic_nameoption27")}
        ></option>
        <option
          children="Caleo Health"
          value="Caleo Health"
          {...getOverrideProps(overrides, "clinic_nameoption28")}
        ></option>
        <option
          children="Calgary Catholic Immigration Society - MCRC"
          value="Calgary Catholic Immigration Society - MCRC"
          {...getOverrideProps(overrides, "clinic_nameoption29")}
        ></option>
        <option
          children="Calgary Children's Clinic"
          value="Calgary Children's Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption30")}
        ></option>
        <option
          children="Calgary Housing Company - Applewood"
          value="Calgary Housing Company - Applewood"
          {...getOverrideProps(overrides, "clinic_nameoption31")}
        ></option>
        <option
          children="Calgary Interfaith Food Bank"
          value="Calgary Interfaith Food Bank"
          {...getOverrideProps(overrides, "clinic_nameoption32")}
        ></option>
        <option
          children="Calgary Weight Management Centre"
          value="Calgary Weight Management Centre"
          {...getOverrideProps(overrides, "clinic_nameoption33")}
        ></option>
        <option
          children="Calgary Well Woman Clinic"
          value="Calgary Well Woman Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption34")}
        ></option>
        <option
          children="Calgary West Medical Clinic"
          value="Calgary West Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption35")}
        ></option>
        <option
          children="Cambridge Manor Long Term Care"
          value="Cambridge Manor Long Term Care"
          {...getOverrideProps(overrides, "clinic_nameoption36")}
        ></option>
        <option
          children="Canadian Sleep Consultants"
          value="Canadian Sleep Consultants"
          {...getOverrideProps(overrides, "clinic_nameoption37")}
        ></option>
        <option
          children="Capitol Hill Family Practice"
          value="Capitol Hill Family Practice"
          {...getOverrideProps(overrides, "clinic_nameoption38")}
        ></option>
        <option
          children="Care and Cure Medical Clinic"
          value="Care and Cure Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption39")}
        ></option>
        <option
          children="Cares Medical Clinic"
          value="Cares Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption40")}
        ></option>
        <option
          children="Carewell Medical Clinic"
          value="Carewell Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption41")}
        ></option>
        <option
          children="Carewest Dr. Vernon Fanning Centre"
          value="Carewest Dr. Vernon Fanning Centre"
          {...getOverrideProps(overrides, "clinic_nameoption42")}
        ></option>
        <option
          children="Carewest George Boyak LTC"
          value="Carewest George Boyak LTC"
          {...getOverrideProps(overrides, "clinic_nameoption43")}
        ></option>
        <option
          children="Castleridge Health Centre Inc."
          value="Castleridge Health Centre Inc."
          {...getOverrideProps(overrides, "clinic_nameoption44")}
        ></option>
        <option
          children="CBI Health Center - Sunridge Professional Building"
          value="CBI Health Center - Sunridge Professional Building"
          {...getOverrideProps(overrides, "clinic_nameoption45")}
        ></option>
        <option
          children="CBI Health Deerfoot Meadows"
          value="CBI Health Deerfoot Meadows"
          {...getOverrideProps(overrides, "clinic_nameoption46")}
        ></option>
        <option
          children="CHC - Pineridge"
          value="CHC - Pineridge"
          {...getOverrideProps(overrides, "clinic_nameoption47")}
        ></option>
        <option
          children="CHC - Rundle"
          value="CHC - Rundle"
          {...getOverrideProps(overrides, "clinic_nameoption48")}
        ></option>
        <option
          children="Children's Health Clinic - East Calgary Health Centre"
          value="Children's Health Clinic - East Calgary Health Centre"
          {...getOverrideProps(overrides, "clinic_nameoption49")}
        ></option>
        <option
          children="Chinook Mall Medical Clinic"
          value="Chinook Mall Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption50")}
        ></option>
        <option
          children="Chinook Medical Centre"
          value="Chinook Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption51")}
        ></option>
        <option
          children="Cityscape Medical Centre"
          value="Cityscape Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption52")}
        ></option>
        <option
          children="Cityscape Square Medical and Laser Clinic"
          value="Cityscape Square Medical and Laser Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption53")}
        ></option>
        <option
          children="Cor Medical Clinic"
          value="Cor Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption54")}
        ></option>
        <option
          children="Coral Springs Medical Clinic"
          value="Coral Springs Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption55")}
        ></option>
        <option
          children="Covenant Medical Clinic"
          value="Covenant Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption56")}
        ></option>
        <option
          children="Coventry Hills Family Care Centre"
          value="Coventry Hills Family Care Centre"
          {...getOverrideProps(overrides, "clinic_nameoption57")}
        ></option>
        <option
          children="Creekside Medical Centre"
          value="Creekside Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption58")}
        ></option>
        <option
          children="Crescent Heights Health Clinic"
          value="Crescent Heights Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption59")}
        ></option>
        <option
          children="Crescent Heights Medical Clinic"
          value="Crescent Heights Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption60")}
        ></option>
        <option
          children="Crescent Medical Centre"
          value="Crescent Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption61")}
        ></option>
        <option
          children="Crowfoot Corner Medicentre"
          value="Crowfoot Corner Medicentre"
          {...getOverrideProps(overrides, "clinic_nameoption62")}
        ></option>
        <option
          children="CRU"
          value="CRU"
          {...getOverrideProps(overrides, "clinic_nameoption63")}
        ></option>
        <option
          children="Crystal Ridge Family Medical Laser & Aesthetics Clinic"
          value="Crystal Ridge Family Medical Laser & Aesthetics Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption64")}
        ></option>
        <option
          children="CUPS Health Clinic"
          value="CUPS Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption65")}
        ></option>
        <option
          children="Dashmesh Culture Centre"
          value="Dashmesh Culture Centre"
          {...getOverrideProps(overrides, "clinic_nameoption66")}
        ></option>
        <option
          children="DAWA Medical Clinic"
          value="DAWA Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption67")}
        ></option>
        <option
          children="Deerfoot Meadows Medical Clinic"
          value="Deerfoot Meadows Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption68")}
        ></option>
        <option
          children="Doctors Plus Medical Centre"
          value="Doctors Plus Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption69")}
        ></option>
        <option
          children="Douglasglen PrimeCARE Health Clinic"
          value="Douglasglen PrimeCARE Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption70")}
        ></option>
        <option
          children="Dover Medical Clinic"
          value="Dover Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption71")}
        ></option>
        <option
          children="Dr. A. Sachdeva Family Physician"
          value="Dr. A. Sachdeva Family Physician"
          {...getOverrideProps(overrides, "clinic_nameoption72")}
        ></option>
        <option
          children="Dr. Charlene Dunn"
          value="Dr. Charlene Dunn"
          {...getOverrideProps(overrides, "clinic_nameoption73")}
        ></option>
        <option
          children="Dr. Charlene Dunn & Assoc. Family Medicine"
          value="Dr. Charlene Dunn & Assoc. Family Medicine"
          {...getOverrideProps(overrides, "clinic_nameoption74")}
        ></option>
        <option
          children="Dr. Claudia Naber"
          value="Dr. Claudia Naber"
          {...getOverrideProps(overrides, "clinic_nameoption75")}
        ></option>
        <option
          children="Dr. Gregory Skinner"
          value="Dr. Gregory Skinner"
          {...getOverrideProps(overrides, "clinic_nameoption76")}
        ></option>
        <option
          children="Dr. Jerry Pelletier"
          value="Dr. Jerry Pelletier"
          {...getOverrideProps(overrides, "clinic_nameoption77")}
        ></option>
        <option
          children="Dr. Margaret Churcher"
          value="Dr. Margaret Churcher"
          {...getOverrideProps(overrides, "clinic_nameoption78")}
        ></option>
        <option
          children="Dr. Patricia Pawaroo"
          value="Dr. Patricia Pawaroo"
          {...getOverrideProps(overrides, "clinic_nameoption79")}
        ></option>
        <option
          children="Dr. Zia Qureshi MD"
          value="Dr. Zia Qureshi MD"
          {...getOverrideProps(overrides, "clinic_nameoption80")}
        ></option>
        <option
          children="Drs. Chin Jung & Leong"
          value="Drs. Chin Jung & Leong"
          {...getOverrideProps(overrides, "clinic_nameoption81")}
        ></option>
        <option
          children="East Calgary Health Centre"
          value="East Calgary Health Centre"
          {...getOverrideProps(overrides, "clinic_nameoption82")}
        ></option>
        <option
          children="East Hills Family Medical Clinic"
          value="East Hills Family Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption83")}
        ></option>
        <option
          children="Easthills Medical Centre - Walmart"
          value="Easthills Medical Centre - Walmart"
          {...getOverrideProps(overrides, "clinic_nameoption84")}
        ></option>
        <option
          children="Eastside Medical Clinic"
          value="Eastside Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption85")}
        ></option>
        <option
          children="Eatons Centre Medical Clinic"
          value="Eatons Centre Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption86")}
        ></option>
        <option
          children="Edmonton Trail Medical Clinic"
          value="Edmonton Trail Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption87")}
        ></option>
        <option
          children="Eighth Avenue Premier Clinic"
          value="Eighth Avenue Premier Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption88")}
        ></option>
        <option
          children="Elbow River Healing Lodge"
          value="Elbow River Healing Lodge"
          {...getOverrideProps(overrides, "clinic_nameoption89")}
        ></option>
        <option
          children="Empathy Collaborative Health"
          value="Empathy Collaborative Health"
          {...getOverrideProps(overrides, "clinic_nameoption90")}
        ></option>
        <option
          children="ESG Preschool"
          value="ESG Preschool"
          {...getOverrideProps(overrides, "clinic_nameoption91")}
        ></option>
        <option
          children="Essence Medical Centres - Westwinds"
          value="Essence Medical Centres - Westwinds"
          {...getOverrideProps(overrides, "clinic_nameoption92")}
        ></option>
        <option
          children="Evanston Medical Clinic"
          value="Evanston Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption93")}
        ></option>
        <option
          children="Evergreen Medical Centre"
          value="Evergreen Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption94")}
        ></option>
        <option
          children="Excel Health Clinic"
          value="Excel Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption95")}
        ></option>
        <option
          children="Falconridge CHC"
          value="Falconridge CHC"
          {...getOverrideProps(overrides, "clinic_nameoption96")}
        ></option>
        <option
          children="Falconridge Medical Clinic"
          value="Falconridge Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption97")}
        ></option>
        <option
          children="Falconridge/Castleridge Community Association"
          value="Falconridge/Castleridge Community Association"
          {...getOverrideProps(overrides, "clinic_nameoption98")}
        ></option>
        <option
          children="Family Care Clinic - East Calgary Health Centre"
          value="Family Care Clinic - East Calgary Health Centre"
          {...getOverrideProps(overrides, "clinic_nameoption99")}
        ></option>
        <option
          children="Family Care Medical Center"
          value="Family Care Medical Center"
          {...getOverrideProps(overrides, "clinic_nameoption100")}
        ></option>
        <option
          children="Focus Health Clinic"
          value="Focus Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption101")}
        ></option>
        <option
          children="Foothills Primary Care Centre"
          value="Foothills Primary Care Centre"
          {...getOverrideProps(overrides, "clinic_nameoption102")}
        ></option>
        <option
          children="Forest Hills Medical Clinic"
          value="Forest Hills Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption103")}
        ></option>
        <option
          children="Forest Lane Medical Clinic Inc."
          value="Forest Lane Medical Clinic Inc."
          {...getOverrideProps(overrides, "clinic_nameoption104")}
        ></option>
        <option
          children="Forest Lawn Medical Clinic"
          value="Forest Lawn Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption105")}
        ></option>
        <option
          children="Forest Lawn Medicentre"
          value="Forest Lawn Medicentre"
          {...getOverrideProps(overrides, "clinic_nameoption106")}
        ></option>
        <option
          children="Franklin Health Clinic"
          value="Franklin Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption107")}
        ></option>
        <option
          children="Genesis Health Clinic"
          value="Genesis Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption108")}
        ></option>
        <option
          children="Genesis Medical Clinic"
          value="Genesis Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption109")}
        ></option>
        <option
          children="Genesis Preschool"
          value="Genesis Preschool"
          {...getOverrideProps(overrides, "clinic_nameoption110")}
        ></option>
        <option
          children="Glenwood Medical"
          value="Glenwood Medical"
          {...getOverrideProps(overrides, "clinic_nameoption111")}
        ></option>
        <option
          children="Good Health Medical Clinic"
          value="Good Health Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption112")}
        ></option>
        <option
          children="Good Samaritan Clinic"
          value="Good Samaritan Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption113")}
        ></option>
        <option
          children="GoodLife Fitness"
          value="GoodLife Fitness"
          {...getOverrideProps(overrides, "clinic_nameoption114")}
        ></option>
        <option
          children="H2 Medical Centre"
          value="H2 Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption115")}
        ></option>
        <option
          children="Healing Home Medical Clinic"
          value="Healing Home Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption116")}
        ></option>
        <option
          children="Health & Wellness Centre - Calgary Police Services"
          value="Health & Wellness Centre - Calgary Police Services"
          {...getOverrideProps(overrides, "clinic_nameoption117")}
        ></option>
        <option
          children="Health Upwardly Mobile (HUM)"
          value="Health Upwardly Mobile (HUM)"
          {...getOverrideProps(overrides, "clinic_nameoption118")}
        ></option>
        <option
          children="Heartland Agency – Mayland Heights"
          value="Heartland Agency – Mayland Heights"
          {...getOverrideProps(overrides, "clinic_nameoption119")}
        ></option>
        <option
          children="Heartland Agency – Monterey Park"
          value="Heartland Agency – Monterey Park"
          {...getOverrideProps(overrides, "clinic_nameoption120")}
        ></option>
        <option
          children="Heritage Family Medical Centre"
          value="Heritage Family Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption121")}
        ></option>
        <option
          children="Heritage Hill Medicentres"
          value="Heritage Hill Medicentres"
          {...getOverrideProps(overrides, "clinic_nameoption122")}
        ></option>
        <option
          children="Hope-Medicare Primary Health Care Centre"
          value="Hope-Medicare Primary Health Care Centre"
          {...getOverrideProps(overrides, "clinic_nameoption123")}
        ></option>
        <option
          children="Horizon Square Medicentre"
          value="Horizon Square Medicentre"
          {...getOverrideProps(overrides, "clinic_nameoption124")}
        ></option>
        <option
          children="Hull Services - Radisson Patch"
          value="Hull Services - Radisson Patch"
          {...getOverrideProps(overrides, "clinic_nameoption125")}
        ></option>
        <option
          children="Humana Medical Clinic"
          value="Humana Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption126")}
        ></option>
        <option
          children="Humana Medical Clinic- Monterey Park"
          value="Humana Medical Clinic- Monterey Park"
          {...getOverrideProps(overrides, "clinic_nameoption127")}
        ></option>
        <option
          children="Huntington Hills Superstore"
          value="Huntington Hills Superstore"
          {...getOverrideProps(overrides, "clinic_nameoption128")}
        ></option>
        <option
          children="Hygieia Medical Clinic"
          value="Hygieia Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption129")}
        ></option>
        <option
          children="IKEA"
          value="IKEA"
          {...getOverrideProps(overrides, "clinic_nameoption130")}
        ></option>
        <option
          children="Imagine Health Centres Downtown"
          value="Imagine Health Centres Downtown"
          {...getOverrideProps(overrides, "clinic_nameoption131")}
        ></option>
        <option
          children="Inglewood Aquatic Centre"
          value="Inglewood Aquatic Centre"
          {...getOverrideProps(overrides, "clinic_nameoption132")}
        ></option>
        <option
          children="INLIV"
          value="INLIV"
          {...getOverrideProps(overrides, "clinic_nameoption133")}
        ></option>
        <option
          children="International Ave Medical Centre"
          value="International Ave Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption134")}
        ></option>
        <option
          children="International Healthcare Center"
          value="International Healthcare Center"
          {...getOverrideProps(overrides, "clinic_nameoption135")}
        ></option>
        <option
          children="Ismaili  Jamatkhana Flu Clinic"
          value="Ismaili  Jamatkhana Flu Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption136")}
        ></option>
        <option
          children="Jacksonport Medical Clinic and Medical Aesthetics"
          value="Jacksonport Medical Clinic and Medical Aesthetics"
          {...getOverrideProps(overrides, "clinic_nameoption137")}
        ></option>
        <option
          children="Kings Medical Clinic"
          value="Kings Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption138")}
        ></option>
        <option
          children="La Clinique Francophone de Calgary"
          value="La Clinique Francophone de Calgary"
          {...getOverrideProps(overrides, "clinic_nameoption139")}
        ></option>
        <option
          children="Levitee Clinics"
          value="Levitee Clinics"
          {...getOverrideProps(overrides, "clinic_nameoption140")}
        ></option>
        <option
          children="Limb Preservation Centre"
          value="Limb Preservation Centre"
          {...getOverrideProps(overrides, "clinic_nameoption141")}
        ></option>
        <option
          children="Lynnwood Medical Clinic"
          value="Lynnwood Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption142")}
        ></option>
        <option
          children="MacEwan Medical Clinic"
          value="MacEwan Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption143")}
        ></option>
        <option
          children="Madigan Medical Centre"
          value="Madigan Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption144")}
        ></option>
        <option
          children="Margaret Chisholm Resettlement Centre"
          value="Margaret Chisholm Resettlement Centre"
          {...getOverrideProps(overrides, "clinic_nameoption145")}
        ></option>
        <option
          children="Marlborough Mall (Shopping Centre)"
          value="Marlborough Mall (Shopping Centre)"
          {...getOverrideProps(overrides, "clinic_nameoption146")}
        ></option>
        <option
          children="Marlborough Mall Medical"
          value="Marlborough Mall Medical"
          {...getOverrideProps(overrides, "clinic_nameoption147")}
        ></option>
        <option
          children="Marlborough Medical Clinic"
          value="Marlborough Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption148")}
        ></option>
        <option
          children="Marly Medical Clinic"
          value="Marly Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption149")}
        ></option>
        <option
          children="Martindale Medical Clinic"
          value="Martindale Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption150")}
        ></option>
        <option
          children="Maternal Fetal Medicine Ante Natal Clinic (EFW)"
          value="Maternal Fetal Medicine Ante Natal Clinic (EFW)"
          {...getOverrideProps(overrides, "clinic_nameoption151")}
        ></option>
        <option
          children="Maternity Care Clinic"
          value="Maternity Care Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption152")}
        ></option>
        <option
          children="Max Bell Centre"
          value="Max Bell Centre"
          {...getOverrideProps(overrides, "clinic_nameoption153")}
        ></option>
        <option
          children="Mayland Medical Centre"
          value="Mayland Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption154")}
        ></option>
        <option
          children="MCI The Doctor's Office Beddington Town Centre"
          value="MCI The Doctor's Office Beddington Town Centre"
          {...getOverrideProps(overrides, "clinic_nameoption155")}
        ></option>
        <option
          children="Medical Express Inc."
          value="Medical Express Inc."
          {...getOverrideProps(overrides, "clinic_nameoption156")}
        ></option>
        <option
          children="Medicare Bowness"
          value="Medicare Bowness"
          {...getOverrideProps(overrides, "clinic_nameoption157")}
        ></option>
        <option
          children="Medicare Clinic Ltd"
          value="Medicare Clinic Ltd"
          {...getOverrideProps(overrides, "clinic_nameoption158")}
        ></option>
        <option
          children="Medicare Walk-in Clinic Royal Oak"
          value="Medicare Walk-in Clinic Royal Oak"
          {...getOverrideProps(overrides, "clinic_nameoption159")}
        ></option>
        <option
          children="MEDIHOME Family Clinic"
          value="MEDIHOME Family Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption160")}
        ></option>
        <option
          children="Medilink Walk-In & Family Practice"
          value="Medilink Walk-In & Family Practice"
          {...getOverrideProps(overrides, "clinic_nameoption161")}
        ></option>
        <option
          children="MediPlus 1 Clinic"
          value="MediPlus 1 Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption162")}
        ></option>
        <option
          children="MediPlus 2 Clinic"
          value="MediPlus 2 Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption163")}
        ></option>
        <option
          children="Medistar Family Practice Walk-in"
          value="Medistar Family Practice Walk-in"
          {...getOverrideProps(overrides, "clinic_nameoption164")}
        ></option>
        <option
          children="Medisys Health Clinic"
          value="Medisys Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption165")}
        ></option>
        <option
          children="Mediwell Medical Clinic"
          value="Mediwell Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption166")}
        ></option>
        <option
          children="Memorial Medical Clinic"
          value="Memorial Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption167")}
        ></option>
        <option
          children="Mission Medical Clinic"
          value="Mission Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption168")}
        ></option>
        <option
          children="Monterey Medical Centre"
          value="Monterey Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption169")}
        ></option>
        <option
          children="Monterey Medical Clinic"
          value="Monterey Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption170")}
        ></option>
        <option
          children="Mosaic Family Resource Centre"
          value="Mosaic Family Resource Centre"
          {...getOverrideProps(overrides, "clinic_nameoption171")}
        ></option>
        <option
          children="Mosaic International Community Clinic"
          value="Mosaic International Community Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption172")}
        ></option>
        <option
          children="Mosaic LMG"
          value="Mosaic LMG"
          {...getOverrideProps(overrides, "clinic_nameoption173")}
        ></option>
        <option
          children="Mosaic Medical Clinic"
          value="Mosaic Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption174")}
        ></option>
        <option
          children="Mosaic Pain Management Clinic"
          value="Mosaic Pain Management Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption175")}
        ></option>
        <option
          children="Mosaic Refugee Health Clinic"
          value="Mosaic Refugee Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption176")}
        ></option>
        <option
          children="Mosaic Sunridge Community Clinic"
          value="Mosaic Sunridge Community Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption177")}
        ></option>
        <option
          children="Mosaic Temple Community Clinic"
          value="Mosaic Temple Community Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption178")}
        ></option>
        <option
          children="Mosaic Westwinds Community Clinic"
          value="Mosaic Westwinds Community Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption179")}
        ></option>
        <option
          children="Mosaic Women's Clinic"
          value="Mosaic Women's Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption180")}
        ></option>
        <option
          children="My Health Walk In and Comprehensive Care Clinic"
          value="My Health Walk In and Comprehensive Care Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption181")}
        ></option>
        <option
          children="NE Family Connections"
          value="NE Family Connections"
          {...getOverrideProps(overrides, "clinic_nameoption182")}
        ></option>
        <option
          children="New Brighton Medical"
          value="New Brighton Medical"
          {...getOverrideProps(overrides, "clinic_nameoption183")}
        ></option>
        <option
          children="Niitsitapi Aboriginal Learning Centre"
          value="Niitsitapi Aboriginal Learning Centre"
          {...getOverrideProps(overrides, "clinic_nameoption184")}
        ></option>
        <option
          children="Nolan Family Medical Clinic"
          value="Nolan Family Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption185")}
        ></option>
        <option
          children="North East Medical Clinic"
          value="North East Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption186")}
        ></option>
        <option
          children="Northeast Addiction and Mental Health Centre for Holistic Recovery"
          value="Northeast Addiction and Mental Health Centre for Holistic Recovery"
          {...getOverrideProps(overrides, "clinic_nameoption187")}
        ></option>
        <option
          children="Northland Medical Clinic"
          value="Northland Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption188")}
        ></option>
        <option
          children="NuCARE Medical Clinic"
          value="NuCARE Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption189")}
        ></option>
        <option
          children="Oasis Medical Centre - Deerfoot City"
          value="Oasis Medical Centre - Deerfoot City"
          {...getOverrideProps(overrides, "clinic_nameoption190")}
        ></option>
        <option
          children="Oasis Medical Centre - Harvest Hills"
          value="Oasis Medical Centre - Harvest Hills"
          {...getOverrideProps(overrides, "clinic_nameoption191")}
        ></option>
        <option
          children="Oasis Medical Clinic - Sage Hill"
          value="Oasis Medical Clinic - Sage Hill"
          {...getOverrideProps(overrides, "clinic_nameoption192")}
        ></option>
        <option
          children="Oasis Medical Clinic- Bridgeland"
          value="Oasis Medical Clinic- Bridgeland"
          {...getOverrideProps(overrides, "clinic_nameoption193")}
        ></option>
        <option
          children="Oasis Medical Clinic- Sunridge"
          value="Oasis Medical Clinic- Sunridge"
          {...getOverrideProps(overrides, "clinic_nameoption194")}
        ></option>
        <option
          children="Ogden Medical Clinic"
          value="Ogden Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption195")}
        ></option>
        <option
          children="One Medical"
          value="One Medical"
          {...getOverrideProps(overrides, "clinic_nameoption196")}
        ></option>
        <option
          children="One World Medical Centre"
          value="One World Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption197")}
        ></option>
        <option
          children="Opal Medical Clinic & Aesthetics"
          value="Opal Medical Clinic & Aesthetics"
          {...getOverrideProps(overrides, "clinic_nameoption198")}
        ></option>
        <option
          children="OS Geiger Preschool"
          value="OS Geiger Preschool"
          {...getOverrideProps(overrides, "clinic_nameoption199")}
        ></option>
        <option
          children="Owl Pod Health Clinics"
          value="Owl Pod Health Clinics"
          {...getOverrideProps(overrides, "clinic_nameoption200")}
        ></option>
        <option
          children="Pacific Place Medical Centre"
          value="Pacific Place Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption201")}
        ></option>
        <option
          children="Panorama Hills Medical Clinic"
          value="Panorama Hills Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption202")}
        ></option>
        <option
          children="Panorama Hills Medicentre"
          value="Panorama Hills Medicentre"
          {...getOverrideProps(overrides, "clinic_nameoption203")}
        ></option>
        <option
          children="Peak Medical"
          value="Peak Medical"
          {...getOverrideProps(overrides, "clinic_nameoption204")}
        ></option>
        <option
          children="Penbrooke Family Medical Clinic"
          value="Penbrooke Family Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption205")}
        ></option>
        <option
          children="Penbrooke Plaza"
          value="Penbrooke Plaza"
          {...getOverrideProps(overrides, "clinic_nameoption206")}
        ></option>
        <option
          children="Penbrooke Preschool (Ready Set Go)"
          value="Penbrooke Preschool (Ready Set Go)"
          {...getOverrideProps(overrides, "clinic_nameoption207")}
        ></option>
        <option
          children="PerfectCare Clnic"
          value="PerfectCare Clnic"
          {...getOverrideProps(overrides, "clinic_nameoption208")}
        ></option>
        <option
          children="Peter Lougheed Centre"
          value="Peter Lougheed Centre"
          {...getOverrideProps(overrides, "clinic_nameoption209")}
        ></option>
        <option
          children="Phoenix Medical"
          value="Phoenix Medical"
          {...getOverrideProps(overrides, "clinic_nameoption210")}
        ></option>
        <option
          children="Pineridge Community Association"
          value="Pineridge Community Association"
          {...getOverrideProps(overrides, "clinic_nameoption211")}
        ></option>
        <option
          children="Pineridge Doctors Office"
          value="Pineridge Doctors Office"
          {...getOverrideProps(overrides, "clinic_nameoption212")}
        ></option>
        <option
          children="Pineridge Medical Clinic"
          value="Pineridge Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption213")}
        ></option>
        <option
          children="Pinnacle Medical Centre - Walden"
          value="Pinnacle Medical Centre - Walden"
          {...getOverrideProps(overrides, "clinic_nameoption214")}
        ></option>
        <option
          children="Pinnacle Medical Centres - Beacon Hill"
          value="Pinnacle Medical Centres - Beacon Hill"
          {...getOverrideProps(overrides, "clinic_nameoption215")}
        ></option>
        <option
          children="Pinnacle Medical Centres Hamptons"
          value="Pinnacle Medical Centres Hamptons"
          {...getOverrideProps(overrides, "clinic_nameoption216")}
        ></option>
        <option
          children="Premier Health"
          value="Premier Health"
          {...getOverrideProps(overrides, "clinic_nameoption217")}
        ></option>
        <option
          children="Prime Care Health at YYC"
          value="Prime Care Health at YYC"
          {...getOverrideProps(overrides, "clinic_nameoption218")}
        ></option>
        <option
          children="Pristine Health Clinic"
          value="Pristine Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption219")}
        ></option>
        <option
          children="Properties Medical Clinic"
          value="Properties Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption220")}
        ></option>
        <option
          children="Prospect Human Services"
          value="Prospect Human Services"
          {...getOverrideProps(overrides, "clinic_nameoption221")}
        ></option>
        <option
          children="Protea Medical Clinic"
          value="Protea Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption222")}
        ></option>
        <option
          children="Providence Family Medical Centre"
          value="Providence Family Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption223")}
        ></option>
        <option
          children="Psychiatric Clinic"
          value="Psychiatric Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption224")}
        ></option>
        <option
          children="Real Canadian Superstore - Calgary 20th Ave"
          value="Real Canadian Superstore - Calgary 20th Ave"
          {...getOverrideProps(overrides, "clinic_nameoption225")}
        ></option>
        <option
          children="Real Canadian Superstore - Calgary Westwinds"
          value="Real Canadian Superstore - Calgary Westwinds"
          {...getOverrideProps(overrides, "clinic_nameoption226")}
        ></option>
        <option
          children="Redstone Family Medical Clinic"
          value="Redstone Family Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption227")}
        ></option>
        <option
          children="Revolution Medical Clinic-Meadows Mile"
          value="Revolution Medical Clinic-Meadows Mile"
          {...getOverrideProps(overrides, "clinic_nameoption228")}
        ></option>
        <option
          children="Riley Park Maternity Clinic"
          value="Riley Park Maternity Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption229")}
        ></option>
        <option
          children="Riverbend Medical Clinic"
          value="Riverbend Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption230")}
        ></option>
        <option
          children="Riverbend Sobeys"
          value="Riverbend Sobeys"
          {...getOverrideProps(overrides, "clinic_nameoption231")}
        ></option>
        <option
          children="RMG Medical Clinic"
          value="RMG Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption232")}
        ></option>
        <option
          children="Rockyview Maternity & Family Practice"
          value="Rockyview Maternity & Family Practice"
          {...getOverrideProps(overrides, "clinic_nameoption233")}
        ></option>
        <option
          children="Royal Oak Medical clinic"
          value="Royal Oak Medical clinic"
          {...getOverrideProps(overrides, "clinic_nameoption234")}
        ></option>
        <option
          children="Rundle Medical Centre"
          value="Rundle Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption235")}
        ></option>
        <option
          children="Rundle Medical Clinic"
          value="Rundle Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption236")}
        ></option>
        <option
          children="Saddlebrook Medical Clinic"
          value="Saddlebrook Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption237")}
        ></option>
        <option
          children="SaddleRidge Family Physicians"
          value="SaddleRidge Family Physicians"
          {...getOverrideProps(overrides, "clinic_nameoption238")}
        ></option>
        <option
          children="Saddletowne Medical Clinic"
          value="Saddletowne Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption239")}
        ></option>
        <option
          children="Saddletowne Medical Clinic"
          value="Saddletowne Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption240")}
        ></option>
        <option
          children="Sage Medical Clinic"
          value="Sage Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption241")}
        ></option>
        <option
          children="SAIT Health Clinic"
          value="SAIT Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption242")}
        ></option>
        <option
          children="Salute Family Medicine"
          value="Salute Family Medicine"
          {...getOverrideProps(overrides, "clinic_nameoption243")}
        ></option>
        <option
          children="Salvation Army - Horizon Heights"
          value="Salvation Army - Horizon Heights"
          {...getOverrideProps(overrides, "clinic_nameoption244")}
        ></option>
        <option
          children="Santimed Family and Walk-in Clinic"
          value="Santimed Family and Walk-in Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption245")}
        ></option>
        <option
          children="Savanna Bazaar Medical Clinic"
          value="Savanna Bazaar Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption246")}
        ></option>
        <option
          children="Savanna Medical Centre"
          value="Savanna Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption247")}
        ></option>
        <option
          children="Scenic Acres Medical Clinic"
          value="Scenic Acres Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption248")}
        ></option>
        <option
          children="SE Calgary Resource Centre"
          value="SE Calgary Resource Centre"
          {...getOverrideProps(overrides, "clinic_nameoption249")}
        ></option>
        <option
          children="Sehet Bow River Medical Centre"
          value="Sehet Bow River Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption250")}
        ></option>
        <option
          children="Sexuality and Reproductive Health Clinic -Sheldon Chumir"
          value="Sexuality and Reproductive Health Clinic -Sheldon Chumir"
          {...getOverrideProps(overrides, "clinic_nameoption251")}
        ></option>
        <option
          children="Silverado Medical and Aesthetic Clinic"
          value="Silverado Medical and Aesthetic Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption252")}
        ></option>
        <option
          children="Simons Valley Family Clinic"
          value="Simons Valley Family Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption253")}
        ></option>
        <option
          children="Skyview Family Care Clinic"
          value="Skyview Family Care Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption254")}
        ></option>
        <option
          children="Smart Clinic"
          value="Smart Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption255")}
        ></option>
        <option
          children="Smart Health Medical Clinic"
          value="Smart Health Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption256")}
        ></option>
        <option
          children="Snowy Owl Medical Clinic"
          value="Snowy Owl Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption257")}
        ></option>
        <option
          children="South Health Campus"
          value="South Health Campus"
          {...getOverrideProps(overrides, "clinic_nameoption258")}
        ></option>
        <option
          children="Southport Healthyway Clinic"
          value="Southport Healthyway Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption259")}
        ></option>
        <option
          children="Sunridge Family Medicine Teaching Centre"
          value="Sunridge Family Medicine Teaching Centre"
          {...getOverrideProps(overrides, "clinic_nameoption260")}
        ></option>
        <option
          children="Sunridge Mall Walk-in Medical Clinic"
          value="Sunridge Mall Walk-in Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption261")}
        ></option>
        <option
          children="Sunrise Community Link Resource Centre"
          value="Sunrise Community Link Resource Centre"
          {...getOverrideProps(overrides, "clinic_nameoption262")}
        ></option>
        <option
          children="Sunrise Medical Clinic"
          value="Sunrise Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption263")}
        ></option>
        <option
          children="Superstore - Coventry Hills"
          value="Superstore - Coventry Hills"
          {...getOverrideProps(overrides, "clinic_nameoption264")}
        ></option>
        <option
          children="Supreme Care Medical Clinic"
          value="Supreme Care Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption265")}
        ></option>
        <option
          children="Taralake Medical Clinic"
          value="Taralake Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption266")}
        ></option>
        <option
          children="Telus Health"
          value="Telus Health"
          {...getOverrideProps(overrides, "clinic_nameoption267")}
        ></option>
        <option
          children="Temple Community Association"
          value="Temple Community Association"
          {...getOverrideProps(overrides, "clinic_nameoption268")}
        ></option>
        <option
          children="Temple Family Medical Clinic"
          value="Temple Family Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption269")}
        ></option>
        <option
          children="Test Feb 08"
          value="Test Feb 08"
          {...getOverrideProps(overrides, "clinic_nameoption270")}
        ></option>
        <option
          children="The Alberta Obesity Centre and Rapid Access General"
          value="The Alberta Obesity Centre and Rapid Access General"
          {...getOverrideProps(overrides, "clinic_nameoption271")}
        ></option>
        <option
          children="The Alex - Pathways to Housing"
          value="The Alex - Pathways to Housing"
          {...getOverrideProps(overrides, "clinic_nameoption272")}
        ></option>
        <option
          children="The Alex Community Health Bus"
          value="The Alex Community Health Bus"
          {...getOverrideProps(overrides, "clinic_nameoption273")}
        ></option>
        <option
          children="The Alex Family (Community) Health Center"
          value="The Alex Family (Community) Health Center"
          {...getOverrideProps(overrides, "clinic_nameoption274")}
        ></option>
        <option
          children="The Alex- Rapid Access Addiction Medicine"
          value="The Alex- Rapid Access Addiction Medicine"
          {...getOverrideProps(overrides, "clinic_nameoption275")}
        ></option>
        <option
          children="The Alex Seniors Health Centre"
          value="The Alex Seniors Health Centre"
          {...getOverrideProps(overrides, "clinic_nameoption276")}
        ></option>
        <option
          children="The Alex Youth Health Center"
          value="The Alex Youth Health Center"
          {...getOverrideProps(overrides, "clinic_nameoption277")}
        ></option>
        <option
          children="The Alex Youth Health Center Bus #104"
          value="The Alex Youth Health Center Bus #104"
          {...getOverrideProps(overrides, "clinic_nameoption278")}
        ></option>
        <option
          children="The Genesis Centre"
          value="The Genesis Centre"
          {...getOverrideProps(overrides, "clinic_nameoption279")}
        ></option>
        <option
          children="The IUD Women's Clinic"
          value="The IUD Women's Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption280")}
        ></option>
        <option
          children="Thorncliffe Family Clinic"
          value="Thorncliffe Family Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption281")}
        ></option>
        <option
          children="Thorncliffe Medical Centre"
          value="Thorncliffe Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption282")}
        ></option>
        <option
          children="Trans Canada Medical Centre"
          value="Trans Canada Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption283")}
        ></option>
        <option
          children="Travelodge Macleod"
          value="Travelodge Macleod"
          {...getOverrideProps(overrides, "clinic_nameoption284")}
        ></option>
        <option
          children="TruCare Meadows Medical Centre"
          value="TruCare Meadows Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption285")}
        ></option>
        <option
          children="Truong Medical Clinic"
          value="Truong Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption286")}
        ></option>
        <option
          children="Tsuut'ina Health Centre"
          value="Tsuut'ina Health Centre"
          {...getOverrideProps(overrides, "clinic_nameoption287")}
        ></option>
        <option
          children="Tuscany Medical Clinic"
          value="Tuscany Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption288")}
        ></option>
        <option
          children="Tuxedo Centre Medical Clinic"
          value="Tuxedo Centre Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption289")}
        ></option>
        <option
          children="United Medical Clinic"
          value="United Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption290")}
        ></option>
        <option
          children="University City Clinic"
          value="University City Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption291")}
        ></option>
        <option
          children="Urgent Care Medical"
          value="Urgent Care Medical"
          {...getOverrideProps(overrides, "clinic_nameoption292")}
        ></option>
        <option
          children="Vanguard Medical Clinic"
          value="Vanguard Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption293")}
        ></option>
        <option
          children="Varsity Medical Clinic"
          value="Varsity Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption294")}
        ></option>
        <option
          children="Village Square Community Health Centre"
          value="Village Square Community Health Centre"
          {...getOverrideProps(overrides, "clinic_nameoption295")}
        ></option>
        <option
          children="Village Square Leisure Centre"
          value="Village Square Leisure Centre"
          {...getOverrideProps(overrides, "clinic_nameoption296")}
        ></option>
        <option
          children="Village Square Medical Clinic"
          value="Village Square Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption297")}
        ></option>
        <option
          children="Village Square Pre-School"
          value="Village Square Pre-School"
          {...getOverrideProps(overrides, "clinic_nameoption298")}
        ></option>
        <option
          children="Vineyard Medical Clinic"
          value="Vineyard Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption299")}
        ></option>
        <option
          children="Vineyard Medical Clinic-Seton"
          value="Vineyard Medical Clinic-Seton"
          {...getOverrideProps(overrides, "clinic_nameoption300")}
        ></option>
        <option
          children="Vista Medical Clinic"
          value="Vista Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption301")}
        ></option>
        <option
          children="Well Fed Clinic"
          value="Well Fed Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption302")}
        ></option>
        <option
          children="Wellcare Medical Clinic"
          value="Wellcare Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption303")}
        ></option>
        <option
          children="Wellness Medical Clinic"
          value="Wellness Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption304")}
        ></option>
        <option
          children="Westglen Medical Centre"
          value="Westglen Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption305")}
        ></option>
        <option
          children="Westwinds Medical Clinic"
          value="Westwinds Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption306")}
        ></option>
        <option
          children="Whitehorn Medical"
          value="Whitehorn Medical"
          {...getOverrideProps(overrides, "clinic_nameoption307")}
        ></option>
        <option
          children="Whittaker Wellness"
          value="Whittaker Wellness"
          {...getOverrideProps(overrides, "clinic_nameoption308")}
        ></option>
        <option
          children="Whittaker Wellness"
          value="Whittaker Wellness"
          {...getOverrideProps(overrides, "clinic_nameoption309")}
        ></option>
        <option
          children="WINS Family Resource Centre - Bridgeland"
          value="WINS Family Resource Centre - Bridgeland"
          {...getOverrideProps(overrides, "clinic_nameoption310")}
        ></option>
        <option
          children="Women in Need Society - Bridgeland"
          value="Women in Need Society - Bridgeland"
          {...getOverrideProps(overrides, "clinic_nameoption311")}
        ></option>
        <option
          children="Women in Need Society - Erinwoods"
          value="Women in Need Society - Erinwoods"
          {...getOverrideProps(overrides, "clinic_nameoption312")}
        ></option>
        <option
          children="Womens Health Clinic"
          value="Womens Health Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption313")}
        ></option>
        <option
          children="Women's Health Clinic - Port Plaza"
          value="Women's Health Clinic - Port Plaza"
          {...getOverrideProps(overrides, "clinic_nameoption314")}
        ></option>
        <option
          children="World Health Centre - Sunridge"
          value="World Health Centre - Sunridge"
          {...getOverrideProps(overrides, "clinic_nameoption315")}
        ></option>
        <option
          children="YHVH Medical Clinic"
          value="YHVH Medical Clinic"
          {...getOverrideProps(overrides, "clinic_nameoption316")}
        ></option>
        <option
          children="Yuva Aesthetics - Sunridge Professional Building"
          value="Yuva Aesthetics - Sunridge Professional Building"
          {...getOverrideProps(overrides, "clinic_nameoption317")}
        ></option>
        <option
          children="YWCA Sheriff King Home Emergency Shelter"
          value="YWCA Sheriff King Home Emergency Shelter"
          {...getOverrideProps(overrides, "clinic_nameoption318")}
        ></option>
        <option
          children="Zamin Medical Centre"
          value="Zamin Medical Centre"
          {...getOverrideProps(overrides, "clinic_nameoption319")}
        ></option>
      </SelectField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clinic_name,
              date: value,
              in_person,
              group,
              non_visit,
              org_time,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <RadioGroupField
        label="In-person"
        name="in_person"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              clinic_name,
              date,
              in_person: value,
              group,
              non_visit,
              org_time,
            };
            const result = onChange(modelFields);
            value = result?.in_person ?? value;
          }
          if (errors.in_person?.hasError) {
            runValidationTasks("in_person", value);
          }
          setIn_person(value);
        }}
        onBlur={() => runValidationTasks("in_person", in_person)}
        errorMessage={errors.in_person?.errorMessage}
        hasError={errors.in_person?.hasError}
        {...getOverrideProps(overrides, "in_person")}
      >
        <Radio
          children="In-person"
          value="true"
          {...getOverrideProps(overrides, "in_personRadio0")}
        ></Radio>
        <Radio
          children="Virtual"
          value="false"
          {...getOverrideProps(overrides, "in_personRadio1")}
        ></Radio>
      </RadioGroupField>
      <SwitchField
        label="Group"
        defaultChecked={false}
        isDisabled={false}
        isChecked={group}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              clinic_name,
              date,
              in_person,
              group: value,
              non_visit,
              org_time,
            };
            const result = onChange(modelFields);
            value = result?.group ?? value;
          }
          if (errors.group?.hasError) {
            runValidationTasks("group", value);
          }
          setGroup(value);
        }}
        onBlur={() => runValidationTasks("group", group)}
        errorMessage={errors.group?.errorMessage}
        hasError={errors.group?.hasError}
        {...getOverrideProps(overrides, "group")}
      ></SwitchField>
      <SwitchField
        label="Non visit"
        defaultChecked={false}
        isDisabled={false}
        isChecked={non_visit}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              clinic_name,
              date,
              in_person,
              group,
              non_visit: value,
              org_time,
            };
            const result = onChange(modelFields);
            value = result?.non_visit ?? value;
          }
          if (errors.non_visit?.hasError) {
            runValidationTasks("non_visit", value);
          }
          setNon_visit(value);
        }}
        onBlur={() => runValidationTasks("non_visit", non_visit)}
        errorMessage={errors.non_visit?.errorMessage}
        hasError={errors.non_visit?.hasError}
        {...getOverrideProps(overrides, "non_visit")}
      ></SwitchField>
      <TextField
        label="Org time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={org_time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clinic_name,
              date,
              in_person,
              group,
              non_visit,
              org_time: value,
            };
            const result = onChange(modelFields);
            value = result?.org_time ?? value;
          }
          if (errors.org_time?.hasError) {
            runValidationTasks("org_time", value);
          }
          setOrg_time(value);
        }}
        onBlur={() => runValidationTasks("org_time", org_time)}
        errorMessage={errors.org_time?.errorMessage}
        hasError={errors.org_time?.hasError}
        {...getOverrideProps(overrides, "org_time")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
