import { requireNativeComponent } from 'react-native';

export const ColorView = requireNativeComponent('ColorView');

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ColorView color="#32a852" style={{ flex: 1 }} />
    </View>
  );
}
