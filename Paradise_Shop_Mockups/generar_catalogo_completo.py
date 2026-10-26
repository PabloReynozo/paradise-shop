import os
from PIL import Image

# 1. RUTA DE DISEÑOS (Actualiza la ruta si difiere)
CARPETA_DISENOS = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\pabloandresreynozo\caricaturas\caricaturas Listas 40X53 (POLERAS Y POLERONES)"

# 2. RUTA DE PRENDAS LIMPIAS Y SALIDA
CARPETA_PRENDAS = "./Prendas Limpias"
CARPETA_SALIDA = "./CATALOGO_FINAL"

# Configuración de proporciones por categoría
# (ancho_estampado_pct, posicion_y_pct)
CONFIG_CATEGORIAS = {
    "Hombre": (0.38, 0.28),      # Pecho estándar adulto
    "Mujer": (0.36, 0.28),       # Pecho estándar femenino
    "Niño": (0.42, 0.26),        # Pecho proporcional niño
    "Gorras": (0.28, 0.42),      # Frente del gorro
    "Accesorios": (0.50, 0.35)   # Centrado amplio (mousepad, cuadros, etc.)
}

os.makedirs(CARPETA_SALIDA, exist_ok=True)

archivos_disenos = [f for f in os.listdir(CARPETA_DISENOS) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print(f"--- INICIANDO GENERACIÓN DE CATÁLOGO COMPLETO ---")
print(f"Diseños detectados: {len(archivos_disenos)}\n")

for categoria, (ancho_pct, pos_y_pct) in CONFIG_CATEGORIAS.items():
    ruta_categoria_limpia = os.path.join(CARPETA_PRENDAS, categoria)
    ruta_categoria_salida = os.path.join(CARPETA_SALIDA, categoria)
    
    if not os.path.exists(ruta_categoria_limpia):
        continue
        
    os.makedirs(ruta_categoria_salida, exist_ok=True)
    mockups = [f for f in os.listdir(ruta_categoria_limpia) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not mockups:
        print(f"Categoría [{categoria}]: Sin mockups bases limpios. Omitiendo...")
        continue

    print(f"Procesando Categoría [{categoria}] ({len(mockups)} prendas base)...")
    
    for mockup_nombre in mockups:
        ruta_mockup = os.path.join(ruta_categoria_limpia, mockup_nombre)
        nombre_base_m = os.path.splitext(mockup_nombre)[0]
        
        for diseno_nombre in archivos_disenos:
            ruta_diseno = os.path.join(CARPETA_DISENOS, diseno_nombre)
            nombre_base_d = os.path.splitext(diseno_nombre)[0]
            
            try:
                base = Image.open(ruta_mockup).convert("RGBA")
                estampado = Image.open(ruta_diseno).convert("RGBA")
                
                ancho_base, alto_base = base.size
                ancho_deseado_est = int(ancho_base * ancho_pct)
                
                ratio = ancho_deseado_est / float(estampado.size[0])
                alto_deseado_est = int((float(estampado.size[1]) * float(ratio)))
                estampado_resized = estampado.resize((ancho_deseado_est, alto_deseado_est), Image.Resampling.LANCZOS)
                
                pos_x = int((ancho_base - ancho_deseado_est) / 2)
                pos_y = int(alto_base * pos_y_pct)
                
                base.paste(estampado_resized, (pos_x, pos_y), estampado_resized)
                
                nombre_salida = f"{nombre_base_m}_{nombre_base_d}.png"
                base.save(os.path.join(ruta_categoria_salida, nombre_salida), "PNG")
            except Exception as e:
                print(f"Error procesando {diseno_nombre} en {mockup_nombre}: {e}")

print("\n¡PROCESO COMPLETADO EXITOSAMENTE!")
print("Revisa la carpeta 'CATALOGO_FINAL' con todas tus subcarpetas ordenadas.")