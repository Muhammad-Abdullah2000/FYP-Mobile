import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RelatedBlogVertical from './RelatedBlogVertical';
import SectionHeading from './SectionHeading';

export default function RelatedBlogs({ RBl }) {

    return (
        <View style={{marginBottom:50}}>

             <SectionHeading heading={'Related Blogs'}/>


            <FlatList
                data={RBl}
                renderItem={({ item, index }) => (
                    <RelatedBlogVertical RelatedBlogsForPeople={item} />
                )}
            />
        </View>
    )
}