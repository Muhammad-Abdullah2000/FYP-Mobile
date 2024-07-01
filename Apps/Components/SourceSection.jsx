import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Clipboard, Alert } from 'react-native';

export default function SourceSection({ blog }) {
    const handlePress = () => {
        if (blog?.youtubeUrl) {
            Linking.openURL(blog.youtubeUrl)
                .catch(() => {
                    Clipboard.setString(blog.youtubeUrl);
                    Alert.alert('URL copied to clipboard');
                });
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={{ marginTop: 40, marginBottom: 30, alignItems: 'center', justifyContent: 'center', height: 200 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '90%' }}>
                <Image source={require('../../assets/Images/youtube.png')} style={{ width: 250, height: 250 }} />
            </View>

            {blog?.youtubeUrl &&
                <>
                    <Text>{blog.youtubeUrl}</Text>
                    <TouchableOpacity onPress={() => Clipboard.setString(blog.youtubeUrl)}>
                        <Text style={{ textDecorationLine: 'underline', marginTop: 10 }}>Copy URL</Text>
                    </TouchableOpacity>
                </>
            }
            {!blog?.youtubeUrl &&
                <Text>No URL</Text>
            }
        </TouchableOpacity>
    );
}
