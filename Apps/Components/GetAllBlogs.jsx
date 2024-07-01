import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function GetAllBlogs({ AllBlogs }) {

    console.log(AllBlogs.author);

    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate('blog-detail', {
            blog: AllBlogs
        })} style={{ display: 'flex', flexDirection: 'row', width: "100%", marginBottom: 20, padding: 20, marginTop: 2, borderRadius: 15, gap: 10, backgroundColor: Colors.WHITE }}>
            <Image source={{ uri: AllBlogs.banner.url }} style={{ width: 80, height: 80, borderRadius: 10, objectFit: 'cover' }} />

            <View style={{ display: 'flex', gap: 2, width: "70%" }}>
                <Text style={{ fontSize: 12, fontFamily: 'outfit-bold' }}>{AllBlogs.name}</Text>
                <Text style={{ fontSize: 14, fontFamily: 'outfit', color: Colors.GRAY }}>{AllBlogs.author}</Text>

                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>

                        <Ionicons name="book" size={24} color={Colors.PRIMARY} />
                        <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>Read More</Text>

                    </View>

                    <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{AllBlogs.free ? 'Free' : 'Paid'}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}