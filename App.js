import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
// import MyPage from './src/screens/MyPage';
import SearchShowResult from './src/components/SearchShowResult';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Search', headerTitleAlign: 'center' }}/>
        <Stack.Screen name="SearchShowResult" component={SearchShowResult} options={{ title: 'Result', headerTitleAlign: 'center' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;