export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Result: {global.sum(2, 2)}</Text>
    </View>
  );
}