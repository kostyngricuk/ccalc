import { useContext, useEffect, useState } from "react";
import Section from "../components/UI/Section/Section";
import { Title } from "../components/UI/Title/Title";

import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { Button } from "../components/UI/Button/Button";
import { Form, FormResult, FormWrapper } from "../components/UI/Form/Form";
import { Input } from "../components/UI/Input/Input";
import { AuthContext } from "../services/contexts";
import { IAuthContext } from "../types/user";
import { calcDailyLimit } from "../services/utils/calculations";

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
    const [data, setData] = useState<TSettingsFormValues | null>(null);
    const { t } = useTranslation();
    const {
        currentUser,
        setCurrentUser
    } = useContext<IAuthContext>(AuthContext);

    const {
        handleSubmit,
        control
    } = useForm<TSettingsFormValues>();

    const onSubmit = handleSubmit((data:TSettingsFormValues) => {
        setData(data);
    })

    useEffect(() => {
        if (data !== null) {
            const {
                height,
                weight,
                weightGoal,
                email
            } = data;
            setCurrentUser({
                height,
                weight,
                weightGoal,
                email,
                calorieWidget: {
                    limit: calcDailyLimit(parseInt(height), parseInt(weight), parseInt(weightGoal)),
                    eaten: currentUser?.calorieWidget?.eaten,
                }
            });
        }
    }, [data, currentUser, setCurrentUser])

    return (
        <Section>
            <Title position="center">{t('settings.title')}</Title>
            <FormWrapper>
                <Form onSubmit={onSubmit}>
                    <Input value={currentUser?.height} name="height" label={t('settings.form.field.height')} control={control} />
                    <Input value={currentUser?.weight} name="weight" label={t('settings.form.field.weight')} control={control} />
                    <Input value={currentUser?.weightGoal} name="weightGoal" label={t('settings.form.field.weightGoal')} control={control} />
                    <Input value={currentUser?.email} name="email" label={t('settings.form.field.email')} required={true} control={control}/>
                    <Input type="password" name="oldPassword" label={t('settings.form.field.oldPassword')} control={control} />
                    <Input type="password" name="newPassword" label={t('settings.form.field.newPassword')} control={control} />
                    <Input type="password" name="confirmNewPassword" label={t('settings.form.field.confirmNewPassword')} control={control} />
                    <Button type="submit">{t('settings.form.btnSave')}</Button>
                </Form>
                <FormResult>
                    { data !== null && JSON.stringify(data) }
                </FormResult>
            </FormWrapper>
        </Section>
    )
}