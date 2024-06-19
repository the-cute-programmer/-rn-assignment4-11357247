import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#356899',
    paddingTop: 106,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#2B2D42',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 51,
  },
  input: {
    height: 52,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#356899',
    borderRadius: 5,
    height: 56,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    padding: 18,
    fontWeight: 'medium',
  },
  orContinue: {
    marginVertical: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  haveNotAcc:{
    textAlign: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: 'blue',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#8D99AE',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#EDF2F4',
  },
  searchIcon: {
    marginRight: 10,
  },
  jobCard: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  jobLogo: {
    width: 50,
    height: 50,
  },
  featuredJobsContainer: {
    marginBottom: 20,
  },
  featuredJobCard: {
    width: 150,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#2B2D42',
    borderRadius: 10,
  },
  featuredJobText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'blue',
    textAlign: 'right',
    marginBottom: 10,
  },
});
