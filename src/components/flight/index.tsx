import { View, Text } from "react-native";

import { s } from "./styles";

export function Flight(props: { value: string; label: string }) {
  return (
    <View>
      <Text style={s.label}>{props.label}</Text>
      <Text style={s.value}>{props.value}</Text>
    </View>
  );
}
