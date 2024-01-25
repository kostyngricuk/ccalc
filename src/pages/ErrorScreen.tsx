import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Main from '../components/Main/Main';
import Section from "../components/UI/Section/Section";
import { Title } from "../components/UI/Title/Title";

export default function ErrorScreen() {
    const error = useRouteError();

    return (
        <Main>
            <Section>
                {
                    isRouteErrorResponse(error) ?
                        <Title>{error.status} {error.statusText}</Title>
                    :
                        <p>Something went wrong!</p>
                }
            </Section>
        </Main>
    )
}