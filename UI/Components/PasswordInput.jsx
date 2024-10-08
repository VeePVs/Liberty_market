import { View, TextInput } from 'react-native'
import React from 'react'
import styles from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ({placeholder,onChangeText}) {
  const [visibleIcon, setVisibleIcon] = React.useState(false);
  const [visiblePassword, setVisiblePassword] = React.useState(true);

  return (
    <View style={styles.containerPassword}>
                <TextInput placeholder={placeholder} style={styles.inputPassword} placeholderTextColor={"#E1F7F5"} maxLength={8} secureTextEntry={visiblePassword} onChangeText={onChangeText}/>
                <Icon name={visibleIcon== false ? 'eye-slash': 'eye'} size={30} style={styles.iconPassword} onPress={()=>{
                    setVisibleIcon(!visibleIcon);
                    setVisiblePassword(!visiblePassword);
                }}/> 
    </View>
  )
}