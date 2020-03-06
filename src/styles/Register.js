import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  RegContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },

  // ===== TOP LOGO
  RegLogo: {
    // borderWidth: 1,
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  LogoIcon: {
    // borderWidth: 1,
    height: 100,
  },
  LogoIconImg: {
    flex: 1,
    width: 180,
    height: 120,
    resizeMode: 'contain',
  },

  // ===== INPUT SECTION
  RegInput: {
    // borderWidth: 1,
    marginTop: 50,
    marginBottom: 60,
    alignItems: 'center',
    width: '100%',
  },
  // ===== REGISTER BUTTON
  RegButtonContainer: {
    justifyContent: 'center',
    width: '95%',
    marginBottom: 15,
  },
  RegButtonStyle: {
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#114B5F',
  },
  RegButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  // ===== BACK TO LOGIN BUTTON
  RegButtonArea: {
    // borderWidth: 1,
    width: '100%',
    height: 30,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginButtonContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Styles;
