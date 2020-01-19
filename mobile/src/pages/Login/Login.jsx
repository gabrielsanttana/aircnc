import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, KeyboardAvoidingView } from "react-native";
import logo from "../../../assets/logo.png"
import styles from "./styles";
import api from "../../services/api";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [techs, setTechs] = useState("");

    async function handleSubmit() {
        const response = await api.post("/sessions", {email});

        const { _id: user_id } = response.data;

        await AsyncStorage.setItem("user_id", user_id);
        await AsyncStorage.setItem("techs", techs);

        navigation.navigate("List");
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => {setEmail(text)}}
                    value={email}
                />
                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={(text) => {setTechs(text)}}
                    value={techs}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}