import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBottom from './src/component/TabBottom';
import Login from './src/page/Login';
import Daftar from './src/page/Daftar';
import KataSandi1 from './src/page/KataSandi1';
import KataSandi2 from './src/page/KataSandi2';
import Mua from './src/page/Mua';
import Dekorasi from './src/page/Dekorasi';
import Henna from './src/page/Henna';
import Fotografi from './src/page/Fotografi';
import Bouquet from './src/page/Bouquet';
import Paket from './src/page/Paket';
import Kalender from './src/page/Kalender';
import DetailMua1 from './src/page/DetailMua1';
import DetailMua2 from './src/page/DetailMua2';
import DetailMua3 from './src/page/DetailMua3';
import DetailDekorasi1 from './src/page/DetailDekorasi1'
import DetailDekorasi2 from './src/page/DetailDekorasi2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="KataSandi1" component={KataSandi1} options={{ headerShown: false }} />
          <Stack.Screen name="KataSandi2" component={KataSandi2} options={{ headerShown: false }} />
          <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: false }} />
          <Stack.Screen name="MainApp" component={TabBottom} options={{ headerShown: false }} />
          <Stack.Screen name="MUA" component={Mua} />
          <Stack.Screen name="Dekorasi" component={Dekorasi} />
          <Stack.Screen name="Henna" component={Henna} />
          <Stack.Screen name="Fotografi" component={Fotografi} />
          <Stack.Screen name="Bouquet" component={Bouquet} />
          <Stack.Screen name="Paket" component={Paket} />
          <Stack.Screen name="Kalender" component={Kalender} />
          <Stack.Screen name="DetailMua1" component={DetailMua1} options={{ title: 'Detail' }} />
          <Stack.Screen name="DetailMua2" component={DetailMua2} options={{ title: 'Detail' }} />
          <Stack.Screen name="DetailMua3" component={DetailMua3} options={{ title: 'Detail' }} />
          <Stack.Screen name="DetailDekorasi1" component={DetailDekorasi1} options={{ title: 'Detail' }} />
          <Stack.Screen name="DetailDekorasi2" component={DetailDekorasi2} options={{ title: 'Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App