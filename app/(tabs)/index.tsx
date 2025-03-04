import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const services = [
  { id: '1', name: 'Tow Truck', icon: 'truck' },
  { id: '2', name: 'Spare parts', icon: 'cogs' },
  { id: '3', name: 'Mechanic', icon: 'wrench' },
];

const ServicePage = () => {
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Hello, Ansam</Text>
        <Text style={styles.header}>Let’s get you moving again</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          keyboardType="default"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      
      <Text style={styles.subHeader}>Choose a service:</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.serviceItem,
              selectedService === item.id && styles.selectedService,
            ]}
            onPress={() => setSelectedService(item.id)}
          >
            <FontAwesome5 name={item.icon} size={24} color={selectedService === item.id ? '#fff' : '#000'} />
            <Text style={[styles.serviceText, selectedService === item.id && { color: '#fff' }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backIconContainer}>
            <FontAwesome5 name="chevron-left" size={18} color="#fff" />
          </View>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#021B24',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: '#021B24',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#021B24',
    marginBottom: 10,
  },
  selectedService: {
    backgroundColor: '#021B24',
    borderColor: '#021B24',
  },
  serviceText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#021B24',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  backIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#021B24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#021B24',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: '#021B24',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicePage;


