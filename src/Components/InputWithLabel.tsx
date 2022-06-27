/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
// import tailwind from 'tailwind-rn';
import { useTailwind } from 'tailwind-rn';


interface InputWithLabelProps {
    label?: string;
    placeholder?: string;
    value?: string;
    password?: boolean;
    type?: KeyboardTypeOptions;
    onChangeText: (value: string) => void;
    onBlur?: () => void;
    error?: boolean;
    errorDetails?: string;
}

export const InputWithLabel: React.FunctionComponent<InputWithLabelProps> = ({
    label,
    placeholder,
    value,
    password,
    type = 'default',
    onChangeText,
    onBlur,
    error = false,
    errorDetails,
}) => {

    const tailwind = useTailwind();

    return (
        <View>
            {!!label && (
                <Text style={tailwind('mb-1 text-sm text-gray-800')}>{label}</Text>
            )}
            <TextInput
                style={tailwind(`border ${error ? 'border-red-500' : 'border-gray-300'
                    }rounded-md px-3 py-1`
                )}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                secureTextEntry={password}
                keyboardType={type}
            />
            {!!error && (
                <Text style={styles.textError}>{errorDetails}</Text>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    textError: {
        color: 'red',
        marginBottom: 20,
    },
});
