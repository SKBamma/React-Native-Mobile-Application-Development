import React, { useContext, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { ICourse } from './ICourse';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { GlobalContext } from '../context/context';

export default function Addcourse({ navigation, route }: any) {
    const [addCourse, setAddCourse] = useState<ICourse>({
        title: '', faculty: '', code: '', rating: 5, reviews: [], id: nanoid(),
    });

    const { state, setState } = useContext(GlobalContext);

    const onaddCourse = async () => {
        try {
            const res = await axios.post("http://localhost:9000/courses", addCourse);
            if (res.status === 201) {
                setState([...state, res.data]);
            }
        } catch (error) {

        }
        navigation.navigate('course-list');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textheder}>Add New Course</Text>

            <TextInput placeholder='Tiitle' style={styles.input}
                value={addCourse.title}
                onChangeText={(text: string) => setAddCourse({ ...addCourse, title: text })} />

            <TextInput placeholder='Faculty' style={styles.input}
                value={addCourse.faculty}
                onChangeText={(text: string) => setAddCourse({ ...addCourse, faculty: text })} />

            <TextInput placeholder='Code' style={styles.input}
                value={addCourse.code}
                onChangeText={(text: string) => setAddCourse({ ...addCourse, code: text })} />

            <Pressable style={styles.pressableButton} onPress={onaddCourse}>

                <Text>Submit</Text>
            </Pressable>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textheder: {
        margin: 10,
        fontSize: 18
    },
    input: {
        padding: 5,
        margin: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: '60%'
    },
    pressableButton: {
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        width: '30%',
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    buttonText: {

    }
});