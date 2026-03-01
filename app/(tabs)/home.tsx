import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="notifications" size={28} color="#000" />
                        <View style={styles.notificationBadge} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.profileIconContainer}>
                            <Ionicons name="person" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Upcoming Medications Card */}
                <ImageBackground
                    source={require('../../assets/images/rightMeds.png')}
                    style={styles.card}
                    imageStyle={styles.cardBackgroundImage}
                >
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Upcoming Medications</Text>

                        <View style={styles.medicationItem}>
                            <Text style={styles.medName}>Paracetamol</Text>
                            <View style={styles.medStatusRow}>
                                <Text style={styles.medSubText}>8:00 PM</Text>
                                <View style={styles.statusBadgeGreen}>
                                    <View style={styles.dotGreen} />
                                    <Text style={styles.statusTextGreen}>Taken</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.medicationItem}>
                            <Text style={styles.medName}>Anti-biotics</Text>
                            <View style={styles.medStatusRow}>
                                <Text style={styles.medSubText}>12:30 PM</Text>
                                <View style={styles.statusBadgeRed}>
                                    <Ionicons name="time-outline" size={12} color="#FF3B30" />
                                    <Text style={styles.statusTextRed}>in 3 hours</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* General Status */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>General Status</Text>
                    <Text style={styles.label}>Medication Taken Today:</Text>
                    <View style={styles.pillRow}>
                        <View style={styles.checkedPill}>
                            <Ionicons name="checkmark-circle" size={20} color="#000" />
                            <Text style={styles.pillNumber}>1</Text>
                        </View>
                        <View style={styles.checkedPill}>
                            <Ionicons name="checkmark-circle" size={20} color="#000" />
                            <Text style={styles.pillNumber}>2</Text>
                        </View>
                        <View style={styles.uncheckedPill}>
                            <View style={styles.pillOutline} />
                            <Text style={styles.pillNumber}>3</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>Missed medication:</Text>
                    <Text style={styles.statusValue}>None</Text>
                </View>

                {/* IoT Device Status */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>IoT Device Status</Text>
                    <View style={styles.iotStatusRow}>
                        <View style={styles.dotBlack} />
                        <Text style={styles.iotStatusText}>Connected</Text>
                    </View>
                    <Text style={styles.label}>Battery Level:</Text>
                    <Text style={styles.batteryValue}>57%</Text>
                </View>

                {/* My Medications Card */}
                <ImageBackground
                    source={require('../../assets/images/leftMeds.png')}
                    style={styles.card}
                    imageStyle={styles.cardBackgroundImage}
                >
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, { textAlign: 'right' }]}>My medications</Text>
                        <View style={styles.medicationAlignRight}>
                            <Text style={styles.medName}>Paracetamol</Text>
                            <Text style={styles.medSubText}>For 5 days</Text>
                        </View>
                        <View style={[styles.divider, { marginVertical: 10 }]} />
                        <View style={styles.medicationAlignRight}>
                            <Text style={styles.medName}>Anti-biotics</Text>
                            <Text style={styles.medSubText}>3 weeks</Text>
                        </View>
                        <TouchableOpacity style={styles.viewMoreContainer}>
                            <Text style={styles.viewMoreText}>View more</Text>
                            <View style={styles.viewMoreLine} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* Motivational Footer */}
                <Text style={styles.footerQuote}>
                    Taking your medication at the same time every day helps your body respond better and makes it easier to remember.
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 150, // Space for custom tab bar
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 15,
        gap: 15,
    },
    notificationBadge: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderRadius: 24,
        height: 180,
        marginVertical: 15,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',

        // Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardBackgroundImage: {
        position: 'absolute',
        right: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 0,
    },
    cardContent: {
        zIndex: 1,
        paddingHorizontal: 20,
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: "DMSerifDisplay_400Regular",
        marginBottom: 15,
        color: '#000',
    },
    medicationItem: {
        marginBottom: 10,
    },
    medName: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        color: '#000',
    },
    medStatusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 2,
    },
    medSubText: {
        fontSize: 12,
        color: '#666',
        fontFamily: "Inter_400Regular",
    },
    statusBadgeGreen: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        gap: 4,
    },
    dotGreen: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#4CAF50',
    },
    statusTextGreen: {
        fontSize: 10,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    statusBadgeRed: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statusTextRed: {
        fontSize: 10,
        color: '#FF3B30',
        fontWeight: 'bold',
    },
    section: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: "DMSerifDisplay_400Regular",
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#888',
        fontFamily: "Inter_400Regular",
        marginBottom: 8,
    },
    pillRow: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 15,
    },
    checkedPill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    uncheckedPill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    pillOutline: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    pillNumber: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
    },
    statusValue: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        color: '#000',
    },
    iotStatusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    dotBlack: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },
    iotStatusText: {
        fontSize: 14,
        color: '#666',
        fontFamily: "Inter_400Regular",
    },
    batteryValue: {
        fontSize: 24,
        color: '#4CAF50',
        fontFamily: "Inter_700Bold",
    },
    medicationAlignRight: {
        alignItems: 'flex-end',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        width: '50%',
        alignSelf: 'flex-end',
    },
    viewMoreContainer: {
        alignSelf: 'center',
        marginTop: 15,
        alignItems: 'center',
    },
    viewMoreText: {
        fontSize: 12,
        color: '#000',
        fontFamily: "Inter_700Bold",
    },
    viewMoreLine: {
        height: 1,
        backgroundColor: '#000',
        width: '100%',
        marginTop: 2,
    },
    footerQuote: {
        fontSize: 13,
        color: '#AAA',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 40,
        marginTop: 30,
        fontFamily: "Inter_400Regular",
    },
});
