import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import Alert from '../errors/Alert'

export default function SignupScreen(){
    <View style={{ flex: 1, padding: 10, backgroundColor: '#14213d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <View style={{ backgroundColor: '#ffffff', height: 300, width: 300, borderRadius: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Input style={{ padding: 10, marginTop: 5 }}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    placeholder='Nome'
                    onChangeText={value => setMail(value)}
                />
                <Input style={{ padding: 10 }}
                    leftIcon={{type:'font-awesome', name:'lock'}}
                    placeholder='Cognome'
                    onChangeText={value => setPassword(value)}
                />
                 <Input style={{ padding: 10 }}
                    leftIcon={{type:'font-awesome', name:'lock'}}
                    placeholder='Mail'
                    onChangeText={value => setPassword(value)}
                />
                 <Input style={{ padding: 10 }}
                    leftIcon={{type:'font-awesome', name:'lock'}}
                    placeholder='Password'
                    onChangeText={value => setPassword(value)}
                />
                 <Input style={{ padding: 10 }}
                    leftIcon={{type:'font-awesome', name:'lock'}}
                    placeholder='Confema Password'
                    onChangeText={value => setPassword(value)}
                />
                 <Input style={{ padding: 10 }}
                    leftIcon={{type:'font-awesome', name:'lock'}}
                    placeholder='Confema Password'
                    onChangeText={value => setPassword(value)}
                />
                


                <Button style={{ width: 100 }} title='Login' onPress={() => submitlogin()}> {'Login'} </Button>
                <Text style={{marginTop : 6}}> Non sei ancora registrato? Clicca qui</Text>
            </View>
        </View>

}