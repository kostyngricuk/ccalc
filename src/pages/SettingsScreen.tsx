import Section from "../components/UI/Section/Section";
import { Title } from "../components/UI/Title/Title";

import { useTranslation } from 'react-i18next';

export default function SettingsScreen() {
    const { t } = useTranslation();
    return (
        <Section>
            <Title>{t('settings.title')}</Title>
        </Section>
    )
}