export const MAX_CURRENT_SCORE = 5;
export const TRUE_INDICATION = 'TRUE_INDICATION';
export const FALSE_INDICATION = 'FALSE_INDICATION';
export const NONE_INDICATION = 'NONE_INDICATION';

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default randomInteger;
