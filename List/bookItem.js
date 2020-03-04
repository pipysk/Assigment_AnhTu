import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, Modal, ImageBackground, TextInput } from 'react-native';

export default function bookItem({ item, handleDelete, Username }) {
    const [openModal, setOpenModal] = useState(false);

    const alerDelete = (id, handleDelete) => {
        return Alert.alert(
            `Delete ${item.name}`,
            "Do you want to delete this amazing book?",
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        handleDelete(item.id)
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => { }
                }
            ],
            { cancelable: true }
        )
    }

    return (
        <View>

            <View style={style.line}>
                <View style={style.row}>
                    <View style={style.images}>
                        <Image style={style.images} source={{ uri: item.image }} />
                    </View>

                    <View style={style.info}>
                        <Text style={style.name} >{`${item.name}`}</Text>
                        <Text>{`Category: ${item.category}`}</Text>
                        <Text>{`Chapter: ${item.totalChapters}`}</Text>
                        <Text>{`Full: ${item.isFull ? 'Yes' : 'No'}`}</Text>


                        <View style={style.row2}>
                            <TouchableOpacity style={style.btnDetail} onPress={() => setOpenModal(true)}>
                                <Text style={style.txt} >Detail</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.btnDelete} onPress={() => { alerDelete(item.id, handleDelete) }}>
                                <Text style={style.txt}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Modal visible={openModal}>
                <View style={style.viewModal}>
                    <View>
                        <ImageBackground style={style.imageModal} source={{ uri: 'https://i.pinimg.com/564x/55/3a/bd/553abde0f856c974b912e2f76faef721.jpg' }}>
                            <View style={style.bookCoverView} >
                                <Image style={style.bookCover} source={{ uri: item.image }} />
                                <Text style={style.txtCover}  >{item.name}</Text>
                            </View>
                        </ImageBackground>
                        <View style={style.underCover} >
                            <View style={style.txtUnderCover} >
                                <View style={style.iconView}>
                                    <Image style={style.icon} source={{ uri: 'https://img.icons8.com/dusk/50/000000/elective.png' }} />
                                </View>
                                <Text style={style.txtCate} >
                                    Category: {item.category}
                                </Text>

                                <Image style={style.icon} source={{ uri: 'https://img.icons8.com/dusk/64/000000/overview-pages-1.png' }} />
                                <Text style={style.txtCate} >
                                    Chapter: {item.totalChapters}
                                </Text>

                                <Image style={style.icon} source={{ uri: 'https://img.icons8.com/clouds/100/000000/download.png' }} />
                                <Text style={style.txtCate} >
                                    Full: {item.isFull ? 'Yes' : 'No'}
                                </Text>


                            </View>
                            <View>
                            </View>
                        </View>
                        <TouchableOpacity style={style.btnGoBack}
                            onPress={() => setOpenModal(false)}>
                            <Text numberOfLines={2} style={style.txtGoBack}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

        </View>

    )

}
const style = StyleSheet.create({
    imageBackground: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 16,
        width: '100%',
        height: 150,
        padding: 24,
    },
    icon: {
        height: 50,
        width: 50,
    },
    txtCate: {
        fontSize: 15,
    },
    txtGoBack: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        alignItems: 'center',
    },
    btnGoBack: {
        marginBottom: 18,
        justifyContent: 'center',
        height: 60,
        margin: 18,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#ea526f',
        backgroundColor: '#ea526f',
    },
    underCover: {
        alignItems: 'center',
        height: '35%',
        borderRadius: 30,
        margin: 16,
        marginTop: 86,
        backgroundColor: '#e4e4e4',
    },
    txtUnderCover: {
        alignItems: 'center',
        marginTop: 16,
        fontSize: 15,
        fontWeight: 'bold',
    },
    txtCover: {
        lineHeight: 50,
        fontWeight: 'bold',
        marginLeft: 9,
        fontSize: 22,
        color: 'white',
        marginTop: 190,
    },
    bookCover: {
        borderRadius: 20,
        borderWidth: 1,
        marginLeft: 18,
        marginTop: 160,
        height: 150,
        width: 100,
    },
    bookCoverView: {
        flexDirection: 'row',
        borderRadius: 20,
    },
    background: {
        backgroundColor: '#e5e5e5'
    },
    viewModal: {
        flex: 1,
    },
    imageModal: {
        width: "100%",
        height: 250,

    },
    line: {
        height: 140,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        marginTop: 24,
        borderRadius: 30,

    },
    row: {
        padding: 15,
        width: 380,
        flexDirection: 'row'

    },
    txt: {
        fontWeight: 'bold',
        color: '#ffff',
    },
    btnDetail: {
        width: 54,
        alignItems: 'center',
        borderColor: '#36abb5',
        backgroundColor: '#36abb5',
        color: 'white',
        borderRadius: 30,
        borderWidth: 1,
    },
    btnDelete: {
        width: 54,
        alignItems: 'center',
        borderColor: '#da0a0a',
        backgroundColor: '#da0a0a',
        color: 'white',
        borderRadius: 30,
        borderWidth: 1,
        marginLeft: 16,
    },
    row2: {
        color: 'white',
        alignItems: 'center',
        marginTop: 12,
        flexDirection: 'row'
    },
    name: {
        color: '#ea526f',
        fontWeight: 'bold',
    },
    images: {
        height: 100,
        width: 100,
        borderRadius: 20,
    },
    info: {
        marginLeft: 16,
    }
})