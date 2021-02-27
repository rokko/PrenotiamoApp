import React, { useState , createRef} from 'react'
import { View, ScrollView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';
import Form from '../components/Form'
import useForm from '../hooks/useForm'

const inputs = [
    { label: 'Nome', name: 'nome', ref: createRef(), icon : 'user' },
    { label: 'Cognome' , name: 'cognome', ref: createRef(), icon : 'user'},
    { label: 'Email', name: 'mail', ref: createRef(), icon : 'envelope' },
    { label: 'Password', type: 'password', name: 'password', ref: createRef(), secureTextEntry: true , icon : 'lock'},
    { label: 'Confirm Password', name: 'password_confirmation', ref: createRef(), secureTextEntry: true, icon : 'lock' },
    { label: 'Celluare', name: 'telephonNumber', ref: createRef(), icon : 'mobile' },
  ]
  

export default function SignupScreen() {
    const requiredInputs = ['nome','cognome', 'mail', 'password', 'password_confirmation', 'telephonNumber']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [messageOpen, setMessageOpen] = useState(false)
    const [error, setError] = useState('')

    const submitSignup=()=>{

        fetch(('https://prenotato.herokuapp.com/User/Registrazione'), {
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(formData.values),
            method: 'POST'

        })
            .then(response => response.json())
            .then(rest => {
              console.log(rest)})
                        
    }
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#14213d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{ backgroundColor: '#ffffff', marginTop: 100, height: 200, width: 300, borderTopRightRadius: '10%', borderTopLeftRadius: '10%', display: 'flex', }}>
            <Form inputs={inputs} updateInputValue={(name, text) => setFormValue(name, text)} />

                

            </ScrollView>
            <Button style={{ width: 100 }} title='Registrati' onPress={() => submitSignup()}> {'Login'} </Button>
                <Text style={{ marginTop: 6 }}> Non sei ancora registrato? Clicca qui</Text>


        </View>
    )
}