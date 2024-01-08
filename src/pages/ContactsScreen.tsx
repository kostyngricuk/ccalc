import Screen from "../components/Screen/Screen";
import ScreenColumn from "../components/ScreenColumn/ScreenColumn";

import FormWrapper from "../components/UI/FormWrapper/FormWrapper";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

export default function ContactsScreen() {
    const handleSubmitForm = () => {
        console.log('Submited');
    }
    return (
        <Screen>
            <ScreenColumn>
                <h2 className="h2 is-spaced">What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </ScreenColumn>
            <ScreenColumn>
                <h2 className="h1 is-spaced">Contact me</h2>
                <FormWrapper>
                    <Input name="subject" label="Subject"/>
                    <Input name="name" label="Your name"/>
                    <Input name="email" label="Your email" type="email" required/>
                    <Button onClick={handleSubmitForm}>Send</Button>
                </FormWrapper>
            </ScreenColumn>
        </Screen>
    )
}