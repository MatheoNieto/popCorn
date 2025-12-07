import {CustomFonts} from '../constants';

const textVariants = {
  defaults: {
    color: 'black',
    fontFamily: CustomFonts.Primary,
    letterSpacing: 0.049,
    fontSize: 14,
  },
  titleOfHeader: {
    color: 'white',
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
};

export default textVariants;
