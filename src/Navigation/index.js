import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import InvoiceStack from './invoiceRoutes';
import CreditCardStack from './creditCardRoutes';

import TabButton from '../components/TabButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const titles = {
  Dashboard: 'Home',
  CreditCards: 'Cartões',
  Invoices: 'Faturas',
  Profile: 'Perfil'
}

export default ({ signed = false }) => {
  
  if(signed) {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <TabButton 
                focused={focused} 
                pageTitle={titles[route.name]} 
                onPress={() => navigation.navigate(route.name)} 
              />
            )
          },
          headerStyle: {
            backgroundColor: '#615E86'
          },
          headerTintColor: '#fff'
        })}

        tabBarOptions={{
          style: {
            backgroundColor: '#996AAF',
            height: 80,
          },
          showLabel: false,
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
        }}
      >
        <Tab.Screen options={{ title: 'Home' }} name="Dashboard" component={Dashboard} />
        <Tab.Screen options={{ title: 'Faturas' }} name="Invoices" component={InvoiceStack} />
        <Tab.Screen options={{ title: 'Cartões' }} name="CreditCards" component={CreditCardStack} />
        <Tab.Screen options={{ title: 'Perfil' }} name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#615E86',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      
      <Stack.Screen 
        name="Signup"
        options={{
          title: "Cadastro"
        }}
        component={Signup} 
      />
    </Stack.Navigator>
  )
}