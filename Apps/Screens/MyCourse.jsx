import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'
import GetAllBlogs from '../Components/GetAllBlogs';

export default function MyCourse() {


  const [allBlogs, setAllBlogs] = useState();


  useEffect(() => {
    getAllBlogs();
  }, [])

  const getAllBlogs = () => {
    GlobalApi.getAllCourses().then(resp => {
      setAllBlogs(resp?.courseLists);
    })
  }


  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 27, marginBottom:10 }}>All Blogs</Text>

      {/* List of Blogs */}

      <FlatList
        data={allBlogs}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <GetAllBlogs AllBlogs={item} />
        )}
      />


    </View>
  )
}