/* References used in this .js file */
// Image Picker Docs Link: https://docs.expo.dev/versions/v54.0.0/sdk/imagepicker/ [Accessed: 14.05.2026]
// Camera Icon Link: https://icons.expo.fyi/Index/Ionicons/camera [Accessed: 18.8.2026]
// Image Icon Link: https://icons.expo.fyi/Index/Ionicons/image [Accessed: 18.8.2026]

/* Imported libraries */
import { useState } from 'react'; // Importing for storing image user takes / selects
import { Alert, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Allows use of all parts of Image Picker library
import Ionicons from '@expo/vector-icons/Ionicons'
import { MainStyles, Containers, ColourStyles } from '../component/styles'; 

/* AI Skin Scanner Screen */
export const SkinScanner = () => {
  const navigation = useNavigation();
  const [picture, setPicture] = useState(null); // Default value set to null, used for storing and showing image taken

  {/* Camera Feature */}
  const takePicture = async () => {
    const takePermissionResult = await ImagePicker.requestCameraPermissionsAsync(); {/* Gets permission */}

    if (!takePermissionResult.granted) { {/* If permission not granted, user has to allow permission to use camera */}
      Alert.alert("Permission required", "Permission to access the camera is required");
      return;
    }
    
    {/* If permission granted, uses camera, only allowed to provide image, not video */}
    let result = await ImagePicker.launchCameraAsync({ 
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1
    });

    console.log(result); // Logging picture

    if (!result.canceled) { // Removes image taken if cancelled
      setPicture(result.assets[0].uri); 
    }
  };

  {/* Photo library feature */}
  const pickPicture = async () => {
    const pickPermissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); {/* Gets permission */}

    if (!pickPermissionResult.granted) { {/* If permission not granted, user has to allow permission to choose image */}
      Alert.alert("Permission required", "Permission to access the media library is required");
      return;
    }

    {/* If permission granted, can select an image */}
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1
    });

    // Logging picture
    console.log(result);

    if (!result.canceled) { // Removes image chosen if cancelled
      setPicture(result.assets[0].uri);
    }
  };

  {/* Main screen, shows information, has camera and library features by using functions created above */}
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Containers.MainContainer}>
    <Text style={MainStyles.ConfirmText}>How to use AI scanner</Text>
    <Text style={MainStyles.ConfirmText}>Take a photo using your phone camera</Text>
    <Text style={MainStyles.ConfirmText}>Alternatively choose an image in your photo gallery</Text>
    <Text style={MainStyles.ConfirmText}>Our AI scanner will then analyse the photo you provided us</Text>
    <Text style={MainStyles.ConfirmText}>Our AI currently has % accuracy</Text>
    <Text style={MainStyles.ConfirmText}>View your results</Text>
    <Text style={MainStyles.ConfirmText}>Want to view your results later? Make sure to share them to yourself or save</Text>
    <Text style={MainStyles.ConfirmText}>Begin your AI analysis by pressing one of the buttons below</Text>

     <TouchableOpacity style={MainStyles.Button} onPress={takePicture}> <View style={Containers.IconButton}> <Ionicons name="camera" size={MainStyles.buttonIcon} color={ColourStyles.backgroundColour} /> <Text> Take Photo </Text> </View>
     </TouchableOpacity>
     
      <TouchableOpacity style={MainStyles.Button} onPress={pickPicture}> <View style={Containers.IconButton}>
        <Ionicons name="image" size={MainStyles.buttonIcon} color={ColourStyles.backgroundColour} /> 
        <Text> Choose Image </Text> </View>
      </TouchableOpacity>

      { picture && <Image source={{uri: picture}} style={MainStyles.informationImages} /> } {/* Shows image if one selected */}

      <TouchableOpacity style={MainStyles.Button} onPress={() => navigation.navigate("ScannerResults")}> {/* Will be used in future to submit image to get AI analysis on */}
      <Text>Submit Image</Text>
      </TouchableOpacity>
    </ScrollView> )
}