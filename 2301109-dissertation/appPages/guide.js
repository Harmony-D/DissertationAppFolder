/* Importing necessary libraries */
// Importing required parts for components on screen
import { Text, ScrollView, TouchableOpacity } from 'react-native';
// Importing hyperlink
import { Link } from 'expo-router';
// Importing style components
import { Containers, MainStyles } from '../component/styles'
// Importing navigation, to leave this screen to go back to More screen
import { useNavigation } from '@react-navigation/native';
// Importing icon for button to go back
import Ionicons from '@expo/vector-icons/Ionicons'

/* Guide Screen */
export const Guide = () => {
  {/* Sets up navigation*/}
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Containers.MainContainer}> {/* Scrollview without showing the scroll on side */}
    <TouchableOpacity onPress={() => navigation.goBack()}> { /* Navigation to go back to previous screen (More Screen) */ }
      <Ionicons name="close-outline" size={40} color="black" /> { /* Icon being used, stating the name, size, and colour */ }
    </TouchableOpacity>
    <Text style={MainStyles.HeaderText}>App Guide</Text> { /* Header to show purpose of screen */ }
    { /* Main text, incorporating hyperlink */ }
    <Text style={MainStyles.ConfirmText}>Welcome to the Mobile Skin Support App!</Text>
    <Text style={MainStyles.ConfirmText}>Choose to take a photo or use an image in your photo gallery for the AI Skin Scanner!</Text>
    <Text style={MainStyles.ConfirmText}>Recieve potential skin condition matches, remember that our AI is not 100% accurate and should not replace advice from doctors and pharmacists!</Text>
    <Text style={MainStyles.ConfirmText}>Look at information on dermatology conditions that our AI looks for!</Text>
    <Text style={MainStyles.ConfirmText}>Look at our website for our <Link style={MainStyles.Hyperlink} href=''>FAQ (Frequently Asked Questions)</Link></Text>
    <Text style={MainStyles.ConfirmText}>Thank you for using Mobile Skin Support!</Text>
    </ScrollView>
  )
};