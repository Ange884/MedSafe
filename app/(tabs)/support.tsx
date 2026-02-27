import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SupportScreen() {
    const [reminderMode, setReminderMode] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrationEnabled, setVibrationEnabled] = useState(false);
    const [flashlightEnabled, setFlashlightEnabled] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Settings</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="person-circle-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reminder mode</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Enable Reminders</Text>
                        <Switch
                            value={reminderMode}
                            onValueChange={setReminderMode}
                            trackColor={{ false: "#767577", true: "#000" }}
                            thumbColor={reminderMode ? "#fff" : "#f4f3f4"}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reminder Strength</Text>
                    <View style={styles.optionList}>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setSoundEnabled(!soundEnabled)}
                        >
                            <Ionicons
                                name={soundEnabled ? "checkbox" : "square-outline"}
                                size={24}
                                color={soundEnabled ? "#000" : "#ccc"}
                            />
                            <Text style={styles.optionLabel}>Sound</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setVibrationEnabled(!vibrationEnabled)}
                        >
                            <Ionicons
                                name={vibrationEnabled ? "checkbox" : "square-outline"}
                                size={24}
                                color={vibrationEnabled ? "#000" : "#ccc"}
                            />
                            <Text style={styles.optionLabel}>Vibration</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setFlashlightEnabled(!flashlightEnabled)}
                        >
                            <Ionicons
                                name={flashlightEnabled ? "checkbox" : "square-outline"}
                                size={24}
                                color={flashlightEnabled ? "#000" : "#ccc"}
                            />
                            <Text style={styles.optionLabel}>Flashlight (External IoT)</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Emergency options</Text>
                    <View style={styles.optionList}>
                        <TouchableOpacity style={styles.emergencyButton}>
                            <Ionicons name="call" size={20} color="#fff" />
                            <Text style={styles.emergencyButtonText}>Call Emergency Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emergencyButtonRed}>
                            <Ionicons name="warning" size={20} color="#fff" />
                            <Text style={styles.emergencyButtonText}>Broadcast Emergency Signal</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Network (External IoT)</Text>
                    <View style={styles.alertCard}>
                        <Ionicons name="alert-circle" size={20} color="#d32f2f" />
                        <Text style={styles.alertText}>No IoT device segment found</Text>
                    </View>
                    <View style={styles.alertCard}>
                        <Ionicons name="alert-circle" size={20} color="#d32f2f" />
                        <Text style={styles.alertText}>Bluetooth Connection Lost</Text>
                    </View>
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
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: "Inter_700Bold",
        marginBottom: 15,
        color: "#000",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 15,
    },
    label: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: "#444",
    },
    optionList: {
        gap: 12,
    },
    optionRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 5,
    },
    optionLabel: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: "#444",
    },
    emergencyButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000",
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 20,
        gap: 15,
    },
    emergencyButtonRed: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#d32f2f",
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 20,
        gap: 15,
    },
    emergencyButtonText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Inter_700Bold",
    },
    alertCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffebee",
        padding: 15,
        borderRadius: 12,
        gap: 10,
        marginBottom: 10,
    },
    alertText: {
        fontSize: 13,
        color: "#c62828",
        fontFamily: "Inter_400Regular",
    }
});
