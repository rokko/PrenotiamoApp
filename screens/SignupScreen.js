import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';
import useForm from '../hooks/useForm'

export default function SignupScreen() {
    
    const [messageOpen, setMessageOpen] = useState(false)
    const [error, setError] = useState('')

    const submitSignup=()=>{

        fetch(('https://prenotato.herokuapp.com/User/Registrazione'), {
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ nome,cognome,mail, password, telefphonNumber }),
            method: 'POST'

        })
            .then(response => response.json())
            .then(rest => {
              console.log(rest)})
                        
    }
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#14213d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{ backgroundColor: '#ffffff', marginTop: 100, height: 200, width: 300, borderTopRightRadius: '10%', borderTopLeftRadius: '10%', display: 'flex', }}>
               

                

            </ScrollView>
            <Button style={{ width: 100 }} title='Registrati' onPress={() => submitSignup()}> {'Login'} </Button>
                <Text style={{ marginTop: 6 }}> Non sei ancora registrato? Clicca qui</Text>


        </View>
    )
}