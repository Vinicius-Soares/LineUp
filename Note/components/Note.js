import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Note = (props) => 
{

    return (
        <View style={StyleSheet.item}>
                <View style={styles.itemLeft}>
                    <Text style={styles.intemText}>{props.text}</Text>
                </View>
                <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap',
    },
    intemText: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        maxWidth: '100%',
        borderColor: 'blue',
        borderWidth: 2,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }, 
});

export default Note;
