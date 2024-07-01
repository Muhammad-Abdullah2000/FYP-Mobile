import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BlogItem from './BlogItem'

export default function BlogList({ blogList }) {
    return (
        <View>
            <FlatList
                data={blogList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <BlogItem blog={item} />
                )}
            />
        </View>
    )
}