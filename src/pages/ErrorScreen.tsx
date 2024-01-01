import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

import PageLayout from '../components/PageLayout/PageLayout';

export default function ErrorScreen() {
    const error = useRouteError();

    return (
        <PageLayout>
            {
                isRouteErrorResponse(error) ?
                    <>
                        <h1>{error.status} {error.statusText}</h1>
                        <p><Link to={`/`}>Go home</Link></p>
                    </>
                :
                    <p>Something went wrong!</p>
            }
        </PageLayout>
    )
}