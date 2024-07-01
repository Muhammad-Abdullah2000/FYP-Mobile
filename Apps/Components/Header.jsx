import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../Utils/KindConfig'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const user = await client.getUserDetails();
        // console.log(user);
        setUserDetails(user);
    }


    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>

                <Image source={{ uri: userDetails?.picture }}
                    style={{ width: 45, height: 45, borderRadius: 99 }}
                />

                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'outfit' }}>Welcome,</Text>
                    <Text style={{ fontSize: 20, color: Colors.PRIMARY, fontFamily: 'outfit-bold', fontWeight: 'bold' }}>Hello {userDetails?.family_name} </Text>

                </View>

            </View>

            {/* <View style={styles.input}>
                <Ionicons name="search" size={24} color={Colors.GRAY} />
                <TextInput placeholder='Search' style={{ fontFamily: 'outfit', width: '100%' }} />
            </View> */}


        </>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 99,
        paddingHorizontal: 20,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY,
    }
})