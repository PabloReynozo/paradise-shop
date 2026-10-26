import os
from PIL import Image

# 1. RUTAS DE ENTRADA Y SALIDA
CARPETA_DISENOS = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\TOP_20_MUJER"
CARPETA_PRENDAS = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\Prendas Limpias Mujer Blanca"
CARPETA_SALIDA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\CATALOGO_TOP20_MUJER"

# Configuración de estampado para mujer (36% de ancho, posicionado en el pecho)
ANCHO_PCT = 0.36
POS_Y_PCT = 0.28

os.makedirs(CARPETA_SALIDA, exist_ok=True)

# Cargar archivos de diseños y prendas
disenos = [f for f in os.listdir(CARPETA_DISENOS) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
prendas = [f for f in os.listdir(CARPETA_PRENDAS) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print("--- INICIANDO PROCESAMIENTO TOP 20 MUJER ---")
print(f"Diseños elegidos: {len(disenos)}")
print(f"Prendas base encontradas: {len(prendas)}\n")

total_generados = 0

for prenda_nombre in prendas:
    ruta_prenda = os.path.join(CARPETA_PRENDAS, prenda_nombre)
    nombre_base_p = os.path.splitext(prenda_nombre)[0]
    
    for diseno_nombre in disenos:
        ruta_diseno = os.path.join(CARPETA_DISENOS, diseno_nombre)
        nombre_base_d = os.path.splitext(diseno_nombre)[0]
        
        try:
            base = Image.open(ruta_prenda).convert("RGBA")
            estampado = Image.open(ruta_diseno).convert("RGBA")
            
            ancho_base, alto_base = base.size
            ancho_deseado_est = int(ancho_base * ANCHO_PCT)
            
            ratio = ancho_deseado_est / float(estampado.size[0])
            alto_deseado_est = int((float(estampado.size[1]) * float(ratio)))
            estampado_resized = estampado.resize((ancho_deseado_est, alto_deseado_est), Image.Resampling.LANCZOS)
            
            pos_x = int((ancho_base - ancho_deseado_est) / 2)
            pos_y = int(alto_base * POS_Y_PCT)
            
            base.paste(estampado_resized, (pos_x, pos_y), estampado_resized)
            
            nombre_salida = f"{nombre_base_p}_{nombre_base_d}.png"
            base.save(os.path.join(CARPETA_SALIDA, nombre_salida), "PNG")
            total_generados += 1
            print(f"Generado: {nombre_salida}")
            
        except Exception as e:
            print(f"Error con {diseno_nombre} en {prenda_nombre}: {e}")

print(f"\n¡PROCESO COMPLETADO!")
print(f"Total de mockups creados: {total_generados}")
print("Revisa la carpeta 'CATALOGO_TOP20_MUJER' en tu proyecto.")