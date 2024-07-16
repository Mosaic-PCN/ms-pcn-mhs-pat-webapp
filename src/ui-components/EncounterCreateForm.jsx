/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createEncounter } from "../graphql/mutations";
const client = generateClient();
export default function EncounterCreateForm(props) {
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
  const initialValues = {
    workDate: "",
    clinicName: "",
    role: "",
    sessionType: "",
    meetingType: "",
    orgTime: "",
    gamePlanTime: "",
    notes: "",
  };
  const [workDate, setWorkDate] = React.useState(initialValues.workDate);
  const [clinicName, setClinicName] = React.useState(initialValues.clinicName);
  const [role, setRole] = React.useState(initialValues.role);
  const [sessionType, setSessionType] = React.useState(
    initialValues.sessionType
  );
  const [meetingType, setMeetingType] = React.useState(
    initialValues.meetingType
  );
  const [orgTime, setOrgTime] = React.useState(initialValues.orgTime);
  const [gamePlanTime, setGamePlanTime] = React.useState(
    initialValues.gamePlanTime
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWorkDate(initialValues.workDate);
    setClinicName(initialValues.clinicName);
    setRole(initialValues.role);
    setSessionType(initialValues.sessionType);
    setMeetingType(initialValues.meetingType);
    setOrgTime(initialValues.orgTime);
    setGamePlanTime(initialValues.gamePlanTime);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    workDate: [],
    clinicName: [],
    role: [],
    sessionType: [],
    meetingType: [],
    orgTime: [],
    gamePlanTime: [],
    notes: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          workDate,
          clinicName,
          role,
          sessionType,
          meetingType,
          orgTime,
          gamePlanTime,
          notes,
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
          await client.graphql({
            query: createEncounter.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EncounterCreateForm")}
      {...rest}
    >
      <TextField
        label="Work date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={workDate && convertToLocal(new Date(workDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              workDate: value,
              clinicName,
              role,
              sessionType,
              meetingType,
              orgTime,
              gamePlanTime,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.workDate ?? value;
          }
          if (errors.workDate?.hasError) {
            runValidationTasks("workDate", value);
          }
          setWorkDate(value);
        }}
        onBlur={() => runValidationTasks("workDate", workDate)}
        errorMessage={errors.workDate?.errorMessage}
        hasError={errors.workDate?.hasError}
        {...getOverrideProps(overrides, "workDate")}
      ></TextField>
      <TextField
        label="Clinic name"
        isRequired={false}
        isReadOnly={false}
        value={clinicName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName: value,
              role,
              sessionType,
              meetingType,
              orgTime,
              gamePlanTime,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.clinicName ?? value;
          }
          if (errors.clinicName?.hasError) {
            runValidationTasks("clinicName", value);
          }
          setClinicName(value);
        }}
        onBlur={() => runValidationTasks("clinicName", clinicName)}
        errorMessage={errors.clinicName?.errorMessage}
        hasError={errors.clinicName?.hasError}
        {...getOverrideProps(overrides, "clinicName")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={false}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName,
              role: value,
              sessionType,
              meetingType,
              orgTime,
              gamePlanTime,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <TextField
        label="Session type"
        isRequired={false}
        isReadOnly={false}
        value={sessionType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName,
              role,
              sessionType: value,
              meetingType,
              orgTime,
              gamePlanTime,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.sessionType ?? value;
          }
          if (errors.sessionType?.hasError) {
            runValidationTasks("sessionType", value);
          }
          setSessionType(value);
        }}
        onBlur={() => runValidationTasks("sessionType", sessionType)}
        errorMessage={errors.sessionType?.errorMessage}
        hasError={errors.sessionType?.hasError}
        {...getOverrideProps(overrides, "sessionType")}
      ></TextField>
      <TextField
        label="Meeting type"
        isRequired={false}
        isReadOnly={false}
        value={meetingType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName,
              role,
              sessionType,
              meetingType: value,
              orgTime,
              gamePlanTime,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.meetingType ?? value;
          }
          if (errors.meetingType?.hasError) {
            runValidationTasks("meetingType", value);
          }
          setMeetingType(value);
        }}
        onBlur={() => runValidationTasks("meetingType", meetingType)}
        errorMessage={errors.meetingType?.errorMessage}
        hasError={errors.meetingType?.hasError}
        {...getOverrideProps(overrides, "meetingType")}
      ></TextField>
      <TextField
        label="Org time"
        isRequired={false}
        isReadOnly={false}
        value={orgTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName,
              role,
              sessionType,
              meetingType,
              orgTime: value,
              gamePlanTime,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.orgTime ?? value;
          }
          if (errors.orgTime?.hasError) {
            runValidationTasks("orgTime", value);
          }
          setOrgTime(value);
        }}
        onBlur={() => runValidationTasks("orgTime", orgTime)}
        errorMessage={errors.orgTime?.errorMessage}
        hasError={errors.orgTime?.hasError}
        {...getOverrideProps(overrides, "orgTime")}
      ></TextField>
      <TextField
        label="Game plan time"
        isRequired={false}
        isReadOnly={false}
        value={gamePlanTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName,
              role,
              sessionType,
              meetingType,
              orgTime,
              gamePlanTime: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.gamePlanTime ?? value;
          }
          if (errors.gamePlanTime?.hasError) {
            runValidationTasks("gamePlanTime", value);
          }
          setGamePlanTime(value);
        }}
        onBlur={() => runValidationTasks("gamePlanTime", gamePlanTime)}
        errorMessage={errors.gamePlanTime?.errorMessage}
        hasError={errors.gamePlanTime?.hasError}
        {...getOverrideProps(overrides, "gamePlanTime")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workDate,
              clinicName,
              role,
              sessionType,
              meetingType,
              orgTime,
              gamePlanTime,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
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
