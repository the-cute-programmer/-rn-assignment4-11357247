import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route, navigation }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/facebook.png') },
    { id: '2', title: 'Software Engineer', company: 'Google', salary: '$160,000', location: 'San Francisco, CA', logo: require('../assets/google.png') },
    { id: '3', title: 'Backend Developer', company: 'Microsoft', salary: '$140,000', location: 'Seattle, WA', logo: require('../assets/microsoft.png') },
    { id: '4', title: 'Frontend Developer', company: 'Apple', salary: '$150,000', location: 'Cupertino, CA', logo: require('../assets/apple.png') },
    { id: '5', title: 'DevOps Engineer', company: 'Amazon', salary: '$170,000', location: 'New York, NY', logo: require('../assets/amazon.png') },
    { id: '6', title: 'Data Scientist', company: 'IBM', salary: '$160,000', location: 'Austin, TX', logo: require('../assets/ibm.png') },
    { id: '7', title: 'Mobile Developer', company: 'Spotify', salary: '$130,000', location: 'Boston, MA', logo: require('../assets/spotify.png') },
    { id: '8', title: 'UI/UX Designer', company: 'Netflix', salary: '$120,000', location: 'Los Angeles, CA', logo: require('../assets/netflix.png') },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/burgerking.png') },
    { id: '2', title: 'Manager', company: 'McDonald\'s', salary: '$100,000/y', location: 'San Francisco, CA', logo: require('../assets/mcdonalds.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/facebook.png') },
    { id: '4', title: 'Chef', company: 'Subway', salary: '$80,000/y', location: 'Chicago, IL', logo: require('../assets/subway.png') },
    { id: '5', title: 'Cashier', company: 'Pizza Hut', salary: '$70,000/y', location: 'Miami, FL', logo: require('../assets/pizza-hut.png') },
    { id: '6', title: 'Waiter', company: 'Starbucks', salary: '$60,000/y', location: 'New York, NY', logo: require('../assets/starbucks.png') },
    { id: '7', title: 'Barista', company: 'Dunkin\' Donuts', salary: '$50,000/y', location: 'Boston, MA', logo: require('../assets/dunkin-donuts.png') },
    { id: '8', title: 'CManager', company: 'Chipotle', salary: '$73,000/y', location: 'Kasoa, GH', logo: require('../assets/chipotle.png') },
  ];

  return (
    <ScrollView style={styles.containerHome}>
       <View style={styles.headerHome}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
          <Image
          source={require('../assets/profile.jpg')}
          style={styles.profilePicture}
          />
        </View>
       
      </View>

      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <FlatList
          data={featuredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} type="featured" />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} type="popular" />}
        />
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See all</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    //left:320,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  userEmail: {
    fontSize: 20,
    color: '#666',
  },
  navItem: {
    fontSize: 16,
    color: '#0277bd',
    right:320,
  },
  searchBar: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  seeAllButton: {
    marginTop: 8,
    alignSelf: 'center',
    left:150,
    bottom:150,
  },
  seeAllButtonText: {
    color: '#0277bd',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
