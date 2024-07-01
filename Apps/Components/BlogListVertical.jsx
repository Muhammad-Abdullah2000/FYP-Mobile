import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BlogItemVertical from './BlogItemVertical'

export default function BlogListVertical({ blogList }) {
    return (
        <View>
            <FlatList
                data={blogList}
                renderItem={({ item, index }) => (
                    <BlogItemVertical blog={item} />
                )}

            />
        </View>
    )
}