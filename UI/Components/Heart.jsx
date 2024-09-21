import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Pressable} from 'react-native';
import styles from '../../styles/HeartIcon';

export default function HeartIcon({isOn, onPress}){
    return (
        <Pressable onPress={()=>{
            onPress();
        }}>
            <Icon name={isOn} size={35} style={styles.HeartIcon}/>
        </Pressable>
    );
}