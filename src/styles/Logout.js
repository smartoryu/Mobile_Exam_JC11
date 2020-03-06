import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  SettingContainer: {
    // flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ===================================== BUTTON
  ButtonContainer: {
    // borderWidth: 1,
    // flex: 1,
    width: '50%',
    justifyContent: 'flex-end',
  },
  ButtonStyle: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#114B5F',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  // ===================================== BUTTON
  CancelContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'flex-end',
    width: '20%',
  },
  CancelStyle: {
    borderWidth: 1,
    height: 25,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CancelText: {
    color: '#114B5F',
    fontSize: 16,
  },
});

export default Styles;
