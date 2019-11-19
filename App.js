import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, Button } from 'react-native';
import Video from 'react-native-video';


const { width, height } = Dimensions.get("window");
export default class App extends Component {

  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'transparent' }}>
          <Video source={{uri: 'https://videobucketoftalentapp.s3-us-west-1.amazonaws.com/All+over+in+10+seconds.mp4'}}   // Can be a URL or a local file.
                 muted={false}
                 repeat={true}
                 resizeMode={"cover"}
                 style={styles.backgroundVideo}/>

          <View style={{
              justifyContent: 'space-between',
              padding: 20,
              alignItems: 'center',
              flexDirection: 'column'}}>
              <Text style={{ color: 'red', fontWeight: 'bold'}}>yyyyyyyyyyyy</Text>
          </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    }
});
