import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Play,
  Clock,
  CheckCircle2,
  User,
  X,
  ChevronRight,
  Trophy,
  Loader2,
  BookOpen,
  ExternalLink,
  Info,
  RefreshCw,
  LogOut,
  Lock,
  Award,
  Sparkles,
  RotateCcw
} from 'lucide-react';

// --- DATOS REALES ---
const videosData = [
  { id: 1, title: "Proceso de trabajo", summary: "Aprende el flujo de trabajo estándar de TBREIN.", url: "https://drive.google.com/file/d/1NmUlpSKAUF8xiWlwlqbPvkPClq9_XU0S/view", duration: "20 min" },
  { id: 2, title: "Compartido de ventas", summary: "Guía sobre la gestión de prospectos.", url: "https://drive.google.com/file/d/1uv5FXrlbRepbIZvUgw4HK5ebYLrtP8a1/view", duration: "9 min" },
  { id: 3, title: "Historia de AIS", summary: "Aprendizajes que forjaron nuestra identidad.", url: "https://drive.google.com/file/d/14m7ZWWRGVFgssnUACtwBCphzxi9CH-I0/view", duration: "15 min" },
  { id: 4, title: "Estandarización de RUTs", summary: "Manual técnico para validación de documentos.", url: "https://drive.google.com/file/d/1IQHzT8jiteeXQ4AbFZ23oM3QDXQpAo9J/view", duration: "10 min" },
  { id: 5, title: "Creación de buyer persona", summary: "Metodología para definir el cliente ideal.", url: "https://drive.google.com/file/d/16sstbzrtiVzI6g8pdDayVNjFYdV8vfm2/view", duration: "12 min" },
  { id: 6, title: "Analizar tablero de Buyer persona", summary: "Interpretación de métricas y dashboards.", url: "https://drive.google.com/file/d/1LbK2YRHDAOT27b3TONmzmCcAPYhaE78W/view", duration: "8 min" },
  { id: 7, title: "Cómo hacer clones", summary: "Técnicas de duplicación de audiencias.", url: "https://drive.google.com/file/d/1ybDWYsjsXzYlDpwH0Nl1U7Ih4C061fYd/view", duration: "14 min" },
  { id: 8, title: "Plataforma - Avanzado", summary: "Herramientas avanzadas de TBREIN.", url: "https://drive.google.com/file/d/13H4uzlSuW2f-Azg_Idm2SdL5S6_rb3vO/view", duration: "25 min" },
  { id: 9, title: "Carga de clones en Meta - Parte I", summary: "Configuración inicial en Facebook Ads.", url: "https://drive.google.com/file/d/1va7dT-xrW9VHf4YHN6872sRr2h_M9lox/view", duration: "18 min" },
  { id: 10, title: "Carga de clones en Meta - Parte II", summary: "Optimización de presupuestos y ROI.", url: "https://drive.google.com/file/d/1zkh6_2cy_FysGrKHjoFt9y93R6fRM9Lb/view", duration: "16 min" },
  { id: 11, title: "Dashboard de gestión de clientes", summary: "Seguimiento del embudo de ventas.", url: "https://drive.google.com/file/d/1oZw5yMyL2bVdXrNr_f9TyPWFl73QvolX/view", duration: "11 min" },
  { id: 12, title: "Cómo encontrar nuestras campañas", summary: "Guía rápida de localización de activos.", url: "https://drive.google.com/file/d/16JCwHRM1dBoiJlGCMoIHSY2Ix7w7nsyr/view", duration: "7 min" }
];

// Credenciales de acceso (puedes cambiarlas aquí)
const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'tbrein2024'
};

const getPreviewUrl = (url: string) => {
  const idMatch = url.match(/[-\w]{25,}/);
  if (idMatch) {
    return `https://drive.google.com/file/d/${idMatch[0]}/preview`;
  }
  return url;
};

const LoginScreen: React.FC<{ onLogin: (username: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      onLogin(username);
    } else {
      setError('Usuario o contraseña incorrectos');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-[40px] shadow-2xl p-12 w-full max-w-md border border-gray-100">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-[#FF6B00] p-2 rounded-lg">
            <BookOpen className="text-white" size={28} />
          </div>
          <span className="text-3xl font-black tracking-tighter">
            <span className="text-gray-900">TBREIN</span>
            <span className="text-[#FF6B00] ml-0.5">ACADEMY</span>
          </span>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Iniciar Sesión</h2>
          <p className="text-gray-500 text-sm font-medium">Ingresa tus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">Usuario</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#FF6B00] focus:outline-none font-medium transition-all"
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#FF6B00] focus:outline-none font-medium transition-all"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm font-bold text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF6B00] text-white font-black py-4 rounded-2xl hover:bg-[#e65a00] transition-all shadow-lg active:scale-95"
          >
            INGRESAR
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-400 font-medium">
          © 2024 TBREIN LTDA. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<{ user: string, onLogout: () => void }> = ({ user, onLogout }) => (
  <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 h-16 flex items-center justify-between px-6 z-40 shadow-sm">
    <div className="flex items-center gap-2">
      <div className="bg-[#FF6B00] p-1.5 rounded-lg">
        <BookOpen className="text-white" size={20} />
      </div>
      <span className="text-2xl font-black tracking-tighter">
        <span className="text-gray-900">TBREIN</span>
        <span className="text-[#FF6B00] ml-0.5">ACADEMY</span>
      </span>
    </div>
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
        <User size={16} className="text-gray-600" />
        <span className="text-sm font-bold text-gray-700">{user}</span>
      </div>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl border border-red-200 text-red-600 font-bold text-sm transition-all"
      >
        <LogOut size={16} />
        Salir
      </button>
    </div>
  </header>
);

const VideoCard: React.FC<{
  video: typeof videosData[0],
  isCompleted: boolean,
  onOpen: (v: typeof videosData[0]) => void
}> = ({ video, isCompleted, onOpen }) => {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm transition-all hover:shadow-xl hover:border-[#FF6B00]/40 flex flex-col h-full hover:-translate-y-1 duration-300">
      <div className="p-10 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-center mb-6">
          <div className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
            <Clock size={14} className="text-[#FF6B00]" />
            <span className="text-[11px] font-black text-gray-500 uppercase tracking-wider">{video.duration}</span>
          </div>
          {isCompleted && (
            <div className="flex items-center gap-1.5 text-green-600 font-black text-[10px] uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-xl border border-green-100">
              <CheckCircle2 size={14} />
              <span>COMPLETADO</span>
            </div>
          )}
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-[#FF6B00] transition-colors tracking-tight">
            {video.title}
          </h3>
          <p className="text-gray-500 mb-10 leading-relaxed font-medium line-clamp-2">
            {video.summary}
          </p>
        </div>
        <button
          onClick={() => onOpen(video)}
          className="w-full py-5 px-6 rounded-2xl border-2 border-[#FF6B00]/10 bg-white text-[#FF6B00] font-black text-sm transition-all hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] shadow-sm flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-white/20">
            <Play fill="currentColor" size={12} className="ml-0.5" />
          </div>
          {isCompleted ? 'REPASAR CLASE' : 'EMPEZAR AHORA'}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const PlayerModal: React.FC<{ video: typeof videosData[0], onClose: () => void, onFinish: () => void }> = ({ video, onClose, onFinish }) => {
  const embedUrl = getPreviewUrl(video.url);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full h-full md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col relative">
        <button onClick={onClose} className="absolute top-6 right-6 z-[60] bg-white shadow-xl text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all active:scale-90">
          <X size={24} />
        </button>

        {/* Video Area */}
        <div className="flex-1 bg-black flex flex-col relative overflow-hidden">
          <div className="flex-grow flex items-center justify-center bg-black relative">
            <iframe
              src={embedUrl}
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              title={video.title}
              loading="eager"
              style={{ border: 'none' }}
            />

            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center -z-10 bg-neutral-900">
              <Loader2 className="animate-spin text-orange-500 mb-4" size={48} />
              <p className="text-white/40 text-sm font-medium">Conectando con Google Drive...</p>
            </div>
          </div>

          {/* Player Helper Bar */}
          <div className="p-6 bg-neutral-950 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF6B00]">
                <Play fill="currentColor" size={20} />
              </div>
              <div>
                <h2 className="text-white font-black text-lg leading-none mb-1">{video.title}</h2>
                <p className="text-white/40 text-xs font-medium">
                  {video.duration} • {video.summary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onFinish}
                className="flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e65a00] px-8 py-4 rounded-2xl text-white font-black text-sm transition-all shadow-lg active:scale-95"
              >
                <CheckCircle2 size={18} />
                MARCAR COMPLETADO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CongratulationsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 rounded-[40px] shadow-2xl p-12 max-w-lg w-full border-4 border-[#FF6B00] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF6B00]/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF6B00]/10 rounded-full translate-x-20 translate-y-20"></div>

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B00] to-[#ff8c3a] rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <Trophy className="text-white" size={48} />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-[#FF6B00]" size={24} />
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">¡FELICITACIONES!</h2>
            <Sparkles className="text-[#FF6B00]" size={24} />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-[#FF6B00]/20">
            <p className="text-lg font-bold text-gray-700 mb-2">
              Has completado todos los videos de capacitación
            </p>
            <div className="flex items-center justify-center gap-2 text-[#FF6B00] font-black text-sm">
              <Award size={20} />
              <span>FORMACIÓN TBREIN ACADEMY COMPLETADA</span>
            </div>
          </div>

          <p className="text-gray-600 font-medium leading-relaxed">
            Excelente trabajo. Has demostrado compromiso con tu desarrollo profesional y ahora cuentas con todas las herramientas necesarias para destacar en TBREIN.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-[#FF6B00] to-[#ff8c3a] text-white font-black py-5 rounded-2xl hover:shadow-2xl transition-all shadow-lg active:scale-95 text-lg"
        >
          ¡CONTINUAR!
        </button>
      </div>
    </div>
  </div>
);

const ConfirmResetModal: React.FC<{ onConfirm: () => void, onCancel: () => void }> = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border border-gray-200">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center border-2 border-[#FF6B00]">
          <RotateCcw className="text-[#FF6B00]" size={32} />
        </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 text-center mb-3">¿Reiniciar Progreso?</h3>
      <p className="text-gray-600 text-center mb-8 font-medium">
        Se borrarán todos los videos completados y comenzarás desde cero. Esta acción no se puede deshacer.
      </p>

      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 py-4 px-6 rounded-2xl border-2 border-gray-200 bg-white text-gray-700 font-black text-sm transition-all hover:bg-gray-50 active:scale-95"
        >
          CANCELAR
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 py-4 px-6 rounded-2xl bg-red-500 text-white font-black text-sm transition-all hover:bg-red-600 shadow-lg active:scale-95"
        >
          SÍ, REINICIAR
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    return localStorage.getItem('tbrein_user');
  });

  const [completedVideos, setCompletedVideos] = useState<number[]>(() => {
    const saved = localStorage.getItem('tbrein_v6');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeVideo, setActiveVideo] = useState<typeof videosData[0] | null>(null);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    localStorage.setItem('tbrein_v6', JSON.stringify(completedVideos));
  }, [completedVideos]);

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    localStorage.setItem('tbrein_user', username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('tbrein_user');
  };

  const handleFinishVideo = () => {
    if (activeVideo && !completedVideos.includes(activeVideo.id)) {
      const newCompleted = [...completedVideos, activeVideo.id];
      setCompletedVideos(newCompleted);

      // Check if all videos are completed
      if (newCompleted.length === videosData.length) {
        setTimeout(() => setShowCongrats(true), 500);
      }
    }
    setActiveVideo(null);
  };

  const handleResetProgress = () => {
    setCompletedVideos([]);
    setShowResetConfirm(false);
  };

  const progress = Math.round((completedVideos.length / videosData.length) * 100);

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header user={currentUser} onLogout={handleLogout} />

      <main className="pt-28 pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-orange-50 text-[#FF6B00] rounded-xl text-[10px] font-black mb-6 border border-orange-100 uppercase tracking-widest">
              Capacitación Continua
            </div>
            <h1 className="text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.85]">
              TBREIN <br />
              <span className="text-[#FF6B00]">ACADEMY</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Plataforma de entrenamiento técnico. Mira los contenidos y completa tu formación corporativa.
            </p>
          </div>

          <div className="bg-white border border-gray-100 shadow-2xl rounded-[40px] p-10 min-w-[340px] border-b-[8px] border-b-[#FF6B00]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tu Progreso</p>
                <p className="text-5xl font-black text-gray-900 tracking-tighter">{progress}%</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B00] border border-orange-100">
                <Trophy size={28} />
              </div>
            </div>
            <div className="w-full h-4 bg-gray-50 rounded-full overflow-hidden mb-4 border border-gray-100 shadow-inner">
              <div
                className="h-full bg-[#FF6B00] transition-all duration-1000 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-black text-gray-500 uppercase tracking-tighter mb-4">
              <span>{completedVideos.length} FINALIZADOS</span>
              <span className="text-[#FF6B00]">{videosData.length} TOTAL</span>
            </div>

            {completedVideos.length > 0 && (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full py-3 px-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold text-xs transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <RotateCcw size={14} />
                REINICIAR PROGRESO
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videosData.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isCompleted={completedVideos.includes(video.id)}
              onOpen={(v) => setActiveVideo(v)}
            />
          ))}
        </div>
      </main>

      {showCongrats && <CongratulationsModal onClose={() => setShowCongrats(false)} />}
      {showResetConfirm && (
        <ConfirmResetModal
          onConfirm={handleResetProgress}
          onCancel={() => setShowResetConfirm(false)}
        />
      )}

      {activeVideo && (
        <PlayerModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          onFinish={handleFinishVideo}
        />
      )}

      <footer className="bg-gray-50 border-t border-gray-100 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-2xl font-black tracking-tighter text-gray-900">
            TBREIN <span className="text-[#FF6B00]">ACADEMY</span>
          </span>
          <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.2em]">© 2024 TBREIN LTDA. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
