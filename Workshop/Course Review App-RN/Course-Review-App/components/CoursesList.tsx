import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, View, FlatList, Text, TextInput, Pressable } from 'react-native';

import Course from './Course';
import Header from './Header.web';
import { ICourse } from './ICourse';
import { GlobalContext } from '../context/context';
import axios from 'axios';




export default function CoursesList({ navigation }: any) {
    const { state, setState } = useContext(GlobalContext);

    const [search, setSearch] = useState<string>('');
    const [displayData, setDisplayData] = useState<ICourse[]>(state);

    const onSearch = (search: string) => {
        let arr = state.filter((dt) =>
            dt.title.toLowerCase().includes(search.trim().toLowerCase()));
        console.log(arr);
        setSearch(search);
        setDisplayData(arr);
    };

    const onNavigateToAddCourse = () => {
        navigation.navigate('add-course', state);
    };

    useEffect(() => {
        setDisplayData(state);
    }), [state];


    return (
        <SafeAreaView style={styles.container}>

            <Header />
            <Text style={styles.text}>Course Review</Text>

            <TextInput placeholder='Search tittle..' style={styles.input}
                value={search} onChangeText={(text: string) => onSearch(text)} />

            <Pressable style={styles.pressable} onPress={onNavigateToAddCourse}>
                <Text style={styles.textPressabale}>Add Course</Text>
            </Pressable>

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
        margin: 10
    },
    pressable: {
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'lightgreen',

        borderColor: 'black',
        alignItems: 'center'
    },
    textPressabale: {
        fontSize: 20,
        padding: 5
    }
});
