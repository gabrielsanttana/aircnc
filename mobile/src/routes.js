import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Booking from "./pages/Booking/Booking";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,  
        Booking
}));

export default Routes;