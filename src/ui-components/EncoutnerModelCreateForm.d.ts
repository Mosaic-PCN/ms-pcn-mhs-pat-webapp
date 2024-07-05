/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EncoutnerModelCreateFormInputValues = {
    clinic_name?: string;
    date?: string;
    in_person?: boolean;
    group?: boolean;
    non_visit?: boolean;
    org_time?: string;
};
export declare type EncoutnerModelCreateFormValidationValues = {
    clinic_name?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    in_person?: ValidationFunction<boolean>;
    group?: ValidationFunction<boolean>;
    non_visit?: ValidationFunction<boolean>;
    org_time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EncoutnerModelCreateFormOverridesProps = {
    EncoutnerModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clinic_name?: PrimitiveOverrideProps<SelectFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    in_person?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    group?: PrimitiveOverrideProps<SwitchFieldProps>;
    non_visit?: PrimitiveOverrideProps<SwitchFieldProps>;
    org_time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EncoutnerModelCreateFormProps = React.PropsWithChildren<{
    overrides?: EncoutnerModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EncoutnerModelCreateFormInputValues) => EncoutnerModelCreateFormInputValues;
    onSuccess?: (fields: EncoutnerModelCreateFormInputValues) => void;
    onError?: (fields: EncoutnerModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EncoutnerModelCreateFormInputValues) => EncoutnerModelCreateFormInputValues;
    onValidate?: EncoutnerModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function EncoutnerModelCreateForm(props: EncoutnerModelCreateFormProps): React.ReactElement;
