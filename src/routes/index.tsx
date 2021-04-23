import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import SignIn from '../pages/SignIn';

const Routes = () => {
  return (
    <AuthStack.Navigator
      // headerMode
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#A259FF',
        },
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default Routes;
