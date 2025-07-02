
import { useEffect } from 'react';
import { Navegacion } from '@/components/Navegacion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Impacto = () => {
  useEffect(() => {
    document.title = 'Impacto - Datos de Captación de Agua Lluvia en Comunidades Rurales';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      
      <section className="py-20 bg-gradient-to-br from-accent/10 to-verde-rural/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Impacto Real en <span className="text-gradient">Agua Rural</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Datos verificables sobre la transformación de comunidades rurales 
              através de sistemas de captación de agua lluvia y filtrado avanzado.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard de Métricas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary mb-2">487,560</CardTitle>
                <CardDescription className="text-lg font-medium">Litros de Agua Limpia Generados</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={92} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">92% de la meta anual alcanzada</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-verde-rural/5 to-verde-rural/10">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-verde-rural mb-2">156</CardTitle>
                <CardDescription className="text-lg font-medium">Familias Rurales Beneficiadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={78} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">78% reportan autonomía hídrica total</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-accent mb-2">34</CardTitle>
                <CardDescription className="text-lg font-medium">Escuelas Rurales Equipadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={85} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">Impacto en 2,340 estudiantes</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-yellow-500/5 to-yellow-500/10">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-600 mb-2">$456,780</CardTitle>
                <CardDescription className="text-lg font-medium">Pesos Ahorrados en Costos</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={95} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">ROI promedio: 18 meses</p>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos y análisis detallado */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Distribución Regional de Sistemas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { region: 'Oaxaca Rural', sistemas: 45, porcentaje: 90 },
                    { region: 'Chiapas', sistemas: 38, porcentaje: 76 },
                    { region: 'Guerrero', sistemas: 32, porcentaje: 64 },
                    { region: 'Michoacán', sistemas: 28, porcentaje: 56 },
                    { region: 'Veracruz', sistemas: 23, porcentaje: 46 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.region}</span>
                        <span className="text-gray-600">{item.sistemas} sistemas</span>
                      </div>
                      <Progress value={item.porcentaje} className="w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Calidad del Agua Captada</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { parametro: 'Bacterias E.coli', eliminacion: 99.9, color: 'bg-green-500' },
                    { parametro: 'Sedimentos', eliminacion: 98.5, color: 'bg-blue-500' },
                    { parametro: 'Cloro residual', eliminacion: 95.2, color: 'bg-purple-500' },
                    { parametro: 'Metales pesados', eliminacion: 92.8, color: 'bg-orange-500' },
                    { parametro: 'Compuestos químicos', eliminacion: 89.4, color: 'bg-red-500' }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.parametro}</span>
                        <span className="text-gray-600">{item.eliminacion}% eliminado</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${item.color}`} 
                          style={{ width: `${item.eliminacion}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Casos de <span className="text-gradient">Éxito Documentados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonios reales de familias y comunidades que han logrado 
              autonomía hídrica total con sistemas de captación de agua lluvia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                comunidad: "Escuela Primaria Benito Juárez",
                ubicacion: "San Juan Mixtepec, Oaxaca",
                impacto: "180 estudiantes con acceso permanente a agua potable",
                ahorro: "$18,500 pesos anuales",
                sistema: "Sistema de 5,000L con filtrado UV"
              },
              {
                comunidad: "Cooperativa Las Flores",
                ubicacion: "Altamirano, Chiapas", 
                impacto: "12 familias rurales con autonomía hídrica",
                ahorro: "$34,200 pesos anuales",
                sistema: "Red de tanques pluviales interconectados"
              },
              {
                comunidad: "Centro de Salud Rural",
                ubicacion: "Tlapa de Comonfort, Guerrero",
                impacto: "Agua estéril para procedimientos médicos",
                ahorro: "$22,800 pesos anuales", 
                sistema: "Filtrado médico de alta pureza"
              }
            ].map((caso, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{caso.comunidad}</CardTitle>
                  <CardDescription className="text-verde-rural font-medium">{caso.ubicacion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Impacto:</strong> {caso.impacto}</p>
                    <p className="text-gray-700"><strong>Ahorro anual:</strong> {caso.ahorro}</p>
                    <p className="text-gray-700"><strong>Sistema:</strong> {caso.sistema}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impacto;
