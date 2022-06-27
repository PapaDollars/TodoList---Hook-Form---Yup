/* eslint-disable prettier/prettier */
import React from 'react';
import { Home, Login, Signup } from '..';
import Graphic from '../Screens/Graph/Graphic';
import Picture from '../Screens/Setting/Picture';
import Setting from '../Screens/Setting/Setting';


export default function (Stack: any) {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name="Signup"
                component={Signup}
            />

            <Stack.Screen
                name="Setting"
                component={Setting}
            />
            <Stack.Screen
                name="Picture"
                component={Picture}
            />

            <Stack.Screen
                name="Graphic"
                component={Graphic}
            />

        </>
    );
}
