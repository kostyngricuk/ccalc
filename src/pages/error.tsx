import { NavLink, isRouteErrorResponse, useRouteError } from "react-router-dom";

import Main from '../components/Main/Main';

export default function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Main>
                <h1>{error.status} {error.statusText}</h1>
                <p><NavLink to={`/`}>Go home</NavLink></p>
            </Main>
        )
    }
    return (
        <Main>
            Something went wrong!
        </Main>
    );
}