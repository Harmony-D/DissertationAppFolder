/* References within this .js file */
// Star Icon Link: https://icons.expo.fyi/Index/Ionicons/star [Accessed: 24.8.2026]
// Help Circle Icon Link: https://icons.expo.fyi/Index/Ionicons/help-circle [Accessed: 24.8.2026]
// Document Icon Link: https://icons.expo.fyi/Index/Ionicons/document-text [Accessed: 24.8.2026]

/* Importing necessary libraries including navigation, styles, hyperlinks, icons and features */
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { MainStyles, Containers, ColourStyles } from '../component/styles'; 

/* More screen */
export const More = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Containers.MainContainer}>
      <View style={MainStyles.MoreTitle, {paddingTop: 30}}> {/* Keeps both icon and text on same line */}
      <Link href=''> {/* Hyperlink */}
      <Ionicons name="star" size={24} color={ColourStyles.mainColour} /> {/* Icon */}
      <Text style={MainStyles.MoreTitleText}>Rate App</Text> 
      </Link>
      </View>
      <View style={MainStyles.Line} /> {/* Line to seperate section */}
      <View style={MainStyles.MoreTitle}>
      <Ionicons name="help-circle" size={24} color={ColourStyles.mainColour} />
      <Text style={MainStyles.MoreTitleText}>Support</Text>
      </View>
      <Text style={MainStyles.MoreText}>Email: mobileskinsupport@gmail.com</Text>
      <Text style={MainStyles.MoreText}>Telephone: +44 1234 56789</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Guide")}>
      <Text style={MainStyles.MoreHyperlink}>App Guide</Text>
      </TouchableOpacity>
      <View style={MainStyles.Line} /> {/* Line to seperate section */}
      <View style={MainStyles.MoreTitle}>
      <Ionicons name="document-text" size={24} color={ColourStyles.mainColour} />
      <Text style={MainStyles.MoreTitleText}>Legal Documentation</Text> {/* Legal documentation with hyperlinks */}
      </View>
      <Link style={MainStyles.MoreHyperlink} href=''>Terms & Conditions</Link>
      <Link style={MainStyles.MoreHyperlink} href=''>Privacy Policy</Link>
      <Link style={MainStyles.MoreHyperlink} href=''>Cookie Policy</Link>
      <Link style={MainStyles.MoreHyperlink} href=''>End-User License Agreement</Link>
    </ScrollView>
  )
};