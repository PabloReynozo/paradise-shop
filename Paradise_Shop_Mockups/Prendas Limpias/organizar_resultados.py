import os
import shutil

CARPETA_RESULTADO = "./resultado"

CLASIFICACION = {
    "mujer": "./Mujer",
    "hombre": "./Hombre",
    "nino": "./Niños",
    "gorra": "./Gorras"
}

for carpeta in CLASIFICACION.values():
    os.makedirs(carpeta, exist_ok=True)

archivos = [f for f in os.listdir(CARPETA_RESULTADO) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print(f"Clasificando {len(archivos)} imágenes...")

contador = 0
for archivo in archivos:
    nombre_lower = archivo.lower()
    for palabra_clave, carpeta_destino in CLASIFICACION.items():
        if palabra_clave in nombre_lower:
            ruta_origen = os.path.join(CARPETA_RESULTADO, archivo)
            ruta_destino = os.path.join(carpeta_destino, archivo)
            shutil.move(ruta_origen, ruta_destino)
            contador += 1
            break

print(f"¡Listo! Se movieron {contador} imágenes a sus carpetas correspondientes.")