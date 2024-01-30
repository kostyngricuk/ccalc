import { useContext, useEffect, useState } from "react";
import Section from "../components/UI/Section/Section";
import { Title } from "../components/UI/Title/Title";

import { useTranslation } from "react-i18next";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../components/UI/Button/Button";
import {
  Form,
  FormField,
  FormActions,
  FormResult,
  FormWrapper,
} from "../components/UI/Form/Form";
import { Input } from "../components/UI/Input/Input";
import { AuthContext } from "../services/contexts";
import { IAuthContext } from "../types/user";
import { calcDailyLimit } from "../services/utils/calculations";

export default function SettingsScreen() {
  const [data, setData] = useState<FieldValues | null>(null);
  const [resMessage, setResMessage] = useState<string>("");
  const { t } = useTranslation();
  const { currentUser, setCurrentUser } = useContext<IAuthContext>(AuthContext);

  const { handleSubmit, control } = useForm<FieldValues>();

  const onSubmit = handleSubmit((data: FieldValues) => {
    if (!data) {
      return;
    }

    setData(data);
    setResMessage(t('settings.form.res.success'));
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const { height, weight, weightGoal, age, gender, email } = data;
    setCurrentUser({
      height,
      weight,
      weightGoal,
      email,
      calorieWidget: {
        limit: calcDailyLimit({
          height: parseInt(height),
          weightGoal: parseInt(weightGoal),
          age: parseInt(age),
          gender,
        }),
        eaten: currentUser?.calorieWidget?.eaten,
      },
    });
  }, [data, setCurrentUser, currentUser?.calorieWidget?.eaten]);

  useEffect(() => {
    if (resMessage.length) {
      const timeout = setTimeout(() => {
        setResMessage('');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [resMessage])

  const resetLimit = () => {
    setCurrentUser({
      ...currentUser,
      calorieWidget: {
        ...currentUser?.calorieWidget,
        eaten: 0
      }
    });
    setResMessage(t('settings.form.res.successReset'));
  }

  return (
    <Section>
      <Title position="center">{t("settings.title")}</Title>
      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <FormField>
            <Input
              type="radio"
              checked={currentUser?.gender === "man"}
              value="man"
              name="gender"
              label={t("form.field.gender.man")}
              control={control}
            />
            <Input
              type="radio"
              checked={currentUser?.gender === "man"}
              value="woman"
              name="gender"
              label={t("form.field.gender.woman")}
              control={control}
            />
            <Input
              type="number"
              value={currentUser?.age}
              name="age"
              label={t("settings.form.field.age")}
              control={control}
            />
          </FormField>
          <FormField>
            <Input
              value={currentUser?.height}
              name="height"
              label={t("settings.form.field.height")}
              control={control}
            />
            <Input
              value={currentUser?.weight}
              name="weight"
              label={t("settings.form.field.weight")}
              control={control}
            />
            <Input
              value={currentUser?.weightGoal}
              name="weightGoal"
              label={t("settings.form.field.weightGoal")}
              control={control}
            />
          </FormField>
          <Input
            value={currentUser?.email}
            name="email"
            label={t("settings.form.field.email")}
            required={true}
            control={control}
          />
          <Input
            type="password"
            name="oldPassword"
            label={t("settings.form.field.oldPassword")}
            control={control}
          />
          <Input
            type="password"
            name="newPassword"
            label={t("settings.form.field.newPassword")}
            control={control}
          />
          <Input
            type="password"
            name="confirmNewPassword"
            label={t("settings.form.field.confirmNewPassword")}
            control={control}
          />
          <FormActions>
            <Button type="submit">{t("settings.form.btnSave")}</Button>
            <Button type="button" onClick={resetLimit} color="red" $isOutline={true}>{t("settings.form.btnResetWidget")}</Button>
          </FormActions>
        </Form>
        <FormResult>{ resMessage }</FormResult>
      </FormWrapper>
    </Section>
  );
}
