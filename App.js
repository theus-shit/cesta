import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import sobrenome from './src/telas/sobrenome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>matheus</Text>
      <sobrenome />
      <StatusBar style="auto" />
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
