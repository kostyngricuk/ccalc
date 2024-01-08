import { ReactNode } from "react";

import "./FormWrapper.scss";

type FormWrapperProps = {
    children: ReactNode
}

const FormWrapper = ({
    children
}: FormWrapperProps) => {
    return (
        <form className="FormWrapper">
            {children}
        </form>
    )
};

export default FormWrapper;