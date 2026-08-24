import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Confirm } from './appPages/confirm';
import { SkinScanner } from './appPages/skinScanner';
import { SkinScannerResults } from './appPages/skinScannerResults';
import { Information } from './appPages/information';
import { More } from './appPages/more';
import { Guide } from './appPages/guide';
import { ColourStyles } from './component/styles';

function ConfirmPage() { return ( < Confirm/> ); }
function SkinScannerPage() { return ( <SkinScanner/> ); }
function SkinScannerResultsPage() { return ( <SkinScannerResults/> ); }
function InformationPage() { return ( <Information/> ); }
function MorePage() { return ( <More/> ); }
function GuidePage() { return ( <Guide/> ); }


const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Scan Icon - https://icons.expo.fyi/Index/Ionicons/scan 
// Scan Outline Icon - https://icons.expo.fyi/Index/Ionicons/scan-outline 
// https://icons.expo.fyi/Index/Ionicons/information-sharp
// https://icons.expo.fyi/Index/Ionicons/information-outline
// https://icons.expo.fyi/Index/Ionicons/ellipsis-horizontal

// https://reactnavigation.org/docs/bottom-tab-navigator/

function MainAppPages() {
  return (
    <Tabs.Navigator screenOptions={{ tabBarActiveTintColor: ColourStyles.mainColour, tabBarLabelPosition: 'below-icon'}}>
      <Tabs.Screen name='skinScanner' component={SkinScannerPage} options={{headerShown: false, tabBarLabel: 'AI Scanner', tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'scan' : 'scan-outline'} color={color} size={30} /> ), }} />
      <Tabs.Screen name='information' component={InformationPage} options={{headerShown: false, tabBarLabel: 'Information', tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'information-sharp' : 'information-outline'} color={color} size={30} /> ), }} />
      <Tabs.Screen name='more' component={MorePage} options={{headerShown: false, tabBarLabel: 'More', tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal'} color={color} size={30} /> ), }} />
    </Tabs.Navigator>
  );
}

function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Confirm' component={ ConfirmPage } options={{ headerShown: false}} />
      <Stack.Screen name='Main' component={ MainAppPages } options={{ headerShown: false}} />
      <Stack.Screen name='ScannerResults' component={ SkinScannerResultsPage } options={{ headerShown: false}} />
      <Stack.Screen name='Guide' component={GuidePage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer> <Layout/> </NavigationContainer> 
  );
}