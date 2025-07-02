
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navegacionItems = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Cómo Funciona', ruta: '/como-funciona' },
  { nombre: 'Manual de Uso', ruta: '/manual' },
  { nombre: 'Impacto', ruta: '/impacto' },
  { nombre: 'Talleres', ruta: '/talleres' },
  { nombre: 'Registro', ruta: '/registro' }
];

export const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const esRutaActiva = (ruta: string) => location.pathname === ruta;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-agua-claro to-agua-medio rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-agua-medio animate-llenar-tanque rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gradient">
              Agua Clara
            </span>
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navegacionItems.map((item) => (
              <Link
                key={item.ruta}
                to={item.ruta}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  esRutaActiva(item.ruta)
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                {item.nombre}
              </Link>
            ))}
          </div>

          {/* Botón CTA */}
          <div className="hidden md:block">
            <Button asChild className="bg-verde-rural hover:bg-verde-rural/90">
              <Link to="/registro">
                Únete al Programa
              </Link>
            </Button>
          </div>

          {/* Menú Mobile */}
          <Sheet open={menuAbierto} onOpenChange={setMenuAbierto}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="w-8 h-8 bg-gradient-to-br from-agua-claro to-agua-medio rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-bold text-gradient">
                    Agua Clara
                  </span>
                </div>
                
                {navegacionItems.map((item) => (
                  <Link
                    key={item.ruta}
                    to={item.ruta}
                    onClick={() => setMenuAbierto(false)}
                    className={`px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      esRutaActiva(item.ruta)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.nombre}
                  </Link>
                ))}
                
                <div className="pt-4 border-t">
                  <Button asChild className="w-full bg-verde-rural hover:bg-verde-rural/90">
                    <Link to="/registro" onClick={() => setMenuAbierto(false)}>
                      Únete al Programa
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
