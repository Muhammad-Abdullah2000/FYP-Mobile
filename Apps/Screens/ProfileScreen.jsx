import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { client } from '../Utils/KindConfig'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../App';

export default function ProfileScreen() {

  const [userDetails, setUserDetails] = useState();

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    getUserDetails();
  }, [])

  const getUserDetails = async () => {
    const user = await client.getUserDetails();
    setUserDetails(user);
  };

  const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }

  };


  return (
    <View style={{ padding: 20, marginTop: 20 }}>

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 27 }}>Profile</Text>

      <View style={{ marginTop: 5, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: userDetails?.picture }} style={{ width: 200, height: 200, borderRadius: 99 }} />
      </View>

      <View style={{ marginTop: 5, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 5 }}>

        <View style={{ width: '90%', height: 50, display: 'flex', alignItems: 'center', gap: 50, flexDirection: 'row' }}>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, color: Colors.PRIMARY }}>First Name</Text>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, }}>{userDetails?.given_name}</Text>

        </View>

        <View style={{ width: '90%', height: 50, display: 'flex', alignItems: 'center', gap: 50, flexDirection: 'row' }}>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, color: Colors.PRIMARY }}>Last Name</Text>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, }}>{userDetails?.family_name}</Text>

        </View>

        <View style={{ width: '90%', height: 50, display: 'flex', alignItems: 'center', gap: 30, flexDirection: 'row' }}>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, color: Colors.PRIMARY }}>Email</Text>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 15, }}>{userDetails?.email}</Text>

        </View>

        <View style={{ width: '90%', height: 50, display: 'flex', alignItems: 'center', gap: 50, flexDirection: 'row' }}>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, color: Colors.PRIMARY }}>id</Text>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 10, }}>{userDetails?.id}</Text>

        </View>

        <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: Colors.PRIMARY, width: '90%', height: 50, display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center', flexDirection: 'row', borderRadius: 10 }}>

          <Ionicons name="power" size={24} color={Colors.WHITE} />

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 18, color: Colors.WHITE }}>Log Out</Text>

        </TouchableOpacity>


      </View>



    </View>
  )
}