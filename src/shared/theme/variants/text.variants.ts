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
    top: '70%',
    left: 0,
    fontSize: 90,
    fontFamily: CustomFonts.Secondary,
    fontWeight: 'bold',
    color: 'primary900',
    textShadowColor: 'borderNumberTopRated',
    textShadowRadius: 2,
    textShadowOffset: {width: 1, height: 1},
  },
};

export default textVariants;
