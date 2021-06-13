import * as React from 'react';
import { Text, View, StyleSheet ,Image, TextInput, TouchableOpacity , Button} from 'react-native';
export default class homescreen extends React.Component {
render(){
  return(
    <View>
    <TouchableOpacity onPress = {this.props.navigation.navigate("BeginnerLevel")}>
      <Text>Beginners Level</Text>
      <Image
	          source={require("../assets/blevel.png")}
	          style={{width:40, height:40}}
	        />
      </TouchableOpacity>
    
    <Text>Fitness App</Text>
    </View>
  )
}
}