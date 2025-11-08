import React, { useState, useEffect } from 'react';
import { Calendar, Users, Vote, Clock } from 'lucide-react';

const EleccionesChile2025 = () => {
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

  // Fechas de las elecciones (en hora de Chile UTC-3)
  const firstRoundDate = new Date('2025-11-16T08:00:00-03:00');
  const secondRoundDate = new Date('2025-12-14T08:00:00-03:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Calcular tiempo para primera vuelta
      const diff1 = firstRoundDate - now;
      if (diff1 > 0) {
        setTimeLeft({
          days: Math.floor(diff1 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff1 / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff1 / 1000 / 60) % 60),
          seconds: Math.floor((diff1 / 1000) % 60)
        });
      }

      // Calcular tiempo para segunda vuelta
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
        <div className="max-w-5xl w-full">
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
          <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
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

          {/* Info adicional */}
          <div className="mt-6 sm:mt-8 text-center px-3">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
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
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-white text-xs sm:text-sm">
            Información oficial: <a href="https://www.servel.cl" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">SERVEL</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EleccionesChile2025;