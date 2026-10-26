import os
from PIL import Image, ImageDraw, ImageFont

CARPETA_SALIDA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups"
os.makedirs(CARPETA_SALIDA, exist_ok=True)

# Dimensiones en ultra alta definición (1200x600 px) para pasar el control de DPI de Tee.cl
ANCHO, ALTO = 1200, 600

def generar_etiqueta_hd(nombre_archivo, es_oscura=True):
    # Lienzo 100% transparente
    img = Image.new("RGBA", (ANCHO, ALTO), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Colores según el tipo de prenda
    color_texto = (255, 255, 255, 255) if es_oscura else (20, 20, 20, 255)
    color_secundario = (200, 200, 200, 255) if es_oscura else (80, 80, 80, 255)
    
    try:
        font_logo = ImageFont.truetype("arialbd.ttf", 60)
        font_talla = ImageFont.truetype("arialbd.ttf", 110)
        font_text = ImageFont.truetype("arialbd.ttf", 36)
        font_small = ImageFont.truetype("arial.ttf", 28)
    except:
        font_logo = font_talla = font_text = font_small = ImageFont.load_default()

    # 1. PARTE SUPERIOR: MARCA
    draw.text((ANCHO // 2, 80), "PARADISE SHOP.CL", fill=color_texto, font=font_logo, anchor="mm")
    
    # 2. PARTE CENTRAL: TALLA Y MATERIAL
    # Cuadro de Talla
    draw.rectangle([(400, 150), (540, 290)], outline=color_texto, width=6)
    draw.text((470, 215), "L", fill=color_texto, font=font_talla, anchor="mm")
    
    # Texto de composición al lado de la talla
    draw.text((600, 190), "100% ALGODÓN", fill=color_texto, font=font_text, anchor="la")
    draw.text((600, 240), "HECHO EN CHILE 🇨🇱", fill=color_texto, font=font_text, anchor="la")
    
    # Línea divisoria horizontal
    draw.line([(250, 340), (950, 340)], fill=color_secundario, width=4)
    
    # 3. PARTE INFERIOR: REDES Y CUIDADOS DE LAVADO
    draw.text((ANCHO // 2, 400), "@paradiseshopchile", fill=color_secundario, font=font_small, anchor="mm")
    draw.text((ANCHO // 2, 460), "LAVAR CON AGUA FRÍA • NO USAR CLORO", fill=color_secundario, font=font_small, anchor="mm")
    draw.text((ANCHO // 2, 510), "NO PLANCHAR SOBRE EL ESTAMPADO", fill=color_secundario, font=font_small, anchor="mm")
    
    ruta_final = os.path.join(CARPETA_SALIDA, nombre_archivo)
    img.save(ruta_final, "PNG")
    print(f"Etiqueta HD generada: {nombre_archivo}")

print("--- GENERANDO ETIQUETAS HD PARA TEE.CL (1200x600 px) ---")
generar_etiqueta_hd("etiqueta_prenda_oscura_HD.png", es_oscura=True)
generar_etiqueta_hd("etiqueta_prenda_clara_HD.png", es_oscura=False)
print("\n¡Proceso completado! Sube los nuevos archivos HD a Tee.cl.")