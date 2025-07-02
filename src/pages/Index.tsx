
import { HeroInicio } from '@/components/HeroInicio';
import { Navegacion } from '@/components/Navegacion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  // SEO meta tags setup
  useEffect(() => {
    document.title = 'Agua Clara - Captación de Agua Lluvia con Filtrado para Comunidades Rurales';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Aprende sistemas de captación de agua lluvia con filtrado avanzado. Guías, manuales y talleres para lograr autonomía hídrica en comunidades rurales y escuelas. Agua rural sustentable.'
      );
    }
    
    // Keywords meta
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'captación de agua lluvia, sistemas de filtrado, agua rural, tanques pluviales, autonomía hídrica, comunidades rurales, escuelas sustentables';
    document.head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      <HeroInicio />
      
      {/* Sección de Beneficios Principales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Elegir la <span className="text-gradient">Captación de Agua Lluvia</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los sistemas de filtrado avanzado transforman el agua rural en una solución sustentable 
              y confiable para comunidades que buscan autonomía hídrica completa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Autonomía Hídrica Total</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reduce tu dependencia del suministro externo hasta un 80%. Los tanques pluviales 
                  con filtrado garantizan agua limpia durante todo el año, especialmente crítico 
                  para comunidades rurales aisladas donde el acceso al agua es limitado.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-verde-rural/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-verde-rural rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Tecnología de Filtrado Avanzado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Nuestros sistemas de filtrado eliminan 99.9% de contaminantes, bacterias y sedimentos. 
                  La captación de agua lluvia pasa por múltiples etapas de purificación que cumplen 
                  estándares internacionales de calidad para agua potable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Ahorro Económico Comprobado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Familias rurales ahorran hasta $2,400 pesos anuales en costos de agua. 
                  La inversión inicial en tanques pluviales se recupera en 18 meses, 
                  mientras generas un impacto positivo duradero en tu comunidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Cómo Funciona (Resumen) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sistemas de <span className="text-gradient">Filtrado Inteligente</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Captación Optimizada</h3>
                    <p className="text-gray-600">
                      Las canaletas especializadas recolectan agua lluvia del 100% de la superficie del techo. 
                      Cada metro cuadrado puede generar hasta 600 litros anuales de agua rural aprovechable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-verde-rural rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Filtrado Multicapa</h3>
                    <p className="text-gray-600">
                      Sistema de tres etapas: pre-filtro para sedimentos, filtro de carbón activado 
                      para químicos, y filtro UV para eliminación total de patógenos y bacterias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Almacenamiento Inteligente</h3>
                    <p className="text-gray-600">
                      Tanques pluviales con sensores IoT que monitorean calidad, nivel y temperatura. 
                      Capacidad desde 1,000 hasta 10,000 litros según las necesidades familiares.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/como-funciona">
                    Ver Sistema Completo
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-center">Proceso de Captación</h3>
                
                <div className="space-y-6">
                  {/* Lluvia */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-3">
                      <span className="text-2xl">☁️</span>
                    </div>
                    <p className="text-sm font-medium">Lluvia Natural</p>
                  </div>
                  
                  {/* Flecha hacia abajo */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                  
                  {/* Techo */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <p className="text-sm font-medium">Captación en Techo</p>
                  </div>
                  
                  {/* Flecha hacia abajo */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                  
                  {/* Filtro */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                      <span className="text-2xl">🔬</span>
                    </div>
                    <p className="text-sm font-medium">Sistemas de Filtrado</p>
                  </div>
                  
                  {/* Flecha hacia abajo */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                  
                  {/* Agua Limpia */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                      <span className="text-2xl">💧</span>
                    </div>
                    <p className="text-sm font-medium">Agua Potable Lista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Impacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impacto Real en <span className="text-gradient">Comunidades Rurales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada sistema de captación de agua lluvia transforma vidas. Estas son las métricas 
              que demuestran el poder de la autonomía hídrica en el agua rural.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">156,000</div>
              <div className="text-gray-600 font-medium">Litros de Agua Limpia Generados</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-verde-rural/5 to-verde-rural/10 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-verde-rural mb-2">78</div>
              <div className="text-gray-600 font-medium">Familias con Autonomía Hídrica</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">23</div>
              <div className="text-gray-600 font-medium">Escuelas Rurales Equipadas</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">$187,000</div>
              <div className="text-gray-600 font-medium">Pesos Ahorrados en Costos</div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/impacto">
                Ver Dashboard de Impacto Completo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comienza Tu Proyecto de Captación de Agua Lluvia Hoy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a las comunidades que ya disfrutan de agua rural sustentable. 
            Regístrate para recibir tu manual gratuito y acceso a talleres especializados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/registro">
                Registrar Mi Comunidad
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/manual">
                Descargar Manual Gratuito
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
                Transformando comunidades rurales a través de sistemas sustentables 
                de captación de agua lluvia con filtrado avanzado.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <div className="space-y-2">
                <Link to="/manual" className="block text-gray-400 hover:text-white transition-colors">
                  Manual de Instalación
                </Link>
                <Link to="/talleres" className="block text-gray-400 hover:text-white transition-colors">
                  Talleres Educativos
                </Link>
                <Link to="/impacto" className="block text-gray-400 hover:text-white transition-colors">
                  Datos de Impacto
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <div className="space-y-2">
                <a href="mailto:contacto@aguaclara.mx" className="block text-gray-400 hover:text-white transition-colors">
                  contacto@aguaclara.mx
                </a>
                <a href="tel:+525512345678" className="block text-gray-400 hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Ubicación</h3>
              <p className="text-gray-400">
                Sirviendo comunidades rurales en todo México 
                con tecnología de captación sustentable.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agua Clara. Todos los derechos reservados. 
               Captación de agua lluvia, sistemas de filtrado y autonomía hídrica para comunidades rurales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
