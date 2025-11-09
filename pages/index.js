import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Users, Vote, Clock } from 'lucide-react';

export default function EleccionesChile2025() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [secondRoundTime, setSecondRoundTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const firstRoundDate = new Date('2025-11-16T08:00:00-03:00');
  const secondRoundDate = new Date('2025-12-14T08:00:00-03:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      const diff1 = firstRoundDate - now;
      if (diff1 > 0) {
        setTimeLeft({
          days: Math.floor(diff1 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff1 / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff1 / 1000 / 60) % 60),
          seconds: Math.floor((diff1 / 1000) % 60)
        });
      }

      const diff2 = secondRoundDate - now;
      if (diff2 > 0) {
        setSecondRoundTime({
          days: Math.floor(diff2 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff2 / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff2 / 1000 / 60) % 60),
          seconds: Math.floor((diff2 / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeCard = ({ value, label }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 min-w-[65px] sm:min-w-[90px] md:min-w-[100px] shadow-xl flex-1 max-w-[85px] sm:max-w-none">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-blue-100 uppercase tracking-tight sm:tracking-wide leading-tight">
        {label}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-red-500 to-blue-700 flex flex-col">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Vote className="w-8 h-8 sm:w-10 sm:h-10 text-white flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
              Elecciones Presidenciales Chile 2025
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-4 py-6">
        <div className="max-w-6xl w-full">
          {/* Primera Vuelta */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                Primera Vuelta Electoral
              </h2>
            </div>
            
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl text-white font-semibold mb-1 sm:mb-2">
                Domingo 16 de Noviembre, 2025
              </p>
              <p className="text-sm sm:text-base text-blue-100">
                Elección Presidencial y Parlamentarias
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <TimeCard value={timeLeft.days} label="Días" />
              <TimeCard value={timeLeft.hours} label="Horas" />
              <TimeCard value={timeLeft.minutes} label="Minutos" />
              <TimeCard value={timeLeft.seconds} label="Segundos" />
            </div>

            <div className="bg-white/10 rounded-lg p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3 text-white">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold mb-1">¿Qué se elige?</p>
                  <ul className="space-y-1 text-blue-100">
                    <li>• Presidente/a de la República (período 2026-2030)</li>
                    <li>• 23 Senadores/as en 7 regiones</li>
                    <li>• Diputados/as en todo el país</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Segunda Vuelta */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                Eventual Segunda Vuelta
              </h2>
            </div>
            
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl text-white font-semibold mb-1 sm:mb-2">
                Domingo 14 de Diciembre, 2025
              </p>
              <p className="text-xs sm:text-sm text-blue-100">
                (Solo si ningún candidato obtiene mayoría absoluta)
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <TimeCard value={secondRoundTime.days} label="Días" />
              <TimeCard value={secondRoundTime.hours} label="Horas" />
              <TimeCard value={secondRoundTime.minutes} label="Minutos" />
              <TimeCard value={secondRoundTime.seconds} label="Segundos" />
            </div>
          </div>

          {/* Candidatos - Orden según papeleta electoral */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-2xl border border-white/20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 sm:mb-3">
              Candidatos Presidenciales 2025
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm text-center mb-6 sm:mb-8">
              Orden según papeleta electoral oficial
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {[
                { 
                  numero: 1,
                  nombre: 'Franco Parisi', 
                  partido: 'Partido de la Gente (PDG)',
                  pacto: 'Sin Pacto',
                  edad: 57,
                  profesion: 'Ingeniero Comercial',
                  foto: '/candidatos/franco-parisi.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/FRANCO-PARISI-FERNANDEZ.pdf',
                  web: 'https://parisipresidente.cl/programa-de-gobierno/',
                  instagram: 'https://www.instagram.com/fr_parisi',
                  facebook: 'https://www.facebook.com/parisioficial',
                  twitter: 'https://x.com/ParisiPDG'
                },
                { 
                  numero: 2,
                  nombre: 'Jeannette Jara', 
                  partido: 'Partido Comunista (PC)',
                  pacto: 'Unidad por Chile',
                  edad: 51,
                  profesion: 'Abogada',
                  foto: '/candidatos/jeannette-jara.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/JEANNETTE-JARA-ROMAN.pdf',
                  web: 'https://jeannettejara.cl/',
                  instagram: 'https://www.instagram.com/jeannettejararoman',
                  facebook: 'https://www.facebook.com/JeannetteJaraRoman',
                  twitter: 'https://x.com/jeannette_jara'
                },
                { 
                  numero: 3,
                  nombre: 'Marco Enríquez-Ominami', 
                  partido: 'Independiente',
                  pacto: 'Sin Pacto',
                  edad: 52,
                  profesion: 'Licenciado en Filosofía',
                  foto: '/candidatos/marco-enriquez.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/MARCO-ANTONIO-ENRIQUEZ-OMINAMI-GUMUCIO.pdf',
                  web: 'https://marcoenriquezominami.cl/',
                  instagram: 'https://www.instagram.com/marcoporchile/',
                  facebook: 'https://www.facebook.com/marcoporchile',
                  twitter: 'https://x.com/marcoporchile'
                },
                { 
                  numero: 4,
                  nombre: 'Johannes Kaiser', 
                  partido: 'Partido Nacional Libertario (PNL)',
                  pacto: 'Sin Pacto',
                  edad: 49,
                  profesion: 'Diputado',
                  foto: '/candidatos/johannes-kaiser.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/JOHANNES-KAISER-BARENTS-VON-HOHENHAGEN.pdf',
                  web: 'https://johanneskaiser.cl/',
                  instagram: 'https://www.instagram.com/joukaiser',
                  facebook: 'https://www.facebook.com/DiputadoJohannesKaiser',
                  twitter: 'https://x.com/Jou_Kaiser'
                },
                { 
                  numero: 5,
                  nombre: 'José Antonio Kast', 
                  partido: 'Partido Republicano (PR)',
                  pacto: 'Sin Pacto',
                  edad: 59,
                  profesion: 'Abogado',
                  foto: '/candidatos/jose-kast.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/JOSE-ANTONIO-KAST-RIST.pdf',
                  web: 'https://kast.cl/',
                  instagram: 'https://www.instagram.com/joseantoniokast',
                  facebook: 'https://www.facebook.com/joseantoniokast',
                  twitter: 'https://x.com/joseantoniokast'
                },
                { 
                  numero: 6,
                  nombre: 'Eduardo Artés', 
                  partido: 'Independiente',
                  pacto: 'Sin Pacto',
                  edad: 73,
                  profesion: 'Profesor',
                  foto: '/candidatos/eduardo-artes.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/EDUARDO-ANTONIO-ARTES-BRICHETTI.pdf',
                  web: 'https://artes2026.cl/',
                  instagram: 'https://www.instagram.com/eduardoartesb/',
                  facebook: 'https://www.facebook.com/artesarefundarchile',
                  twitter: 'https://x.com/artes_oficial'
                },
                { 
                  numero: 7,
                  nombre: 'Evelyn Matthei', 
                  partido: 'Unión Demócrata Independiente (UDI)',
                  pacto: 'Chile Vamos',
                  edad: 71,
                  profesion: 'Economista',
                  foto: '/candidatos/evelyn-matthei.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/EVELYN-MATTHEI-FORNET.pdf',
                  web: 'https://evelynmatthei.cl/',
                  instagram: 'https://www.instagram.com/evelynmatthei',
                  facebook: 'https://www.facebook.com/evelynmatthei',
                  twitter: 'https://x.com/evelynmatthei'
                },
                { 
                  numero: 8,
                  nombre: 'Harold Mayne-Nicholls', 
                  partido: 'Independiente',
                  pacto: 'Sin Pacto',
                  edad: 64,
                  profesion: 'Periodista',
                  foto: '/candidatos/harold-mayne.jpg',
                  programa: 'https://www.servel.cl/wp-content/uploads/2025/09/HAROLD-MAYNE-NICHOLLS-SECUL.pdf',
                  web: 'https://www.instagram.com/maynenicholls/?hl=es',
                  instagram: 'https://www.instagram.com/maynenicholls/?hl=es',
                  facebook: 'https://www.facebook.com/MayneNicholls/?ref=_xav_ig_profile_page_web',
                  twitter: 'https://x.com/MayneNicholls'
                }
              ].map((candidato) => (
                <div key={candidato.numero} className="bg-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all group relative">
                  {/* Número de papeleta */}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white font-bold text-sm sm:text-base w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg z-10">
                    {candidato.numero}
                  </div>
                  
                  {/* Foto del candidato */}
                  <div className="relative mb-2 sm:mb-3">
                    <img 
                      src={candidato.foto} 
                      alt={candidato.nombre}
                      className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
                  
                  {/* Información del candidato */}
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight">
                      {candidato.nombre}
                    </h3>
                    
                    <p className="text-blue-200 text-[10px] sm:text-xs leading-tight">
                      {candidato.partido}
                    </p>
                    
                    <p className="text-blue-100 text-[9px] sm:text-[10px] leading-tight">
                      Pacto: {candidato.pacto}
                    </p>
                    
                    <div className="flex items-center gap-1.5 text-blue-100 text-[9px] sm:text-[10px] pt-0.5">
                      <span>{candidato.edad} años</span>
                      <span>•</span>
                      <span className="line-clamp-1">{candidato.profesion}</span>
                    </div>
                  </div>
                  
                  {/* Botones de acción */}
                  <div className="space-y-1.5 sm:space-y-2 mt-2 sm:mt-3">
                    {/* Botón Ver Programa */}
                    <a
                      href={candidato.programa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white/20 hover:bg-white/30 text-white text-[10px] sm:text-xs font-semibold py-1.5 sm:py-2 px-2 rounded transition-colors text-center"
                    >
                      📄 Ver Programa
                    </a>
                    
                    {/* Botón Web Candidato */}
                    <a
                      href={candidato.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600/60 hover:bg-blue-600/80 text-white text-[10px] sm:text-xs font-semibold py-1.5 sm:py-2 px-2 rounded transition-colors text-center"
                    >
                      🌐 Web Candidato
                    </a>
                    
                    {/* Redes Sociales */}
                    <div className="flex items-center justify-center gap-2 pt-1">
                      {candidato.instagram !== '#' && (
                        <a
                          href={candidato.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          title="Instagram"
                        >
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                      
                      {candidato.facebook !== '#' && (
                        <a
                          href={candidato.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          title="Facebook"
                        >
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      )}
                      
                      {candidato.twitter !== '#' && (
                        <a
                          href={candidato.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          title="X (Twitter)"
                        >
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-6 text-center">
              <a
                href="https://www.servel.cl/candidaturas-y-programas-elecciones-presidencial-y-parlamentarias-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors border border-white/20"
              >
                Ver información completa en SERVEL →
              </a>
            </div>
          </div>

          {/* Info adicional de voto - AHORA DESPUÉS DE CANDIDATOS */}
          <div className="text-center px-3">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 sm:py-4 border border-white/20">
              <p className="text-sm sm:text-base text-white font-semibold">
                🗳️ Voto Obligatorio para electores con domicilio en Chile
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Voto voluntario para chilenos en el extranjero
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-4 sm:py-6 mt-6">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-3 sm:mb-4">
            <Link href="/politica-privacidad" className="text-white text-xs sm:text-sm hover:text-blue-200 transition-colors underline">
              Política de Privacidad
            </Link>
            <a 
              href="https://www.servel.cl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-xs sm:text-sm hover:text-blue-200 transition-colors underline"
            >
              SERVEL
            </a>
            <a 
              href="mailto:francog.dev@gmail.com" 
              className="text-white text-xs sm:text-sm hover:text-blue-200 transition-colors underline"
            >
              Contacto
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-white/70 text-xs sm:text-sm">
              © {new Date().getFullYear()} CuandoSonLasElecciones.cl - Información Electoral Chile
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}