import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },

    form: {
        marginTop: 30,
        alignSelf: "stretch",
        paddingHorizontal: 30
    },

    label: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 10
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 2,
        height: 42,
        marginBottom: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
    },

    button: {
        marginTop: 5,
        height: 42,
        borderRadius: 2,
        backgroundColor: "#f05a5b",
        alignItems: "center",
        justifyContent: "center"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default styles;