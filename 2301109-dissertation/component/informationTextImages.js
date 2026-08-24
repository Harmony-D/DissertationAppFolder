/* Importing libraries, include style component to structure information */
import { Text, View, Image, StyleSheet } from 'react-native';
import { Containers, MainStyles } from './styles';

/* Each of these parts includes information with their reference and images taken from the same NHS page referenced, this information is used for the accordions on the information screen */
export const AD = () => {
  return(
    <View>
    <Text style={{padding:5}}>
    "Atopic dermatitis (atopic eczema) is a common skin condition that causes itchy skin. It affects people of all ages but is most common in young children. It cannot be cured, but treatment can help manage the symptoms. </Text>
    <Text style={{padding:5}}> 
    Atopic dermatitis can make your skin itchy, dry, cracked, crusty, scaly or thickened, red, white, purple or grey, or lighter or darker than the skin around it (depending on your skin tone), blister or bleed."(https://www.nhs.uk/conditions/atopic-eczema/ - 21.8)
    </Text>
    <Image 
      source={require('../assets/SkinConditionImages/AD/AD1.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    <Image 
      source={require('../assets/SkinConditionImages/AD/AD2.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    </View>
  )
};

export const CD = () => {
  return (
    <View> 
    <Text style={{padding:5}}>"Contact dermatitis is a type of eczema triggered by contact with a particular substance.Contact dermatitis usually improves or clears up completely if the substance causing the problem is identified and avoided. Treatments are also available to help ease the symptoms.</Text>
    <Text style={{padding:5}}>Contact dermatitis causes the skin to become itchy, blistered, dry and cracked. Lighter skin can become red, and darker skin can become dark brown, purple or grey. This reaction usually occurs within a few hours or days of exposure to an irritant or allergen. Symptoms can affect any part of the body but most commonly the hands and face."(https://www.nhs.uk/conditions/contact-dermatitis/ - 21.8)</Text>
    <Image 
      source={require('../assets/SkinConditionImages/CD/CD1.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    </View>
  )
};

export const EC = () => {
  return (
    <View>
    <Text style={{padding:5}}>"Eczema is the name for a group of inflammatory skin conditions that cause dry skin, itchiness, rashes, scaly patches, blisters and skin infections. There are seven types of eczema that affect the skin. There is no cure for eczema but there are many treatments available to help you manage it.
    </Text>
    <Text style={{padding:5}}>Eczema can vary in appearance depending on your skin tone. For light to medium skin tones, it may appear as pink or red rashes with bumps and crust. For medium to dark skin tones, it may look dark brown, gray or purple with dry, small bumps. Eczema can also change in appearance depending on how long you’ve had symptoms." (https://nationaleczema.org/eczema/ - 21.8)
    </Text>
    </View>
  )
};

export const SC = () => {
  return (
    <View>
    <Text style={{padding:5}}>"Scabies is an itchy rash caused by mites. It's spread through close skin contact, and anyone can get it. It should be treated quickly to stop it spreading.</Text>
    <Text style={{padding:5}}>The symptoms of scabies are intense itching, especially at night and a raised rash or spots. The spots may look red. They are more difficult to see on brown or black skin, but you should be able to feel them." (https://www.nhs.uk/conditions/scabies/ - 21.8)
    </Text>
    <Image 
      source={require('../assets/SkinConditionImages/SC/SC1.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    <Image 
      source={require('../assets/SkinConditionImages/SC/SC2.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    </View>
  )
};

export const SD = () => {
  return (
    <View>
    <Text style={{padding:5}}>"‘Dermatitis’ means an inflammation of the skin; ‘seborrhoeic’ simply means that the rash commonly comes up in areas rich in sebaceous (grease) glands such as the face, scalp and centre of the chest.
Seborrhoeic dermatitis is very common, affecting between 3 and 5% of the global population. It is more common in young adults than during old age and can occur in infants, but then it usually clears up over a few months.
    </Text>
    <Text style={{padding:5}}>Seborrhoeic dermatitis of the scalp can be itchy, sore and the skin can flake off as dandruff. The redness, soreness, itching and scaling can be particularly embarrassing when it occurs on the face." (https://sussexcds.co.uk/patient-information/seborrhoeic-dermatitis/ - 21.8)
    </Text>
    <Image 
      source={require('../assets/SkinConditionImages/SD/SD1.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    </View>
  )
};

export const TC = () => {
  return (
    <View>
    <Text style={{padding:5}}>"Tinea corporis, more commonly known as ringworm, is a superficial dermatophyte skin infection caused by fungi." (https://www.ncbi.nlm.nih.gov/books/NBK544360/ - 21.8)
    </Text> 
    <Text> 
    "The main symptom of ringworm is a rash. It may look red or darker than the surrounding skin, depending on your skin tone. The rash may be scaly, dry, swollen or itchy. Ringworm can appear anywhere on the body, including the scalp (tinea capitis) and groin (jock itch)."(https://www.nhs.uk/conditions/ringworm/ - 21.8)
    </Text>
    <Image 
      source={require('../assets/SkinConditionImages/TC/TC1.jpg')}
      style={MainStyles.informationImages}
      resizeMode='contain'
    />
    </View>
  )
};