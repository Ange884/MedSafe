import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SupportScreen() {
    const router = useRouter();
    const missedDoseAlerts = [
        { id: 1, date: "02 May 2026", time: "11 AM" },
        { id: 2, date: "11 February 2026", time: "8 AM" },
        { id: 3, date: "11 June 2026", time: "12 PM" },
        { id: 4, date: "11 June 2026", time: "12 PM" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search . . ."
                        placeholderTextColor="#AAA"
                    />
                    <View style={styles.searchIconContainer}>
                        <Ionicons name="search" size={18} color="#000" />
                    </View>
                </View>

                <TouchableOpacity style={styles.notificationButton}>
                    <Ionicons name="notifications" size={24} color="#000" />
                    <View style={styles.redDot} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton} onPress={() => router.push('/profile')}>
                    <Ionicons name="person" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.title}>Settings</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reminder mode</Text>
                    <View style={styles.optionsList}>
                        <View style={styles.optionItem}>
                            <Ionicons name="radio-button-on" size={24} color="#000" />
                            <Text style={styles.optionText}>Sound</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>Vibration</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>Silent</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reminder Strength</Text>
                    <View style={styles.optionsList}>
                        <View style={styles.optionItem}>
                            <Ionicons name="radio-button-on" size={24} color="#000" />
                            <Text style={styles.optionText}>Gentle</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>Normal</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>Persistent (keeps reminding until taken)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Snooze options</Text>
                    <View style={styles.snoozeRow}>
                        <View style={styles.optionItem}>
                            <Ionicons name="radio-button-on" size={24} color="#000" />
                            <Text style={styles.optionText}>5 min</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>10 min</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>30 min</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Smart reminders</Text>
                    <Text style={styles.subLabel}>Didn't open device</Text>
                    <View style={styles.optionItem}>
                        <Ionicons name="radio-button-on" size={24} color="#000" />
                        <Text style={styles.optionText}>Remind me again</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Missed dose alerts</Text>
                    {missedDoseAlerts.map((alert, index) => (
                        <View key={index} style={styles.alertCard}>
                            <Ionicons name="alert-circle" size={48} color="#FF3B30" />
                            <View style={styles.alertDetails}>
                                <Text style={styles.alertDate}>{alert.date}</Text>
                                <Text style={styles.alertMessage}>You missed your {alert.time} dose</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        gap: 15,
    },
    searchWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#EEE',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: '#000',
    },
    searchIconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#D1D1D1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationButton: {
        position: 'relative',
    },
    redDot: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#fff',
    },
    profileButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontFamily: "DMSerifDisplay_400Regular",
        marginBottom: 30,
        color: '#000',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: "Inter_700Bold",
        color: '#333',
        marginBottom: 15,
    },
    optionsList: {
        gap: 12,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    optionText: {
        fontSize: 14,
        color: '#666',
        fontFamily: "Inter_400Regular",
    },
    snoozeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subLabel: {
        fontSize: 12,
        color: '#888',
        fontFamily: "Inter_400Regular",
        marginBottom: 5,
    },
    alertCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE5E5',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        gap: 15,
        borderWidth: 1,
        borderColor: '#FFD1D1',
        // Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    alertDetails: {
        flex: 1,
    },
    alertDate: {
        fontSize: 10,
        color: '#FF3B30',
        fontFamily: "Inter_400Regular",
        marginBottom: 2,
    },
    alertMessage: {
        fontSize: 14,
        color: '#FF3B30',
        fontFamily: "Inter_700Bold",
    },
});
