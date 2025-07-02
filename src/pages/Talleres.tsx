
import { useEffect } from 'react';
import { Navegacion } from '@/components/Navegacion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Talleres = () => {
  useEffect(() => {
    document.title = 'Talleres - Capacitación en Captación de Agua Lluvia y Sistemas de Filtrado';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      
      <section className="py-20 bg-gradient-to-br from-verde-rural/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Talleres de <span className="text-gradient">Capacitación Técnica</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Programas especializados de formación práctica en captación de agua lluvia, 
              sistemas de filtrado y tecnología para autonomía hídrica rural.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Talleres */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Próximos <span className="text-gradient">Talleres Programados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capacitación presencial y virtual para comunidades rurales, escuelas 
              y organizaciones interesadas en implementar sistemas de captación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titulo: "Fundamentos de Captación",
                fecha: "15 Marzo 2024",
                modalidad: "Presencial",
                ubicacion: "Oaxaca de Juárez, Oaxaca",
                duracion: "8 horas",
                cupos: "25 disponibles",
                nivel: "Básico",
                precio: "Gratuito"
              },
              {
                titulo: "Sistemas de Filtrado Avanzado",
                fecha: "22 Marzo 2024",
                modalidad: "Virtual", 
                ubicacion: "Plataforma Online",
                duracion: "6 horas",
                cupos: "50 disponibles",
                nivel: "Intermedio",
                precio: "$150 pesos"
              },
              {
                titulo: "Instalación y Mantenimiento",
                fecha: "5 Abril 2024",
                modalidad: "Presencial",
                ubicacion: "Tuxtla Gutiérrez, Chiapas",
                duracion: "12 horas",
                cupos: "15 disponibles", 
                nivel: "Avanzado",
                precio: "$300 pesos"
              },
              {
                titulo: "Tanques Pluviales IoT",
                fecha: "12 Abril 2024",
                modalidad: "Híbrido",
                ubicacion: "Ciudad de México",
                duracion: "10 horas",
                cupos: "30 disponibles",
                nivel: "Especializado",
                precio: "$450 pesos"
              },
              {
                titulo: "Captación para Escuelas",
                fecha: "19 Abril 2024",
                modalidad: "Presencial",
                ubicacion: "Chilpancingo, Guerrero",
                duracion: "6 horas",
                cupos: "40 disponibles",
                nivel: "Educativo",
                precio: "Gratuito"
              },
              {
                titulo: "Autonomía Hídrica Rural",
                fecha: "26 Abril 2024",
                modalidad: "Virtual",
                ubicacion: "Plataforma Online", 
                duracion: "8 horas",
                cupos: "75 disponibles",
                nivel: "Integral",
                precio: "$200 pesos"
              }
            ].map((taller, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={taller.modalidad === 'Presencial' ? 'default' : taller.modalidad === 'Virtual' ? 'secondary' : 'outline'}>
                      {taller.modalidad}
                    </Badge>
                    <Badge variant="outline">{taller.nivel}</Badge>
                  </div>
                  <CardTitle className="text-xl">{taller.titulo}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{taller.fecha}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ubicación:</span>
                      <span className="font-medium">{taller.ubicacion}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-medium">{taller.duracion}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Cupos:</span>
                      <span className="font-medium text-verde-rural">{taller.cupos}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Precio:</span>
                      <span className="font-bold text-lg">{taller.precio}</span>
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      Registrarse Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido de los Talleres */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contenido <span className="text-gradient">Técnico Especializado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada taller incluye teoría, práctica y certificación oficial 
              en sistemas de captación de agua lluvia y filtrado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                modulo: "Módulo 1: Principios de Captación",
                contenido: [
                  "Fundamentos físicos de la captación de agua lluvia",
                  "Análisis de precipitación regional y potencial hídrico",
                  "Evaluación de superficies de captación y eficiencia",
                  "Cálculo de necesidades hídricas familiares y comunitarias",
                  "Normativas y regulaciones para agua rural en México"
                ]
              },
              {
                modulo: "Módulo 2: Diseño de Sistemas",
                contenido: [
                  "Dimensionamiento de canaletas y sistemas de conducción",
                  "Selección de tanques pluviales según capacidad requerida",
                  "Diseño hidráulico y cálculos de presión",
                  "Ubicación estratégica de componentes del sistema",
                  "Integración con sistemas existentes de agua rural"
                ]
              },
              {
                modulo: "Módulo 3: Tecnologías de Filtrado",
                contenido: [
                  "Sistemas multicapa: sedimentos, carbón y UV",
                  "Instalación y calibración de filtros especializados",
                  "Monitoreo de calidad del agua en tiempo real",
                  "Mantenimiento preventivo y correctivo",
                  "Certificación de agua potable según normas oficiales"
                ]
              },
              {
                modulo: "Módulo 4: Implementación Práctica",
                contenido: [
                  "Instalación paso a paso con herramientas profesionales",
                  "Conexiones hidráulicas y eléctricas seguras",
                  "Configuración de sensores IoT y monitoreo remoto",
                  "Pruebas de funcionamiento y puesta en marcha",
                  "Capacitación de usuarios finales y comunidades"
                ]
              }
            ].map((modulo, index) => (
              <Card key={index} className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{modulo.modulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {modulo.contenido.map((tema, temaIndex) => (
                      <div key={temaIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-verde-rural rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{tema}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Talleres Anteriores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Talleres <span className="text-gradient">Realizados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 500 personas capacitadas en sistemas de captación 
              de agua lluvia y tecnologías de filtrado avanzado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                imagen: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=400&h=300&fit=crop",
                titulo: "Taller en Oaxaca",
                participantes: "35 asistentes",
                fecha: "Febrero 2024"
              },
              {
                imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                titulo: "Capacitación Virtual",
                participantes: "85 conectados",
                fecha: "Enero 2024"
              },
              {
                imagen: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
                titulo: "Escuela Rural Chiapas",
                participantes: "45 maestros",
                fecha: "Diciembre 2023"
              },
              {
                imagen: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300&fit=crop",
                titulo: "Cooperativa Guerrero",
                participantes: "28 familias",
                fecha: "Noviembre 2023"
              }
            ].map((evento, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${evento.imagen})` }}></div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{evento.titulo}</h3>
                  <p className="text-gray-600 text-sm">{evento.participantes}</p>
                  <p className="text-gray-500 text-xs">{evento.fecha}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talleres;
