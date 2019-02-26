import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import GridViewItemView from '../../common/components/GridViewItemView';
import Colors from '../../../utils/ColorsUtils';


const dummyData = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];
class ServiceTabComponent extends Component {


    onGridItemClick = (item) =>{
        console.log("Item clicked --->>", item); 
    }
    
    renderGridItem = ({item}) => {
        return (
            <GridViewItemView item={item}  onItemClick={this.onGridItemClick} />
        );
    }
 
    render() {
        return ( 
            <View style={{ flex: 1 ,flexDirection:"column",   }}> 

                <View style={{backgroundColor:Colors.very_light_gray, padding:15, marginTop:20, borderWidth:0.5, borderColor:'#000', marginHorizontal:'30%' }}>
                    <Text style={{textAlign:"center"}}>AADHAAR LOGO</Text>
                </View>

                <View style={{backgroundColor:Colors.very_light_gray, padding:25, marginTop:15, borderWidth:0.5, borderColor:'#000', marginHorizontal:'20%', borderRadius:5 }}>
                    <Text style={{textAlign:"center"}}>Register m-Aadhaar</Text>
                </View>


                <View style={{marginVertical:15, justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>SERVICES</Text>
                </View>

                <FlatList 
                data={dummyData}
                renderItem ={this.renderGridItem}
                numColumns={3}
                keyExtractor={(item,index) => index}
            />
           
            
            </View>
        )
    }
}

export default ServiceTabComponent
