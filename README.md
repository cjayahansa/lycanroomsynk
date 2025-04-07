
# 📌 LycanRoomSync

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Contributors](https://img.shields.io/badge/contributors-1-green.svg)](CONTRIBUTORS.md)  
[![Last Commit](https://img.shields.io/github/last-commit/yourusername/LycanRoomSync)](https://github.com/yourusername/LycanRoomSync)

---

## 🌟 About The Project

LycanRoomSync is a web-based application designed to monitor room conditions such as **temperature**, **light level**, and **humidity** in real-time. This project integrates:

- **Frontend**: Built using **HTML**, **CSS**, and **JavaScript** for a responsive and user-friendly interface.
- **Backend**: Connected to **Firebase** for real-time data storage and synchronization.
- **Hardware**: Uses an **ESP32 microcontroller** to collect sensor data and send it to Firebase.

This project was created as part of my learning journey to master **web development** (HTML, CSS, JS) and explore **IoT integration** with Firebase and ESP32.

---

## 🚀 Features

- **Real-Time Monitoring**: View live updates of room temperature, light level, and humidity on the web dashboard.
- **Firebase Integration**: Data collected by the ESP32 is sent to Firebase and displayed on the web app in real-time.
- **Responsive Design**: The web interface is mobile-friendly and works seamlessly across devices.
- **Learning Project**: A great example of combining frontend web development with IoT hardware.

---

## 🛠️ Installation

### Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for running the web app locally)
- [ESP32 Board](https://www.espressif.com/en/products/silicon/esp32) with necessary sensors (e.g., DHT11/DHT22 for temperature/humidity, LDR for light level).
- [Arduino IDE](https://www.arduino.cc/) (to upload code to the ESP32).
- A [Firebase account](https://firebase.google.com/) to set up the real-time database.

---

### Setup Instructions

#### 1. Web Application (Frontend)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/LycanRoomSync.git
   cd LycanRoomSync
   ```

2. **Install Dependencies** (if applicable):
   If your project uses any libraries or frameworks, install them using:
   ```bash
   npm install
   ```

3. **Run the Web App Locally**:
   Open the `index.html` file in your browser to view the dashboard:
   ```bash
   open index.html
   ```
   Alternatively, use a local server:
   ```bash
   npx serve
   ```

4. **Connect to Firebase**:
   - Create a Firebase project and enable the **Realtime Database**.
   - Replace the Firebase configuration in `script.js` with your own credentials:
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       databaseURL: "YOUR_DATABASE_URL",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

#### 2. ESP32 (Hardware Setup)

1. **Set Up the Circuit**:
   - Connect the **DHT11/DHT22 sensor** to the ESP32 for temperature and humidity readings.
   - Connect the **LDR (Light Dependent Resistor)** to measure light levels.
   - Use a breadboard and jumper wires to complete the circuit.

2. **Upload Code to ESP32**:
   - Open the `esp32_code.ino` file in the Arduino IDE.
   - Install required libraries (e.g., `FirebaseESP32`, `DHT sensor library`) via the Library Manager.
   - Replace the Firebase credentials in the ESP32 code with your own:
     ```cpp
     #define FIREBASE_HOST "YOUR_FIREBASE_HOST"
     #define FIREBASE_AUTH "YOUR_FIREBASE_AUTH"
     #define WIFI_SSID "YOUR_WIFI_SSID"
     #define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"
     ```
   - Upload the code to your ESP32 board.

3. **Test the Setup**:
   - Power on the ESP32 and ensure it connects to WiFi and starts sending data to Firebase.
   - Verify that the data appears in the Firebase Realtime Database.

---

## 📝 Usage

1. Open the web application (`index.html`) in your browser.
2. The dashboard will display real-time data from the ESP32:
   - **Temperature**: Current room temperature (in °C or °F).
   - **Humidity**: Current room humidity (in %).
   - **Light Level**: Current light intensity (in lux or relative values).

---

## 🤝 Contributing

Contributions are welcome! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Please ensure your code follows best practices and includes appropriate documentation.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Thanks to the **Firebase** team for their excellent documentation and tools.
- Special thanks to the **ESP32 community** for providing helpful resources and libraries.
- Inspired by various IoT and web development tutorials.

---

## 📞 Contact

For questions, feedback, or collaboration, feel free to reach out:

- **Your Name**: [Your Email](chaminduliyangama1761@gmail.com)
- **GitHub Profile**: [Your Profile](https://github.com/cjayahansa)
- **Project Link**: [LycanRoomSync Repository](https://cjayahansa.github.io/lycanroomsynk/)


