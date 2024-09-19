/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí puedes agregar tus eventos de nodo si es necesario
    },
    baseUrl: 'http://localhost:5173', // Cambia esto si es necesario
  },
})
