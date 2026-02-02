# 🎓 TBREIN Academy

Plataforma de capacitación corporativa para empleados de TBREIN.

## 🚀 Características

- ✅ Sistema de autenticación (login/logout)
- ✅ Reproducción de videos desde Google Drive
- ✅ Seguimiento de progreso de capacitación
- ✅ Marcado manual de videos completados
- ✅ Modal de felicitaciones al completar todos los videos
- ✅ Reinicio de progreso
- ✅ Diseño moderno y responsive

## 🛠️ Tecnologías

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Lucide React** - Iconos
- **Vanilla CSS** - Estilos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🔐 Credenciales de Acceso

- **Usuario**: `admin`
- **Contraseña**: `tbrein2024`

> ⚠️ **Importante**: Cambia estas credenciales en producción

## 📝 Configuración

### Videos desde Google Sheets

Los videos se cargan automáticamente desde un Google Sheet. Para actualizar los videos:

1. Edita el Google Sheet: [TBREIN Academy Videos](https://docs.google.com/spreadsheets/d/1LUnv2smD4yjo5qJy7VQCbrbgSHuF2iw2QZVt5KmpR2s/edit)
2. **Formato requerido:**
   - Columna A: Número (ID)
   - Columna B: Título
   - Columna D: Link de Google Drive
   - Columna E: Duración (formato HH:MM o "X min")
3. Los cambios se reflejarán automáticamente al recargar la aplicación

**Nota:** El Google Sheet debe estar configurado con permisos de lectura pública.

## 🌐 Deploy

Este proyecto está optimizado para desplegarse en Vercel.

---

Desarrollado para **TBREIN** 🧠
