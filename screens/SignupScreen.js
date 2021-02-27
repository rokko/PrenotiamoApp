import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';

export default function SignupScreen() {
    const [mail, setMail] = useState('leocaricola@gmail.com')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('leolino11')
    const [telefphonNumber,setTelephonNumber] = useState('')
    const [cognome, setCognome] = useState('')
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
                <Input style={{ padding: 10, marginTop: 5 }}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    placeholder='Nome'
                    onChangeText={value => setNome(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    placeholder='Cognome'
                    onChangeText={value => setCognome(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    placeholder='Mail'
                    onChangeText={value => setMail(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    placeholder='Password'
                    onChangeText={value => setPassword(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    placeholder='Confema Password'
                    onChangeText={value => setPassword(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'mobile' }}
                    placeholder='Cellulare'
                    onChangeText={value => setTelephonNumber(value)}
                />

                

            </ScrollView>
            <Button style={{ width: 100 }} title='Registrati' onPress={() => submitSignup()}> {'Login'} </Button>
                <Text style={{ marginTop: 6 }}> Non sei ancora registrato? Clicca qui</Text>


        </View>
    )
}