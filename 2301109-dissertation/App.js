/* References used in this .js file */
// Scan Icon Link: https://icons.expo.fyi/Index/Ionicons/scan [Accessed: 20.8.2026]
// Scan Outline Icon Link: https://icons.expo.fyi/Index/Ionicons/scan-outline [Accessed: 20.8.2026]
// Information Sharp Icon Link: https://icons.expo.fyi/Index/Ionicons/information-sharp [Accessed: 20.8.2026]
// Information Outline Icon Link: https://icons.expo.fyi/Index/Ionicons/information-outline [Accessed: 20.8.2026]
// Ellipsis Icon Link: https://icons.expo.fyi/Index/Ionicons/ellipsis-horizontal [Accessed: 20.8.2026]
// Bottom Tab Navigation Link: https://reactnavigation.org/docs/bottom-tab-navigator/ [Accessed: 20.8.2026]

/* Importing libraries, including navigation to set up navigation bar and structure and screens that make up the app */
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

/* Functions of pages to add to navigation structure & bar */
function ConfirmPage() { return ( < Confirm/> ); }
function SkinScannerPage() { return ( <SkinScanner/> ); }
function SkinScannerResultsPage() { return ( <SkinScannerResults/> ); }
function InformationPage() { return ( <Information/> ); }
function MorePage() { return ( <More/> ); }
function GuidePage() { return ( <Guide/> ); }

/* Crating the navigation (structure and navigation bar) */
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* Creating navigation bar, changing the icon and its colour if selected (through focused ? ) */
function MainAppPages() {
  return (
    <Tabs.Navigator screenOptions={{ tabBarActiveTintColor: ColourStyles.mainColour, tabBarLabelPosition: 'below-icon'}}>
      <Tabs.Screen name='skinScanner' component={SkinScannerPage} options={{headerShown: false, tabBarLabel: 'AI Scanner', tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'scan' : 'scan-outline'} color={color} size={30} /> ), }} />
      <Tabs.Screen name='information' component={InformationPage} options={{headerShown: false, tabBarLabel: 'Information', tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'information-sharp' : 'information-outline'} color={color} size={30} /> ), }} />
      <Tabs.Screen name='more' component={MorePage} options={{headerShown: false, tabBarLabel: 'More', tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal'} color={color} size={30} /> ), }} />
    </Tabs.Navigator>
  );
}

/* Creates layout, where main includes the three screens in MainAppPages function which have navigation bar */
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

/* Uses layout for app, App.js is the first file that is accessed when opening app */
export default function App() {
  return (
    <NavigationContainer> <Layout/> </NavigationContainer> 
  );
}