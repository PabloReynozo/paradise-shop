import os
from PIL import Image
from rembg import remove

# 1. RUTAS DE ENTRADA Y SALIDA
CARPETA_ENTRADA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\TOP_20_HOMBRE"
CARPETA_SALIDA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\TOP_20_HOMBRE_CALADOS"

os.makedirs(CARPETA_SALIDA, exist_ok=True)

imagenes = [f for f in os.listdir(CARPETA_ENTRADA) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print(f"--- INICIANDO CALADO DE {len(imagenes)} IMÁGENES CON IA ---")

total_procesadas = 0

for nombre_img in imagenes:
    ruta_entrada = os.path.join(CARPETA_ENTRADA, nombre_img)
    nombre_base = os.path.splitext(nombre_img)[0]
    ruta_salida = os.path.join(CARPETA_SALIDA, f"{nombre_base}.png")
    
    try:
        print(f"Calando imagen ({total_procesadas + 1}/{len(imagenes)}): {nombre_img}...")
        
        # Abrir imagen original
        input_image = Image.open(ruta_entrada)
        
        # Remover el fondo usando la IA de rembg
        output_image = remove(input_image)
        
        # Guardar en formato PNG transparente
        output_image.save(ruta_salida, "PNG")
        
        total_procesadas += 1
        print(f"  └─ ¡Guardada transparente en PNG!")
        
    except Exception as e:
        print(f"  └─ Error con {nombre_img}: {e}")

print(f"\n¡PROCESO COMPLETADO EXITOSAMENTE!")
print(f"Se calaron {total_procesadas} imágenes y se guardaron en 'TOP_20_HOMBRE_CALADOS'.")