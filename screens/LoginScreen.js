import React, { useState, createRef  } from 'react'
import { View, StyleSheet} from 'react-native'
import { Button , Text} from 'react-native-elements';
import Alert from '../errors/Alert'
import Form from '../components/Form'
import useForm from '../hooks/useForm'
import { rootNavigation } from '../utility/navigation.js'

const inputs = [
    { label: 'Username', name: 'mail', ref: createRef() , icon:'user' },
    { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true, icon:'lock' },
  ]
export default function LoginScreen() {
    const requiredInputs = ['username_email', 'password']
    const [data, setFormData] = useForm(requiredInputs)
    const [messageOpen, setMessageOpen] = useState(false)
    const [error, setError] = useState('')

    const submitlogin = () => {
        console.log(data.values)
        fetch(('https://prenotato.herokuapp.com/User/Login'), {
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data.values),
            method: 'POST'

        })
            .then(response => response.json())
            .then(rest => {
                if (rest.isCorrect === false) {
                    setMessageOpen(true)
                    setError(rest.message)} else {
                        console.log(rest)
                        rootNavigation.current.navigate('MainNavigator')
                    }  
                           
                }
            )    
                
            
    }

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#14213d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Alert open={messageOpen} message={error} onClose={() => setMessageOpen()} typology={error ? 'danger' : 'success'} />
            <View style={{ backgroundColor: '#ffffff', height: 300, width: 300, borderRadius: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Form inputs={inputs} updateInputValue={setFormData} />          
                <Button style={{ width: 100 }} title='Login' onPress={() => submitlogin()}> {'Login'} </Button>
                <Text style={{marginTop : 6}}> Non sei ancora registrato? Clicca qui</Text>
            </View>
        </View>



    )

}