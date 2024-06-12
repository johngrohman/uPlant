import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Settings() {
    return (
        <View>
            <Text>Settings</Text>
            <Link href='/index' asChild></Link>
        </View>
    );
}
