import { ImageBackground, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";

import { s } from "./styles";
import { colors } from "@/styles/colors";

import { Flight } from "@/components/flight";
import { Info } from "@/components/info";

export default function Home() {
  return (
    <View style={s.container}>
      <ImageBackground style={s.header} source={require("@/assets/cover.webp")}>
        <Text style={s.title}>Cartão de embarque</Text>
        <Text style={s.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>
      <View style={s.ticket}>
        <View style={s.ticketContent}>
          <View style={s.flight}>
            <Flight label="São Paulo" value="GRU" />

            <View style={s.duration}>
              <Ionicons name="airplane-sharp" size={24} color={colors.black} />
              <Text style={s.hours}>9 h 45 min</Text>
            </View>

            <Flight label="Nova York" value="JKF" />
          </View>
          <Text style={s.label}>Passageiro</Text>
          <Text style={s.name}>Kalyan Lucas</Text>

          <View style={s.details}>
            <View style={s.inline}>
              <Info label="Data" value="17 de Nov." />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>
        </View>
        <View>
          <Svg height="20" width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth="1"
              strokeDasharray={[5, 5]}
            />
            <Circle cx="0%" cy="50%" r="8" fill={colors.black} />
            <Circle cx="100%" cy="50%" r="8" fill={colors.black} />
          </Svg>
        </View>
        <View style={s.footer}>
          <View style={s.footerContent}>
            <View style={s.inline}>
              <Info label="Voo" value="AA 123" />
              <Info label="Assento" value="12A" />
            </View>
            <View style={s.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="39" />
            </View>
          </View>
          <QRCode value="boarding code" size={130} />
        </View>
      </View>
    </View>
  );
}
