import { Text, SafeAreaView} from 'react-native';
import Sobrenome from './sobrenome';

export default function App() {
  return (
      <SafeAreaView>    
      <Text>matheus</Text>
      <Sobrenome sobrenome="Dias" />
      </SafeAreaView>
  );
}


