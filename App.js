import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/Onboarding';
import Dashboard from './src/screens/Dashboard';

// View -> UIView
export default function App() {
  let x;
  return (
    <View style={styles.container}>
      <Onboarding />
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
