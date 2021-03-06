import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Login";
import Register from "../screens/Register";
import Forgot   from "../screens/Forgot";
import ForgotPassword from "../screens/ForgotPassword";
import PhoneValidation from "../screens/PhoneValidation"
import SelectList from "../screens/SelectList"
import EmailConfirmation from "../screens/EmailConfirmation";
import Meetings from "../screens/Meetings"
import Chat     from "../screens/Chat"
import Profile  from "../screens/Profile"

const Stack = createStackNavigator()
const LoginRouter = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registesr" component={Register} />
      <Stack.Screen name="Forgot"   component={Forgot} />
      <Stack.Screen name="ForgotPassword"   component={ForgotPassword} />
      <Stack.Screen name="PhoneValidation" component={PhoneValidation} />
      <Stack.Screen name="SelectList" component={SelectList} />
      <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} />
      <Stack.Screen name="Meetings" component={Meetings} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Register" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginRouter;
