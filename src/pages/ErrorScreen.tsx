import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import PageLayout from '../components/PageLayout/PageLayout';
import Screen from "../components/Screen/Screen";
import ScreenColumn from "../components/ScreenColumn/ScreenColumn";

export default function ErrorScreen() {
    const error = useRouteError();

    return (
        <PageLayout>
            <Screen>
                <ScreenColumn>
                    {
                        isRouteErrorResponse(error) ?
                            <h1 className="h1">{error.status} {error.statusText}</h1>
                        :
                            <p>Something went wrong!</p>
                    }
                </ScreenColumn>
            </Screen>
        </PageLayout>
    )
}