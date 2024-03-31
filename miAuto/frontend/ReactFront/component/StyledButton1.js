import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

function StyledButton1({ icon, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Image source={icon} style={styles.icon} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10, // Padding inside the button
        margin: 5, // Margin around the button
        alignItems: 'center', // Center the icon inside the button
    },
    icon: {
        width: 50, // Set the width of the icon
        height: 50, // Set the height of the icon
        resizeMode: 'contain' // Keep the icon's aspect ratio
    },
});

export default StyledButton1;
