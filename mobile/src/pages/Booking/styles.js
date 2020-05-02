import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        paddingHorizontal: 30
    },

    label: {
        color: "#444",
        fontWeight: "bold"
    },

    input: {
        marginTop: 10,
        marginBottom: 20,
        height: 44,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 2,
        paddingHorizontal: 20
    },

    requestButton: {
        backgroundColor: "#f05a5b",
        height: 42,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },

    cancelButton: {
        backgroundColor: "#ccc"  
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    }
});

export default styles;