import {color} from '@shopify/restyle';
import {CustomFonts} from '../constants';

const textVariants = {
  defaults: {
    color: 'white',
    fontFamily: CustomFonts.Primary,
    letterSpacing: 0.049,
    fontSize: 14,
  },
  titleOfHeader: {
    fontSize: 18,
    fontWeight: 600,
  },
  numberTopRated: {
    position: 'absolute',
    top: '50%',
    right: '74%',
    fontSize: 96,
    fontFamily: CustomFonts.Secondary,
    fontWeight: 'bold',
    color: 'primary900',
    textShadowColor: 'borderNumberTopRated',
    textShadowRadius: 2,
    textShadowOffset: {width: 0, height: 0},
  },

  titleEmptyList: {
    fontFamily: CustomFonts.Secondary,
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
    my: 'm',
  },
  messageEmptyList: {
    fontFamily: CustomFonts.Secondary,
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
    color: 'primary',
  },
};

export default textVariants;
