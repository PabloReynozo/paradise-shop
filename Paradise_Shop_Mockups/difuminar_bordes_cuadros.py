import os
from PIL import Image, ImageDraw, ImageFilter

# 1. RUTAS DE ENTRADA Y SALIDA
CARPETA_ENTRADA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\TOP_20_HOMBRE"
CARPETA_SALIDA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups\TOP_20_HOMBRE_DIFUMINADOS"

# Ajustes del efecto (en píxeles)
RADIO_ESQUINAS = 40  # Qué tan redondeadas quedan las esquinas
RADIO_DIFUMINADO = 20 # Qué tan suave es el fundido del borde hacia transparente

def aplicar_difuminado_bordes(img, radio_esquinas=40, difuminado=20):
    img = img.convert("RGBA")
    ancho, alto = img.size
    
    # Crear una máscara en blanco y negro para la transparencia
    mascara = Image.new("L", (ancho, alto), 0)
    draw = ImageDraw.Draw(mascara)
    
    # Dibujar un rectángulo redondeado blanco en el centro
    draw.rounded_rectangle(
        [(difuminado, difuminado), (ancho - difuminado, alto - difuminado)],
        radius=radio_esquinas,
        fill=255
    )
    
    # Aplicar desenfoque gaussiano a la máscara para crear el degradado suave
    mascara_difuminada = mascara.filter(ImageFilter.GaussianBlur(difuminado))
    
    # Aplicar la máscara difuminada al canal Alfa de la imagen
    img.putalpha(mascara_difuminada)
    return img

os.makedirs(CARPETA_SALIDA, exist_ok=True)

imagenes = [f for f in os.listdir(CARPETA_ENTRADA) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print("--- APLICANDO BORDES REDONDEADOS Y DIFUMINADO SUAVE ---")

for nombre_img in imagenes:
    ruta_entrada = os.path.join(CARPETA_ENTRADA, nombre_img)
    nombre_base = os.path.splitext(nombre_img)[0]
    ruta_salida = os.path.join(CARPETA_SALIDA, f"{nombre_base}.png")
    
    try:
        imagen_original = Image.open(ruta_entrada)
        imagen_suave = aplicar_difuminado_bordes(imagen_original, RADIO_ESQUINAS, RADIO_DIFUMINADO)
        imagen_suave.save(ruta_salida, "PNG")
        print(f"Bordes difuminados: {nombre_base}.png")
    except Exception as e:
        print(f"Error con {nombre_img}: {e}")

print("\n¡PROCESO COMPLETADO! Revisa la carpeta 'TOP_20_HOMBRE_DIFUMINADOS'.")