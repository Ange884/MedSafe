import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
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

export default function IotScreen() {
    const router = useRouter();
    const batteryLevel = 69;

    const usageData = [
        { id: 1, action: "Dose detected", time: "12:40 PM", date: "02 May 2026" },
        { id: 2, action: "Dose detected", time: "8:30 AM", date: "02 May 2026" },
        { id: 3, action: "Dose detected", time: "21:00 PM", date: "02 May 2026" },
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
                <Text style={styles.title}>iot Device</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Connection Status</Text>
                    <View style={styles.connectionStatus}>
                        <View style={styles.dotBlack} />
                        <Text style={styles.connectionText}>Connected</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Battery level</Text>
                    <View style={styles.batteryLabels}>
                        <Text style={styles.batteryLabelGreen}>Full</Text>
                        <Text style={styles.batteryLabelRed}>Low</Text>
                    </View>

                    <View style={styles.batteryBarWrapper}>
                        <LinearGradient
                            colors={['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#F44336']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.batteryGradient}
                        />
                        <View style={[styles.batteryPointer, { left: `${batteryLevel}%` }]}>
                            <View style={styles.pointerLine} />
                            <Ionicons name="caret-down" size={12} color="#000" style={styles.pointerIcon} />
                        </View>
                    </View>
                    <Text style={[styles.batteryValueText, { left: `${batteryLevel}%`, marginLeft: -15 }]}>{batteryLevel}%</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Last sync time</Text>
                    <Text style={styles.syncTime}>15 : 30 PM</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Snooze options</Text>
                    <View style={styles.snoozeOptions}>
                        <View style={styles.optionItem}>
                            <Ionicons name="checkbox" size={24} color="#000" />
                            <Text style={styles.optionText}>Resync</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>Calibrate</Text>
                        </View>
                        <View style={styles.optionItem}>
                            <Ionicons name="square-outline" size={24} color="#CCC" />
                            <Text style={styles.optionText}>Test alert</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Usage data</Text>
                    <Text style={styles.usageSubtitle}>Device connected at 7:26 AM</Text>

                    {usageData.map((item) => (
                        <View key={item.id} style={styles.usageCard}>
                            <View style={styles.usageCardLeft}>
                                <View style={styles.bellIconContainer}>
                                    <Ionicons name="notifications" size={24} color="#000" />
                                    <View style={styles.cardRedDot} />
                                </View>
                                <Text style={styles.usageActionText}>{item.action}</Text>
                            </View>
                            <View style={styles.usageCardRight}>
                                <Text style={styles.usageTimestamp}>{item.time}   {item.date}</Text>
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
        textTransform: 'capitalize',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: "Inter_700Bold",
        color: '#333',
        marginBottom: 10,
    },
    connectionStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    dotBlack: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    connectionText: {
        fontSize: 13,
        color: '#999',
        fontFamily: "Inter_400Regular",
    },
    batteryLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    batteryLabelGreen: {
        fontSize: 11,
        color: '#4CAF50',
        fontFamily: "Inter_400Regular",
    },
    batteryLabelRed: {
        fontSize: 11,
        color: '#F44336',
        fontFamily: "Inter_400Regular",
    },
    batteryBarWrapper: {
        height: 12,
        borderRadius: 6,
        overflow: 'visible',
        position: 'relative',
    },
    batteryGradient: {
        height: '100%',
        borderRadius: 6,
    },
    batteryPointer: {
        position: 'absolute',
        top: -2,
        alignItems: 'center',
        height: 16,
    },
    pointerLine: {
        width: 2,
        height: 14,
        backgroundColor: '#000',
    },
    pointerIcon: {
        marginTop: -3,
    },
    batteryValueText: {
        position: 'relative',
        fontSize: 12,
        color: '#4CAF50',
        fontFamily: "Inter_700Bold",
        textAlign: 'center',
        width: 30,
        marginTop: 5,
    },
    syncTime: {
        fontSize: 14,
        color: '#666',
        fontFamily: "Inter_400Regular",
    },
    snoozeOptions: {
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
    usageSubtitle: {
        fontSize: 12,
        color: '#AAA',
        fontFamily: "Inter_400Regular",
        marginBottom: 15,
    },
    usageCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        // Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    usageCardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    bellIconContainer: {
        position: 'relative',
    },
    cardRedDot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#fff',
    },
    usageActionText: {
        fontSize: 14,
        color: '#555',
        fontFamily: "Inter_400Regular",
    },
    usageCardRight: {
        justifyContent: 'flex-end',
    },
    usageTimestamp: {
        fontSize: 10,
        color: '#AAA',
        fontFamily: "Inter_400Regular",
    },
});
