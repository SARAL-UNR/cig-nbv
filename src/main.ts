import './assets/main.css'

import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#003366',
          secondary: '#B8860B',
          'on-background': '#1A1A1A',
          'on-surface': '#1A1A1A',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')