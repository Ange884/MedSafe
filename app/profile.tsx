import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const router = useRouter();
    const [careGiverAccess, setCareGiverAccess] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>User Profile</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => router.push('/notifications')}
                    >
                        <Ionicons name="notifications" size={24} color="black" />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileIconButton}>
                        <Ionicons name="person" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.avatarCard}>
                    <Ionicons name="person" size={160} color="#000" />
                </View>

                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Name:</Text>
                        <Text style={styles.infoValue}>UHIRIWE Chrisostom</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Age:</Text>
                        <Text style={styles.infoValue}>38 years old</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Gender:</Text>
                        <Text style={styles.infoValue}>GAY</Text>
                    </View>
                </View>

                <View style={styles.sectionDivider}>
                    <Text style={styles.sectionHeader}>Medical info</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Conditions:</Text>
                        <Text style={styles.infoValue}>Asthma, High blood pressure</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Allergies:</Text>
                        <Text style={styles.infoValue}>Wheat, insect stings</Text>
                    </View>
                </View>

                <View style={styles.sectionDivider}>
                    <Text style={styles.sectionHeader}>Emergency Contact</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Name:</Text>
                        <Text style={styles.infoValue}>NSHIMIYIMANA Agathe</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Phone number:</Text>
                        <Text style={styles.infoValue}>+250 780 602 022</Text>
                    </View>
                </View>

                <View style={styles.toggleContainer}>
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setCareGiverAccess(!careGiverAccess)}
                    >
                        <Ionicons
                            name={careGiverAccess ? "checkbox" : "square-outline"}
                            size={24}
                            color="black"
                        />
                        <Text style={styles.toggleText}>CARE GIVER ACCESS</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 25,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 30,
        gap: 10,
    },
    headerTitle: {
        fontSize: 28,
        fontFamily: "DMSerifDisplay_400Regular",
        color: "#000",
    },
    headerIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    iconButton: {
        position: "relative",
    },
    notificationDot: {
        position: "absolute",
        top: 2,
        right: 2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "white",
    },
    profileIconButton: {
        width: 36,
        height: 36,
        borderWidth: 1.5,
        borderColor: "#000",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContent: {
        paddingBottom: 40,
    },
    avatarCard: {
        width: "100%",
        aspectRatio: 1.5,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        // Elevation for Android
        elevation: 5,
        borderWidth: 1,
        borderColor: "#f0f0f0",
    },
    infoSection: {
        marginBottom: 20,
    },
    sectionDivider: {
        marginTop: 10,
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 24,
        fontFamily: "DMSerifDisplay_400Regular",
        marginBottom: 10,
        color: "#000",
    },
    infoRow: {
        marginBottom: 15,
    },
    infoLabel: {
        fontSize: 13,
        color: "#888",
        fontFamily: "Inter_400Regular",
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 16,
        color: "#000",
        fontFamily: "Inter_400Regular",
    },
    toggleContainer: {
        marginTop: 10,
        marginBottom: 30,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    toggleText: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: "#666",
        letterSpacing: 0.5,
    },
});

