import { useState } from "react";
import Section from "../components/UI/Section/Section";

import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { Button } from "../components/UI/Button/Button";
import { Form, FormResult, FormWrapper } from "../components/UI/Form/Form";
import { FormField } from "../components/UI/FormField/FormField";

export type TSettingsFormValues = {
    height: string,
    weight: string,
    weightGoal: string,
    email: string,
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string
}

export default function SettingsScreen() {
    const [data, setData] = useState<TSettingsFormValues>();
    const { t } = useTranslation();

    const {
        handleSubmit,
        control
    } = useForm<TSettingsFormValues>();

    const onSubmit = handleSubmit((data:TSettingsFormValues) => {
        setData(data);
    })

    return (
        <Section>
            <h1 className="h1">{t('settings.title')}</h1>
            <FormWrapper>
                <Form onSubmit={onSubmit}>
                    <FormField name="height" label={t('settings.form.field.height')} control={control} />
                    <FormField name="weight" label={t('settings.form.field.weight')} control={control} />
                    <FormField name="weightGoal" label={t('settings.form.field.weightGoal')} control={control} />
                    <FormField name="email" label={t('settings.form.field.email')} required={true} control={control}/>
                    <FormField type="password" name="oldPassword" label={t('settings.form.field.oldPassword')} control={control} />
                    <FormField type="password" name="newPassword" label={t('settings.form.field.newPassword')} control={control} />
                    <FormField type="password" name="confirmNewPassword" label={t('settings.form.field.confirmNewPassword')} control={control} />
                    <Button type="submit">{t('settings.form.btnSave')}</Button>
                </Form>
                <FormResult>
                    { JSON.stringify(data) }
                </FormResult>
            </FormWrapper>
        </Section>
    )
}