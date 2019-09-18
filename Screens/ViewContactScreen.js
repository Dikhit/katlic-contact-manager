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

  static navigationOptions = {
    title: 'Contact Details',
  };
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