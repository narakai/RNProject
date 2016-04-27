/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton.js';
import NoteScreen from './App/Components/NoteScreen';

class RNProject extends React.Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'home':
                return (
                    <View style={styles.container}>
                        <SimpleButton
                            onPress={() => {
                            navigator.push({name: 'createNote'});
                            }}
                            customText='Create Note'
                        />
                    </View>
                );
            case 'createNote':
                return (
                    <NoteScreen />
                );
        }
    }

    render() {
        return (
            <Navigator initialRoute={{name: 'home'}} renderScene={this.renderScene}/>
            //<View style={styles.container}>
            //    <SimpleButton/>
            //</View>
            //  <View style={styles.container}>
            //    <Text style={styles.welcome}>
            //      Welcome to React Notes!
            //    </Text>
            //    <Text style={styles.instructions}>
            //      To get started, edit index.ios.js
            //    </Text>
            //    <Text style={styles.instructions}>
            //      Press Cmd+R to reload,{'\n'}
            //      Cmd+D or shake for dev menu
            //    </Text>
            //  </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
    //welcome: {
    //  fontSize: 20,
    //  textAlign: 'center',
    //  margin: 10,
    //},
    //instructions: {
    //  textAlign: 'center',
    //  color: '#333333',
    //  marginBottom: 5,
    //},
});

AppRegistry.registerComponent('RNProject', () => RNProject);
