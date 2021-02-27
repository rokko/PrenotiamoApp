import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, View, Text , Button} from 'react-native'

export default function Alert({
    open,
    onClose,
    message = null,
    typology
  }){
    const animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animation, {
          toValue: open ? 1 : 0,
          duration: 500,
          useNativeDriver: true
        }).start()
      }, [open])

      let typologyContainerStyle = typology === "danger" ? styles.containerDanger : styles.containerSuccess

    return(
        
        <Animated.View style={[styles.container, {
            transform: [{
              scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            }]
          }]}>
            <View style={[styles.containerInternal, typologyContainerStyle]}>
              {
                <Text style={styles.message}>{message}</Text>
              }
      
              {
                onClose &&
                (
                  <Button title='X' style={styles.button} color={'#000000'} onPress={onClose}>X</Button>
                )
              }
            </View>
      
          </Animated.View>
     
      
    )
}

const styles = StyleSheet.create({
    container: {      
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,      
      paddingTop: 30
    },
    containerInternal: {
      backgroundColor: 'red',
      padding: 15,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 15,
      width: '100%'
    },
    containerSuccess: {
      backgroundColor: '#008000'
    },
    containerDanger: {
      backgroundColor: '#ff0000'
    },
    message: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
      paddingRight: 15,
      flexBasis: '70%'
    },
    button: {
      flexBasis: '30%'
    }
  })