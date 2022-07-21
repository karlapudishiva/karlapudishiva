import MealsSummery from "./MealsSummery"
import MealsAvailable from "./MealsAvailable"
import { Fragment } from "react"

const Meals = () => {
    return(
        <Fragment>
            <MealsSummery/>
            <MealsAvailable/>
        </Fragment>
    )
}

export default Meals