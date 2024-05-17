import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

type Props = {
    value: number,
    selectedValue: number,
    setSelectedValue: (selectedValue: number) => void;
};
export default function Starbutton({ value, selectedValue, setSelectedValue }: Props) {
    const handlePress = () => {
        setSelectedValue(value);
    };
    const color = value <= selectedValue ? 'gold' : 'grey';
    return (
        <Pressable onPress={handlePress}>
            <AntDesign name="star" size={40} color={color} />
        </Pressable>
    );
}
