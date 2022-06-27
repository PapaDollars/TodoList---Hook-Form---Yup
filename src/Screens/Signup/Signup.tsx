/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
    Box, Button,
    FormControl,
    NativeBaseProvider,
    Stack,
}
    from 'native-base';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { InputWithLabel } from '../../Components/InputWithLabel';


const Signup = ({ navigation }) => {

    // const onLogin = async () => {
    //     navigation.navigate('Login');
    // };

    type FormValues = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword:string,
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Veillez entrer votre prenom'),
        lastName: Yup.string().required('Veillez entrer votre nom'),
        email: Yup.string().email('Veillez entrer une adresse mail valide').required('Veillez saisir votre adresse mail'),
        password: Yup.string().min(6,'Veillez saisir au moins 6 caracteres').required('Veillez saisir un mot de passe '),
        confirmPassword: Yup.string().required('Veillezconfirmer votre mot de passe').oneOf([Yup.ref('password'),'Les mots de passe ne correspond pas']),
    }).required();

    const { control,clearErrors, handleSubmit, formState: { errors } } = useForm<FormValues>({
        mode:'onSubmit',
        resolver: yupResolver(validationSchema),
    });

    const signup = () => {
        clearErrors();
        console.log('create account');
        navigation.navigate('Login');
    };

    return (
        <>
            <View style={styles.container}>
                <NativeBaseProvider>
                    <ScrollView maxW="300" h="80" _contentContainerStyle={{
                        px: '20px',
                        mb: '4',
                        minW: '72',
                    }}>

                        <Stack padding={50} space={2.5} alignSelf="center" px="6" safeArea mt="8" w={{
                            base: '100%',
                        }}>

                            <FormControl.Label>Prenom</FormControl.Label>
                            <Controller control={control} name="firstName" render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <InputWithLabel
                                    value={value}
                                    placeholder="daniel"
                                    error={!!error}
                                    errorDetails={error?.message}
                                    // onBlur={onBlur}
                                    onChangeText={onChange}
                                />
                            )} />

                            <FormControl.Label>Nom</FormControl.Label>
                            <Controller control={control} name="lastName" render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <InputWithLabel
                                    value={value}
                                    placeholder="daniel"
                                    onChangeText={onChange}
                                    error={!!error}
                                    errorDetails={error?.message}
                                    // onBlur={onBlur}
                                />
                            )} />

                            <FormControl.Label>Adresse mail</FormControl.Label>
                            <Controller control={control} name="email" render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <InputWithLabel
                                    value={value}
                                    placeholder="Example@mail.com"
                                    onChangeText={onChange}
                                    type="email-address"
                                    error={!!error}
                                    errorDetails={error?.message}
                                    // onBlur={onBlur}
                                />
                            )} />

                            <FormControl.Label>Password</FormControl.Label>
                            <Controller control={control} name="password" render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <InputWithLabel
                                    value={value}
                                    placeholder="******"
                                    onChangeText={onChange}
                                    password
                                    error={!!error}
                                    errorDetails={error?.message}
                                    // onBlur={onBlur}
                                />
                            )} />
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Controller control={control} name="confirmPassword" render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <InputWithLabel
                                    value={value}
                                    placeholder="******"
                                    onChangeText={onChange}
                                    password
                                    error={!!error}
                                    errorDetails={error?.message}
                                    // onBlur={onBlur}
                                />
                            )} />
                        </Stack>
                        {/* <Box alignItems="center"  > */}
                            {errors && Object.keys(errors).length  < 0 && <Text style={styles.textError} >Veillez remplir tous les champs</Text>}
                            <Button onPress={handleSubmit(signup)}>Sign up</Button>
                        {/* </Box> */}
                    </ScrollView>
                </NativeBaseProvider>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#2c3e50',
    },
    textError: {
        color: 'red',
        marginBottom: 20,
    },
});


export default Signup;
