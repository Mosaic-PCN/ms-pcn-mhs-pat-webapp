/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EncounterUpdateFormInputValues = {
    workDate?: string;
    clinicName?: string;
    role?: string;
    sessionType?: string;
    meetingType?: string;
    orgTime?: string;
    gamePlanTime?: string;
    notes?: string;
};
export declare type EncounterUpdateFormValidationValues = {
    workDate?: ValidationFunction<string>;
    clinicName?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    sessionType?: ValidationFunction<string>;
    meetingType?: ValidationFunction<string>;
    orgTime?: ValidationFunction<string>;
    gamePlanTime?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EncounterUpdateFormOverridesProps = {
    EncounterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    workDate?: PrimitiveOverrideProps<TextFieldProps>;
    clinicName?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    sessionType?: PrimitiveOverrideProps<TextFieldProps>;
    meetingType?: PrimitiveOverrideProps<TextFieldProps>;
    orgTime?: PrimitiveOverrideProps<TextFieldProps>;
    gamePlanTime?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EncounterUpdateFormProps = React.PropsWithChildren<{
    overrides?: EncounterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    encounter?: any;
    onSubmit?: (fields: EncounterUpdateFormInputValues) => EncounterUpdateFormInputValues;
    onSuccess?: (fields: EncounterUpdateFormInputValues) => void;
    onError?: (fields: EncounterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EncounterUpdateFormInputValues) => EncounterUpdateFormInputValues;
    onValidate?: EncounterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EncounterUpdateForm(props: EncounterUpdateFormProps): React.ReactElement;
