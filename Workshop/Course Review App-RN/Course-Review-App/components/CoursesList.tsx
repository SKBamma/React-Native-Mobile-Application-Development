import React, { useContext, useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, View, FlatList, Text, TextInput } from 'react-native';

import Course from './Course';
import Header from './Header.web';
import { ICourse } from './ICourse';
import { GlobalContext } from '../context/context';




export default function CoursesList() {
    const { data } = useContext(GlobalContext);

    const [search, setSearch] = useState<string>('');
    const [displayData, setDisplayData] = useState<ICourse[]>(data);

    const onSearch = (text: string) => {
        const arr = data.filter((dt) => dt.title.toLowerCase().includes(text.trim().toLowerCase()));
        setDisplayData(arr);
        setSearch(text);
    };

    return (
        <SafeAreaView style={styles.container}>

            <Header />
            <Text style={styles.text}>Course Review</Text>
            <TextInput placeholder='Search tittle..' style={styles.input}
                value={search} onChangeText={onSearch} />

            <FlatList
                data={displayData}
                renderItem={({ item, index }) => <Course index={index} data={item} />}
                keyExtractor={(item: ICourse) => item.code}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        paddingBottom: 30
    },
    text: {
        margin: 20,
        fontSize: 25,
        color: 'blue',
        textAlign: 'center'
    },
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    },
});
