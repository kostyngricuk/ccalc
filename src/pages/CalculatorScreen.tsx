import Screen from "../components/Screen/Screen"
import ScreenColumn from "../components/ScreenColumn/ScreenColumn"

import FoodCalculator from "../components/FoodCalculator/FoodCalculator";

export default function CalculatorScreen() {
    return (
        <Screen>
            <ScreenColumn>
                <h1 className="h1 is-text-align_center">Food Calculator</h1>
                <FoodCalculator />
            </ScreenColumn>
            <ScreenColumn hasBackground={true}>
                <h2 className="h1 is-text-align_center">Results</h2>
            </ScreenColumn>
        </Screen>
    )
}