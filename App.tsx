import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import Home from "@/app/home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <Home />
    </>
  );
}
