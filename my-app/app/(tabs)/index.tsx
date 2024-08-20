import { Image, StyleSheet, Platform, ImageBackground, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const image = { uri: './assets/images/USA.jpg' }
export default function HomeScreen() {
  return (
   
        <ImageBackground
          source={image}
          style={styles.image}
        >
          </ImageBackground>
        
  )}
  
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode:'cover',
      justifyContent: 'center'
    }
  })