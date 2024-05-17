import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IReview } from '../components/ICourse';
import Review from './Review';
type Props = {
    data: IReview[];
};
export default function ReviewList({ data }: Props) {
    return (
        <ScrollView style={styles.container}>
            <Text>Reviews</Text>
            {
                data.map((review: IReview, index: number) =>
                    <Review data={review} key={index} />)
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignContent: 'center',
        margin: 10,
        padding: 5


    }
});