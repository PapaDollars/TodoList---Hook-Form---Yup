/* eslint-disable prettier/prettier */
import { NativeModules } from 'react-native';

/* eslint-disable prettier/prettier */
export { default as Login } from './Screens/Login/Login';
export { default as Signup } from './Screens/Signup/Signup';

export { default as Home } from './Screens/Home/Home';
// eslint-disable-next-line eol-last
export { default as Profile } from './Screens/Profile/Profile';

const ImageCropPicker = NativeModules.ImageCropPicker;

export default ImageCropPicker;
export const openPicker = ImageCropPicker.openPicker;
export const openCamera = ImageCropPicker.openCamera;
export const openCropper = ImageCropPicker.openCropper;
export const clean = ImageCropPicker.clean;
export const cleanSingle = ImageCropPicker.cleanSingle;
