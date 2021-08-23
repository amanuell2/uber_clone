import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`h-full`}>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                style={tw`bg-gray-100 absolute top-10 left-5 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={tw`h-1/3`}>
                <Map />
            </View>
            <View style={tw`h-2/3`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" options={{ headerShown: false }} component={NavigateCard}></Stack.Screen>
                    <Stack.Screen name="RideOptionsCard" options={{ headerShown: false }} component={RideOptionsCard}></Stack.Screen>
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen
