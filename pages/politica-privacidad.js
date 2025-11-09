import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-red-500 to-blue-700">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield className="w-10 h-10 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Política de Privacidad
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-white/20">
          <div className="prose prose-invert max-w-none">
            <p className="text-blue-100 text-sm mb-8">
              Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introducción</h2>
              <p className="text-white/90 leading-relaxed">
                Bienvenido a CuandoSonLasElecciones.cl. Esta Política de Privacidad describe cómo recopilamos, 
                usamos y protegemos la información cuando visitas nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Información que Recopilamos</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Nuestro sitio web es principalmente informativo y no recopila datos personales directamente. 
                Sin embargo, utilizamos servicios de terceros que pueden recopilar cierta información:
              </p>
              <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Dispositivo utilizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Uso de Cookies</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación. 
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Tipos de cookies que utilizamos:</h3>
              <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                <li><strong>Cookies de publicidad:</strong> Utilizadas por Google AdSense para mostrar anuncios relevantes</li>
                <li><strong>Cookies analíticas:</strong> Para entender cómo los visitantes interactúan con el sitio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Google AdSense</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Este sitio web utiliza Google AdSense, un servicio de publicidad proporcionado por Google Inc. 
                Google AdSense utiliza cookies para mostrar anuncios basados en tus visitas previas a este u otros sitios web.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                Puedes deshabilitar el uso de cookies de Google visitando la página de{' '}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  configuración de anuncios de Google
                </a>.
              </p>
              <p className="text-white/90 leading-relaxed">
                Para más información sobre cómo Google utiliza los datos, visita:{' '}
                <a 
                  href="https://policies.google.com/technologies/partner-sites" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  Cómo utiliza Google los datos cuando usas sitios web de nuestros partners
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Enlaces a Sitios Externos</h2>
              <p className="text-white/90 leading-relaxed">
                Nuestro sitio contiene enlaces a sitios web externos, incluyendo sitios oficiales de candidatos 
                y redes sociales. No somos responsables de las prácticas de privacidad de estos sitios externos. 
                Te recomendamos leer las políticas de privacidad de cada sitio que visites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Seguridad de la Información</h2>
              <p className="text-white/90 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger la información 
                contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún 
                método de transmisión por Internet es 100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Derechos del Usuario</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada en Chile, tienes derecho a:
              </p>
              <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Menores de Edad</h2>
              <p className="text-white/90 leading-relaxed">
                Nuestro sitio web es de carácter informativo y está dirigido a público general. 
                No recopilamos intencionalmente información de menores de 18 años sin el consentimiento parental.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Cambios a esta Política</h2>
              <p className="text-white/90 leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. 
                Los cambios serán efectivos inmediatamente después de su publicación en esta página. 
                Te recomendamos revisar esta política periódicamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Si tienes preguntas o inquietudes sobre esta Política de Privacidad, puedes contactarnos en:
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-white font-semibold">Email:</p>
                <a 
                  href="mailto:cuandosonlaselecciones@gmail.com" 
                  className="text-blue-300 hover:text-blue-200"
                >
                  cuandosonlaselecciones@gmail.com
                </a>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Legislación Aplicable</h2>
              <p className="text-white/90 leading-relaxed">
                Esta Política de Privacidad se rige por las leyes de la República de Chile, 
                específicamente la Ley N° 19.628 sobre Protección de la Vida Privada.
              </p>
            </section>

            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Al utilizar CuandoSonLasElecciones.cl, aceptas los términos de esta Política de Privacidad.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}