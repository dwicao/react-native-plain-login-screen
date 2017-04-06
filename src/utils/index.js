import Dimensions from 'Dimensions';
import { Platform } from 'react-native';

export const diff = (Platform.OS === 'ios') ? 20 : 0;
export const myHeight = Dimensions.get('window').height;
export const myWidth = Dimensions.get('window').width;