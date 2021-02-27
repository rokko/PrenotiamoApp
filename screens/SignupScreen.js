import React, { useState } from 'react'
import { View, StyleSheet, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import Alert from '../errors/Alert'

export default function SignupScreen() {
    const [mail, setMail] = useState('leocaricola@gmail.com')
    const [password, setPassword] = useState('leolino11')
    const [messageOpen, setMessageOpen] = useState(false)
    const [error, setError] = useState('')
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#14213d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{ backgroundColor: '#ffffff', marginTop: 100, height: 200, width: 300, borderTopRightRadius: '10%', borderTopLeftRadius: '10%', display: 'flex', }}>
                <Input style={{ padding: 10, marginTop: 5 }}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    placeholder='Nome'
                    onChangeText={value => setMail(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    placeholder='Cognome'
                    onChangeText={value => setPassword(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    placeholder='Mail'
                    onChangeText={value => setPassword(value)}
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
                    onChangeText={value => setPassword(value)}
                />

                

            </ScrollView>
            <Button style={{ width: 100 }} title='Registrati' onPress={() => submitlogin()}> {'Login'} </Button>
                <Text style={{ marginTop: 6 }}> Non sei ancora registrato? Clicca qui</Text>


        </View>
    )
}