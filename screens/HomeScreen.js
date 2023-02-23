import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeScreen( {navigation} ) {

  
  return (
    <SafeAreaView style={styles.container}>
        <Image
        style={styles.icon}
        source={require('../assets/HomeIcon.png')}/>
      <TouchableOpacity
      onPress={() => navigation.navigate("Map")}>
        <Image
        style={styles.locationButton}
        source={require('../assets/LocationButton.png')}/>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Map")}>
        <Image 
        style={styles.mapButton}
        source={require('../assets/MapButton.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 295,
    height: 204,
    margin: 28,
  },
  locationButton: {
    width: 270,
    height: 77,
    margin: 28,
  },
  mapButton: {
    width: 194,
    height: 77,
    margin: 0,
  }
});
