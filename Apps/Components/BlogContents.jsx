import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import SectionHeading from './SectionHeading'
import Colors from '../Utils/Colors'

export default function BlogContents({ blog }) {

    return (
        <View style={{ marginBottom: 10 }}>
            <SectionHeading heading={'Contents'} />
            <FlatList
                data={blog?.chapter}
                renderItem={({ item, index }) => (

                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 15, borderWidth: 0.5, marginBottom: 10, borderRadius: 10 }}>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>

                            <Text style={{ fontSize: 17, fontFamily: 'outfit', padding: 10, backgroundColor: Colors.PRIMARY_LIGHT, borderRadius: 99, width: 40, height: 40, textAlign: 'center', color: Colors.PRIMARY }}>{index + 1}</Text>

                            <Text style={{ fontFamily: 'outfit-medium', fontSize: 17 }}>{item.name}</Text>


                        </View>

                    </TouchableOpacity>
                )}
            />
        </View>
    )
}