import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AiScreen() {
    const [chatStarted, setChatStarted] = useState(false);
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([
        { id: 1, type: "bot", text: "Hello! I am Meda AI. How can I help you today?" },
    ]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;
        setChatHistory([...chatHistory, { id: Date.now(), type: "user", text: message }]);
        setMessage("");
        // Simulate bot response
        setTimeout(() => {
            setChatHistory(prev => [...prev, { id: Date.now() + 1, type: "bot", text: "I'm analyzing your request regarding medical health. Please wait a moment." }]);
        }, 1000);
    };

    if (!chatStarted) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <View style={styles.robotContainer}>
                        <Image
                            source={require("../../assets/images/robot.png")}
                            style={styles.robotImage}
                        />
                        <View style={styles.speechBubble}>
                            <Text style={styles.speechText}>Hi!</Text>
                        </View>
                    </View>
                    <Text style={styles.welcomeTitle}>I am Meda Ai</Text>
                    <Text style={styles.welcomeSubtitle}>
                        Hi am Meda
                        I am more than glad to see you. 
                        How can I help you today
                    </Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="How do you feel?"
                            onFocus={() => setChatStarted(true)}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={() => setChatStarted(true)}>
                            <Ionicons name="arrow-up" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={styles.chatHeader}>
                    <TouchableOpacity onPress={() => setChatStarted(false)}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.chatTitle}>Meda AI</Text>
                    <View style={{ width: 24 }} />
                </View>

                <ScrollView contentContainerStyle={styles.chatScroll}>
                    {chatHistory.map((item) => (
                        <View key={item.id} style={item.type === "bot" ? styles.botMessage : styles.userMessage}>
                            <Text style={item.type === "bot" ? styles.botText : styles.userText}>{item.text}</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.footerInput}>
                    <TextInput
                        style={styles.footerTextInput}
                        placeholder="Type a message..."
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity style={styles.footerSendButton} onPress={handleSendMessage}>
                        <Ionicons name="send" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    welcomeContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 40,
    },
    robotContainer: {
        width: 250,
        height: 250,
        backgroundColor: "#f5f7fa",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        position: "relative",
        borderWidth: 2,
        borderColor: "#2196f3",
    },
    robotImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    speechBubble: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    speechText: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
    },
    welcomeTitle: {
        fontSize: 28,
        fontFamily: "DMSerifDisplay_700Bold",
        marginBottom: 10,
    },
    welcomeSubtitle: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        fontFamily: "Inter_400Regular",
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#f9f9f9",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#eee",
    },
    input: {
        flex: 1,
        fontFamily: "Inter_400Regular",
    },
    sendButton: {
        width: 36,
        height: 36,
        backgroundColor: "#000",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    chatHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    chatTitle: {
        fontSize: 18,
        fontFamily: "Inter_700Bold",
    },
    chatScroll: {
        padding: 20,
        paddingBottom: 40,
    },
    botMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#f5f7fa",
        padding: 15,
        borderRadius: 20,
        borderTopLeftRadius: 5,
        maxWidth: "80%",
        marginBottom: 15,
    },
    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 20,
        borderTopRightRadius: 5,
        maxWidth: "80%",
        marginBottom: 15,
    },
    botText: {
        fontSize: 14,
        color: "#333",
        fontFamily: "Inter_400Regular",
    },
    userText: {
        fontSize: 14,
        color: "#fff",
        fontFamily: "Inter_400Regular",
    },
    footerInput: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        gap: 10,
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        marginBottom: 70, // Tab bar space
    },
    footerTextInput: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        height: 45,
        borderRadius: 22,
        paddingHorizontal: 20,
        fontFamily: "Inter_400Regular",
    },
    footerSendButton: {
        width: 45,
        height: 45,
        backgroundColor: "#000",
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    }
});
