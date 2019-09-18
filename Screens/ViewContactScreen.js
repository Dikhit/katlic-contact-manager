import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Platform,
  Alert,
  AsyncStorage
} from 'react-native';
import { Card, CardItem } from 'native-base';
import { Entypo } from '@expo/vector-icons';

class ViewContactScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstName : "FirstName",
      lastName : "LastName",
      phoneNumber : "+91000",
      email : "example@gmail.com",
      address : "your address",
      key : "something"
    }
  }

  static navigationOptions = {
    title: 'Contact Details',
  };

  componentDidMount(){
    const { navigation } = this.props;
    navigation.addListener("willFocus", ()=> {
      var key = this.props.navigation.getParam("key", ""); 
      this.getContact(key); 
    })
  }
  
  getContact = async key => {
    await AsyncStorage.getItem(key)
      .then( contactJsonString =>{
        var contact = JSON.parse(contactJsonString);
        contact[key] = key;
        this.setState(contact);
      })
      .catch( error => {
        console.log(error);
      })
  }

  callAction = phone => {
    let phoneNumber = phone;
    if ( Platform.OS !== "android" ) {
      phoneNumber = `telpromt : ${phone}`
    }
    else {
      phoneNumber = `tel : ${phone}`
    }
    Linking.canOpenURL(phoneNumber)
      .then( supported => {
        if (!supported) {
          Alert.alert("Phone Number is not available")
        } else {
          return Linking.openURL(phoneNumber)
        }
      })
      .catch( error => {
        console.log(error)
      })
  }

  render(){
      return(
          <View>
              <Text> View Contact Screen </Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    contactIconContainer: {
      height: 200,
      backgroundColor: "#B83227",
      alignItems: "center",
      justifyContent: "center"
    },
    contactIcon: {
      fontSize: 100,
      fontWeight: "bold",
      color: "#fff"
    },
    nameContainer: {
      width: "100%",
      height: 70,
      padding: 10,
      backgroundColor: "rgba(255,255,255,0.5)",
      justifyContent: "center",
      position: "absolute",
      bottom: 0
    },
    name: {
      fontSize: 24,
      color: "#000",
      fontWeight: "900"
    },
    infoText: {
      fontSize: 18,
      fontWeight: "300"
    },
    actionContainer: {
      flexDirection: "row"
    },
    actionButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    actionText: {
      color: "#B83227",
      fontWeight: "900"
    }
  });
  
export default ViewContactScreen;