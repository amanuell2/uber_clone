import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { SafeAreaView } from 'react-navigation'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'
import "intl";

import "intl/locale-data/jsonp/en";

const data = [
    {
        id: "uber-x-123",
        title: "Uber X",
        multiplier: 10,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "uber-x-456",
        title: "Uber XL",
        multiplier: 15,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "uber-x-789",
        title: "Uber LUX",
        multiplier: 17,
        image: "https://links.papareact.com/7pf"
    }
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const traveTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    style={tw`absolute top-3 left-3 p-3 z-50 rounded-full`}
                    onPress={() => navigation.navigate("NavigateCard")}>
                    <Icon name="chevron-left" type="font-awesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride {traveTimeInformation?.distance.text}</Text>
            </View>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        style={tw`flex flex-row items-center justify-between px-2 ${id === selected?.id && "bg-gray-200"
                            }`}
                        onPress={() => setSelected(item)}
                    >
                        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: image }} />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                            <Text>{traveTimeInformation?.duration.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-lg font-bold self-center`}>
                            {new Intl.NumberFormat("en-ETB", {
                                style: "currency",
                                currency: "ETB",
                            }).format(
                                (traveTimeInformation?.duration.value *
                                    SURGE_CHARGE_RATE *
                                    multiplier) /
                                100
                            )}
                        </Text>
                    </TouchableOpacity>
                )} />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-400"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose  {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
