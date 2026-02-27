import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MedsScreen() {
    const medications = [
        { id: 1, name: "Acetaminophen", dosage: "500 mg", frequency: "2 pills / day", time: "08:00 AM" },
        { id: 2, name: "Ibuprofen", dosage: "200 mg", frequency: "1 pill / day", time: "10:00 PM" },
        { id: 3, name: "Amoxicillin", dosage: "250 mg", frequency: "3 pills / day", time: "01:00 PM" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#666" />
                    <TextInput style={styles.searchInput} placeholder="Search meds..." />
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="person-circle-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Your Medications</Text>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {medications.map((med) => (
                    <View key={med.id} style={styles.medCard}>
                        <View style={styles.medIconContainer}>
                            <Image
                                source={require("../../assets/images/meda.png")}
                                style={styles.medImage}
                            />
                        </View>
                        <View style={styles.medInfo}>
                            <Text style={styles.medName}>{med.name}</Text>
                            <Text style={styles.medDosage}>{med.dosage}</Text>
                            <Text style={styles.medFrequency}>{med.frequency}</Text>
                            <Text style={styles.medTime}>{med.time}</Text>
                        </View>
                        <TouchableOpacity style={styles.checkButton}>
                            <Ionicons name="checkmark-circle-outline" size={30} color="#000" />
                        </TouchableOpacity>
                    </View>
                ))}

                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={24} color="#fff" />
                    <Text style={styles.addButtonText}>Add medication</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
        gap: 10,
    },
    searchContainer: {
        flex: 1,
        height: 40,
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: "Inter_400Regular",
    },
    iconButton: {
        padding: 5,
    },
    title: {
        fontSize: 24,
        fontFamily: "Inter_700Bold",
        marginBottom: 20,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    medCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    medIconContainer: {
        width: 60,
        height: 60,
        backgroundColor: "#f5f7fa",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    medImage: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    medInfo: {
        flex: 1,
        marginLeft: 15,
    },
    medName: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
    },
    medDosage: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Inter_400Regular",
    },
    medFrequency: {
        fontSize: 12,
        color: "#999",
        fontFamily: "Inter_400Regular",
    },
    medTime: {
        fontSize: 12,
        color: "#2e7d32",
        fontFamily: "Inter_700Bold",
        marginTop: 2,
    },
    checkButton: {
        padding: 5,
    },
    addButton: {
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        gap: 10,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
    }
});
