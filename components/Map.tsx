import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,  // Default latitude (change to your location)
          longitude: -122.4324, // Default longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        tintColor="black"
        
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;