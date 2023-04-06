import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, { Circle, Path } from 'react-native-svg';
import { getPathDown } from './path';
import { scale } from 'react-native-size-scaling';
var { width, height } = Dimensions.get('window')

interface Props {
    active: string;
}

const TabBar: React.FC<Props> = ({
    active
}) => {
    const returnPath = getPathDown(width, 65, 65, false, "CENTER")
    
    return (
        <View style={{
           height:90,elevation:5, position:'absolute', left:0, width:'100%', top:height-65, zIndex:1000,
        }}>

            <View style={styles.footer}>
                
                <TouchableOpacity
                    style={[styles.item, {  }]}>
                    <Icon name={active == 'user' ? "user-alt" : "user"} size={20} color={active == 'user' ? 'blue' : 'gray'} />
                    <Text style={{ color: active == 'user' ? 'blue' : colors.grayText, fontSize: 10,fontFamily:'Poppins' }}>profil</Text>
                </TouchableOpacity>



                <TouchableOpacity
                    style={[styles.item, {  borderTopRightRadius: 32 }]}>
                    <Icon name={active == 'comments' ? "comments" : "comments"} size={20} color={active == 'comments' ? 'blue' : 'gray'} />
                    <Text style={{ color: active == 'comments' ? 'blue' : 'gray', fontSize: 10 ,fontFamily:'Poppins'}}mesajlar</Text>
                </TouchableOpacity>

                <TouchableOpacity        
                    style={[styles.item, { zIndex: -20 }]}>
                    <View style={{ width: 90, height: 90, borderRadius: 45, borderBottomRightRadius: 45, alignItems: 'center', justifyContent: 'center', position: 'relative', top:5, zIndex: 1 }}>
                        <View style={{ width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: active == 'home' ? 'blue' : 'white', }}>
                            <Image style={{ width: 45, height: 45, resizeMode: 'contain' }} source={active == 'home' ? require('../../../assets/images/homeIconWhite.png') : require('../../../assets/images/homeIconBlue.png')} />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 50, borderTopLeftRadius: 0, alignItems: 'center', justifyContent: 'center', position: 'relative', top: -20 }}>

                        <Svg width={width} height={scale(90)}>
                            <Path fill={'white'} {...{ d: returnPath }} />
                        </Svg>

                    </View>
                    <View style={{ zIndex: 4, position: 'relative', top: -56 }}><Text style={{ color: 'gray', fontSize: 10,fontFamily:'Poppins' }}>anasayfa</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, {  borderTopLeftRadius: 32 }]}>
                    <Icon name={active == 'calendar' ? "calendar-alt" : "calendar-alt"} size={20} color={active == 'calendar' ? 'blue' : 'gray'} />
                    <Text style={{ color: active == 'calendar' ? 'blue' : 'gray', fontSize: 10,fontFamily:'Poppins' }}>randevularim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, { }]}>
                    <Icon name={active == 'file' ? "file-alt" : "file-alt"} size={20} color={active == 'file' ? 'blue' : 'gray'} />
                    <Text style={{ color: active == 'file' ? 'blue' :'gray', fontSize: 10,fontFamily:'Poppins' }}>tibbi bilgilerim</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    )
}

export default TabBar

const styles = StyleSheet.create({
    footer: {

        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
    },
    item: {
        flex: 1, height: 90, alignItems: 'center', justifyContent: 'center',
        zIndex: 12

    }
})

