export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official color palette
        'gov-red': '#bc352a',
        'gov-green': '#1a5f1a',
        'gov-dark': '#222222',
        'gov-light': '#f8f9fa',
      },
      animation: {
        'underline-grow': 'underlineGrow 0.8s ease-out forwards',
        'logo-float': 'logoFloat 3s ease-in-out infinite',
        'button-pulse': 'buttonPulse 2s infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
      keyframes: {
        underlineGrow: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        logoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        buttonPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(188, 53, 42, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(188, 53, 42, 0)' },
        },
        gradientShift: {
            '0%': { backgroundPosition: '100% 50%' },
      '50%': { backgroundPosition: '0% 50%' },
      '100%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'gov-sm': '0 1px 3px rgba(188, 53, 42, 0.12)',
        'gov-md': '0 4px 6px rgba(26, 95, 26, 0.1)',
        'gov-lg': '0 10px 15px rgba(34, 34, 34, 0.1)',
      },
      fontFamily: {
        government: ['"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
    },
  },
};
