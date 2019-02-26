import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CardView from 'react-native-cardview'
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../utils/ColorsUtils';

class GridViewItemView extends Component {
    render() {
        const { item, onItemClick } = this.props;
        return (


            <CardView
                style={{
                    flex: 1,
                    backgroundColor: Colors.very_light_gray,
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20
                }}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <TouchableOpacity
                    onPress={() => onItemClick(item)}
                    style={{justifyContent:"center", alignItems:"center"}}>
                <Icon
                    name="diamond"
                    size={20}
                    style={{ color: 'gray' }} />


                <Text style={{ textAlign: "center", marginTop: 10, }}>
                    {item}
                </Text> 
                </TouchableOpacity>

            </CardView>

        )
    }
}

export default GridViewItemView
