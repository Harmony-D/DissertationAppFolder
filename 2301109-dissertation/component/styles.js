import { StyleSheet, Dimensions } from 'react-native'; // Importing required libraries for styling

// Colour styles used for buttons, hyperlinks, background, etc.
export const ColourStyles = {
  backgroundColour: '#f9fcfb',
  mainColour: '#589e95',
  secondaryColour: '#88bdb7'
}

{/* These containers are used for structuring features and making sure there is white space and easy readability of content */}
// Flexbot Link: https://reactnative.dev/docs/flexbox [Accessed: 18.8.2026]
export const Containers = StyleSheet.create({
  HeaderContainer: {
    flex: 0.1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingTop: 30,
    textAlign: 'center',
    backgroundColor: ColourStyles.secondaryColour
  },
  MainContainer: {
    flex: 1,
    backgroundColor: ColourStyles.backgroundColour,
    padding: 40
  },
  AccordionContainer: {
    marginTop: 10, 
    marginBottom: 10
  },
  IconButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
});

{/* These styles are for main features, ensuring that there is consistency throughout for parts such as buttons, hyperlinks, etc. */}
export const MainStyles = StyleSheet.create({
  Button: {
    borderRadius: 10, 
    alignItems: 'center',
    backgroundColor: ColourStyles.secondaryColour,
    width: '100%',
    marginTop: 20,
    padding: 15, 
    justifyContent: 'center'
  },
  Hyperlink: {
    color: ColourStyles.mainColour,
    fontWeight: 500
  },
  HeaderText: {
    color: ColourStyles.mainColour,
    fontWeight: 600,
    fontSize: 20,
    marginLeft: 5,
    marginTop: 15
  },
  ConfirmText: {
    fontSize: 18, 
    fontWeight: 450,
    textAlign: 'center',
    padding: 12
  },
  Search: {
    borderColor: ColourStyles.secondaryColour,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10
  },
  Line: {
    width: Dimensions.get("window"),
    backgroundColor: ColourStyles.mainColour,
    padding: 1,
    marginTop: 5,
    marginBottom: 5
  },
  MoreTitle: {
    flexDirection: 'row',
    justifyContent:'flex-start', 
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 5
  },
  MoreTitleText: {
    color: ColourStyles.mainColour,
    fontWeight: 600,
    fontSize: 20,
    marginLeft: 10
  },
  MoreText: {
    marginTop: 10, 
    marginBottom: 10,
    fontSize: 18
  },
  MoreHyperlink: {
    marginTop: 10, 
    marginBottom: 10,
    fontSize: 18,
    color: ColourStyles.secondaryColour,
    fontWeight: 500
  },
  AccordionHeading: {
    backgroundColor: ColourStyles.secondaryColour,
    paddingTop:7,
    paddingBottom: 7,
    paddingLeft:10
  },
  AccordionContent: {
    borderColor: ColourStyles.secondaryColour,
    borderWidth: 1.5,
    padding:10
  },
  searchBar: {
    padding: 10,
    placeholderTextColor: ColourStyles.mainColour,
    borderColor: ColourStyles.mainColour,
    borderWidth: 1.2, 
    borderRadius: 10
  },
  informationImages: {
    width:250,
    height: 200,
    alignSelf: 'center',
    padding: 5
  },
  buttonIcon: 30
});