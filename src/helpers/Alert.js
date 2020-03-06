import {Alert} from 'react-native';

const Alerts = ({
  title = '',
  message = 'Error happened',
  cancelable = false,
  ask = '',
  cancel = '',
  ok = 'Ok',
}) => {
  Alert.alert(
    `${title}`,
    `${message}`,
    [
      {text: `${ask}`, onPress: () => console.log(`${ask} pressed`)},
      {text: `${cancel}`, onPress: () => console.log(`${cancel} pressed`)},
      {text: `${ok}`, onPress: () => console.log(`${ok} pressed`)},
    ],
    {cancelable: cancelable},
  );
};

export default Alerts;
