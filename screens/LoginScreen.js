import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {View ,Text} from 'react-native';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/core'

import { auth } from "../firebase";



const LoginScreen = (props) => {

   const navigation=useNavigation();
   useEffect(()=>{
       
        const unsubscribe= auth.onAuthStateChanged((user=>{
            if(user)
            {
               navigation.replace("Home")
            }
         

         }))

         return unsubscribe;
       
   },[])
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const register = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth,email,password)
          const user = userCredential.user;
          console.log("Registered user:", user);
        } catch (error) {
          console.log("Registration error:", error.message);
        }
      };
    

      const login=async()=>{

         try{
           
            const user=await signInWithEmailAndPassword(auth,email,password)

            console.log("Logged In User",user)

         }
         catch(err)
         {
              console.log(err.message)
         }
     
      }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}> 
         <View style={styles.inputcontainer}>
                <TextInput style={styles.input}  onChangeText={(text)=>setEmail(text)} placeholder="Enter Email"/>
                <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)} placeholder="Enter Password"/>

         </View>
         <View style={styles.touchablecontainer}>
            <TouchableOpacity  style={styles.buttoncontainer} onPress={login}>
                     <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={register} style={[styles.button,styles.buttonoutline]}  >
                     <Text style={[styles.buttonoutlinetext,styles.registertext]}>Register</Text>
            </TouchableOpacity>
         </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;


const styles=StyleSheet.create({
 container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
 },
 inputcontainer:{
    width:'80%'
 },
 input:{
   backgroundColor:"white",
   paddingHorizontal:15,
   paddingVertical:10,
   borderRadius:10,
   marginTop:10
 },
 touchablecontainer:{
    width:'80%'
 },
 buttoncontainer:{
    width:"60%",
    justifyContent:'center',
    alignContent:'center',
    marginTop:10
 },
 button:{
    backgroundColor:"blue",
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center'
 },
 buttonoutline:{
    backgroundColor:"white",
    marginTop:5,
    borderWidth:2,
    borderColor:"blue"

 },
 buttonoutlinetext:{
   color:'white',
   fontSize:10,
},
registertext:{
    color:'blue'
}

})