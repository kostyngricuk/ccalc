import { FormEventHandler, ReactNode } from "react";

import "./FormWrapper.scss";

type FormWrapperProps = Omit<JSX.IntrinsicElements['form'], 'onSubmit'> & {
    onSubmit: FormEventHandler<HTMLFormElement>,
    children: ReactNode
}

const FormWrapper = ({
    onSubmit,
    children
}: FormWrapperProps) => {
    return (
        <form className="FormWrapper" onSubmit={onSubmit}>
            {children}
        </form>
    )
};

export default FormWrapper;