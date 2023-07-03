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
  Button,
  } from 'react-native';
export default function App() {
        const onPressok = () => {
                // Do something about ok operation
                };
         const onPresssendOTP = () => {
               // Do something about sendOTP operation
               };
                const [state,setState] = useState({
                email: '',
                otp: '',
                })
    return(
    
      <View style={styles.container}>
      <Image source={require('../ex2/assets/loginlogo.jpg')} 
       style={{
        width: 420, 
        height: 240,  
        alignSelf: 'center',
        top: 30,
        resizeMode: 'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        }} 
/>
      <Text style={styles.title}>Enter Your Mail</Text>
      <View style={styles.inputView}>
      <TextInput
           style={styles.inputText}
           placeholder="e.g John@gmail.com"
           placeholderTextColor="#003f5c"
           onChangeText={text => setState({email:text})}/>
           
      </View>
      <TouchableOpacity
onPress = {onPresssendOTP}>
 <Button title='Send OTP' style={styles.Button} />
</TouchableOpacity>
      
      <Text style={styles.title}>Enter Your OTP</Text>
      <View style={styles.inputView}>
      <TextInput
           style={styles.inputText}
           placeholder="                       _        _        _         _                    "
           placeholderTextColor="#003f5c"  
           onChangeText={text => setState({otp:text})}/>
           
      </View>
      <TouchableOpacity
onPress = {onPressok}>
 <Button title='OK' style={styles.Button} />
</TouchableOpacity>
     
      </View>
    )
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
   Button:{
        width:"190%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10,
        padding:40,
       
        },
  });
 
