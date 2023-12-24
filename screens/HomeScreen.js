import React from "react";
import {View ,Text, Button,StyleSheet} from 'react-native';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import {useNavigation} from '@react-navigation/core'

const HomeScreen = (props) => {
    const navigation=useNavigation()

    const signout=async()=>{
      
        try{
            const user=signOut(auth)

            console.log(user)

            navigation.replace('Login')
        }
        catch(err)
        {
            console.log(err.message)
        }
    }
    return (
        <View style={styles.homecontainer}>
            <Text>HomeScrren</Text>
            <Text>Current User :{auth.currentUser?.email}</Text>
            <Button onPress={signout} title="signout"/>
        </View>
    )
}

export default HomeScreen

const styles=StyleSheet.create({
    homecontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})