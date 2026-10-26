import os
from PIL import Image, ImageDraw, ImageFont

# Ruta donde se guardarán todas las etiquetas
CARPETA_RAIZ = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups"
CARPETA_SALIDA = os.path.join(CARPETA_RAIZ, "ETIQUETAS_TEE_CL_HD")
os.makedirs(CARPETA_SALIDA, exist_ok=True)

# Medidas HD en proporción 2:1 para eliminar advertencias de resolución en Tee.cl
ANCHO, ALTO = 1200, 600

TALLAS = ["S", "M", "L", "XL", "XXL"]

def crear_etiqueta_talla(talla, es_oscura=True):
    # Lienzo 100% transparente (RGBA)
    img = Image.new("RGBA", (ANCHO, ALTO), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Texto blanco para prendas oscuras | Texto negro para prendas claras
    color_texto = (255, 255, 255, 255) if es_oscura else (20, 20, 20, 255)
    color_secundario = (200, 200, 200, 255) if es_oscura else (80, 80, 80, 255)
    
    # Ajuste de tamaño de fuente según largo de la talla (ej. XXL vs S)
    tamano_fuente_talla = 95 if len(talla) > 2 else 110
    
    try:
        font_logo = ImageFont.truetype("arialbd.ttf", 60)
        font_talla = ImageFont.truetype("arialbd.ttf", tamano_fuente_talla)
        font_text = ImageFont.truetype("arialbd.ttf", 36)
        font_small = ImageFont.truetype("arial.ttf", 28)
    except:
        font_logo = font_talla = font_text = font_small = ImageFont.load_default()

    # 1. PARTE SUPERIOR: MARCA
    draw.text((ANCHO // 2, 80), "PARADISE SHOP.CL", fill=color_texto, font=font_logo, anchor="mm")
    
    # 2. PARTE CENTRAL: TALLA Y MATERIAL
    # Cuadro de Talla
    draw.rectangle([(380, 150), (560, 290)], outline=color_texto, width=6)
    draw.text((470, 215), talla, fill=color_texto, font=font_talla, anchor="mm")
    
    # Texto de composición al lado de la talla
    draw.text((610, 190), "100% ALGODÓN", fill=color_texto, font=font_text, anchor="la")
    draw.text((610, 240), "HECHO EN CHILE 🇨🇱", fill=color_texto, font=font_text, anchor="la")
    
    # Línea divisoria horizontal
    draw.line([(250, 340), (950, 340)], fill=color_secundario, width=4)
    
    # 3. PARTE INFERIOR: REDES Y CUIDADOS DE LAVADO
    draw.text((ANCHO // 2, 400), "@paradiseshopchile", fill=color_secundario, font=font_small, anchor="mm")
    draw.text((ANCHO // 2, 460), "LAVAR CON AGUA FRÍA • NO USAR CLORO", fill=color_secundario, font=font_small, anchor="mm")
    draw.text((ANCHO // 2, 510), "NO PLANCHAR SOBRE EL ESTAMPADO", fill=color_secundario, font=font_small, anchor="mm")
    
    tipo_prenda = "oscura" if es_oscura else "clara"
    nombre_archivo = f"etiqueta_{tipo_prenda}_talla_{talla}_HD.png"
    ruta_final = os.path.join(CARPETA_SALIDA, nombre_archivo)
    img.save(ruta_final, "PNG")
    print(f"  └─ Creada: {nombre_archivo}")

print("--- GENERANDO PACK COMPLETO DE ETIQUETAS TALLAS S a XXL (1200x600 px) ---")

for t in TALLAS:
    # Generar versión para prendas oscuras (texto blanco)
    crear_etiqueta_talla(t, es_oscura=True)
    # Generar versión para prendas claras (texto negro)
    crear_etiqueta_talla(t, es_oscura=False)

print(f"\n¡LISTO PABLO! Se crearon las 10 etiquetas en la carpeta 'ETIQUETAS_TEE_CL_HD'.")