import { Text, View } from "react-native";
import React from 'react';
import NavigationStack from "./src/navigation";
import AuthStack from "./src/navigation/AuthStack";
import {store} from "./src/redux/store";
import { Provider } from "react-redux";

export default function App () {
    return (
      <Provider store = {store}>
        <NavigationStack/>
      </Provider>
    )
}
