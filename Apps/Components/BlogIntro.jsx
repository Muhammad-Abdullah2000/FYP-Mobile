import React from 'react';
import { View, Text, Image } from 'react-native';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import SectionHeading from '../Components/SectionHeading';

export default function BlogIntro({ blog }) {




    if (!blog || !blog.banner || !blog.banner.url) {
        return (
            <View>
                <Text>No Image found</Text>
            </View>
        );
    }

    return (
        <View>
            <Image source={{ uri: blog.banner.url }} style={{ width: 320, height: 300, marginTop: 30 }} />

            <View style={{ display: 'flex', gap: 10 }}>
                <Text style={{ fontSize: 22, fontFamily: 'outfit-bold', marginTop:30 }}>{blog.name}</Text>

                <Text style={{ fontSize: 14, fontFamily: 'outfit', color: Colors.GRAY }}>{blog.author}</Text>

                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {blog?.chapter?.length ? <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        <Ionicons name="book" size={24} color={Colors.PRIMARY} />
                        <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>{blog?.chapter?.length} Chapters</Text>
                    </View> : null}

                    <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{blog.free ? 'Free' : 'Paid'}</Text>

                </View>

                <SectionHeading heading={'Description'} />
 

                <Text style={{ fontSize: 15, fontFamily: 'outfit-bold' }}>
                    {blog?.chapter && blog.chapter.length > 0 && blog.chapter[0].name}
                </Text>

                <Text>{blog.description}</Text>

                {blog?.chapter && blog.chapter.length > 1 && (
                    <Text style={{ fontSize: 15, fontFamily: 'outfit-bold' }}>
                        {blog.chapter[1].name}
                    </Text>
                )}

                {blog?.chapter && blog.chapter.length > 1 && (
                    <Text style={{ fontSize: 15, fontFamily: 'outfit' }}>
                        {blog.chapter[1].shortDesc}
                    </Text>
                )}

            </View>

        </View>
    );
}
