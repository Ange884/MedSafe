import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationsScreen() {
    const router = useRouter();

    const notifications = [
        {
            id: 1,
            title: "Medication Reminder",
            message: "It's time to take your Paracetamol (8:00 PM).",
            time: "2 mins ago",
            type: "medication",
            read: false,
        },
        {
            id: 2,
            title: "IoT Device Alert",
            message: "Your MedSafe device battery is low (15%). Please charge soon.",
            time: "1 hour ago",
            type: "iot",
            read: false,
        },
        {
            id: 3,
            title: "Caregiver Access",
            message: "Agathe N. has viewed your latest medication logs.",
            time: "3 hours ago",
            type: "caregiver",
            read: true,
        },
        {
            id: 4,
            title: "System Update",
            message: "New firmware is available for your smart dispenser.",
            time: "Yesterday",
            type: "system",
            read: true,
        },
        {
            id: 5,
            title: "Support Message",
            message: "You have a new message from the health support team.",
            time: "Yesterday",
            type: "support",
            read: true,
        },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case "medication": return "medkit";
            case "iot": return "hardware-chip";
            case "caregiver": return "people";
            case "support": return "help-circle";
            default: return "notifications";
        }
    };

    const getIconColor = (type: string) => {
        switch (type) {
            case "medication": return "#4CAF50";
            case "iot": return "#FF9800";
            case "caregiver": return "#2196F3";
            case "support": return "#9C27B0";
            default: return "#000";
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <TouchableOpacity>
                    <Text style={styles.markReadText}>Read all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {notifications.map((item) => (
                    <TouchableOpacity key={item.id} style={[styles.notificationCard, !item.read && styles.unreadCard]}>
                        <View style={[styles.iconContainer, { backgroundColor: getIconColor(item.type) + '15' }]}>
                            <Ionicons name={getIcon(item.type)} size={24} color={getIconColor(item.type)} />
                        </View>
                        <View style={styles.contentContainer}>
                            <View style={styles.topRow}>
                                <Text style={styles.notifTitle}>{item.title}</Text>
                                <Text style={styles.notifTime}>{item.time}</Text>
                            </View>
                            <Text style={styles.notifMessage} numberOfLines={2}>{item.message}</Text>
                        </View>
                        {!item.read && <View style={styles.unreadDot} />}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "DMSerifDisplay_400Regular",
        color: "#000",
    },
    markReadText: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Inter_700Bold",
    },
    scrollContent: {
        padding: 20,
    },
    notificationCard: {
        flexDirection: "row",
        padding: 15,
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#F0F0F0",
        alignItems: "center",
        // Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    unreadCard: {
        backgroundColor: "#F9F9F9",
        borderColor: "#E0E0E0",
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    contentContainer: {
        flex: 1,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    notifTitle: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        color: "#000",
    },
    notifTime: {
        fontSize: 11,
        color: "#AAA",
        fontFamily: "Inter_400Regular",
    },
    notifMessage: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Inter_400Regular",
        lineHeight: 18,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#FF3B30",
        marginLeft: 10,
    },
});
