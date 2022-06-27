/* eslint-disable prettier/prettier */
import React from 'react';

import TabRoutes from './TabRoutes';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen name="Todo List" component={TabRoutes} />
    </>
  );
}
