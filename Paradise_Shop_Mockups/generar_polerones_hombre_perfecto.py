import os
from PIL import Image

# 1. RUTAS DE ENTRADA Y SALIDA
CARPETA_DISENOS = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\TOP_20_HOMBRE_CALADOS"
CARPETA_PRENDAS = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\Prendas Limpias Hombre Blanca"
CARPETA_SALIDA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\CATALOGO_TOP20_HOMBRE"

# Ajustes de posición específicos para POLERÓN CANGURO (pecho alto)
ANCHO_PCT = 0.35
POS_Y_PCT = 0.18

os.makedirs(CARPETA_SALIDA, exist_ok=True)

# Filtramos solo archivos de polerones para aplicar el ajuste de altura
prendas_polerones = [
    f for f in os.listdir(CARPETA_PRENDAS) 
    if f.lower().endswith(('.png', '.jpg', '.jpeg')) and ("poleron" in f.lower() or "polerón" in f.lower() or "hoodie" in f.lower())
]

disenos = [f for f in os.listdir(CARPETA_DISENOS) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print("--- GENERANDO POLERONES EN PECHO ALTO (SIN TOCAR BOLSILLO) ---")
print(f"Polerones base encontrados: {len(prendas_polerones)}")
print(f"Diseños a aplicar: {len(disenos)}\n")

total_generados = 0

for prenda_nombre in prendas_polerones:
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
            
            # Centrado horizontal y elevado verticalmente hacia el pecho
            pos_x = int((ancho_base - ancho_deseado_est) / 2)
            pos_y = int(alto_base * POS_Y_PCT)
            
            base.paste(estampado_resized, (pos_x, pos_y), estampado_resized)
            
            nombre_salida = f"{nombre_base_p}_{nombre_base_d}.png"
            base.save(os.path.join(CARPETA_SALIDA, nombre_salida), "PNG")
            total_generados += 1
            print(f"Polerón generado arriba: {nombre_salida}")
            
        except Exception as e:
            print(f"Error con {diseno_nombre} en {prenda_nombre}: {e}")

print(f"\n¡POLERONES PROCESADOS CON ÉXITO!")
print(f"Total generados: {total_generados}")