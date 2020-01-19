import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import api from "../services/api";
import { withNavigation } from "react-navigation";

function SpotList({ tech, navigation }) {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get("/spots", { params: { tech } });
            setSpots(response.data);
        }

        loadSpots();
    }, []);

    function handleRequest(spot_id) {
        navigation.navigate("Booking", { spot_id });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>
            <FlatList
                horizontal
                style={styles.flatlist}
                data={spots}
                keyExtractor={spot => spot._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: item.thumbnail_url}} />
                        <Text style={styles.company}>{item.company} </Text>
                        <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : "GRATUITO"} </Text>
                        <TouchableOpacity onPress={() => handleRequest(item._id)} style={styles.button}><Text style={styles.buttonText}>Solicitar reserva</Text></TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },

    flatlist: {
        paddingHorizontal: 20
    },

    title: {
        fontSize: 20,
        color: "#444",
        marginBottom: 20,
        paddingHorizontal: 20
    },

    bold: {
        fontWeight: "bold"
    },

    listItem: {
        marginRight: 25
    },

    thumbnail: {
        width: 200,
        height: 120,
        borderRadius: 4,
        marginBottom: 10
    },

    company: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#444"
    },

    price: {
        color: "#999"
    },

    button: {
        marginTop: 10,
        height: 38,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f05a5b",
        color: "#fff"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    }

});

export default withNavigation(SpotList);