import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BlogItem({ blog }) {

    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate('blog-detail', {
            blog: blog
        })} style={{ backgroundColor: Colors.WHITE, width: 260, marginRight: 15, padding: 10, borderRadius: 15, gap: 3 }}>
            <Image source={{ uri: blog.banner.url }} style={{ width: 240, height: 130, borderRadius: 10, objectFit: 'cover' }} />

            <View style={{ display: 'flex', gap: 4 }}>
                <Text style={{ fontSize: 15, fontFamily: 'outfit-bold' }}>{blog.name}</Text>
                <Text style={{ fontSize: 14, fontFamily: 'outfit', color: Colors.GRAY }}>{blog.author}</Text>

                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {blog?.chapter?.length ? <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        <Ionicons name="book" size={24} color={Colors.PRIMARY} />
                        <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>{blog?.chapter?.length} Chapters</Text>
                    </View> : null}

                    <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{blog.free ? 'Free' : 'Paid'}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}