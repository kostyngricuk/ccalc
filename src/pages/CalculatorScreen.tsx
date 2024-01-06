import Screen from "../components/Screen/Screen"
import ScreenColumn from "../components/ScreenColumn/ScreenColumn"

export default function CalculatorScreen() {
    return (
        <Screen>
            <ScreenColumn>
                <h1 className="h1 is-text-align_center">Food Calculator</h1>
            </ScreenColumn>
            <ScreenColumn hasBackground={true}>
                <h2 className="h1 is-text-align_center">Results</h2>
            </ScreenColumn>
        </Screen>
    )
}