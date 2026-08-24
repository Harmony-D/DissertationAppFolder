/* Importing Necessary Libraries */

// Importing necessary components from react native, including scroll view, text and button (touchable opacity)
import { Image, Text, ScrollView, TouchableOpacity } from 'react-native'; 
// Importing link for hyperlinks
import { Link } from 'expo-router';
// Importing navigation, to go to main part of app through button
import { useNavigation } from '@react-navigation/native';
// Importing parts of style component
import { MainStyles, Containers } from '../component/styles';

/* Confirm Screen */
export const Confirm = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={Containers.MainContainer} showsVerticalScrollIndicator={false}> { /* Hides the scroller while letting users scroll down if zoomed into screen or going from portrait to landscape */}
    <Image 
    source={require('../assets/Mobile_App_Logo.png')}
    style={{width: 200, height: 200, alignSelf:'center', marginTop: 25, marginBottom: 10}}
    resizeMode="contain" 
    /> { /* Logo */ }
    { /* Main text and prior information including hyperlinks to Terms & Conditions and Privacy Policy */ }
    <Text style={MainStyles.ConfirmText}> Welcome to Mobile Skin Support. We hope this app can provide you with information or potential matches of skin conditions with images you supply.</Text> 
    <Text style={MainStyles.ConfirmText}>This tool has not been made for diagnosis of any medical conditions. Any concerns or changes to unknown patches of skin should be discussed with a doctor or pharmacist.</Text> 
    <Text style={MainStyles.ConfirmText}>By clicking continue you are agreeing to our <Link style={MainStyles.Hyperlink} href=''>Terms & Conditions</Link> and <Link style={MainStyles.Hyperlink} href=''>Privacy Policy</Link>.</Text>
    <Text style={MainStyles.ConfirmText}>Warning! Information will show images of skin conditions which includes blood.</Text>
    <TouchableOpacity style={MainStyles.Button} onPress={() => navigation.navigate('Main')}> { /* Navigate to main screens */ }
    <Text> Continue </Text>
    </TouchableOpacity> </ScrollView> 
  );
}