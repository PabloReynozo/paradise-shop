import os
import fitz  # PyMuPDF
from PIL import Image

# 1. Rutas apuntando a tu subcarpeta 'Etiquetas'
CARPETA_RAIZ = r"C:\Users\USUARIO\Documents\Paradise Shop.cl\Paradise_Shop_Mockups"
CARPETA_ETIQUETAS = os.path.join(CARPETA_RAIZ, "Etiquetas")
CARPETA_SALIDA = os.path.join(CARPETA_RAIZ, "Etiquetas_PNG")

os.makedirs(CARPETA_SALIDA, exist_ok=True)

# Buscar cualquier PDF dentro de la carpeta Etiquetas
archivos_pdf = [f for f in os.listdir(CARPETA_ETIQUETAS) if f.lower().endswith('.pdf')]

print(f"--- CONVIRTIENDO {len(archivos_pdf)} ETIQUETAS PDF A PNG TRANSPARENTE (600x600 px) ---")

for pdf_nombre in archivos_pdf:
    ruta_pdf = os.path.join(CARPETA_ETIQUETAS, pdf_nombre)
    nombre_base = os.path.splitext(pdf_nombre)[0]
    ruta_salida_png = os.path.join(CARPETA_SALIDA, f"{nombre_base}_600x600.png")
    
    try:
        doc = fitz.open(ruta_pdf)
        page = doc[0]
        
        # Renderizar a 300 DPI
        pix = page.get_pixmap(dpi=300)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        
        # Ajustar a 600x600 px (5x5 cm a 300 DPI)
        img_resized = img.resize((600, 600), Image.Resampling.LANCZOS)
        
        # Convertir a RGBA y remover fondo blanco
        img_rgba = img_resized.convert("RGBA")
        datas = img_rgba.getdata()
        
        new_data = []
        for item in datas:
            if item[0] > 235 and item[1] > 235 and item[2] > 235:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img_rgba.putdata(new_data)
        img_rgba.save(ruta_salida_png, "PNG")
        print(f"  └─ Generada correctamente: {nombre_base}_600x600.png")
        
    except Exception as e:
        print(f"  └─ Error procesando {pdf_nombre}: {e}")

print(f"\n¡PROCESO COMPLETADO! Las etiquetas PNG quedaron en la carpeta 'Etiquetas_PNG'.")