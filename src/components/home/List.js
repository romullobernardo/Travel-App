import React from 'react'
import { StyleSheet, FlatList, ImageBackground, Image } from 'react-native'
import * as theme from '../../styles/theme'
import { View, Text } from '../index'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { dataArray } from '../../data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'


const styles = StyleSheet.create(
{
    card:
    {
        flex: 1,
        height: 235.5,
    },

    user:
    {
        position: 'absolute',
        top: 20,
        left: 20,
    },

    avatarBackground:
    {
        width: 38,
        height: 38,
        borderRadius: 38 / 2,
        backgroundColor: theme.colors.white,
    },

    avatar:
    {
        width: 32,
        height: 32,
        borderRadius: 32 / 2,
    },

    heart:
    {
        position: 'absolute',
        right: 30,
        top: 25
    },

    bookmark:
    {
        position: 'absolute',
        right: 32,
        top: 55
    },

    play:
    {
        width: 46,
        height: 46,
        borderRadius: 23,
    },

    subCard:
    {
        position: 'absolute',
        bottom: -14,
        left: '50%',

        marginLeft: -(258.75 / 2),
        paddingHorizontal: 30,

        height: 60,
        width: 258.75,

        borderRadius: 20,
    },
})

renderSubcard = () =>

    <View 
        row
        centerCross
        color='white'
        flex={false}
        style={ styles.subCard }
    >

        <View row space='between'>

            <View row>
                <FontAwesome 
                    size={18} 
                    color={theme.colors.primary} 
                    name='heart-o' 
                />

                <Text gray3 style={{ fontSize: 12 }}> 
                    {' '}120.5k 
                </Text>
            </View>

            <View row centerMain style={{ marginLeft: 12 }}>
                <MaterialCommunityIcons 
                    size={18} 
                    color={theme.colors.gray3} 
                    name='comment-processing-outline' 
                />

                <Text 
                    style={{ fontSize: 12 }} 
                    gray3
                > 
                    {' '}530 
                </Text>
            </View>

            <View row flexEndMain>
                <Feather 
                    size={18} 
                    color={theme.colors.gray3} 
                    name='share-2' 
                />

                <Text 
                    style={{ fontSize: 12 }}  
                    gray3
                > 
                    {' '}22 
                </Text>
            </View>

        </View>

    </View>


export default () => 

    <FlatList
        flex={1}
        data={dataArray}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => 
        (
            <View margin>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.card}
                    imageStyle={{ borderRadius: 40, }}
                    source={{ uri: item.item.image }}
                >

                    <View 
                        row 
                        style={styles.user}
                    >
                        <View row flex={0.15}>
                            <View 
                                flex={false} 
                                style={ styles.avatarBackground }
                                centerCross
                                centerMain
                            >
                                <Image 
                                    style={styles.avatar}
                                    source={{ uri: item.item.avatar}} 
                                />
                            </View>
                        </View>

                        <View>
                            <Text h3> {item.item.name} </Text>
                            <Text subtitle> {item.item.time} HOURS AGO </Text>
                        </View>

                    </View>


                    <FontAwesome 
                        size={16} 
                        color={theme.colors.primary} 
                        name='heart' 
                        style={styles.heart} 
                    />

                    <FontAwesome 
                        size={16} 
                        color={theme.colors.white} 
                        name='bookmark' 
                        style={styles.bookmark} 
                    />


                    <View centerMain>
                        <View 
                            row 
                            flex={0.2} 
                            style={{ paddingHorizontal: 40 }}
                        >

                            <View flex={0.4} centerCross>
                                <View 
                                    color='white'
                                    flex={false}
                                    style={ styles.play }
                                    centerMain
                                    centerCross
                                >
                                    <FontAwesome 
                                        size={theme.sizes.h3} 
                                        color={theme.colors.primary} 
                                        name='play' 
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text h3> {item.item.desc}  </Text>
                                
                                <View 
                                    style={{ marginVertical: 5 }}
                                >
                                    <Text subtitle> {item.item.city}  </Text>
                                </View>
                            </View>

                        </View>
                    </View>


                    { this.renderSubcard() }

                </ImageBackground>
            </View>
        )}
    />

