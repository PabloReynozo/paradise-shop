import React, { useState, useRef, useEffect } from 'react';
import './App.css';

// Importación del SDK de Mercado Pago para React
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Inicializar Mercado Pago con tu Public Key pública desde las variables de entorno de Vite
// Asegúrate de tener VITE_MP_PUBLIC_KEY configurada en tu archivo .env local y en Vercel
initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY || "APP_USR-3ffed777-e845-4659-9c06-e10c93d4f15c", {
  locale: 'es-CL'
});

// Importación de imágenes de portada para las categorías
import imgHombre from './images/hombre.png';
import imgMujer from './images/mujer.png';
import imgGorras from './images/gorras.png';
import imgTotebag from './images/totebag.png';
import imgCuadros from './images/cuadros.png';
import imgLlaveros from './images/llaveros.png';
import imgMousepad from './images/mousepad.png';

// ==========================================
// BASE DE DATOS COMPLETA - PARADISE SHOP CL
// ==========================================
const baseDeDatosProductos = {
  hombre: [
    { id: 'h1', titulo: "Polera Oversize 300 Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20300%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h2', titulo: "Polera Oversize Águila Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20aguila%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h3', titulo: "Polera Oversize Blanca Hombre", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Blanca%20Hombre.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h4', titulo: "Polera Oversize Breaking Bad Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Breaking%20Bad%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h5', titulo: "Polera Oversize Cristo Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Cristo%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h6', titulo: "Polera Oversize Cruz Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20cruz%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h7', titulo: "Polera Oversize Armin Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Armin%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h8', titulo: "Polera Oversize Carl Cox Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Carl%20Cox%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h9', titulo: "Polera Oversize Centella Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20centella.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h10', titulo: "Polera Oversize Los Por Los Tragos", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Los%20Por%20Los%20Tragos.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h11', titulo: "Polera Oversize Music is Life", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20music%20is%20life.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h12', titulo: "Polera Oversize Silvestre Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Silvestre%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h13', titulo: "Polera Oversize Yoda DJ Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20yoda%20dj.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h14', titulo: "Polera Oversize Thor Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Thor%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h15', titulo: "Polera Oversize Vikingo Blanca", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Vikingo%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { id: 'h16', titulo: "Polera Polo Cuello Redondo Blanca Azteca", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20azteca.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h17', titulo: "Polera Polo Cuello Redondo Blanca Bart Simpson", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20bart%20simpson.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h18', titulo: "Polera Polo Cuello Redondo Blanca Huella", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20Huella.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h19', titulo: "Polera Polo Cuello Redondo Blanca Moto Playa", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20moto%20en%20la%20playa.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h20', titulo: "Polera Polo Cuello Redondo Blanca Superman", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20superman.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h21', titulo: "Polera Polo Cuello Redondo Negra Montaña", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20hombre%20en%20la%20montaña.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h22', titulo: "Polera Polo Cuello Redondo Negra Motocicleta", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20motocicleta.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { id: 'h23', titulo: "Polera Premium Darth Vader Negra", precio: 26990, precioFormateado: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Darth%20Vader%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { id: 'h24', titulo: "Polera Premium Goku Negra", precio: 26990, precioFormateado: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Goku%20Negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { id: 'h25', titulo: "Polera Premium Mano CD Negra", precio: 26990, precioFormateado: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20mano%20cd%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { id: 'h26', titulo: "Polera Premium Piccolo Negra", precio: 26990, precioFormateado: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Piccolo%20Negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { id: 'h27', titulo: "Polera Premium Star Wars Negra", precio: 26990, precioFormateado: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20star%20wars%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { id: 'h28', titulo: "Polera Premium Super Boo Negra", precio: 26990, precioFormateado: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Super%20boo%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { id: 'h29', titulo: "Polerón Canguro Premium Frase", precio: 42990, precioFormateado: "$42.990 CLP", imagen: "/hombre/Polerón%20canguro%20premium%20Frase%20de%20todo%20lo%20que%20mas....png", material: "90% Algodón Peinado y 10% Poliéster", tejido: "Franela Cardada 340 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Hoodie Canguro Premium Heavy" }
  ],
  mujer: [
    { id: 'm1', titulo: "Polera Mujer Blanco Mujer en Árbol", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20arbol.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm2', titulo: "Polera Mujer Blanco Mujer en Piano", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20piano.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm3', titulo: "Polera Mujer Blanco Ojo Mujer", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Ojo%20Mujer.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm4', titulo: "Polera Mujer Gris Madre e Hijo", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Gris%20Madre%20e%20hijo.png", material: "90% Algodón y 10% Poliéster", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm5', titulo: "Polera Mujer Lágrimas de Oro", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Lágrimas%20de%20Oro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm6', titulo: "Polera Mujer Mirada de Medianoche", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Medianoche.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm7', titulo: "Polera Mujer Mirada de Óleo", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Óleo.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm8', titulo: "Polera Mujer Mirada Splash", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20Splash.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm9', titulo: "Polera Mujer Destello Amarillo", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20muje%20Destello%20Amarillo.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm10', titulo: "Polera Mujer África", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Africa.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm11', titulo: "Polera Mujer Amigos Fieles", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Amigos%20Fieles.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm12', titulo: "Polera Mujer Arte Callejero", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Arte%20Callejero.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm13', titulo: "Polera Mujer Cara Pintada", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20cara%20pintada.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm14', titulo: "Polera Mujer Dualidad Floral", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dualidad%20Floral.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm15', titulo: "Polera Mujer Dulce Cachorro", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dulce%20Cachorro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm16', titulo: "Polera Mujer Esencia Afro", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Esencia%20Afro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm17', titulo: "Polera Mujer Estilo Étnico", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Estilo%20Étnico.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm18', titulo: "Polera Mujer Helga", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Helga.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm19', titulo: "Polera Mujer Mirada de Sol", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Mirada%20de%20Sol.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm20', titulo: "Polera Mujer Ojo Floral Blue", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Ojo%20Floral%20Blue.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm21', titulo: "Polera Mujer Patín Retro Speed", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Patín%20Retro%20Speed.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm22', titulo: "Polera Mujer Reina de Girasoles", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Reina%20de%20Girasoles.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm23', titulo: "Polera Mujer Salchicha Pop Art", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Salchicha%20Pop%20Art.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { id: 'm24', titulo: "Polera Mujer Ritmo Retro", precio: 25990, precioFormateado: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20negra%20mujer%20Ritmo%20Retro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" }
  ],
  gorras: [
    { id: 'g1', titulo: "Gorra ACDC", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20acdc.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g2', titulo: "Gorra Alf", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20alf.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g3', titulo: "Gorra Audífonos", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20audifonos.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g4', titulo: "Gorra Bob Marley", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20bob%20marley.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g5', titulo: "Gorra Ceda el Vaso", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20ceda%20el%20vaso.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g6', titulo: "Gorra Guns and Roses", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20Guns%20and%20rose.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g7', titulo: "Gorra Iron Maiden", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20iron%20maiden.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g8', titulo: "Gorra Pausa de Hidratación", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20pausa%20de%20hidratacion.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g9', titulo: "Gorra Piernodoyuna y Patán", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20piernodoyuna%20y%20patan.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g10', titulo: "Gorra Pink Floyd Negra", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd%20negra.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g11', titulo: "Gorra Pink Floyd", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g12', titulo: "Gorra Silencio", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20silencio.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g13', titulo: "Gorra Simpson 2", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g14', titulo: "Gorra Simpson 3", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson%203.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g15', titulo: "Gorra Simpson", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g16', titulo: "Gorra Star Wars 2", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g17', titulo: "Gorra Star Wars Negro", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars%20negro.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g18', titulo: "Gorra Star Wars", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g19', titulo: "Gorra Yin Yang", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20yin%20yan.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g20', titulo: "Gorra Yoda 2", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20yoda%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { id: 'g21', titulo: "Gorra Yoda Color", precio: 14990, precioFormateado: "$14.990 CLP", imagen: "/gorras/Gorros%20yoda%20color.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" }
  ],
  totebag: [
    { id: 't1', titulo: "Totebag Capibara", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/totebag/Totebag%20Capibara.png", material: "Lona 100% Algodón Ecológico (300 GSM)", tejido: "Lona Heavy Canvas", tallas: ["Única (38x42 cm)"], estampado: "Impresión Digital DTF Eco-Friendly", corte: "Asas Reforzadas de Alta Resistencia" },
    { id: 't2', titulo: "Totebag Madonna", precio: 23990, precioFormateado: "$23.990 CLP", imagen: "/totebag/Totebag%20Madonna.png", material: "Lona 100% Algodón Ecológico (300 GSM)", tejido: "Lona Heavy Canvas", tallas: ["Única (38x42 cm)"], estampado: "Impresión Digital DTF Eco-Friendly", corte: "Asas Reforzadas de Alta Resistencia" }
  ],
  cuadros: [
    { id: 'c1', titulo: "Cuadro Decorativo 40x50 Gato", precio: 27990, precioFormateado: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Gato.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" },
    { id: 'c2', titulo: "Cuadro Decorativo 40x50 Pluma", precio: 27990, precioFormateado: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Pluma.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" },
    { id: 'c3', titulo: "Cuadro Decorativo 40x50 Violín", precio: 27990, precioFormateado: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Violin.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" }
  ],
  llaveros: [
    { id: 'l1', titulo: "Llavero Alf", precio: 6990, precioFormateado: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Alf.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { id: 'l2', titulo: "Llavero Gorillaz", precio: 6990, precioFormateado: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Gorilaz.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { id: 'l3', titulo: "Llavero Ramones", precio: 6990, precioFormateado: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Ramones.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { id: 'l4', titulo: "Llavero Simpson", precio: 6990, precioFormateado: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Simpson.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" }
  ],
  mousepad: [
    { id: 'mp1', titulo: "Mouse Pad Gamer Batman vs Superman", precio: 27990, precioFormateado: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Batman%20vs%20Superman.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" },
    { id: 'mp2', titulo: "Mouse Pad Gamer Breaking Bad", precio: 27990, precioFormateado: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Breaking%20Bad.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" }
  ]
};

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [cargandoPreferencia, setCargandoPreferencia] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('hombre');

  // Función para agregar un producto al carrito
  const agregarAlCarro = (producto, tallaSeleccionada) => {
    const itemExistente = carrito.find(item => item.id === producto.id && item.talla === tallaSeleccionada);
    if (itemExistente) {
      setCarrito(carrito.map(item => 
        item.id === producto.id && item.talla === tallaSeleccionada 
          ? { ...item, cantidad: item.cantidad + 1 } 
          : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, talla: tallaSeleccionada || producto.tallas[0], cantidad: 1 }]);
    }
    setModalAbierto(true);
  };

  // Calcular subtotales y total con despacho fijo de $4.000 CLP
  const subtotalProductos = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const costoDespacho = carrito.length > 0 ? 4000 : 0;
  const totalAPagar = subtotalProductos + costoDespacho;

  // Función que solicita el preferenceId al backend en Vercel
  const generarPreferenciaMercadoPago = async () => {
    if (carrito.length === 0) return;
    setCargandoPreferencia(true);
    try {
      const response = await fetch('/api/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: carrito.map(item => ({
            id: item.id,
            title: item.titulo,
            unit_price: item.precio,
            quantity: item.cantidad,
            currency_id: 'CLP'
          })),
          shipment_cost: costoDespacho
        }),
      });

      const data = await response.json();
      if (data.id) {
        setPreferenceId(data.id);
      } else {
        console.error("Error al generar la preferencia:", data);
      }
    } catch (error) {
      console.error("Error de conexión con la API de Vercel:", error);
    } finally {
      setCargandoPreferencia(false);
    }
  };

  // Cada vez que se abra el modal o cambie el carrito, generamos la preferencia automáticamente
  useEffect(() => {
    if (modalAbierto && carrito.length > 0) {
      generarPreferenciaMercadoPago();
    }
  }, [modalAbierto, carrito]);

  return (
    <div className="app-container">
      <header className="site-header">
        <h1>Paradise Shop Cl</h1>
        <p>Tienda Oficial de Merchandising y Estampados</p>
        <button className="btn-carrito" onClick={() => setModalAbierto(true)}>
          🛒 Carrito ({carrito.reduce((acc, item) => acc + item.cantidad, 0)})
        </button>
      </header>

      {/* Selector de Categorías */}
      <nav className="categorias-nav">
        {Object.keys(baseDeDatosProductos).map(cat => (
          <button 
            key={cat} 
            className={`btn-categoria ${categoriaActiva === cat ? 'activa' : ''}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Grilla de Productos */}
      <main className="productos-grid">
        {baseDeDatosProductos[categoriaActiva].map(producto => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.titulo} className="producto-img" />
            <h3>{producto.titulo}</h3>
            <p className="precio">{producto.precioFormateado}</p>
            <button 
              className="btn-comprar"
              onClick={() => agregarAlCarro(producto, producto.tallas[0])}
            >
              Comprar / Agregar
            </button>
          </div>
        ))}
      </main>

      {/* Modal del Carrito y Checkout */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="btn-cerrar" onClick={() => setModalAbierto(false)}>✕</button>
            <h2>🛒 Tu Carrito de Compras</h2>

            {carrito.length === 0 ? (
              <p>Tu carrito está vacío.</p>
            ) : (
              <>
                <div className="lista-items">
                  {carrito.map((item, index) => (
                    <div key={index} className="item-carrito">
                      <span>{item.titulo} ({item.talla}) x {item.cantidad}</span>
                      <span>{(item.precio * item.cantidad).toLocaleString('es-CL')} CLP</span>
                    </div>
                  ))}
                </div>

                <div className="resumen-totales">
                  <p>Subtotal Productos: <span>${subtotalProductos.toLocaleString('es-CL')} CLP</span></p>
                  <p>Despacho / Envíos: <span>${costoDespacho.toLocaleString('es-CL')} CLP</span></p>
                  <h3>Total a Pagar: <span>${totalAPagar.toLocaleString('es-CL')} CLP</span></h3>
                </div>

                {/* Botón oficial de Mercado Pago Wallet */}
                <div className="checkout-container">
                  {cargandoPreferencia ? (
                    <p>Generando pasarela de pago segura...</p>
                  ) : preferenceId ? (
                    <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                  ) : (
                    <button className="btn-mp-error" onClick={generarPreferenciaMercadoPago}>
                      Reintentar conexión de pago
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}