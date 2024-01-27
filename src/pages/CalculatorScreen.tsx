import { useTranslation } from "react-i18next";
import Section from "../components/UI/Section/Section";
import { Title } from "../components/UI/Title/Title";

export default function CalculatorScreen() {
    const { t } = useTranslation();
    return (
        <Section>
            <Title>{t('calculator.title')}</Title>
        </Section>
    )
}