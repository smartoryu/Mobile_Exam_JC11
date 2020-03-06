import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  LoginContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },

  // ======================================== TOP LOGO
  LoginLogo: {
    // borderWidth: 1,
    marginTop: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoIconContainer: {
    height: 120,
    marginBottom: 10,
    justifyContent: 'center',
  },
  LogoIconImg: {
    width: 180,
    height: 120,
    resizeMode: 'contain',
  },
  LogoTextContainer: {
    height: 50,
    justifyContent: 'center',
  },
  LogoTextImg: {
    width: 150,
    height: 30,
    resizeMode: 'contain',
  },

  // =================================== INPUT SECTION
  LoginInput: {
    // borderWidth: 1,
    marginTop: 60,
    marginBottom: 120,
    alignItems: 'center',
    width: '100%',
  },
  // ===================================== LOGIN BUTTON
  LoginButtonContainer: {
    justifyContent: 'center',
    width: '95%',
    marginBottom: 10,
  },
  LoginButtonStyle: {
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },
  LoginButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  // ============================= GO TO REGISTER BUTTON
  LoginButtonArea: {
    // borderWidth: 1,
    width: '100%',
    height: 30,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegButtonContainer: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Styles;
