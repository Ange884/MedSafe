import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* Image with overlay */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/meda.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay} /> 
      </View>

      {/* Text content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.paragraph}>
          An amazing experience where you no longer need to spend hours looking 
          for your medical papers as you now go with them in your phone
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // covers the whole image
    backgroundColor: 'rgba(0, 128, 255, 0.4)', // semi-transparent blue overlay
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  signupButton: {
    backgroundColor: '#34C759', // different color for sign up
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});