import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/Onboarding';
import PlantView from './src/screens/PlantView';

// View -> UIView
export default function App() {

  let x;
  return (
    <View style={styles.container}>
      <PlantView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
