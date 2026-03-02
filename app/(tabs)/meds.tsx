import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
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
    const router = useRouter();
    const medications = [
        {
            id: 1,
            name: "Paracetamol",
            duration: "2 weeks",
            frequency: "3 times / day",
            times: ["12:00 PM", "20:00 PM"],
            type: 'bottle'
        },
        {
            id: 2,
            name: "Paracetamol",
            duration: "2 weeks",
            time: "8:00 PM",
            timeLeft: "6 days",
            type: 'pills'
        },
        {
            id: 3,
            name: "Paracetamol",
            duration: "2 weeks",
            frequency: "3 times / day",
            times: ["12:00 PM", "20:00 PM"],
            type: 'bottle'
        },
        {
            id: 4,
            name: "Paracetamol",
            duration: "2 weeks",
            time: "8:00 PM",
            timeLeft: "6 days",
            type: 'pills'
        },
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

            <Text style={styles.title}>Your Medications</Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {medications.map((med) => (
                    <View key={med.id} style={styles.card}>
                        {med.type === 'bottle' ? (
                            <View style={styles.cardRow}>
                                <View style={styles.medDetailsLeft}>
                                    <Text style={styles.label}>Name:</Text>
                                    <Text style={styles.value}>{med.name}</Text>

                                    <Text style={[styles.label, { marginTop: 10 }]}>Time for intake:</Text>
                                    <Text style={styles.value}>{med.duration}</Text>

                                    <View style={styles.row}>
                                        <View>
                                            <Text style={[styles.label, { marginTop: 10 }]}>Frequency:</Text>
                                            <Text style={styles.value}>{med.frequency}</Text>
                                        </View>
                                        <View style={{ marginLeft: 30 }}>
                                            <Text style={[styles.label, { marginTop: 10 }]}>Time(s):</Text>
                                            {med.times.map((t, i) => (
                                                <Text key={i} style={styles.value}>{t}</Text>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require('../../assets/images/imiti.png')}
                                    style={styles.cardImageBottle}
                                    resizeMode="contain"
                                />
                            </View>
                        ) : (
                            <View style={styles.cardRow}>
                                <Image
                                    source={require('../../assets/images/ibinini.png')}
                                    style={styles.cardImagePills}
                                    resizeMode="contain"
                                />
                                <View style={styles.medDetailsRight}>
                                    <Text style={[styles.label, { textAlign: 'right' }]}>Name:</Text>
                                    <Text style={[styles.value, { textAlign: 'right' }]}>{med.name}</Text>

                                    <Text style={[styles.label, { marginTop: 10, textAlign: 'right' }]}>Time for intake:</Text>
                                    <Text style={[styles.value, { textAlign: 'right' }]}>{med.duration}</Text>

                                    <View style={styles.rowRight}>
                                        <View style={{ marginRight: 30 }}>
                                            <Text style={[styles.label, { marginTop: 10, textAlign: 'right' }]}>Time(s):</Text>
                                            <Text style={[styles.value, { textAlign: 'right' }]}>{med.time}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.label, { marginTop: 10, textAlign: 'right' }]}>Time left:</Text>
                                            <Text style={[styles.value, { textAlign: 'right' }]}>{med.timeLeft}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>
                ))}

                {/* FAB */}
                <TouchableOpacity style={styles.fab}>
                    <View style={styles.fabIconContainer}>
                        <Ionicons name="add" size={24} color="#000" />
                    </View>
                    <Text style={styles.fabText}>Add medications</Text>
                </TouchableOpacity>

                <View style={{ height: 20 }} />
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
        // Shadow for search
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
    title: {
        fontSize: 28,
        fontFamily: "DMSerifDisplay_400Regular",
        paddingHorizontal: 20,
        marginBottom: 20,
        color: '#000',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        // Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    medDetailsLeft: {
        flex: 1,
    },
    medDetailsRight: {
        flex: 1,
    },
    label: {
        fontSize: 11,
        color: '#999',
        fontFamily: "Inter_400Regular",
    },
    value: {
        fontSize: 14,
        color: '#000',
        fontFamily: "Inter_700Bold",
    },
    row: {
        flexDirection: 'row',
    },
    rowRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cardImageBottle: {
        width: 120,
        height: 120,
    },
    cardImagePills: {
        width: 120,
        height: 120,
    },
    fab: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        gap: 12,
        alignSelf: 'center',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 70,
    },
    fabIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: "DMSerifDisplay_400Regular",
    },
});
