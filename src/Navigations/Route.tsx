/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';



const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {false ?  MainStack(Stack)
                : AuthStack(Stack)
            }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
