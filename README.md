# ENA Support Bot - OAuth Analysis App

Aplicación para analizar correos de soporte de ENA usando OAuth2 y Claude AI.

## Pasos para desplegar en Vercel

### 1. Subir el código a GitHub (opcional pero recomendado)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/ena-support-bot.git
git push -u origin main
```

### 2. Ir a Vercel y conectar el repositorio

1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Configura las variables de entorno (ver paso 3)

### 3. Configurar variables de entorno en Vercel

En Vercel, agrega estas variables:

```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=337169989323-05g6612rpmd51b4rat11la2khbstrtdp.apps.googleusercontent.com
NEXT_PUBLIC_REDIRECT_URI=https://tu-proyecto.vercel.app/api/analyze-emails

GOOGLE_CLIENT_ID=337169989323-05g6612rpmd51b4rat11la2khbstrtdp.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
REDIRECT_URI=https://tu-proyecto.vercel.app/api/analyze-emails

ANTHROPIC_API_KEY=sk-ant-v3-... (tu API key de Claude)
```

### 4. Actualizar OAuth en Google Cloud Console

Una vez que tengas tu URL de Vercel:

1. Ve a https://console.cloud.google.com/
2. Busca "Credenciales" → "Clientes OAuth"
3. Haz clic en "ENA Support Bot Web App"
4. Actualiza:
   - **Orígenes de JavaScript**: `https://tu-proyecto.vercel.app`
   - **URIs de redirección**: `https://tu-proyecto.vercel.app/api/analyze-emails`
5. Guarda cambios

### 5. Desplegar

Una vez configurado, Vercel desplegará automáticamente.

---

## Cómo usar

1. Ve a tu URL de Vercel (ej: https://ena-support-bot.vercel.app)
2. Haz clic en "Conectar con Gmail"
3. Autoriza la app para acceder a tus correos
4. Claude analizará tus correos automáticamente
5. Verás los resultados con categorías, palabras clave y ejemplos

---

## Variables necesarias

- `GOOGLE_CLIENT_ID`: De Google Cloud Console
- `GOOGLE_CLIENT_SECRET`: De Google Cloud Console
- `ANTHROPIC_API_KEY`: De https://console.anthropic.com/

---

## Troubleshooting

### Error: "Invalid OAuth redirect URI"
- Asegúrate de que la URL en Vercel coincida con la configurada en Google Cloud Console

### Error: "No API key provided"
- Verifica que `ANTHROPIC_API_KEY` esté configurada en Vercel

### Error: "No Gmail emails found"
- Asegúrate de que tu cuenta tiene correos en la bandeja de entrada

---

Para más ayuda, contacta a Claude.
