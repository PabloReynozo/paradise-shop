import React, { useState, useRef } from 'react';
import './App.css';

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
    { titulo: "Polera Oversize 300 Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20300%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Águila Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20aguila%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Blanca Hombre", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Blanca%20Hombre.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Breaking Bad Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Breaking%20Bad%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Cristo Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Cristo%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Cruz Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20cruz%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Armin Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Armin%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Carl Cox Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Carl%20Cox%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Centella Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20centella.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Los Por Los Tragos", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Los%20Por%20Los%20Tragos.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Music is Life", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20music%20is%20life.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Silvestre Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Silvestre%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Yoda DJ Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20yoda%20dj.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Thor Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Thor%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Vikingo Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Vikingo%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Polo Cuello Redondo Blanca Azteca", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20azteca.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Bart Simpson", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20bart%20simpson.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Huella", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20Huella.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Moto Playa", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20moto%20en%20la%20playa.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Superman", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20superman.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Negra Montaña", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20hombre%20en%20la%20montaña.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Negra Motocicleta", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20motocicleta.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Premium Darth Vader Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Darth%20Vader%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Goku Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Goku%20Negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Mano CD Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20mano%20cd%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Piccolo Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Piccolo%20Negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Star Wars Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20star%20wars%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Super Boo Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Super%20boo%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polerón Canguro Premium Frase", precio: "$42.990 CLP", imagen: "/hombre/Polerón%20canguro%20premium%20Frase%20de%20todo%20lo%20que%20mas....png", material: "90% Algodón Peinado y 10% Poliéster", tejido: "Franela Cardada 340 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Hoodie Canguro Premium Heavy" }
  ],
  mujer: [
    { titulo: "Polera Mujer Blanco Mujer en Árbol", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20arbol.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Blanco Mujer en Piano", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20piano.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Blanco Ojo Mujer", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Ojo%20Mujer.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Gris Madre e Hijo", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Gris%20Madre%20e%20hijo.png", material: "90% Algodón y 10% Poliéster (Gris Melange)", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Lágrimas de Oro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Lágrimas%20de%20Oro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada de Mediodanche", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Medianoche.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada de Óleo", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Óleo.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada Splash", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20Splash.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Destello Amarillo", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20muje%20Destello%20Amarillo.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer África", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Africa.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Amigos Fieles", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Amigos%20Fieles.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Arte Callejero", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Arte%20Callejero.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Cara Pintada", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20cara%20pintada.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Dualidad Floral", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dualidad%20Floral.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Dulce Cachorro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dulce%20Cachorro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Esencia Afro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Esencia%20Afro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Estilo Étnico", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Estilo%20Étnico.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Helga", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Helga.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada de Sol", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Mirada%20de%20Sol.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Ojo Floral Blue", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Ojo%20Floral%20Blue.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Patín Retro Speed", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Patín%20Retro%20Speed.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Reina de Girasoles", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Reina%20de%20Girasoles.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Salchicha Pop Art", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Salchicha%20Pop%20Art.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Ritmo Retro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20negra%20mujer%20Ritmo%20Retro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" }
  ],
  gorras: [
    { titulo: "Gorra ACDC", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20acdc.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Alf", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20alf.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Audífonos", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20audifonos.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Bob Marley", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20bob%20marley.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Ceda el Vaso", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20ceda%20el%20vaso.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Guns and Roses", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20Guns%20and%20rose.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Iron Maiden", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20iron%20maiden.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Pausa de Hidratación", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20pausa%20de%20hidratacion.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Piernodoyuna y Patán", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20piernodoyuna%20y%20patan.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Pink Floyd Negra", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd%20negra.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Pink Floyd", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Silencio", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20silencio.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Simpson 2", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Simpson 3", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson%203.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Simpson", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Star Wars 2", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Star Wars Negro", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars%20negro.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Star Wars", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Yin Yang", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20yin%20yan.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Yoda 2", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20yoda%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Yoda Color", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20yoda%20color.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" }
  ],
  totebag: [
    { titulo: "Totebag Capibara", precio: "$23.990 CLP", imagen: "/totebag/Totebag%20Capibara.png", material: "Lona 100% Algodón Ecológico (300 GSM)", tejido: "Lona Heavy Canvas", tallas: ["Única (38x42 cm)"], estampado: "Impresión Digital DTF Eco-Friendly", corte: "Asas Reforzadas de Alta Resistencia" },
    { titulo: "Totebag Madonna", precio: "$23.990 CLP", imagen: "/totebag/Totebag%20Madonna.png", material: "Lona 100% Algodón Ecológico (300 GSM)", tejido: "Lona Heavy Canvas", tallas: ["Única (38x42 cm)"], estampado: "Impresión Digital DTF Eco-Friendly", corte: "Asas Reforzadas de Alta Resistencia" }
  ],
  cuadros: [
    { titulo: "Cuadro Decorativo 40x50 Gato", precio: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Gato.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" },
    { titulo: "Cuadro Decorativo 40x50 Pluma", precio: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Pluma.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" },
    { titulo: "Cuadro Decorativo 40x50 Violín", precio: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Violin.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" }
  ],
  llaveros: [
    { titulo: "Llavero Alf", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Alf.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { titulo: "Llavero Gorillaz", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Gorilaz.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { titulo: "Llavero Ramones", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Ramones.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { titulo: "Llavero Simpson", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Simpson.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" }
  ],
  mousepad: [
    { titulo: "Mouse Pad Gamer Batman vs Superman", precio: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Batman%20vs%20Superman.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" },
    { titulo: "Mouse Pad Gamer Breaking Bad", precio: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Breaking%20Bad.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" },
    { titulo: "Mouse Pad Gamer Peaky Blinders", precio: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Peaky%20Blindres.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" }
  ]
};

// Componente para tarjetas de categoría superior
const CategoryCard = ({ img, title, onClick, isActive }) => (
  <div 
    onClick={onClick}
    className="product-card" 
    style={{ 
      cursor: 'pointer', 
      border: isActive ? '2px solid #ff007f' : '1px solid #d5cbc0',
      transform: isActive ? 'scale(1.02)' : 'scale(1)',
      transition: 'all 0.2s ease'
    }}
  >
    <div className="product-image-container">
      <img src={img} alt={title} />
    </div>
    <div style={{ 
      position: 'absolute', 
      bottom: '1.5rem', 
      left: '1.5rem', 
      right: '1.5rem', 
      backgroundColor: isActive ? '#ff007f' : '#111', 
      color: '#fff', 
      padding: '0.6rem', 
      textAlign: 'center', 
      textTransform: 'uppercase', 
      fontWeight: 'bold', 
      fontSize: '0.9rem', 
      borderRadius: '4px', 
      border: '1px solid #333',
      transition: 'background-color 0.2s ease'
    }}>
      {title}
    </div>
  </div>
);

// Componente para tarjetas de producto individual
const ProductCard = ({ img, title, price, onComprar, onAbrirDetalle }) => (
  <div className="product-card">
    <div className="product-image-container" onClick={onAbrirDetalle} style={{ cursor: 'pointer' }}>
      <img src={img} alt={title} />
    </div>
    <div className="product-info">
      <h4 className="product-title" onClick={onAbrirDetalle} style={{ cursor: 'pointer' }}>{title}</h4>
      <p className="product-price">{price}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button onClick={onAbrirDetalle} style={{ flex: 1, backgroundColor: '#111', color: '#fff', border: 'none', padding: '0.6rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', cursor: 'pointer' }}>Ver Detalle</button>
        <button onClick={onComprar} className="buy-button" style={{ flex: 1 }}>Comprar</button>
      </div>
    </div>
  </div>
);

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  
  // Estados para el Carro de Compras y Modales
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarritoModal, setMostrarCarritoModal] = useState(false);
  const [mostrarModalTallas, setMostrarModalTallas] = useState(false);

  // Estado para la prenda seleccionada en detalle (Modal)
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');

  return (
    <div className="app-container">
      {/* Tu estructura existente de la app */}
    </div>
  );
}

export default App;