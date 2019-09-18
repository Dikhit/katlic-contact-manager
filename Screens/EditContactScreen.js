import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  TouchableWithoutFeedback,
   Keyboard,
   AsyncStorage,
   Alert
} from 'react-native';
import { Form, Item, Label, Button } from 'native-base';

class EditContactScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstName : "",
      lastName : "",
      phoneNumber : "",
      email : "",
      address : "",
      key : ""
    }
  }

  static navigationOptions = {
    title: 'Edit Contact',
  };

  componentDidMount(){
    const { navigation } = this.props;
    navigation.addListener("willFocus", ()=>{
      var key = this.props.navigation.getParam("key", "");
      this.getContact();
    })
  }

  getContact = async key => {
    await AsyncStorage.getItem(key)
      .then( contactJsonString => {
        var contact = JSON.parse(contactJsonString);
        contact["key"] = key;
        this.setState(contact);
      })
      .catch( error => console.log(error) )
  }
  render(){
      return(
          <View>  
              <Text> Edit Contact Screen </Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 10
    },
    inputItem: {
      margin: 10
    },
    button: {
      backgroundColor: "#B83227",
      marginTop: 40
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold"
    }
  });
  
export default EditContactScreen;