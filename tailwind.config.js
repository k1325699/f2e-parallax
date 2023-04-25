/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'h1-d': ['32px', '40px'],
        'h2-d': ['60px', '76px'],
        'h3-d': ['44px', '56px'],
        'h4-d': ['32px', '44px'],
        'h5-d': ['24px', '30px'],
        'body-d': ['18px', ' 28px'],
        'height-d': ['24px', '32px'],
        'h1-m': ['20px', '24px'],
        'h2-m': ['28px', '36px'],
        'h3-m': ['24px', '32px'],
        'h4-m': ['20px', '28px'],
        'h5-m': ['18px', '28px'],
        'body-m': ['16px', ' 24px'],
        'height-m': ['18px', '24px'],
      },
      letterSpacing: {
        d: '0.02em',
        m: '0.05em',
      },
      colors: {
        primary: {
          DEFAULT: '#007FAB',
          dark: '#003A4F',
          tint: '#B0D2DE',
        },
        secondary: {
          DEFAULT: '#FFC37D',
          dark: '#A46039',
          tint: '#FFE2A9',
        },
        highlight: {
          DEFAULT: '#FF5136',
          dark: '#CD331A',
          tint: '#FFB5A4',
        },
        gray: {
          100: '#000000',
          80: '#333333',
          60: '#666666',
          40: '#999999',
          20: '#CCCCCC',
          0: '#FFFFFF',
        },
      },
      backgroundImage: (theme) => ({
        logo: "url('/assets/logo/logo.png')",
        joinButton: "url('/assets/btn/btn_join.png')",
        joinButtonHover: "url('/assets/btn/btn_join_h.png')",
        HandIcon: "url('/assets/btn/btn_joinHand.png')",
        map: "url('/assets/main/map.svg')",
        mapFinish: "url('/assets/main/map_finish.svg')",
        trafficLights: "url('/assets/main/ready_frame.png')",
        talking: "url('/assets/bg/bg_talking.png')",
        talkingCenter: "url('/assets/bg/bg_talking_c.png')",
        talkingLeft: "url('/assets/bg/bg_talking_l.png')",
        talkingRight: "url('/assets/bg/bg_talking_r.png')",
        dateLine: "url('/assets/main/date_line.png')",
        dateWeekLine: "url('/assets/main/date_weekLine.png')",
        sponsor: "url('/assets/btn/btn_sponsor.png')",
      }),
      keyframes: {
        hand: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
      animation: {
        hand: 'hand 0.7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
