import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import BlogDetailScreen from '../Screens/BlogDetailScreen';
import TabNavigation from './TabNavigation';


const Stack = createStackNavigator();
export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={TabNavigation} />
            <Stack.Screen name='blog-detail' component={BlogDetailScreen} />
        </Stack.Navigator>
    )
}