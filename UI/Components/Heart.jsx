import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Pressable} from 'react-native';
import styles from '../../styles/HeartIcon';
import Animated, {
    useSharedValue,
    withTiming,
    Easing,
    useAnimatedStyle,
    withRepeat,
    withSequence,
  } from 'react-native-reanimated';

export default function HeartIcon({isOn, onPress}){ 
    const [fullHeart, setFullHeart] = useState(0);
    const rotation = useSharedValue(0);
    const ANGLE = 20;
    const TIME = 30;
    const EASING = Easing.elastic(1.5);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateX: `${rotation.value}deg` }],
      }));

    const handlePress = () => {
        rotation.value = withSequence(
          withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
          withRepeat(
            withTiming(ANGLE, {
              duration: TIME,
              easing: EASING,
            }),
            7,
            true
          ),
          withTiming(0, { duration: TIME / 2, easing: EASING }),
        );
      };

    return (
        <Pressable onPress={()=>{
            handlePress();
            setFullHeart(fullHeart == 0 ? 1 : 0);
        }}>
            <Animated.View style={[animatedStyle]}>
                <Icon name={fullHeart === 0 ? 'heart-o' : 'heart'} size={35} style={styles.HeartIcon}/>
            </Animated.View>
        </Pressable>
    );
}
