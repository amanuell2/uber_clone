import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const NavigateCard = () => {
    const dispatch = useDispatch(setDestination)
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View>
                <Text style={tw`text-center py-5 text-xl`}> Good morning, amanuel</Text>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <GooglePlacesAutocomplete
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            navigation.navigate("RideOptionsCard")
                        }}
                        styles={toInputBoxStyles}
                        placeholder="Where to?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        returnKeyType={"search"}
                        minLength={2}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
                    />
                </View>
                <NavFavorites />
            </View>
            <View style={tw`flex flex-row justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                    style={tw`flex flex-row justify-between items-center bg-black w-24 px-4 py-3 rounded-full`}
                    onPress={() => navigation.navigate('RideOptionsCard')}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row justify-between items-center  w-24 px-4 py-3 rounded-full`}
                    onPress={() => { }}
                >
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text style={tw`text-black text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }

})
