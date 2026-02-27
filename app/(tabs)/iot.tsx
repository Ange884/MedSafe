import { Ionicons } from "@expo/vector-icons";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IotScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#666" />
                    <TextInput style={styles.searchInput} placeholder="Search devices..." />
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="person-circle-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>IoT Device</Text>

                <View style={styles.statusCard}>
                    <View style={styles.statusRow}>
                        <Text style={styles.label}>Connection Status</Text>
                        <View style={styles.statusBadge}>
                            <View style={styles.statusDot} />
                            <Text style={styles.statusText}>Connected</Text>
                        </View>
                    </View>

                    <View style={styles.batteryContainer}>
                        <Text style={styles.label}>Battery level</Text>
                        <View style={styles.batteryBarContainer}>
                            <View style={styles.batteryBar}>
                                <View style={[styles.batteryFill, { width: '85%' }]} />
                            </View>
                            <Text style={styles.batteryPercentage}>85%</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Last dynamic time</Text>
                        <Text style={styles.value}>1: 20 PM</Text>
                    </View>
                </View>

                <Text style={styles.sectionSubtitle}>Choose options</Text>
                <View style={styles.optionsContainer}>
                    <View style={styles.optionItem}>
                        <Ionicons name="radio-button-on" size={20} color="#000" />
                        <Text style={styles.optionLabel}>Alarm</Text>
                    </View>
                    <View style={styles.optionItem}>
                        <Ionicons name="radio-button-off" size={20} color="#ccc" />
                        <Text style={styles.optionLabel}>Vibration</Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="bluetooth" size={20} color="#000" />
                        <Text style={styles.actionButtonText}>Pair new device</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="sync" size={20} color="#000" />
                        <Text style={styles.actionButtonText}>Sync medical data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="close-circle" size={20} color="#000" />
                        <Text style={styles.actionButtonText}>Disconnect</Text>
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
    statusCard: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    statusRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        color: "#333",
    },
    statusBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#4caf50",
    },
    statusText: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Inter_400Regular",
    },
    batteryContainer: {
        marginBottom: 20,
    },
    batteryBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        gap: 10,
    },
    batteryBar: {
        flex: 1,
        height: 12,
        backgroundColor: "#e0e0e0",
        borderRadius: 6,
        overflow: "hidden",
    },
    batteryFill: {
        height: "100%",
        backgroundColor: "#4caf50",
    },
    batteryPercentage: {
        fontSize: 12,
        color: "#666",
        fontFamily: "Inter_700Bold",
        width: 30,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    value: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Inter_400Regular",
    },
    sectionSubtitle: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        marginBottom: 15,
    },
    optionsContainer: {
        flexDirection: "row",
        gap: 30,
        marginBottom: 30,
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    optionLabel: {
        fontSize: 14,
        color: "#333",
        fontFamily: "Inter_400Regular",
    },
    actionButtons: {
        gap: 15,
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 54,
        borderRadius: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        gap: 15,
    },
    actionButtonText: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color: "#333",
    }
});
