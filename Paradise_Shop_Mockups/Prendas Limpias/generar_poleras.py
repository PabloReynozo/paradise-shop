import os
from PIL import Image

# 1. ROPA: Busca en la carpeta actual donde tienes los mockups de Tee.cl
CARPETA_MOCKUPS = "." 

# 2. IMÁGENES: Pon aquí la ruta de la otra carpeta donde tienes las caricaturas
# (Recuerda usar diagonales / o doble diagonal \\)
CARPETA_DISENOS = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\pabloandresreynozo\caricaturas\caricaturas Listas 40X53 (POLERAS Y POLERONES)" 

# 3. RESULTADO: Se guardarán aquí dentro
CARPETA_SALIDA = "./resultado"

os.makedirs(CARPETA_SALIDA, exist_ok=True)

# Proporción del estampado en el pecho (38% del ancho)
ANCHO_ESTAMPADO_PCT = 0.38
POS_Y_PCT = 0.28

archivos_mockups = [f for f in os.listdir(CARPETA_MOCKUPS) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
archivos_disenos = [f for f in os.listdir(CARPETA_DISENOS) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print(f"Procesando {len(archivos_disenos)} diseños sobre {len(archivos_mockups)} prendas...")

for mockup_nombre in archivos_mockups:
    ruta_mockup = os.path.join(CARPETA_MOCKUPS, mockup_nombre)
    nombre_base_m = os.path.splitext(mockup_nombre)[0]
    
    for diseno_nombre in archivos_disenos:
        ruta_diseno = os.path.join(CARPETA_DISENOS, diseno_nombre)
        nombre_base_d = os.path.splitext(diseno_nombre)[0]
        
        try:
            base = Image.open(ruta_mockup).convert("RGBA")
            estampado = Image.open(ruta_diseno).convert("RGBA")
            
            ancho_base, alto_base = base.size
            ancho_deseado_est = int(ancho_base * ANCHO_ESTAMPADO_PCT)
            
            ratio = ancho_deseado_est / float(estampado.size[0])
            alto_deseado_est = int((float(estampado.size[1]) * float(ratio)))
            estampado_resized = estampado.resize((ancho_deseado_est, alto_deseado_est), Image.Resampling.LANCZOS)
            
            pos_x = int((ancho_base - ancho_deseado_est) / 2)
            pos_y = int(alto_base * POS_Y_PCT)
            
            base.paste(estampado_resized, (pos_x, pos_y), estampado_resized)
            
            nombre_salida = f"{nombre_base_m}_{nombre_base_d}.png"
            base.save(os.path.join(CARPETA_SALIDA, nombre_salida), "PNG")
        except Exception as e:
            print(f"Error procesando {diseno_nombre}: {e}")
