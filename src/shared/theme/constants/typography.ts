import {FontWeight} from '../types';

export enum CustomFonts {
  Primary = 'Poppins',
  Secondary = 'Montserrat',
}

export const FONT_WEIGHT_MAPPING: Record<FontWeight, string> = {
  '100': '-Thin',
  '200': '-ExtraLight',
  '300': '-Light',
  '400': '-Regular',
  '500': '-Medium',
  '600': '-SemiBold',
  '700': '-Bold',
  '800': '-Bold',
  '900': '-Black',
  normal: '-Regular',
  bold: '-Bold',
  ultralight: '-Thin',
  thin: '-Thin',
  light: '-Light',
  medium: '-Regular',
  regular: '-Regular',
  semibold: '-Bold',
  condensedBold: '-Black',
  condensed: '-Bold',
  heavy: '-Black',
  black: '-Black',
};
