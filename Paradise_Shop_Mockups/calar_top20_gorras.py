import os
from rembg import remove, new_session
from PIL import Image

# Rutas de carpetas en tu equipo
CARPETA_RAIZ = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups"
CARPETA_ENTRADA = os.path.join(CARPETA_RAIZ, "TOP_20_GORRAS")
CARPETA_SALIDA = os.path.join(CARPETA_RAIZ, "TOP_20_GORRAS_CALADOS")

os.makedirs(CARPETA_SALIDA, exist_ok=True)

if not os.path.exists(CARPETA_ENTRADA):
    print(f"No se encontró la carpeta de entrada: {CARPETA_ENTRADA}")
else:
    archivos = [f for f in os.listdir(CARPETA_ENTRADA) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    print(f"--- INICIANDO CALADO DE GORRAS ({len(archivos)} imágenes encontradas) ---")
    
    # Crear la sesión de bria-rmbg
    session = new_session("bria-rmbg")
    
    for archivo in archivos:
        ruta_entrada = os.path.join(CARPETA_ENTRADA, archivo)
        nombre_sin_ext = os.path.splitext(archivo)[0]
        ruta_salida = os.path.join(CARPETA_SALIDA, f"{nombre_sin_ext}_calado.png")
        
        try:
            with open(ruta_entrada, 'rb') as i:
                input_image = i.read()
                output_image = remove(input_image, session=session)
            
            with open(ruta_salida, 'wb') as o:
                o.write(output_image)
                
            print(f"  └─ Calado exitoso: {archivo} -> {nombre_sin_ext}_calado.png")
        except Exception as e:
            print(f"  └─ Error procesando {archivo}: {e}")

print("\n¡PROCESO COMPLETADO! Las imágenes de gorras ya están caladas en 'TOP_20_GORRAS_CALADOS'.")