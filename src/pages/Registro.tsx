
import { useEffect, useState } from 'react';
import { Navegacion } from '@/components/Navegacion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    organizacion: '',
    tipo: '',
    estado: '',
    municipio: '',
    tamanoFamilia: '',
    necesidadesAgua: '',
    presupuesto: '',
    tipoTecho: '',
    superficieTecho: '',
    experienciaPrevia: false,
    recibirNewsletter: true,
    comentarios: ''
  });

  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Registro - Únete al Programa de Captación de Agua Lluvia | Agua Clara';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulación de envío
    toast({
      title: "¡Registro Exitoso!",
      description: "Te contactaremos en las próximas 24 horas para evaluar tu proyecto de captación de agua lluvia.",
    });

    console.log('Datos del formulario:', formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 to-verde-rural/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Únete al <span className="text-gradient">Programa de Captación</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Regístrate para recibir evaluación gratuita, manual técnico especializado 
              y acceso prioritario a talleres de captación de agua lluvia para tu comunidad rural.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl">Formulario de Registro</CardTitle>
                <CardDescription className="text-lg">
                  Completa la información para que nuestro equipo técnico pueda diseñar 
                  el sistema de filtrado perfecto para tus necesidades de agua rural.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Información Personal */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-primary border-b pb-2">
                      Información Personal
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nombre" className="text-base font-medium">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="nombre"
                          type="text"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-base font-medium">
                          Correo Electrónico *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="tu@email.com"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="telefono" className="text-base font-medium">
                          Teléfono *
                        </Label>
                        <Input
                          id="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          placeholder="+52 555 123 4567"
                          required
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="organizacion" className="text-base font-medium">
                          Organización/Comunidad
                        </Label>
                        <Input
                          id="organizacion"
                          type="text"
                          value={formData.organizacion}
                          onChange={(e) => handleInputChange('organizacion', e.target.value)}
                          placeholder="Nombre de tu comunidad o escuela"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tipo" className="text-base font-medium">
                        Tipo de Implementación *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('tipo', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecciona el tipo de proyecto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="familiar">Hogar Familiar Rural</SelectItem>
                          <SelectItem value="escuela">Escuela o Centro Educativo</SelectItem>
                          <SelectItem value="comunitario">Proyecto Comunitario</SelectItem>
                          <SelectItem value="cooperativa">Cooperativa Agrícola</SelectItem>
                          <SelectItem value="clinica">Centro de Salud Rural</SelectItem>
                          <SelectItem value="otro">Otro (especificar en comentarios)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-verde-rural border-b pb-2">
                      Ubicación del Proyecto
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="estado" className="text-base font-medium">
                          Estado *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('estado', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Selecciona tu estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oaxaca">Oaxaca</SelectItem>
                            <SelectItem value="chiapas">Chiapas</SelectItem>
                            <SelectItem value="guerrero">Guerrero</SelectItem>
                            <SelectItem value="michoacan">Michoacán</SelectItem>
                            <SelectItem value="veracruz">Veracruz</SelectItem>
                            <SelectItem value="puebla">Puebla</SelectItem>
                            <SelectItem value="hidalgo">Hidalgo</SelectItem>
                            <SelectItem value="otro">Otro estado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="municipio" className="text-base font-medium">
                          Municipio *
                        </Label>
                        <Input
                          id="municipio"
                          type="text"
                          value={formData.municipio}
                          onChange={(e) => handleInputChange('municipio', e.target.value)}
                          placeholder="Nombre del municipio"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Información Técnica */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-accent border-b pb-2">
                      Información Técnica
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="tamanoFamilia" className="text-base font-medium">
                          Número de Beneficiarios *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('tamanoFamilia', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Personas que usarán el sistema" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3">1-3 personas</SelectItem>
                            <SelectItem value="4-6">4-6 personas</SelectItem>
                            <SelectItem value="7-10">7-10 personas</SelectItem>
                            <SelectItem value="11-25">11-25 personas</SelectItem>
                            <SelectItem value="26-50">26-50 personas</SelectItem>
                            <SelectItem value="50+">Más de 50 personas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="presupuesto" className="text-base font-medium">
                          Presupuesto Disponible
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('presupuesto', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Rango de inversión" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bajo-5000">Hasta $5,000 pesos</SelectItem>
                            <SelectItem value="medio-15000">$5,000 - $15,000 pesos</SelectItem>
                            <SelectItem value="alto-30000">$15,000 - $30,000 pesos</SelectItem>
                            <SelectItem value="premium-50000">$30,000 - $50,000 pesos</SelectItem>
                            <SelectItem value="corporativo">Más de $50,000 pesos</SelectItem>
                            <SelectItem value="consultar">Necesito consultoría</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="tipoTecho" className="text-base font-medium">
                          Tipo de Techo *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('tipoTecho', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Material del techo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lamina">Lámina galvanizada</SelectItem>
                            <SelectItem value="teja">Teja de barro</SelectItem>
                            <SelectItem value="concreto">Concreto/Losa</SelectItem>
                            <SelectItem value="palma">Palma/Material natural</SelectItem>
                            <SelectItem value="mixto">Mixto</SelectItem>
                            <SelectItem value="otro">Otro material</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="superficieTecho" className="text-base font-medium">
                          Superficie del Techo (m²)
                        </Label>
                        <Input
                          id="superficieTecho"
                          type="number"
                          value={formData.superficieTecho}
                          onChange={(e) => handleInputChange('superficieTecho', e.target.value)}
                          placeholder="Ej: 120"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="necesidadesAgua" className="text-base font-medium">
                        Necesidades Específicas de Agua Rural
                      </Label>
                      <Textarea
                        id="necesidadesAgua"
                        value={formData.necesidadesAgua}
                        onChange={(e) => handleInputChange('necesidadesAgua', e.target.value)}
                        placeholder="Describe cómo planeas usar el agua captada: consumo humano, riego, ganado, etc."
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Información Adicional */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                      Información Adicional
                    </h3>
                    
                    <div>
                      <Label htmlFor="comentarios" className="text-base font-medium">
                        Comentarios y Preguntas
                      </Label>
                      <Textarea
                        id="comentarios"
                        value={formData.comentarios}
                        onChange={(e) => handleInputChange('comentarios', e.target.value)}
                        placeholder="Cuéntanos sobre tu situación actual de agua, retos específicos, o cualquier pregunta sobre sistemas de filtrado..."
                        className="mt-2"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="experienciaPrevia"
                          checked={formData.experienciaPrevia}
                          onCheckedChange={(checked) => handleInputChange('experienciaPrevia', !!checked)}
                        />
                        <Label htmlFor="experienciaPrevia" className="text-base">
                          Tengo experiencia previa con sistemas de captación de agua lluvia
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="recibirNewsletter"
                          checked={formData.recibirNewsletter}
                          onCheckedChange={(checked) => handleInputChange('recibirNewsletter', !!checked)}
                        />
                        <Label htmlFor="recibirNewsletter" className="text-base">
                          Quiero recibir boletín mensual con tips de mantenimiento y nuevas tecnologías
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Botón de envío */}
                  <div className="pt-8 border-t">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-verde-rural hover:from-primary/90 hover:to-verde-rural/90 text-lg py-4"
                    >
                      Registrar Mi Proyecto de Captación
                    </Button>
                    
                    <p className="text-center text-gray-600 mt-4">
                      Al registrarte, nuestro equipo técnico te contactará en 24-48 horas 
                      para agendar tu evaluación gratuita de captación de agua lluvia.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios del Registro */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qué Recibes al <span className="text-gradient">Registrarte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tu registro te da acceso inmediato a recursos exclusivos 
              y soporte técnico especializado para tu proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icono: "📋",
                titulo: "Evaluación Gratuita",
                descripcion: "Análisis técnico completo de tu propiedad y potencial de captación de agua lluvia sin costo."
              },
              {
                icono: "📚",
                titulo: "Manual Técnico PDF",
                descripcion: "Guía completa de 180+ páginas con diagramas, especificaciones y procedimientos detallados."
              },
              {
                icono: "🎓",
                titulo: "Acceso a Talleres",
                descripcion: "Inscripción prioritaria a talleres presenciales y virtuales de capacitación especializada."
              },
              {
                icono: "💬",
                titulo: "Soporte Técnico",
                descripcion: "Asesoría personalizada vía WhatsApp y email durante todo el proceso de implementación."
              }
            ].map((beneficio, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{beneficio.icono}</div>
                <h3 className="text-xl font-semibold mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registro;
