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
        const onPressresetpass = () => {
                // Do something about ok operation
                };
        
                const [state,setState] = useState({
                password: '',
                newpassword: '',
                })
    return(
    
      <View style={styles.container}>
      <Image source={require('../ex2/assets/loginlogo.jpg')} 
       style={{
        width: 420, 
        height: 290,  
        alignSelf: 'center',
        top: -30,
        resizeMode: 'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        }} 
/>
      <Text style={styles.title}>Enter New Password</Text>
      <View style={styles.inputView}>
       <TextInput
       style={styles.inputText}
       placeholder="New Password"
       placeholderTextColor="#003f5c"
       onChangeText={text => setState({password:text})}/>
       </View>
      
      
      <View style={styles.inputView}>
      <TextInput
      style={styles.inputText}
      secureTextEntry
      placeholder=" Confirm Password"
      placeholderTextColor="#003f5c"
      onChangeText={text => setState({newpassword:text})}/>
      </View>

      <TouchableOpacity onPress = {onPressresetpass}>
        <Button title='Confrim' style={styles.Button} />
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
        fontSize:40,
        color:"#fb5b5a",
        marginTop: -20,


   },
   inputView:{
        width:"80%",
        backgroundColor:"#3AB4BA",
        borderRadius:25,
        height:50,
        marginBottom:40,
        justifyContent:"center",
        padding:30,marginTop: 40,
        },
        inputText:{
        height:50,
        color:"black",
        fontWeight: 'bold',
        },
   Button:{
        width: 100,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10,
        padding:80,
        
        
       
        },
  });
 
