import localFont from 'next/font/local';

const kellyslab = localFont({
    src: [
      {
        path: '../public/fonts/kellyslab/kellyslab.woff',
        weight: '400',
        style: 'normal',
      }
    ],
    display: 'fallback',
    variable: '--font-kellyslab',
});
const kellyslab = localFont({
    src: [
      {
        path: '../public/fonts/kellyslab/kellyslab.woff',
        weight: '400',
        style: 'normal',
      }
    ],
    display: 'fallback',
    variable: '--font-kellyslab',
});
  
export const loadStolzlFonts = () => kellyslab;
