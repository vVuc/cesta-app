import { Cesta } from './view/cesta';
import mock from "./mocks/strings.js"
import { SafeAreaView, StatusBar } from 'react-native';

import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";


export default function App() {

const [fontsLoaded] = useFonts({
  'MontserratRegular': Montserrat_400Regular,
  'MontserratBold': Montserrat_700Bold
})

if(!fontsLoaded){
  return null;
}

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

