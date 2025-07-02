
import { useEffect } from 'react';
import { Navegacion } from '@/components/Navegacion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Manual = () => {
  useEffect(() => {
    document.title = 'Manual de Uso - Captación de Agua Lluvia con Filtrado | Guía Completa';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-verde-rural/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manual Completo de <span className="text-gradient">Captación de Agua Lluvia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Guía técnica detallada para instalación, operación y mantenimiento de sistemas 
              de filtrado avanzado en comunidades rurales y escuelas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Descargar PDF Completo (2.5MB)
              </Button>
              <Button size="lg" variant="outline">
                Ver Versión Interactiva
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Índice del Manual */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Índice del <span className="text-gradient">Manual Técnico</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 180 páginas de contenido técnico especializado, diagramas detallados 
              y guías paso a paso para dominar los sistemas de captación de agua lluvia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Columna 1 */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 1: Fundamentos</CardTitle>
                    <Badge variant="secondary">22 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Principios básicos de captación de agua lluvia</p>
                    <p>• Cálculo de potencial de recolección regional</p>
                    <p>• Normativas y regulaciones para agua rural</p>
                    <p>• Análisis de calidad del agua de lluvia</p>
                    <p>• Evaluación de necesidades hídricas familiares</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 2: Diseño del Sistema</CardTitle>
                    <Badge variant="secondary">35 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Evaluación técnica de techos y superficies</p>
                    <p>• Dimensionamiento de canaletas y tuberías</p>
                    <p>• Selección de tanques pluviales apropiados</p>
                    <p>• Ubicación óptima de componentes</p>
                    <p>• Cálculos hidráulicos y de presión</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 3: Sistemas de Filtrado</CardTitle>
                    <Badge variant="secondary">28 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Tecnologías de filtración multicapa</p>
                    <p>• Instalación de filtros de sedimentos</p>
                    <p>• Configuración de carbón activado</p>
                    <p>• Sistemas de esterilización UV</p>
                    <p>• Pruebas de calidad y certificación</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 4: Instalación Práctica</CardTitle>
                    <Badge variant="secondary">42 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Herramientas y materiales necesarios</p>
                    <p>• Procedimientos de instalación paso a paso</p>
                    <p>• Conexiones hidráulicas y eléctricas</p>
                    <p>• Pruebas de funcionamiento integral</p>
                    <p>• Resolución de problemas comunes</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Columna 2 */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 5: Monitoreo IoT</CardTitle>
                    <Badge variant="secondary">25 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Instalación de sensores inteligentes</p>
                    <p>• Configuración de conectividad rural</p>
                    <p>• Uso de aplicaciones de monitoreo</p>
                    <p>• Interpretación de datos en tiempo real</p>
                    <p>• Alertas automáticas y notificaciones</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 6: Mantenimiento</CardTitle>
                    <Badge variant="secondary">18 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Calendarios de mantenimiento preventivo</p>
                    <p>• Limpieza de tanques pluviales</p>
                    <p>• Reemplazo de filtros y componentes</p>
                    <p>• Diagnóstico de problemas técnicos</p>
                    <p>• Registro de operaciones y servicios</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Capítulo 7: Optimización</CardTitle>
                    <Badge variant="secondary">15 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Mejoras en eficiencia de captación</p>
                    <p>• Ampliación de sistemas existentes</p>
                    <p>• Integración con energía solar</p>
                    <p>• Aprovechamiento de agua gris</p>
                    <p>• Análisis de retorno de inversión</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Anexos Técnicos</CardTitle>
                    <Badge variant="secondary">12 páginas</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-2">
                    <p>• Tablas de precipitación por región</p>
                    <p>• Especificaciones técnicas de componentes</p>
                    <p>• Proveedores certificados nacionales</p>
                    <p>• Formatos de registro y control</p>
                    <p>• Bibliografía y recursos adicionales</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Muestra del Manual */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vista Previa del <span className="text-gradient">Contenido Técnico</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ejemplo del nivel de detalle y calidad técnica que encontrarás 
              en cada sección del manual de captación de agua lluvia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  3.2 Instalación del Sistema de Filtrado Multicapa
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Los sistemas de filtrado avanzado requieren una configuración específica 
                  para maximizar la eliminación de contaminantes del agua rural captada. 
                  El proceso consta de tres etapas secuenciales que trabajan en armonía.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-verde-rural">
                    Etapa 1: Filtro de Sedimentos (5-50 micrones)
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      <strong>Objetivo:</strong> Eliminar partículas sólidas, hojas, ramas pequeñas y sedimentos 
                      que pueden obstruir los filtros posteriores y reducir la eficiencia del sistema.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="font-medium mb-2">Materiales requeridos:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Filtro de malla de acero inoxidable 316</li>
                          <li>• Carcasa de PVC reforzado Ø4"</li>
                          <li>• Válvula de purga automática</li>
                          <li>• Manómetro de presión 0-60 PSI</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Especificaciones técnicas:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Caudal máximo: 1,200 L/h</li>
                          <li>• Presión operativa: 15-45 PSI</li>
                          <li>• Temperatura: 5-40°C</li>
                          <li>• Eficiencia: 95% partículas {'>'}20 micrones</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                      <p className="text-blue-800 text-sm">
                        <strong>Tip Profesional:</strong> Instala el filtro de sedimentos con una inclinación 
                        de 15° hacia la válvula de purga para facilitar el drenaje automático de partículas acumuladas.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-accent">
                    Procedimiento de Instalación Paso a Paso
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Ubicar el filtro a 1.5m de altura desde el piso para generar presión gravitacional adecuada.",
                      "Conectar la entrada del filtro a la tubería principal con acoplamiento de rosca NPT 1\".",
                      "Instalar manómetro en la entrada para monitorear presión del sistema continuamente.",
                      "Conectar válvula de purga en la parte inferior con drenaje hacia área de descarga.",
                      "Realizar prueba hidrostática a 60 PSI durante 15 minutos para verificar hermeticidad.",
                      "Abrir válvulas gradualmente y verificar flujo constante sin burbujas de aire."
                    ].map((paso, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 pt-1">{paso}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Consideraciones de Seguridad</h5>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Utilizar herramientas dieléctricas en instalaciones con componentes eléctricos</li>
                    <li>• Verificar que no existan fugas antes de energizar el sistema</li>
                    <li>• Mantener registro de presiones operativas para detectar anomalías tempranamente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Adicionales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos <span className="text-gradient">Complementarios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas y materiales adicionales para complementar tu aprendizaje 
              sobre sistemas de captación de agua lluvia y autonomía hídrica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📹</span>
                </div>
                <CardTitle>Videos Instructivos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Serie completa de 12 videos HD que muestran cada proceso de instalación, 
                  mantenimiento y operación de sistemas de filtrado en tiempo real.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Ver Playlist Completa
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle>Calculadora de Diseño</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Herramienta interactiva que calcula automáticamente el dimensionamiento 
                  óptimo de tanques pluviales según tu ubicación, techo y necesidades.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Abrir Calculadora
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <CardTitle>Lista de Proveedores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Directorio actualizado de proveedores certificados para componentes 
                  de sistemas de filtrado, tanques y sensores IoT en toda la república.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Ver Directorio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-verde-rural">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Descarga el Manual Completo Gratuito
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtén acceso inmediato a más de 180 páginas de contenido técnico especializado 
            en captación de agua lluvia, sistemas de filtrado y autonomía hídrica rural.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Descargar Manual PDF (2.5MB)
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/talleres">
                Ver Talleres Prácticos
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
                Manuales técnicos especializados en captación de agua lluvia y sistemas de filtrado rural.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Manuales Técnicos</h3>
              <div className="space-y-2">
                <a href="#instalacion" className="block text-gray-400 hover:text-white transition-colors">
                  Manual de Instalación
                </a>
                <a href="#mantenimiento" className="block text-gray-400 hover:text-white transition-colors">
                  Guía de Mantenimiento
                </a>
                <a href="#troubleshooting" className="block text-gray-400 hover:text-white transition-colors">
                  Resolución de Problemas
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Soporte Técnico</h3>
              <div className="space-y-2">
                <a href="mailto:manuales@aguaclara.mx" className="block text-gray-400 hover:text-white transition-colors">
                  manuales@aguaclara.mx
                </a>
                <a href="tel:+525512345678" className="block text-gray-400 hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Actualizaciones</h3>
              <p className="text-gray-400">
                Recibe las últimas versiones del manual y nuevas guías técnicas especializadas.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agua Clara. Manual técnico de captación de agua lluvia, sistemas de filtrado y tanques pluviales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Manual;
