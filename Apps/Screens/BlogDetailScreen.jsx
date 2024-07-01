import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BlogIntro from '../Components/BlogIntro';
import SourceSection from '../Components/SourceSection';
import BlogContents from '../Components/BlogContents';
import GlobalApi from '../Utils/GlobalApi';
import RelatedBlogs from '../Components/RelatedBlogs';


export default function BlogDetailScreen() {

  const navigation = useNavigation();
  const { params } = useRoute();

  const [blog, setBlog] = useState();
  const [related, setRelated] = useState([]);
  


  useEffect(() => {
    setBlog(params.blog);
  }, [params]);

  useEffect(() => {
    getRelated();
  }, []);


  const getRelated = () => {
    GlobalApi.getRelatedCourseList().then(resp => {
      setRelated(resp?.courseLists);
    })
  };


  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 50 }}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 25, fontFamily: 'outfit-bold' }}>Blog Detail</Text>
      </View>

      <BlogIntro blog={blog} />

      <SourceSection blog={blog} />

      <BlogContents blog={blog} />

      <RelatedBlogs RBl={related}/>



    </ScrollView>
  )
}