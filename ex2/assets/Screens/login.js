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
const onPressLogin = () => {
// Do something about login operation
};
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
// Do something about signup operation
};
const [state,setState] = useState({
email: '',
password: '',
})
return (
<View style={styles.container}>
<Image source={require('../ex2/assets/loginlogo.jpg')} 
       style={{
        width: 420, 
        height: 320,  
        alignSelf: 'center',
        top: 30,
        resizeMode: 'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        }} 
/>
        
        
    
<Text style={styles.title}> Login </Text>
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
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => setState({password:text})}/>
</View>
<TouchableOpacity
onPress = {onPressForgotPassword}>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressSignUp}>
<Text style={styles.forgotAndSignUpText}>Signup</Text>
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
marginTop: 70,
marginBottom: 20,

},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"black",
fontWeight: 'bold',
},
forgotAndSignUpText:{
color:"white",
fontSize:17
},
loginBtn:{
width:"80%",
backgroundColor:"#fb5b5a",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
});
