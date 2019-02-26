import React, { Component } from 'react'
import { Text, View, Platform,TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating';
import Colors from '../../../utils/ColorsUtils';
import DeviceInfo from 'react-native-device-info';
import { TextInput } from 'react-native-gesture-handler';


class FeedbackComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      value: "",
      isRatingDone: false,
      isHappy: false,
      feedbackText: "",
      isFeedbackCompleted: false,


    }
  }

  onStarRatingPress(rating) {
    let result = "";
    let satisfied = false;


    if (rating == 2) {
      result = "Dissapointed";
      satisfied = false;
    } else if (rating == 3) {
      result = "It's OK";
      satisfied = false;
    } else if (rating == 4) {
      result = "Great";
      satisfied = true;
    } else if (rating == 5) {
      result = "Excellent";
      satisfied = true;
    } else {
      result = "";
      satisfied = false;
    }

    this.setState({

      starCount: rating,
      value: result,
      isHappy: satisfied,
      isRatingDone: true
    }, () => {

      setTimeout(() => {

      }, 500);

    });
  }

  submitRating =() => {
    console.log("Submit Rating");
    let feedbackRequestData = {
      
    }
    
  }

  renderRatingView() {

    return (
      <View style={{ flexDirection: "column", marginTop: 50 }}>
        <Text style={{ fontSize: Platform.OS == 'ios' ? 14 : 18, textAlign: "center", marginTop: 20 }}>How do you like the app experience ?</Text>

        <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          starSize={50}
          emptyStarColor={Colors.primary}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={Colors.primary}
          containerStyle={{ marginHorizontal: "15%", marginTop: 20 }}

        />
        <Text style={{ fontSize: Platform.OS == 'ios' ? 12 : 16, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>{this.state.value}</Text>

        <TextInput
          onChangeText={(text) => this.setState({ feedbackText: text })}
          value={this.state.feedbackText}
          style={{ borderColor: 'gray', borderWidth: 1, marginTop: 30, marginHorizontal: 30 }}
          editable={this.state.isRatingDone}
          multiline={true}
        />

        <TouchableOpacity
        style={{backgroundColor:Colors.primary,borderColor: 'gray', borderWidth: 0.5, marginTop: 20, marginHorizontal: 30, borderRadius:5, padding:10 }}
        
        onPress={() => this.state.isRatingDone?this.submitRating:null}
        >

        <Text style={{textAlign:"center", fontWeight:"bold",color:Colors.white}}>SUBMIT</Text>

        </TouchableOpacity>

      </View>
    );
  }



  render() {
    return (
      <View>
        {this.renderRatingView()}

      </View>
    )
  }
}

export default FeedbackComponent
