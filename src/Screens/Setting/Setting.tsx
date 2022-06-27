/* eslint-disable prettier/prettier */
import {
    Center,
    NativeBaseProvider,
    Image, Modal, Button,
    FormControl, Input, Box, HStack, Icon,
}
    from 'native-base';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Picture from './Picture';

// create a component
const Setting = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = React.useState(3);


    const onPicture = async () => {
        navigation.navigate('Picture');
    };
    const onHome = async () => {
        navigation.navigate('Home');
      };
      const onGraphic = async () => {
        navigation.navigate('Graphic');
      };

    return (
        <>
            <View style={styles.container}>
                <NativeBaseProvider>
                    <Box safeAreaTop style={styles.Box}>
                        <Center flex={1}></Center>
                        <HStack safeAreaBottom style={styles.Box}>
                            <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                                <Center>
                                    <Icon  onPress={onHome} mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="md" />
                                    <Text style={styles.color}>
                                        Home
                                    </Text>
                                </Center>
                            </Pressable>
                            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="3" flex={2} onPress={() => setSelected(2)}>
                                <Center>
                                    <Icon onPress={onGraphic} mb="1" as={<MaterialCommunityIcons name={selected === 1 ? 'cart' : 'cart-outline'} />} color="white" size="md" />
                                    <Text style={styles.color} >
                                        Cart
                                    </Text>
                                </Center>
                            </Pressable>
                            <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                                <Center>
                                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'account' : 'account-outline'} />} color="white" size="md" />
                                    <Text style={styles.color}>
                                        Account
                                    </Text>
                                </Center>
                            </Pressable>
                        </HStack>
                    </Box>
                  
                    <TouchableOpacity onPress={onPicture} >
                        <Text>Select Image</Text>
                    </TouchableOpacity>

                    <Center style={styles.photo}>
                        <Image size={150} alt="fallback text" borderRadius={100} source={{
                            uri: 'https://wallpaperaccess.com/full/317501.jpg',
                        }} />
                    </Center>
                    <Center>
                        <Button size="lg" variant="ghost" colorScheme="pink"
                            onPress={() => setShowModal(true)}
                        >
                            Edit
                        </Button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px">
                                <Modal.CloseButton />
                                <Modal.Header>Editing</Modal.Header>
                                <Modal.Body>
                                    <FormControl>
                                        <FormControl.Label>Last Name</FormControl.Label>
                                        <Input />
                                    </FormControl>
                                    <FormControl mt="3">
                                        <FormControl.Label>First Name</FormControl.Label>
                                        <Input />
                                    </FormControl>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setShowModal(false);
                                        }}>
                                            Cancel
                                        </Button>
                                        <Button onPress={() => {
                                            setShowModal(false);
                                        }}>
                                            Save
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>

                    <Text style={styles.fontSize}>dollars</Text>
                    <Text style={styles.fontSize}>daniel iya</Text>

                </NativeBaseProvider>

            </View>

        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    // containers: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     // marginTop: 150,
    //     padding: 20,
    //     backgroundColor: '#fa983a',
    // },
    fontSize: {
        fontSize: 20,
        paddingTop: 20,
    },
    photo: {
        paddingTop: 100,
        paddingBottom: 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808e9b',
    },
    color: {
        color: '#ffffff',
        fontSize: 12,
    },
    Box: {
        backgroundColor: '#2f3542',
        width: '100%',
        maxW: '300px',
        padding: 5,
    },
    HStack: {
        bg: 'indigo.600',
        alignItems: 'center',
        shadow: 6,
    },
});

export default Setting;
