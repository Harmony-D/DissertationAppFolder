/* References used throughout this .js file */
// Accordion Component Link: https://reactnativereusables.com/docs/components/accordion [Accessed: 13.05.2026]
// Accordion Link: https://rnprimitives.com/accordion/ [Accessed: 13.05.2026]
// Scrollview Link: https://reactnative.dev/docs/next/scrollview [Accessed: 13.05.2026]
// Text Input Link: https://reactnative.dev/docs/textinput [Accessed: 25.06.2026]
// Search Links: https://www.geeksforgeeks.org/react-native/how-to-add-searchbar-in-react-native/, https://www.geeksforgeeks.org/react-native/create-an-expandable-listview-in-react-native/ [Accessed: 25.06.2026] 

/* Importing necessary libraries for this screen */
// Importing accordion to let users hide and view specific skin conditions of interest
import * as AccordionPrimitive from '@rn-primitives/accordion';
// Importing react native libraries for features
import { ScrollView, Text, TextInput } from 'react-native';
// Use state for future search bar implementation
import { useState } from 'react';
// Importing content for the accordions, making this .js file more structured
import { AD, CD, EC, SC, SD, TC } from '../component/informationTextImages';
// Importing styles for features
import { Containers, MainStyles } from '../component/styles';

/* Information screen */
export const Information = () => {
  const [search, changeSearch] = useState(''); {/* Set up for search bar using use state from react */}
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Containers.MainContainer}> {/* Scrollview for accessibility and for when more dermatology conditions are added in the future */}
    <Text style={MainStyles.HeaderText}>Dermatology Conditions</Text>
     <AccordionPrimitive.Root
        type='multiple'
        collapsible>
        <AccordionPrimitive.Item value='AD' style={Containers.AccordionContainer}> {/* Sets up an accordion, with value AD to match the dermatology condition */}
          <AccordionPrimitive.Trigger style={MainStyles.AccordionHeading}> {/* Heading */}
            <Text>Atopic Dermatitis</Text> {/* Accordion title */}
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content style={MainStyles.AccordionContent}> {/* Content */}
            <AD/> {/* Content from component */}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
        
        <AccordionPrimitive.Item value='CD' style={Containers.AccordionContainer}>
          <AccordionPrimitive.Trigger style={MainStyles.AccordionHeading}>
            <Text>Contact Dermatitis</Text>
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content style={MainStyles.AccordionContent}>
            <CD/>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>

        <AccordionPrimitive.Item value='EC' style={Containers.AccordionContainer}>
          <AccordionPrimitive.Trigger style={MainStyles.AccordionHeading}>
            <Text>Eczema</Text>
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content style={MainStyles.AccordionContent}>
            <EC/>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>

        <AccordionPrimitive.Item value='SC' style={Containers.AccordionContainer}>
          <AccordionPrimitive.Trigger style={MainStyles.AccordionHeading}>
            <Text>Scabies</Text>
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content style={MainStyles.AccordionContent}>
            <SC/>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>

        <AccordionPrimitive.Item value='SD' style={Containers.AccordionContainer}>
          <AccordionPrimitive.Trigger style={MainStyles.AccordionHeading}>
            <Text>Seborrhoeic Dermatitis</Text>
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content style={MainStyles.AccordionContent}>
            <SD/>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>

        <AccordionPrimitive.Item value='TC' style={Containers.AccordionContainer}>
          <AccordionPrimitive.Trigger style={MainStyles.AccordionHeading}>
            <Text>Tinea Corporis</Text>
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content style={MainStyles.AccordionContent}>
            <TC/>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
  </ScrollView> 
)};