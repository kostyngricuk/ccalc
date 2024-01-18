import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Main from '../components/Main/Main';
import Section from "../components/UI/Section/Section";

export default function ErrorScreen() {
    const error = useRouteError();

    return (
        <Main>
            <Section>
                {
                    isRouteErrorResponse(error) ?
                        <h1 className="h1">{error.status} {error.statusText}</h1>
                    :
                        <p>Something went wrong!</p>
                }
            </Section>
        </Main>
    )
}