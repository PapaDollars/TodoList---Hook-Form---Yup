/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { NativeBaseProvider, Box, Center, HStack, Icon, VStack, Input, Checkbox, Heading, IconButton, useToast } from 'native-base';
import React from 'react';
import { View, StyleSheet, Pressable, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Home = ({ navigation }) => {
  const [selected, setSelected] = React.useState(0);

  const onSetting = async () => {
    navigation.navigate('Setting');
  };
  const onGraphic = async () => {
    navigation.navigate('Graphic');
  };

  const [InputBoxValue, setInputBoxValue] = React.useState('');
  const [storageList, setStorageList] = React.useState('');

  const addItemToList = async () => {
    try {
      await AsyncStorage.setItem('itemList', InputBoxValue);
      setInputBoxValue('');
      await getItemList('');

      alert('Tache ajouter avec Succes');
    } catch (err) {
      console.log(err);
    }
  };

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');
      console.log(data);
      setStorageList(data);
    } catch (err) {
      console.log(err);
    }
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
                  <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="md" />
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
                  <Icon onPress={onSetting} mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'account' : 'account-outline'} />} color="white" size="md" />
                  <Text style={styles.color}>
                    Account
                  </Text>
                </Center>
              </Pressable>
            </HStack>
          </Box>
          <Text>Home</Text>
          {/* 
          <Center>
            <Box height="200" w="400" shadow="2" rounded="lg" _dark={{
              bg: 'coolGray.200:alpha.20',
            }} _light={{
              bg: 'coolGray.200:alpha.20',
            }}>
              <Fab style={styles.Fab} icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} />
            </Box>
          </Center> */}

          <TextInput style={styles.inputBox}
            value={InputBoxValue}
            placeholder="Entrer le Titre de la Tache"
            onChangeText={(value: React.SetStateAction<string>) => setInputBoxValue(value)} />

          <TouchableOpacity style={styles.addButton} onPress={() => addItemToList()} >
            <Text style={{ color: '#009432' }}>Add  Tache</Text>
          </TouchableOpacity>

          <Text>Votre Tache {storageList} </Text>


        </NativeBaseProvider>
      </View>
    </>
  );
};

const { width } = Dimensions.get('screen');

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
  Fab: {
    renderInPortal: false,
    shadow: 2,
    right: 70,
    bottom: 50,
    size: 'sm',
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  addButton: {
    width: width - 20,
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    width: 100,
    flexShrink: 1,
    textAlign: "left",
    mx: 2,
  }
});

//make this component available to the app
export default Home;
