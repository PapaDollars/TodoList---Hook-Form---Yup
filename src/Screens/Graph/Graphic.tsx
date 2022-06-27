/* eslint-disable prettier/prettier */
import { NativeBaseProvider, Box, Center, HStack, Icon } from 'native-base';
import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const Graphic = ({ navigation }) => {
    const [selected, setSelected] = React.useState(2);

    const onSetting = async () => {
        navigation.navigate('Setting');
    };
    const onHome = async () => {
        navigation.navigate('Home');
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
                                    <Icon onPress={onHome} mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="md" />
                                    <Text style={styles.color}>
                                        Home
                                    </Text>
                                </Center>
                            </Pressable>
                            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="3" flex={2} onPress={() => setSelected(2)}>
                                <Center>
                                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? 'cart' : 'cart-outline'} />} color="white" size="md" />
                                    <Text style={styles.color} >
                                        Cart
                                    </Text>
                                </Center>
                            </Pressable>
                            <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                                <Center>
                                    <Icon onPress={onSetting} mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'account' : 'account-outline'} />} color="white" size="md" />
                                    <Text style={styles.color}>
                                        Account
                                    </Text>
                                </Center>
                            </Pressable>
                        </HStack>
                    </Box>
                    <Text>Graphic</Text>

                </NativeBaseProvider>
            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
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

//make this component available to the app
export default Graphic;
