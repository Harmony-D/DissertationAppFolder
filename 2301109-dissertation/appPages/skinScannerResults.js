/* Importing Libraries including style components, navigation, icon and features on this screen */
import { Image, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { MainStyles, Containers, ColourStyles } from '../component/styles'; 

/* Set up for future AI integration includes way to navigate back */
export const SkinScannerResults = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Containers.MainContainer}> 
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="close-outline" size={24} color="black" />
    </TouchableOpacity>
    <Text style={MainStyles.HeaderText}>AI Scanner Results</Text>
    </ScrollView>
  )
}