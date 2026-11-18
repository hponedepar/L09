import React from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity} from 'react-native';

const datasource = [
    {data: [
        {key: 'a'},
        {key: 'e'},
        {key: 'i'},
        {key: 'o'},
    ],
    title: "Vowels", bgcolor: "skyblue"},
    {data: [
        {key: 'b'},
        {key: 'c'},
        {key: 'd'},
        {key: 'f'},
        {key: 'g'},
        {key: 'h'},
        {key: 'j'},
        {key: 'k'},
        {key: 'l'},
        {key: 'm'},
        {key: 'n'},
        {key: 'p'},
        {key: 'q'},
        {key: 'r'},
        {key: 's'},
    ],
    title: "Consonants", bgcolor: "khaki"},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>L09 Exercise 2</Text>
            <SectionList contentContainerStyle={{padding: 10}} sections={datasource} renderItem={renderItem}
            renderSectionHeader={({section: {title, bgcolor}}) => (
                <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>
                    {title}
                </Text>
            )}/>
        </View>
    );
};

export default App;
