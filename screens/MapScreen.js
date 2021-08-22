import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" options={{ headerShown: false }} component={NavigateCard}></Stack.Screen>
                    <Stack.Screen name="RideOptionsCard" options={{ headerShown: false }} component={RideOptionsCard}></Stack.Screen>
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen
