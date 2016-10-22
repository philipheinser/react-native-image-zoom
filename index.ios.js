import React,{Component} from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
//Add a Touchable wrapper for your Image!
export default class ImageViewZoom extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
          maximumZoomScale={this.props.maximumZoomScale}
          minimumZoomScale={this.props.minimumZoomScale}
          contentContainerStyle={{ alignItems:'center', justifyContent:'center'}}
          centerContent={true}>
          <Image {...this.props}/>
        </ScrollView>
      </View>
    );
  }
}
