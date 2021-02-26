import React, { useState } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';


export default function LoginScreen() {
    const [mail, setMail] = useState('leocaricola@gmail.com')
    const [password,setPassword] = useState('leolino11')

    const submitlogin= ()=>{
        fetch(('https://prenotato.herokuapp.com/User/Login'), {
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({mail,password}),
            method: 'POST'
           
        })
        .then(response => response.json())
        .then(rest => console.log(rest))
    }

    return (
        
        <View style={{flex:1, padding:10, backgroundColor:'#14213d', display:'flex', justifyContent:'center', alignItems:'center' }}>
        
        <View style={{backgroundColor:'#ffffff', height:300, width:300, borderRadius:'30%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Input style={{padding:10, marginTop:5}}
                placeholder='Mail'
                onChangeText={value => setMail(value)}
            />
            <Input style={{padding:10}}
                placeholder='Password'
                onChangeText={value => setPassword(value)}
            />

        
        <Button style={{width:100}} title='Login' onPress={()=>submitlogin()}> {'Login'} </Button>
        </View>
        </View>
        


    )

}