//自定义 actionSheet 组件
import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import PropTypes from 'prop-types';
const {width,height} =Dimensions.get('window');

class CustomActionSheet extends Component{
    static propTypes={
        items:PropTypes.array,
        itemStyle:PropTypes.object,
        actionTitleStyle:PropTypes.object,
        itemTitleStyle:PropTypes.object,
        modalTitle:PropTypes.string,
    };
    static defaultProps={
        items:[],
        itemStyle:{},
        actionTitleStyle:{},
        itemTitleStyle:{},
        modalTitle:''
    };

    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
        }
    }

    showModal(){
        this.setState({modalVisible:true})
    }

    cancelModal(){
        this.setState({modalVisible:false})
    }
    selectItem(item){

        this.props.callBackFunc(item);
        this.setState({modalVisible:false});
    }


    render(){
        let actionSheets = this.props.items.map((item,i)=>{
            return(
                <TouchableOpacity
                    key={i}
                    style={[styles.actionItem,this.props.itemStyle]}
                    onPress={()=>this.selectItem(item)}>
                    <Text style={[styles.actionItemTitle,this.props.itemTitleStyle]}
                    >{item}</Text>
                </TouchableOpacity>
            )
        });


        return <Modal animationType="slide"
                      visible={this.state.modalVisible}
                      transparent={true}
                      onRequestClose={()=>this.setState({modalVisible:false})}
        >
            <View style={styles.modalStyle}>
                <View style={styles.subView}>
                    {/*标题*/}
                    <View style={styles.itemContainer}>
                        {/*<Text style={[styles.actionTitle,this.props.actionTitleStyle]}*/}
                        {/*>{this.props.modalTitle}</Text>*/}
                        {/*actionSheet 列表*/}
                        {actionSheets}
                    </View>
                    {/*取消*/}
                    <View style={[styles.itemContainer,{marginTop:8}]}>
                        <TouchableOpacity
                            style={[styles.actionItem,this.props.itemStyle,{borderTopWidth:0}]}
                            onPress={()=>this.setState({modalVisible:false})}>
                            <Text style={[styles.actionItemTitle,this.props.itemTitleStyle]}>取消</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    }
}
const styles = StyleSheet.create({
    modalStyle:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1
    },
    subView:{
        justifyContent:'flex-end',
        alignItems:'center',
        alignSelf:'stretch',
        width:width,
    },
    itemContainer:{
        marginLeft:0,
        marginRight:0,
        marginBottom:0,
        // borderRadius:6,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    actionItem:{
        width:width,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#cccccc',
        borderBottomWidth:0.5,
    },
    actionTitle:{
        fontSize:13,
        color:'#808080',
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
    },
    actionItemTitle:{
        fontSize:16,
        color:'#444444',
        textAlign:'center',
    },
});
export default CustomActionSheet;