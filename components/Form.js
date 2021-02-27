import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements'

export default function Form({ inputs, updateInputValue }) {
  return (
    <>
      {
        inputs.map(({ label, name, ref, autoCapitalize, secureTextEntry, icon }, index) => {
          return (
            <View key={index}>
              <Input
                ref={ref}
                label={label}
                blurOnSubmit={!(index < inputs.length - 1)}
                onChangeText={(text) => {

                  console.log(text)
                  updateInputValue(name, text)
                }
                }

                onSubmitEditing={() => {
                  const nextInput = inputs[index + 1]

                  if (nextInput) {
                    nextInput.ref.current.focus()
                  }
                }}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                leftIcon={{ type: 'font-awesome', name: `${icon}` }}

              />

            </View>
          )
        })
      }
    </>
  )
}
