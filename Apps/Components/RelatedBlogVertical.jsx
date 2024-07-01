import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RelatedBlogVertical({ RelatedBlogsForPeople }) {

    console.log(RelatedBlogsForPeople.author);

    const navigation = useNavigation();

    return (

        <TouchableOpacity onPress={() => navigation.navigate('blog-detail', {
            blog: RelatedBlogsForPeople
        })} style={{ display: 'flex', flexDirection: 'row', width: "100%", marginBottom: 10, padding: 10, borderRadius: 15, gap: 10, backgroundColor: Colors.WHITE }}>
            <Image source={{ uri: RelatedBlogsForPeople.banner.url }} style={{ width: 80, height: 80, borderRadius: 10, objectFit: 'cover' }} />

            <View style={{ display: 'flex', gap: 2, width: "70%" }}>
                <Text style={{ fontSize: 12, fontFamily: 'outfit-bold' }}>{RelatedBlogsForPeople.name}</Text>
                <Text style={{ fontSize: 14, fontFamily: 'outfit', color: Colors.GRAY }}>{RelatedBlogsForPeople.author}</Text>

                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {RelatedBlogsForPeople?.chapter?.length ? <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        <Ionicons name="book" size={24} color={Colors.PRIMARY} />
                        <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>{RelatedBlogsForPeople?.chapter?.length} Chapters</Text>
                    </View> : null}

                    <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{RelatedBlogsForPeople.free ? 'Free' : 'Paid'}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}