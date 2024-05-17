
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IReview } from './ICourse';
type Props = {
    data: IReview;
};
export default function Review({ data }: Props) {
    return (
        <View style={styles.container}>

            <Text>Name: {data.name},  Comment:{data.comment}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {

    }
});
