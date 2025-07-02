import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { animate } from 'motion';

export const HeroInicio = () => {
  const lluviaRef = useRef<HTMLDivElement>(null);
  const tanqueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación de lluvia
    if (lluviaRef.current) {
      animate(
        lluviaRef.current,
        { transform: ['translateY(0px)', 'translateY(20px)', 'translateY(0px)'] },
        { duration: 3, repeat: Infinity, easing: 'ease-in-out' }
      );
    }

    // Animación del tanque llenándose
    if (tanqueRef.current) {
      animate(
        tanqueRef.current,
        { transform: ['scaleY(0.2)', 'scaleY(0.8)', 'scaleY(0.2)'] },
        { duration: 4, repeat: Infinity, easing: 'ease-out' }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nubes de lluvia */}
        <div className="absolute top-20 left-10 w-32 h-20 bg-gray-300/20 rounded-full"></div>
        <div className="absolute top-16 right-20 w-24 h-16 bg-gray-300/15 rounded-full"></div>
        
        {/* Gotas de lluvia animadas */}
        <div ref={lluviaRef} className="absolute top-40 left-1/4 w-1 h-20 bg-agua-claro/60 rounded-full"></div>
        <div className="absolute top-32 left-1/3 w-1 h-16 bg-agua-claro/40 rounded-full animate-lluvia"></div>
        <div className="absolute top-36 right-1/3 w-1 h-24 bg-agua-claro/50 rounded-full animate-lluvia"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido del Hero */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block text-gray-800">Captación de</span>
                <span className="block text-gradient">Agua Lluvia</span>
                <span className="block text-gray-700 text-2xl md:text-3xl font-medium">
                  con Filtrado Avanzado
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                Transforma cada gota de lluvia en agua limpia y segura para tu comunidad. 
                Aprende, implementa y logra la autonomía hídrica que necesitas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Link to="/como-funciona">
                  Descubre Cómo Funciona
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-verde-rural text-verde-rural hover:bg-verde-rural hover:text-white text-lg px-8 py-4">
                <Link to="/manual">
                  Ver Manual Completo
                </Link>
              </Button>
            </div>

            {/* Stats rápidas */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">12,000+</div>
                <div className="text-sm text-gray-600">Litros Recolectados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-rural">45</div>
                <div className="text-sm text-gray-600">Comunidades Activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">89%</div>
                <div className="text-sm text-gray-600">Calidad del Agua</div>
              </div>
            </div>
          </div>

          {/* Visualización del Sistema */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                Sistema de Captación en Tiempo Real
              </h3>
              
              {/* Diagrama simplificado */}
              <div className="space-y-6">
                {/* Techo con canaletas */}
                <div className="flex justify-center">
                  <div className="w-48 h-2 bg-gray-400 rounded-full relative">
                    <div className="absolute -top-1 -right-2 w-4 h-4 bg-agua-claro rounded-full animate-ondas"></div>
                  </div>
                </div>
                
                {/* Tubería */}
                <div className="flex justify-center">
                  <div className="w-2 h-16 bg-gray-400 relative">
                    <div className="absolute top-2 left-0 w-2 h-4 bg-agua-medio animate-pulse"></div>
                  </div>
                </div>
                
                {/* Filtro */}
                <div className="flex justify-center">
                  <div className="w-16 h-8 bg-yellow-200 rounded-lg border-2 border-yellow-400 flex items-center justify-center">
                    <div className="text-xs font-medium">FILTRO</div>
                  </div>
                </div>
                
                {/* Tanque */}
                <div className="flex justify-center">
                  <div className="w-24 h-32 bg-gray-200 rounded-lg border-2 border-gray-300 relative overflow-hidden">
                    <div 
                      ref={tanqueRef}
                      className="absolute bottom-0 left-0 right-0 bg-agua-medio rounded-b-lg origin-bottom"
                      style={{ height: '60%' }}
                    ></div>
                    <div className="absolute top-2 right-2 text-xs font-medium text-gray-600">85%</div>
                  </div>
                </div>
                
                {/* Salida de agua limpia */}
                <div className="flex justify-center">
                  <div className="text-sm text-center text-verde-rural font-medium">
                    💧 Agua Lista para Consumo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
