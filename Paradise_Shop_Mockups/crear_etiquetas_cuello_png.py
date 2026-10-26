import os
from PIL import Image, ImageDraw, ImageFont

CARPETA_SALIDA = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups"
os.makedirs(CARPETA_SALIDA, exist_ok=True)

ANCHO, ALTO = 600, 600

def generar_etiqueta_limpia(nombre_archivo, es_prenda_oscura=True):
    # Lienzo 100% transparente (sin bordes, sin textos de PDF)
    img = Image.new("RGBA", (ANCHO, ALTO), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Blanco para prendas oscuras | Negro/Gris para prendas claras
    color_texto = (255, 255, 255, 255) if es_prenda_oscura else (25, 25, 25, 255)
    color_secundario = (200, 200, 200, 255) if es_prenda_oscura else (70, 70, 70, 255)
    
    try:
        font_logo = ImageFont.truetype("arialbd.ttf", 36)
        font_talla = ImageFont.truetype("arialbd.ttf", 85)
        font_text = ImageFont.truetype("arialbd.ttf", 22)
        font_small = ImageFont.truetype("arial.ttf", 18)
    except:
        font_logo = font_talla = font_text = font_small = ImageFont.load_default()

    # 1. MARCA
    draw.text((ANCHO // 2, 80), "PARADISE SHOP.CL", fill=color_texto, font=font_logo, anchor="mm")
    
    # 2. MARCO Y TALLA (Centrado)
    draw.rectangle([(230, 140), (370, 250)], outline=color_texto, width=4)
    draw.text((ANCHO // 2, 195), "L", fill=color_texto, font=font_talla, anchor="mm")
    
    # 3. TEXTIL Y ORIGEN
    draw.text((ANCHO // 2, 295), "100% ALGODÓN", fill=color_texto, font=font_text, anchor="mm")
    draw.text((ANCHO // 2, 335), "HECHO EN CHILE", fill=color_texto, font=font_text, anchor="mm")
    
    # Línea decorativa
    draw.line([(180, 375), (420, 375)], fill=color_secundario, width=2)
    
    # 4. REDES Y INSTRUCCIONES DE LAVADO
    draw.text((ANCHO // 2, 415), "@paradiseshopchile", fill=color_secundario, font=font_small, anchor="mm")
    draw.text((ANCHO // 2, 455), "LAVAR CON AGUA FRÍA • NO USAR CLORO", fill=color_secundario, font=font_small, anchor="mm")
    draw.text((ANCHO // 2, 485), "NO PLANCHAR SOBRE EL ESTAMPADO", fill=color_secundario, font=font_small, anchor="mm")
    
    ruta_final = os.path.join(CARPETA_SALIDA, nombre_archivo)
    img.save(ruta_final, "PNG")
    print(f"Etiqueta limpia generada: {nombre_archivo}")

# Generar ambos archivos
generar_etiqueta_limpia("etiqueta_prenda_oscura_FINAL.png", es_prenda_oscura=True)
generar_etiqueta_limpia("etiqueta_prenda_clara_FINAL.png", es_prenda_oscura=False)