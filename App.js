import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

//Register Screens

Navigation.registerComponent("goinplacesnew.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "goinplacesnew.SharePlaceScreen",
  () => SharePlaceScreen
);
Navigation.registerComponent(
  "goinplacesnew.FindPlaceScreen",
  () => FindPlaceScreen
);

//Start a App

Navigation.startSingleScreenApp({
  screen: {
    screen: "goinplacesnew.AuthScreen",
    title: "Login"
  }
});
