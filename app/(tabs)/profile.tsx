import { Ionicons } from "@expo/vector-icons";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>User Profile</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person" size={80} color="#000" />
                    </View>
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Basic Info</Text>
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Name</Text>
                            <Text style={styles.infoValue}>LINRAD Danson</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Role</Text>
                            <Text style={styles.infoValue}>Student patient</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Interests</Text>
                            <Text style={styles.infoValue}>GDP</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Medical Info</Text>
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Condition</Text>
                            <Text style={styles.infoValue}>Asthma, High Blood Pressure</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Allergies</Text>
                            <Text style={styles.infoValue}>Peanuts, Dust, Pollen</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Emergency Contact</Text>
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Role</Text>
                            <Text style={styles.infoValue}>Grand Mother Agatha</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Phone Number</Text>
                            <Text style={styles.infoValue}>+250 7824 857 04</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.emergencyAccessButton}>
                    <Ionicons name="lock-open-outline" size={20} color="#000" />
                    <Text style={styles.emergencyAccessText}>CARD QUICK ACCESS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Log Out</Text>
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
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "Inter_700Bold",
    },
    iconButton: {
        padding: 5,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    profileHeader: {
        alignItems: "center",
        marginVertical: 20,
    },
    avatarContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "#f5f7fa",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#eee",
    },
    infoSection: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        marginBottom: 10,
        color: "#333",
    },
    infoCard: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: "#f0f0f0",
    },
    infoRow: {
        marginBottom: 12,
    },
    infoLabel: {
        fontSize: 12,
        color: "#999",
        fontFamily: "Inter_400Regular",
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 14,
        color: "#000",
        fontFamily: "Inter_700Bold",
    },
    emergencyAccessButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 15,
        borderRadius: 12,
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eee",
        marginBottom: 20,
    },
    emergencyAccessText: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color: "#000",
    },
    logoutButton: {
        padding: 15,
        alignItems: "center",
        marginBottom: 30,
    },
    logoutText: {
        color: "#d32f2f",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
    }
});
