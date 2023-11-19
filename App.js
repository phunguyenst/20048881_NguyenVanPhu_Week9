import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screen1 from "./screens/Screen1";
import screen2 from "./screens/Screen2";
import screen3 from "./screens/Screen3";
import { Provider } from "react-redux";
import store from "./store";
const Stack = createStackNavigator();
export default function App() {
  return (
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="screen1" component={screen1} options={{headerShown:"false"}} />
    //     <Stack.Screen name="screen2" component={screen2} options={{headerShown:"false"}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen
          name="screen1"
          component={screen1}
          options={{ headerShown: "false" }}
        />
        <Stack.Screen
          name="screen2"
          component={screen2}
          options={{ headerShown: "false" }}
        />
         <Stack.Screen
          name="screen3"
          component={screen3}
          options={{ headerShown: "false" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
     
    </Provider>
  );
}
