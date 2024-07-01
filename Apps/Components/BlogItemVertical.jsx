import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function BlogItemVertical({ blog }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', width: "100%", marginBottom: 20, padding: 10, borderRadius: 15, gap: 10, backgroundColor: Colors.WHITE }}>
            <Image source={{ uri: blog.banner.url }} style={{ width: 80, height: 80, borderRadius: 10, objectFit: 'cover' }} />

            <View style={{ display: 'flex', gap: 2, width: "70%" }}>
                <Text style={{ fontSize: 12, fontFamily: 'outfit-bold' }}>{blog.name}</Text>
                <Text style={{ fontSize: 14, fontFamily: 'outfit', color: Colors.GRAY }}>{blog.author}</Text>

                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {blog?.chapter?.length ? <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        <Ionicons name="book" size={24} color={Colors.PRIMARY} />
                        <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>{blog?.chapter?.length} Chapters</Text>
                    </View> : null}

                    <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{blog.free ? 'Free' : 'Paid'}</Text>

                </View>

            </View>

        </View>
    )
}