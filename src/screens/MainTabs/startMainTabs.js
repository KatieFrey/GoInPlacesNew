import { Navigation } from "react-native-navigation";

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "aesome-places.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place"
      },
      {
        screen: "aesome-places.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place"
      }
    ]
  });
};

export default startTabs;
