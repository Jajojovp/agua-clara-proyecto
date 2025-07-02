
import { useEffect, useRef } from 'react';
import { Navegacion } from '@/components/Navegacion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { animate } from 'motion';

const ComoFunciona = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Cómo Funciona - Sistema de Captación de Agua Lluvia con Filtrado | Agua Clara';
    
    // Animación del diagrama
    if (diagramRef.current) {
      const elementos = diagramRef.current.querySelectorAll('.animate-element');
      elementos.forEach((elemento, index) => {
        animate(
          elemento as HTMLElement,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.8, delay: index * 0.2 }
        );
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cómo Funciona Nuestro <span className="text-gradient">Sistema de Filtrado</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Descubre el proceso completo de captación de agua lluvia, desde la recolección 
              en el techo hasta el suministro de agua potable limpia para tu hogar rural.
            </p>
            <div className="text-center">
              <Button asChild size="lg" className="bg-verde-rural hover:bg-verde-rural/90">
                <Link to="/manual">Ver Manual Detallado</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diagrama Principal del Sistema */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proceso Completo de <span className="text-gradient">Captación y Filtrado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada componente del sistema trabaja en armonía para garantizar que cada gota de lluvia 
              se transforme en agua rural segura y potable para tu familia.
            </p>
          </div>

          <div ref={diagramRef} className="relative max-w-6xl mx-auto">
            {/* Diagrama Visual del Sistema */}
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              
              {/* Etapa 1: Captación */}
              <div className="animate-element text-center">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 mb-6 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-2 bg-red-400 rounded-full"></div>
                  <div className="absolute top-8 left-6 right-6 h-20 bg-gray-300 rounded-t-xl"></div>
                  <div className="absolute top-28 left-8 right-8 h-1 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-blue-400"></div>
                  <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">1. Captación en Techo</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Las canaletas especializadas recolectan agua lluvia de toda la superficie del techo. 
                  Un techo de 100m² puede captar hasta 60,000 litros anuales de agua rural aprovechable, 
                  dependiendo de la precipitación local de tu región.
                </p>
              </div>

              {/* Etapa 2: Filtrado */}
              <div className="animate-element text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 mb-6 relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-300 rounded-lg border-2 border-yellow-500"></div>
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-400 rounded-lg"></div>
                  <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-300 rounded-lg"></div>
                  <div className="absolute top-12 left-6 w-1 h-8 bg-blue-400 animate-pulse"></div>
                  <div className="absolute top-12 right-6 w-1 h-8 bg-blue-600 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-verde-rural">2. Sistemas de Filtrado</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Proceso de purificación en tres etapas: filtro de sedimentos para partículas gruesas, 
                  carbón activado para químicos y cloro, y esterilización UV que elimina 99.9% de 
                  bacterias, virus y patógenos del agua de lluvia captada.
                </p>
              </div>

              {/* Etapa 3: Almacenamiento */}
              <div className="animate-element text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 mb-6 relative overflow-hidden">
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-300 rounded-lg border-2 border-blue-400"></div>
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-blue-400 rounded-b-lg animate-pulse"></div>
                  <div className="absolute top-12 right-8 text-xs font-bold text-blue-600">85%</div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">3. Tanques Pluviales Inteligentes</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Almacenamiento en tanques pluviales de 1,000 a 10,000 litros con sensores IoT. 
                  Monitoreo en tiempo real de nivel, calidad y temperatura. Sistema de bombeo 
                  automático que garantiza presión constante para toda la casa rural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes Técnicos Detallados */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Componentes Técnicos del <span className="text-gradient">Sistema Completo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada elemento ha sido diseñado específicamente para maximizar la eficiencia 
              de captación y garantizar la autonomía hídrica a largo plazo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <CardTitle>Canaletas de Alta Capacidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p><strong>Material:</strong> PVC reforzado o aluminio anticorrosivo</p>
                  <p><strong>Capacidad:</strong> 120 litros/minuto durante lluvia intensa</p>
                  <p><strong>Cobertura:</strong> 100% de la superficie del techo</p>
                  <p><strong>Mantenimiento:</strong> Limpieza trimestral de hojas y sedimentos</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle>Pre-Filtro de Sedimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p><strong>Función:</strong> Elimina hojas, ramas y partículas grandes</p>
                  <p><strong>Eficiencia:</strong> 95% de sedimentos removidos</p>
                  <p><strong>Capacidad:</strong> 1,000 litros/hora de procesamiento</p>
                  <p><strong>Vida útil:</strong> 3-5 años con mantenimiento regular</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <CardTitle>Filtro de Carbón Activado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p><strong>Tecnología:</strong> Carbón de coco ultra-poroso</p>
                  <p><strong>Eliminación:</strong> Cloro, químicos, mal sabor y olor</p>
                  <p><strong>Capacidad:</strong> 5,000 litros antes de reemplazo</p>
                  <p><strong>Certificación:</strong> NSF 42 y 53 para agua potable</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <CardTitle>Esterilización UV</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p><strong>Tecnología:</strong> Lámpara UV-C de 254 nanómetros</p>
                  <p><strong>Eliminación:</strong> 99.9% de bacterias, virus y protozoos</p>
                  <p><strong>Consumo:</strong> 25W de energía solar autónoma</p>
                  <p><strong>Monitoreo:</strong> Sensor de intensidad UV integrado</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗃️</span>
                </div>
                <CardTitle>Tanques Pluviales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p><strong>Material:</strong> Polietileno grado alimenticio</p>
                  <p><strong>Capacidades:</strong> 1,000L, 2,500L, 5,000L, 10,000L</p>
                  <p><strong>Protección UV:</strong> Resistente a rayos solares</p>
                  <p><strong>Garantía:</strong> 10 años contra defectos de fabricación</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <CardTitle>Sensores IoT Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p><strong>Monitoreo:</strong> Nivel, calidad, pH y temperatura</p>
                  <p><strong>Conectividad:</strong> WiFi y 4G para áreas rurales</p>
                  <p><strong>Alertas:</strong> SMS y email automáticos</p>
                  <p><strong>Batería:</strong> Panel solar de 20W integrado</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Instalación */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proceso de <span className="text-gradient">Instalación Profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo técnico especializado garantiza una instalación perfecta 
              que maximiza la captación de agua lluvia en tu propiedad rural.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  paso: 1,
                  titulo: "Evaluación Técnica del Sitio",
                  descripcion: "Análisis detallado de la superficie del techo, inclinación, material y capacidad de captación. Medición de precipitación histórica local y cálculo del potencial de recolección anual de agua rural.",
                  tiempo: "1-2 días"
                },
                {
                  paso: 2,
                  titulo: "Diseño del Sistema Personalizado",
                  descripcion: "Creación de planos técnicos específicos para tu propiedad. Selección de componentes óptimos según el tamaño familiar, consumo estimado y presupuesto disponible para los tanques pluviales.",
                  tiempo: "3-5 días"
                },
                {
                  paso: 3,
                  titulo: "Instalación de Canaletas y Tuberías",
                  descripcion: "Montaje profesional de canaletas de alta capacidad, bajantes y sistema de conducción. Instalación con pendientes perfectas para maximizar la captación de agua lluvia sin estancamientos.",
                  tiempo: "1 día"
                },
                {
                  paso: 4,
                  titulo: "Montaje de Sistemas de Filtrado",
                  descripcion: "Instalación y calibración de los tres niveles de filtración: sedimentos, carbón activado y esterilización UV. Pruebas de calidad del agua para garantizar estándares de potabilidad.",
                  tiempo: "1 día"
                },
                {
                  paso: 5,
                  titulo: "Conexión de Tanques y Sensores",
                  descripcion: "Instalación de tanques pluviales con sistemas de bombeo automático. Configuración de sensores IoT y aplicación móvil para monitoreo remoto del sistema completo.",
                  tiempo: "1 día"
                },
                {
                  paso: 6,
                  titulo: "Pruebas y Capacitación",
                  descripcion: "Pruebas integrales del sistema completo durante diferentes condiciones climáticas. Capacitación familiar en operación, mantenimiento básico y resolución de problemas comunes.",
                  tiempo: "1 día"
                }
              ].map((etapa, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{etapa.paso}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{etapa.titulo}</h3>
                      <span className="text-sm text-gray-500 font-medium">{etapa.tiempo}</span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{etapa.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-verde-rural to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Instalar Tu Sistema de Captación?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo técnico está preparado para evaluar tu propiedad rural 
            y diseñar el sistema perfecto de captación de agua lluvia para tu familia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/registro">
                Solicitar Evaluación Gratuita
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/manual">
                Descargar Manual Técnico
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-agua-claro to-agua-medio rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-bold">Agua Clara</span>
              </div>
              <p className="text-gray-400">
                Sistemas profesionales de captación de agua lluvia para autonomía hídrica rural.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Recursos Técnicos</h3>
              <div className="space-y-2">
                <Link to="/manual" className="block text-gray-400 hover:text-white transition-colors">
                  Manual de Instalación
                </Link>
                <Link to="/talleres" className="block text-gray-400 hover:text-white transition-colors">
                  Talleres Especializados
                </Link>
                <Link to="/impacto" className="block text-gray-400 hover:text-white transition-colors">
                  Datos de Rendimiento
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Soporte Técnico</h3>
              <div className="space-y-2">
                <a href="mailto:soporte@aguaclara.mx" className="block text-gray-400 hover:text-white transition-colors">
                  soporte@aguaclara.mx
                </a>
                <a href="tel:+525512345678" className="block text-gray-400 hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Cobertura</h3>
              <p className="text-gray-400">
                Instalaciones profesionales en comunidades rurales de toda la República Mexicana.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agua Clara. Sistemas de captación de agua lluvia, filtrado avanzado y tanques pluviales para autonomía hídrica rural.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComoFunciona;
