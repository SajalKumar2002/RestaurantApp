import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' size={30} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        marginHorizontal: 15,
        marginBottom: 0,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,

    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15,

    }
})