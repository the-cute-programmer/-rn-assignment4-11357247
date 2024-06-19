import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ job, type }) => {
  return (
    <View style={[styles.card, type === 'featured' ? styles.featuredCard : styles.popularCard]}>
      <Image source={job.logo} style={styles.logo} />
      <View style={styles.details}>
        <Text style={[styles.title, type === 'featured' ? styles.featuredTitle : styles.popularTitle]}>{job.title}</Text>
        <Text style={[styles.company, type === 'featured' ? styles.featuredCompany : styles.popularCompany]}>{job.company}</Text>
        <Text style={[styles.salary, type === 'featured' ? styles.featuredSalary : styles.popularSalary]}>{job.salary}</Text>
        <Text style={[styles.location, type === 'featured' ? styles.featuredLocation : styles.popularLocation]}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    shadowRadius: 13.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 40,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
  },
  salary: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  
  featuredCard: {
    backgroundColor: '#e3f2fd',
    borderColor: '#e3f2fd',
    color: '#fff',
    borderWidth: 1,
    padding: 23,
    marginHorizontal: 10,
  },
  featuredTitle: {
    color: '#000',
  },
  featuredCompany: {
    color: '#000',
  },
  featuredSalary: {
    color: '#000',
    top:22,
    right:25,
  },
  featuredLocation: {
    color: '#000',
    left:55,
    top:5,
  },
  
  popularCard: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    height: 60,
  },
  popularTitle: {
    color: '#000',
     top: 20,
  },
  popularCompany: {
    color: '#000',
    top: 20,
  },
  popularSalary: {
    color: '#000',
    left: 140,
    bottom: 15,
  },
  popularLocation: {
    color: '#000',
    left: 120,
    bottom: 16,
  },
});

export default JobCard;
