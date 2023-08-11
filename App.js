import 'react-native-gesture-handler';
import { ActivityIndicator,View } from "react-native";
import MainRoute from "./route/index";
import { useFonts } from 'expo-font';
import CustomView from './components/Utils/CustomView';
import { StatusBar } from 'expo-status-bar';
import useStore from './store';

export default function App() {
  const isDarkMode = useStore((state) => state.isDarkMode)
  
  let [fontsLoaded] = useFonts({
    OutfitBold: require('./assets/fonts/Outfit-Bold.ttf'),
    OutfitMedium: require('./assets/fonts/Outfit-Medium.ttf'),
    OutfitLight: require('./assets/fonts/Outfit-Light.ttf'),
  });


  if (!fontsLoaded) {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator color={'black'} size={'large'}/>
      </View>
    );
  } 

  else {
    return (

      <View style={{flex:1,}}>
        <StatusBar style={isDarkMode ? "light" : "dark"} />
        <MainRoute/>
      </View>
 
     
    );
  }
}