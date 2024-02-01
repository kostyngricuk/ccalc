import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Main from '../components/Main/Main';
import Section from "../components/UI/Section/Section";
import { Title } from "../components/UI/Title/Title";
import { useTranslation } from "react-i18next";

export default function ErrorScreen() {
    const error = useRouteError();

    const { t } = useTranslation();

    return (
        <Main>
            <Section>
                {
                    isRouteErrorResponse(error) ?
                        <Title>{error.status} {t(`errors.${error.status}`)}</Title>
                    :
                        <p>{t(`errors.unknown`)}</p>
                }
            </Section>
        </Main>
    )
}