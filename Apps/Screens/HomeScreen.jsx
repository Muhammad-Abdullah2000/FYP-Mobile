import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { client } from '../Utils/KindConfig';
import { AuthContext } from '../../App';
import Header from '../Components/Header';
import GlobalApi from '../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';
import SectionHeading from '../Components/SectionHeading';
import BlogList from '../Components/BlogList';
import BlogListVertical from '../Components/BlogListVertical';

export default function HomeScreen() {
  const { auth, setAuth } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [originalBlogList, setOriginalBlogList] = useState([]);

  useEffect(() => {
    getCategory();
    getCourseList();
  }, []);

  const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };

  const getCategory = () => {
    GlobalApi.getCategory().then(resp => {
      setCategories(resp?.categories || []);
    });
  };

  const getCourseList = () => {
    GlobalApi.getCourseList().then(resp => {
      const courseLists = resp?.courseLists || [];
      setCourseList(courseLists);
      setOriginalBlogList(courseLists);
    });
  };

  const getFilterBlogs = (tag) => {
    const result = courseList.filter((item) => {
      return Object.keys(tag).some(key => item.tag.includes(key));
    });
    return result;
  };

  const bl = {
    'reactjs': null,
    'nextjs': null,
    'firebase': null,
  };

  const filteredBlogs = getFilterBlogs(bl);

  const filterBlogList = (tag) => {
    const result = originalBlogList.filter((item) => item.tag.includes(tag));
    setCourseList(result);
  };

  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
      <Header />
      <CategoryList categories={categories} setSelectedCategory={(category) => filterBlogList(category)} />
      {/* All Latest Blogs */}
      <SectionHeading heading={'Latest Blogs'} />
      <BlogList blogList={courseList} />
      {/* React Blogs */}
      <SectionHeading heading={'React.Js Blogs'} />
      <BlogList blogList={filteredBlogs} />
      {/* Popular Blogs */}
      <SectionHeading heading={'Popular Blogs'} />
      <View style={{ marginBottom: 10 }}>
        <BlogListVertical blogList={courseList} />
      </View>
    </ScrollView>
  );
}
