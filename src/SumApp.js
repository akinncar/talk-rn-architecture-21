import { NativeModules } from 'react-native';

const { SumModule } = NativeModules;

export default function App() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Result: {SumModule.sum(2 + 2)}</Text>
      </View>
    );
  }