import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Alert} from "react-native";  
import styles from "./styles";
import api from "../../services/api";

function Booking({navigation}) {
    const [date, setDate] = useState("");

    const spot_id = navigation.getParam("spot_id");

    async function handleRequest() {
        const user_id = await AsyncStorage.getItem("user_id");
        
        await api.post(`/spots/${spot_id}/bookings`, {
            date
        }, {
            headers: {
                user_id
            }
        });

        Alert.alert("Solicitação de reserva enviada com sucesso!");

        navigation.navigate("List");
    }

    function handleCancel() {
        navigation.navigate("List");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                onChangeText={(text) => {setDate(text)}}
                value={date}
            />
            <TouchableOpacity onPress={handleRequest} style={styles.requestButton}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={[styles.requestButton, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Booking;