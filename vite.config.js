import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, 
  }
})

/*
La configuración css: { devSourcemap: true } en Vite habilita los mapas de origen para CSS en modo de desarrollo. Esto significa que cuando abres tu navegador y abres la consola de desarrollador, podrás ver la fuente original de tu CSS, incluso si ha sido compilado y preprocesado.

Esto puede ser útil para depurar problemas de CSS. Por ejemplo, si ves un error en la consola que dice "CSS failed to load", puedes hacer clic en el enlace al mapa de origen para ver la fuente original de tu CSS y dónde se produjo el error.

Los mapas de origen también pueden ser útiles para aprender CSS. Si ves un estilo CSS que no entiendes, puedes hacer clic en el enlace al mapa de origen para ver el código fuente original del CSS y cómo se generó.*/