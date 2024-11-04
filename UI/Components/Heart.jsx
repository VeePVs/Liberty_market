import React, { useEffect, useState,  } from 'react';
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
import { getHeart, setHeart, deleteHeart } from '../database/firestore';
import auth from '@react-native-firebase/auth';

export default function HeartIcon({id_product}){ 
    const [fullHeart, setFullHeart] = useState(0);
    const rotation = useSharedValue(0);
    const userUID = auth().currentUser.uid;
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

    const getFav = async () => {
      await getHeart(id_product, userUID, setFullHeart);
    }  

    useEffect(() => {
      const unsubscribe = getHeart(id_product, userUID, setFullHeart);
      return () => unsubscribe();
  }, [id_product, userUID]);

  return (
    <Pressable onPress={async () => {
        handlePress();
        if (fullHeart === 1) {
            await deleteHeart(id_product, userUID);
        } else {
            await setHeart(id_product, userUID);
        }
        getHeart(id_product, userUID, setFullHeart);
      }}>
          <Animated.View style={[animatedStyle]}>
              <Icon name={fullHeart === 0 ? 'heart-o' : 'heart'} size={35} style={styles.HeartIcon} />
          </Animated.View>
      </Pressable>
  );
}
