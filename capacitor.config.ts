import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.codesnap.studio',
  appName: 'codesnap',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    backgroundColor: '#0D1117',
    allowMixedContent: false,
  },
  ios: {
    backgroundColor: '#0D1117',
    contentInset: 'automatic',
  },
};

export default config;
