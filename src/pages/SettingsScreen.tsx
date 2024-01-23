import Section from "../components/UI/Section/Section";

import { useTranslation } from 'react-i18next';

export default function SettingsScreen() {
    const { t } = useTranslation();
    return (
        <Section>
            <h1 className="h1">{t('settings.title')}</h1>
        </Section>
    )
}