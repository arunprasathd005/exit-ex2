import React, { useState } from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TextInput,
TouchableOpacity,
Image,
} from 'react-native';
import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App =  () => {


const onPressSignUp = () => {
// Do something about signup operation
};
const [state,setState] = useState({
email: '',
password: '',
Name: '',
Age: '',
Gender: '',
Height: '',
Weight: '',
})
return (
<View style={styles.container}>
<Image source={require('../ex2/assets/loginlogo.jpg')} 
       style={{
        width: 420, 
        height: 200,  
        alignSelf: 'center',
        top: 50,
        resizeMode: 'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        }} 
/>
        
        
    
<Text style={styles.title}> SignUp </Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
onChangeText={text => setState({email:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry//hidden purpose
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => setState({password:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Name"
placeholderTextColor="#003f5c"
onChangeText={text => setState({Name:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
keyboardType='numeric'
placeholder="Age"
placeholderTextColor="#003f5c"
onChangeText={text => setState({Age:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Gender"
placeholderTextColor="#003f5c"
onChangeText={text => setState({Gender:text})}/>
</View>
<View style={styles.inputView1}>
<TextInput
style={styles.inputText}
keyboardType='numeric'
placeholder="Height"
placeholderTextColor="#003f5c"
onChangeText={text => setState({Height:text})}/>
</View>
<View style={styles.inputView2}>
<TextInput
style={styles.inputText}
keyboardType='numeric'
placeholder="Weight"
placeholderTextColor="#003f5c"
onChangeText={text => setState({Weight:text})}/>
</View>


<TouchableOpacity
onPress = {onPressSignUp}
style={styles.signBtn}>
<Text style={styles.loginText}>SIGNUP</Text>
</TouchableOpacity>

</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',


},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginTop: 40,

},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:20,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20,
fontWeight: 30,
},
inputView1:{
  width:"35%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20,
marginLeft: -190,
  },
  inputView2:{
    width:"35%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height: 50,
    marginBottom:80,
    justifyContent:"center",
    padding:20,
    marginTop: -70,
    marginRight: -190,
    },
inputText:{
height:50,
color:"black",
fontWeight: 'bold',

},

signBtn:{
width:"80%",
backgroundColor:"#fb5b5a",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop: -40,
marginBottom:10
},
});
export default App;