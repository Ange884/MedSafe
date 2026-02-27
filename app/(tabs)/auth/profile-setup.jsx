import { router } from "expo-router";
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

export default function ProfileSetupScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header Image */}
                <View style={styles.headerImageContainer}>
                    <Image
                        source={require("../../../assets/images/meda.png")}
                        style={styles.image}
                    />
                    <View style={styles.overlay} />
                    <Text style={styles.headerText}>HEALTH</Text>
                </View>

                {/* Form Section */}
                <View style={styles.formContainer}>
                    <Text style={styles.title}>PROFILE SETUP</Text>
                    <Text style={styles.subtitle}>
                        Before you join us, kindly confirm these details correctly
                    </Text>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Role</Text>
                            <TextInput style={styles.input} placeholder="ex: patient" />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Interests</Text>
                            <TextInput style={styles.input} placeholder="ex: fitness" />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Interests</Text>
                            <TextInput style={styles.input} placeholder="ex: nutrition" />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Medical record number (PIN Number)</Text>
                            <TextInput style={styles.input} placeholder="ex: 4578 3578 2748" />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.replace("/home")}
                    >
                        <Text style={styles.buttonText}>Confirm</Text>
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
    },
    scrollContent: {
        flexGrow: 1,
    },
    headerImageContainer: {
        height: 200,
        width: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    headerText: {
        position: "absolute",
        top: 40,
        fontSize: 24,
        color: "#fff",
        fontFamily: "Inter_700Bold",
        letterSpacing: 4,
    },
    formContainer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    title: {
        fontSize: 28,
        fontFamily: "DMSerifDisplay_400Regular",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: "#666",
        textAlign: "center",
        marginBottom: 30,
    },
    form: {
        gap: 20,
        marginBottom: 30,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color: "#333",
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#eee",
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        backgroundColor: "#000",
        height: 54,
        borderRadius: 27,
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        alignSelf: "center",
        marginBottom: 30,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Inter_700Bold",
    },
});
