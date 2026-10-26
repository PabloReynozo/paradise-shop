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
    { titulo: "Polera Oversize 300 Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20300%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Águila Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20aguila%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Blanca Hombre", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Blanca%20Hombre.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Breaking Bad Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Breaking%20Bad%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Cristo Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Cristo%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Cruz Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20cruz%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Armin Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Armin%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Carl Cox Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Carl%20Cox%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Centella Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20centella.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Los Por Los Tragos", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Los%20Por%20Los%20Tragos.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Music is Life", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20music%20is%20life.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Silvestre Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Silvestre%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Yoda DJ Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20yoda%20dj.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Thor Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Thor%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Vikingo Blanca", precio: "$26.990 CLP", imagen: "/hombre/Polera%20Oversize%20Vikingo%20Blanca.png", material: "80% Algodón y 20% Poliéster", tejido: "Tejido Interlock 280 grs", tallas: ["S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Polo Cuello Redondo Blanca Azteca", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20azteca.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Bart Simpson", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20bart%20simpson.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Huella", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20Huella.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Moto Playa", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20moto%20en%20la%20playa.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Superman", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20superman.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Negra Montaña", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20hombre%20en%20la%20montaña.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Polo Cuello Redondo Negra Motocicleta", precio: "$29.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20motocicleta.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Regular Fit Clásico" },
    { titulo: "Polera Premium Darth Vader Negra", precio: "$17.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Darth%20Vader%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Goku Negra", precio: "$17.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Goku%20Negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Mano CD Negra", precio: "$17.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20mano%20cd%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Piccolo Negra", precio: "$17.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Piccolo%20Negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Star Wars Negra", precio: "$17.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20star%20wars%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polera Premium Super Boo Negra", precio: "$17.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Super%20boo%20negra.png", material: "100% Algodón Peinado", tejido: "Jersey Soft Cotton 180 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Standard Fit Premium" },
    { titulo: "Polerón Canguro Premium Frase", precio: "$39.990 CLP", imagen: "/hombre/Polerón%20canguro%20premium%20Frase%20de%20todo%20lo%20que%20mas....png", material: "90% Algodón Peinado y 10% Poliéster", tejido: "Franela Cardada 340 grs", tallas: ["S", "M", "L", "XL", "2XL", "3XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Hoodie Canguro Premium Heavy" }
  ],
  mujer: [
    { titulo: "Polera Mujer Blanco Mujer en Árbol", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20arbol.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Blanco Mujer en Piano", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20piano.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Blanco Ojo Mujer", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Ojo%20Mujer.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Gris Madre e Hijo", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Gris%20Madre%20e%20hijo.png", material: "90% Algodón y 10% Poliéster (Gris Melange)", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Lágrimas de Oro", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Lágrimas%20de%20Oro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada de Mediodanche", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Medianoche.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada de Óleo", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Óleo.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada Splash", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20Splash.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Destello Amarillo", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20muje%20Destello%20Amarillo.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer África", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Africa.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Amigos Fieles", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Amigos%20Fieles.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Arte Callejero", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Arte%20Callejero.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Cara Pintada", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20cara%20pintada.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Dualidad Floral", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dualidad%20Floral.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Dulce Cachorro", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dulce%20Cachorro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Esencia Afro", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Esencia%20Afro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Estilo Étnico", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Estilo%20Étnico.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Helga", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Helga.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Mirada de Sol", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Mirada%20de%20Sol.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Ojo Floral Blue", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Ojo%20Floral%20Blue.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Patín Retro Speed", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Patín%20Retro%20Speed.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Reina de Girasoles", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Reina%20de%20Girasoles.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Salchicha Pop Art", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Salchicha%20Pop%20Art.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" },
    { titulo: "Polera Mujer Ritmo Retro", precio: "$26.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20negra%20mujer%20Ritmo%20Retro.png", material: "100% Algodón", tejido: "Jersey Heavy Cotton 195 grs", tallas: ["XS", "S", "M", "L", "XL", "2XL"], estampado: "Impresión Digital DTF Textil HD", corte: "Corte Femenino Entallado" }
  ],
  gorras: [
    { titulo: "Gorra ACDC", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20acdc.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Alf", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20alf.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Audífonos", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20audifonos.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Bob Marley", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20bob%20marley.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Ceda el Vaso", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20ceda%20el%20vaso.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Guns and Roses", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20Guns%20and%20rose.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Iron Maiden", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20iron%20maiden.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Pausa de Hidratación", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20pausa%20de%20hidratacion.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Piernodoyuna y Patán", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20piernodoyuna%20y%20patan.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Pink Floyd Negra", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd%20negra.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Pink Floyd", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Silencio", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20silencio.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Simpson 2", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20simpson%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Simpson 3", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20simpson%203.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Simpson", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20simpson.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Star Wars 2", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20star%20wars%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Star Wars Negro", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20star%20wars%20negro.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Star Wars", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20star%20wars.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Yin Yang", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20yin%20yan.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Yoda 2", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20yoda%202.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" },
    { titulo: "Gorra Yoda Color", precio: "$19.990 CLP", imagen: "/gorras/Gorros%20yoda%20color.png", material: "Gabardina Resistente con Malla Respirable", tejido: "Gorra Trucker 5 Paneles", tallas: ["Ajustable Snapback"], estampado: "Aplicación DTF Textil HD Premium", corte: "Ajustable Snapback Urban" }
  ],
  totebag: [
    { titulo: "Totebag Capibara", precio: "$24.990 CLP", imagen: "/totebag/Totebag%20Capibara.png", material: "Lona 100% Algodón Ecológico (300 GSM)", tejido: "Lona Heavy Canvas", tallas: ["Única (38x42 cm)"], estampado: "Impresión Digital DTF Eco-Friendly", corte: "Asas Reforzadas de Alta Resistencia" },
    { titulo: "Totebag Madonna", precio: "$24.990 CLP", imagen: "/totebag/Totebag%20Madonna.png", material: "Lona 100% Algodón Ecológico (300 GSM)", tejido: "Lona Heavy Canvas", tallas: ["Única (38x42 cm)"], estampado: "Impresión Digital DTF Eco-Friendly", corte: "Asas Reforzadas de Alta Resistencia" }
  ],
  cuadros: [
    { titulo: "Cuadro Decorativo 40x50 Gato", precio: "$28.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Gato.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" },
    { titulo: "Cuadro Decorativo 40x50 Pluma", precio: "$28.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Pluma.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" },
    { titulo: "Cuadro Decorativo 40x50 Violín", precio: "$28.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Violin.png", material: "Lienzo Canvas Fine Art sobre Bastidor de Madera", tejido: "Canvas Algodón-Poliéster 320 grs", tallas: ["40x50 cm"], estampado: "Impresión Fotográfica Ultra HD", corte: "Montado sobre Bastidor Listo para Colgar" }
  ],
  llaveros: [
    { titulo: "Llavero Alf", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Alf.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { titulo: "Llavero Gorillaz", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Gorilaz.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { titulo: "Llavero Ramones", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Ramones.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" },
    { titulo: "Llavero Simpson", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Simpson.png", material: "Acrílico Premium con Argolla Metálica Reforzada", tejido: "Acrílico Rígido 3mm", tallas: ["Única"], estampado: "Impresión Doble Cara Full Color HD", corte: "Corte Láser de Alta Precisión" }
  ],
  mousepad: [
    { titulo: "Mouse Pad Gamer Batman vs Superman", precio: "$28.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Batman%20vs%20Superman.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" },
    { titulo: "Mouse Pad Gamer Breaking Bad", precio: "$28.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Breaking%20Bad.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" },
    { titulo: "Mouse Pad Gamer Peaky Blinders", precio: "$28.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Peaky%20Blindres.png", material: "Superficie de Microfibra con Base Antideslizante de Goma", tejido: "Soft Micro-Weave Speed", tallas: ["XL Gamer"], estampado: "Sublimación Full HD Lavable", corte: "Bordes Cosidos Reforzados Anti-Desgaste" }
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

  const catalogoRef = useRef(null);

  const filtrarPorCategoria = (key) => {
    const nuevaCategoria = categoriaSeleccionada === key ? null : key;
    setCategoriaSeleccionada(nuevaCategoria);
    setBusqueda('');
    
    if (catalogoRef.current) {
      catalogoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const irACatalogo = (e) => {
    e.preventDefault();
    setCategoriaSeleccionada(null);
    setBusqueda('');
    if (catalogoRef.current) {
      catalogoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const manejarBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    if (texto.trim().length > 0 && catalogoRef.current) {
      catalogoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const abrirModalDetalle = (prod) => {
    setProductoDetalle(prod);
    setTallaSeleccionada(prod.tallas ? prod.tallas[0] : '');
  };

  const agregarAlCarrito = (prod, talla) => {
    const itemAñadido = {
      ...prod,
      tallaEscogida: talla || (prod.tallas ? prod.tallas[0] : '')
    };
    setCarrito([...carrito, itemAñadido]);
    setMostrarCarritoModal(true);
  };

  const eliminarDelCarrito = (indexItem) => {
    const nuevoCarrito = carrito.filter((_, index) => index !== indexItem);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => {
      const numeroLimpio = parseInt(item.precio.replace(/[^0-9]/g, ''));
      return acc + numeroLimpio;
    }, 0).toLocaleString('es-CL');
  };

  const procederAlPago = () => {
    window.open('https://link.mercadopago.cl/paradiseshopchile', '_blank');
  };

  const titulosSeccion = {
    hombre: "Colección Exclusiva / Hombre",
    mujer: "Colección Exclusiva / Mujer",
    gorras: "Accesorios / Gorras & Caps",
    totebag: "Accesorios / Bolsos Tote",
    cuadros: "Decoración / Cuadros Exclusivos",
    llaveros: "Merchandising / Llaveros",
    mousepad: "Gaming & Escritorio / Mouse Pads"
  };

  let categoriasAMostrar = categoriaSeleccionada 
    ? [categoriaSeleccionada] 
    : Object.keys(baseDeDatosProductos);

  const hayBusqueda = busqueda.trim().length > 0;

  return (
    <div style={{ backgroundColor: '#f3ece2', color: '#1a1a1a', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '4rem', position: 'relative' }}>
      
      {/* BARRA SUPERIOR DE ANUNCIO (BLUE EXPRESS) */}
      <div style={{ backgroundColor: '#ff007f', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center', padding: '0.4rem 1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        ⚡ Envíos a todo Chile a través de Blue Express • Confección Exclusiva & Estampado DTF Textil HD ⚡
      </div>

      {/* HEADER EN UNA SOLA LÍNEA (LOGO GRANDE E IMPONENTE) */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1.2rem 2rem', 
        borderBottom: '1px solid #e0d6c8',
        backgroundColor: '#f3ece2',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* LOGO AMPLIADO */}
        <div style={{ fontSize: '1.8rem', letterSpacing: '2px', fontWeight: '900', textTransform: 'uppercase', fontStyle: 'italic', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          PARADISE <span style={{ color: '#ff007f' }}>SHOP</span>.CL
        </div>
        
        {/* NAVEGACIÓN Y ACCESOS */}
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <a href="#inicio" style={{ color: '#333', textDecoration: 'none' }}>Inicio</a>
          <a href="#categorias" style={{ color: '#333', textDecoration: 'none' }}>Categorías</a>
          <a href="#catalogo" onClick={irACatalogo} style={{ color: '#333', textDecoration: 'none', cursor: 'pointer' }}>Catálogo</a>
          <button 
            onClick={() => setMostrarModalTallas(true)} 
            style={{ background: 'none', border: '1px solid #ff007f', color: '#ff007f', padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
          >
            📏 Tabla de Medidas
          </button>
        </nav>

        {/* BUSCADOR Y CARRITO */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {mostrarBuscador && (
              <input 
                type="text" 
                placeholder="Buscar..." 
                value={busqueda}
                onChange={manejarBusqueda}
                autoFocus
                style={{
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  border: '1px solid #ff007f',
                  outline: 'none',
                  fontSize: '0.8rem',
                  backgroundColor: '#fff',
                  width: '130px'
                }}
              />
            )}
            <button 
              onClick={() => {
                setMostrarBuscador(!mostrarBuscador);
                if (mostrarBuscador) setBusqueda('');
              }} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }} 
              title="Buscar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          
          <button 
            onClick={() => setMostrarCarritoModal(!mostrarCarritoModal)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600', fontSize: '0.85rem' }}
            title="Ver Carrito"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={{ backgroundColor: '#ff007f', color: '#fff', padding: '1px 5px', borderRadius: '50%', fontSize: '0.7rem' }}>
              {carrito.length}
            </span>
          </button>
        </div>
      </header>

      {/* MODAL / PANEL LATERAL DEL CARRITO */}
      {mostrarCarritoModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '400px',
          height: '100%',
          backgroundColor: '#fff',
          boxShadow: '-5px 0 25px rgba(0,0,0,0.15)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0d6c8', paddingBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>Tu Carro de Compras</h3>
            <button 
              onClick={() => setMostrarCarritoModal(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold' }}
            >
              &times;
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 0' }}>
            {carrito.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', marginTop: '4rem' }}>
                <p style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>Tu carro está vacío</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Agrega productos desde el catálogo para cotizar.</p>
              </div>
            ) : (
              carrito.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #f0eae1', paddingBottom: '1rem' }}>
                  <img src={item.imagen} alt={item.titulo} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', backgroundColor: '#f9f6f0' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>{item.titulo}</h4>
                    {item.tallaEscogida && (
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#111', color: '#fff', padding: '2px 6px', borderRadius: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Talla: {item.tallaEscogida}
                      </span>
                    )}
                    <p style={{ fontSize: '0.85rem', color: '#ff007f', fontWeight: 'bold', margin: '4px 0 0 0' }}>{item.precio}</p>
                  </div>
                  <button 
                    onClick={() => eliminarDelCarrito(index)}
                    style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '1.1rem' }}
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {carrito.length > 0 && (
            <div style={{ borderTop: '1px solid #e0d6c8', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>Total:</span>
                <span style={{ color: '#ff007f' }}>${calcularTotal()} CLP</span>
              </div>
              <button 
                onClick={procederAlPago}
                style={{ width: '100%', backgroundColor: '#ff007f', color: '#fff', border: 'none', padding: '1rem', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', letterSpacing: '1px' }}
              >
                Proceder al Pago
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODAL / VENTANA FLOTANTE GENERAL DE TABLA DE MEDIDAS (TEE.CL) */}
      {mostrarModalTallas && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.5rem',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#fff',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '85vh',
            borderRadius: '8px',
            overflowY: 'auto',
            position: 'relative',
            padding: '2.5rem 2rem',
            boxSizing: 'border-box'
          }}>
            <button 
              onClick={() => setMostrarModalTallas(false)}
              style={{ position: 'absolute', top: '1rem', right: '1.2rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#333', fontWeight: 'bold' }}
            >
              &times;
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #e0d6c8', paddingBottom: '1rem' }}>
              <span style={{ backgroundColor: '#ff007f', color: '#fff', padding: '0.2rem 0.8rem', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Confección Oficial Tee.cl
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', margin: '0.8rem 0 0.4rem 0', fontStyle: 'italic' }}>
                Guía de Tallas & Tabla de Medidas
              </h2>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                Las medidas corresponden al ancho de pecho (axila a axila) y largo total de la prenda.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              
              {/* POLERA POLO */}
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', color: '#ff007f', fontSize: '1rem', textTransform: 'uppercase', fontWeight: '800' }}>Polera Polo Cuello Redondo</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.8rem' }}>Heavy Cotton 195 grs / 100% Algodón</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#333', lineHeight: '1.8' }}>
                  <li><strong>S:</strong> 46 cm ancho x 68 cm largo</li>
                  <li><strong>M:</strong> 51 cm ancho x 73 cm largo</li>
                  <li><strong>L:</strong> 56 cm ancho x 75 cm largo</li>
                  <li><strong>XL:</strong> 61 cm ancho x 76 cm largo</li>
                  <li><strong>2XL:</strong> 66 cm ancho x 79 cm largo</li>
                  <li><strong>3XL:</strong> 71 cm ancho x 83 cm largo</li>
                  <li><strong>4XL:</strong> 75 cm ancho x 86 cm largo</li>
                  <li><strong>5XL:</strong> 80 cm ancho x 89 cm largo</li>
                </ul>
              </div>

              {/* POLERA PREMIUM */}
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', color: '#ff007f', fontSize: '1rem', textTransform: 'uppercase', fontWeight: '800' }}>Polera Premium Cuello Redondo</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.8rem' }}>Soft Cotton 180 grs / Algodón Peinado</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#333', lineHeight: '1.8' }}>
                  <li><strong>S:</strong> 45 cm ancho x 69 cm largo</li>
                  <li><strong>M:</strong> 49 cm ancho x 73 cm largo</li>
                  <li><strong>L:</strong> 54 cm ancho x 76 cm largo</li>
                  <li><strong>XL:</strong> 59 cm ancho x 77 cm largo</li>
                  <li><strong>2XL:</strong> 64 cm ancho x 80 cm largo</li>
                  <li><strong>3XL:</strong> 71 cm ancho x 83 cm largo</li>
                </ul>
              </div>

              {/* POLERA OVERSIZE */}
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', color: '#ff007f', fontSize: '1rem', textTransform: 'uppercase', fontWeight: '800' }}>Polera Oversize (Hombres)</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.8rem' }}>Interlock 280 grs / Corte Suelto Urban</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#333', lineHeight: '1.8' }}>
                  <li><strong>S:</strong> 59 cm ancho x 71.5 cm largo</li>
                  <li><strong>M:</strong> 64 cm ancho x 74 cm largo</li>
                  <li><strong>L:</strong> 69 cm ancho x 76.5 cm largo</li>
                  <li><strong>XL:</strong> 74 cm ancho x 79 cm largo</li>
                  <li><strong>2XL:</strong> 79 cm ancho x 81.5 cm largo</li>
                </ul>
              </div>

              {/* POLERA MUJER */}
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', color: '#ff007f', fontSize: '1rem', textTransform: 'uppercase', fontWeight: '800' }}>Polera Mujer Cuello Redondo</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.8rem' }}>Heavy Cotton 195 grs / Corte Entallado</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#333', lineHeight: '1.8' }}>
                  <li><strong>XS:</strong> 38 cm ancho x 59 cm largo</li>
                  <li><strong>S:</strong> 43 cm ancho x 64.5 cm largo</li>
                  <li><strong>M:</strong> 48.5 cm ancho x 66 cm largo</li>
                  <li><strong>L:</strong> 53.5 cm ancho x 69 cm largo</li>
                  <li><strong>XL:</strong> 58.5 cm ancho x 71.5 cm largo</li>
                  <li><strong>2XL:</strong> 60.5 cm ancho x 73.5 cm largo</li>
                </ul>
              </div>

              {/* POLERÓN CANGURO */}
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8', gridColumn: '1 / -1' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', color: '#ff007f', fontSize: '1rem', textTransform: 'uppercase', fontWeight: '800' }}>Polerón Canguro Premium (Hombres)</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.8rem' }}>Franela Cardada 340 grs / 90% Algodón Peinado y 10% Poliéster</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', fontSize: '0.85rem', color: '#333' }}>
                  <div><strong>S:</strong> 46 cm ancho x 70 cm largo</div>
                  <div><strong>M:</strong> 51 cm ancho x 73 cm largo</div>
                  <div><strong>L:</strong> 56 cm ancho x 76 cm largo</div>
                  <div><strong>XL:</strong> 61 cm ancho x 78 cm largo</div>
                  <div><strong>2XL:</strong> 66 cm ancho x 81 cm largo</div>
                  <div><strong>3XL:</strong> 68 cm ancho x 83 cm largo</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MODAL / VENTANA FLOTANTE CON ESPECIFICACIONES TEE.CL */}
      {productoDetalle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.5rem',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#fff',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '90vh',
            borderRadius: '8px',
            overflowY: 'auto',
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '2rem',
            boxSizing: 'border-box',
            gap: '2rem'
          }}>
            {/* BOTÓN CERRAR */}
            <button 
              onClick={() => setProductoDetalle(null)}
              style={{ position: 'absolute', top: '1rem', right: '1.2rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#333', fontWeight: 'bold' }}
            >
              &times;
            </button>

            {/* IMAGEN AMPLIADA DEL PRODUCTO */}
            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f6f0', borderRadius: '6px', padding: '1rem' }}>
              <img src={productoDetalle.imagen} alt={productoDetalle.titulo} style={{ maxWidth: '100%', maxHeight: '380px', objectFit: 'contain' }} />
            </div>

            {/* DETALLES Y ESPECIFICACIONES TEE.CL */}
            <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ backgroundColor: '#ff007f', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '2px', textTransform: 'uppercase', width: 'fit-content', marginBottom: '0.8rem' }}>
                Confección Tee.cl
              </span>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 0.5rem 0', color: '#111' }}>
                {productoDetalle.titulo}
              </h2>
              <p style={{ fontSize: '1.4rem', color: '#ff007f', fontWeight: '900', margin: '0 0 1.2rem 0' }}>
                {productoDetalle.precio}
              </p>

              {/* SELECCIÓN DE TALLAS */}
              {productoDetalle.tallas && (
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#333' }}>
                      Seleccionar Talla Disponibles:
                    </label>
                    <button 
                      onClick={() => setMostrarModalTallas(true)}
                      style={{ background: 'none', border: 'none', color: '#ff007f', fontSize: '0.75rem', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      📏 Ver Tabla de Medidas
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {productoDetalle.tallas.map((talla) => (
                      <button
                        key={talla}
                        onClick={() => setTallaSeleccionada(talla)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          border: tallaSeleccionada === talla ? '2px solid #ff007f' : '1px solid #ccc',
                          backgroundColor: tallaSeleccionada === talla ? '#ff007f' : '#fff',
                          color: tallaSeleccionada === talla ? '#fff' : '#333',
                          fontWeight: 'bold',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.8rem'
                        }}
                      >
                        {talla}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ borderTop: '1px solid #e0d6c8', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', margin: '0 0 0.8rem 0', color: '#333' }}>
                  Ficha Técnica & Materiales:
                </h4>
                <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: '#555', lineHeight: '1.7' }}>
                  <li><strong>Composición:</strong> {productoDetalle.material}</li>
                  <li><strong>Tejido / Gramaje:</strong> {productoDetalle.tejido}</li>
                  <li><strong>Estampado:</strong> {productoDetalle.estampado}</li>
                  <li><strong>Corte:</strong> {productoDetalle.corte}</li>
                  <li><strong>Despacho:</strong> Envíos a todo Chile a través de Blue Express</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => {
                    agregarAlCarrito(productoDetalle, tallaSeleccionada);
                    setProductoDetalle(null);
                  }}
                  style={{ flex: 1, backgroundColor: '#ff007f', color: '#fff', border: 'none', padding: '1rem', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', letterSpacing: '1px' }}
                >
                  Agregar al Carro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO BANNER A ANCHO COMPLETO (CINEMÁTICO REAL) */}
      <section id="inicio" style={{ 
        backgroundColor: '#111', 
        color: '#fff', 
        padding: '7rem 2rem', 
        textAlign: 'center', 
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        boxSizing: 'border-box',
        borderBottom: '4px solid #ff007f'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ backgroundColor: '#ff007f', color: '#fff', padding: '0.4rem 1.2rem', fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Colección Limitada Streetwear
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', margin: '1.5rem 0 1.2rem 0', textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '1px', color: '#ffffff', lineHeight: '1.1' }}>
            Tu próximo drop ya está diseñado.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#bbb', maxWidth: '600px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
            Indumentaria urbana exclusiva, diseño independiente y alta calidad para la cultura de club.
          </p>
          <a href="#catalogo" onClick={irACatalogo} style={{ backgroundColor: '#ff007f', color: '#fff', padding: '1rem 2.5rem', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.95rem', boxShadow: '0 4px 15px rgba(255,0,127,0.4)' }}>
            Explorar Catálogo 🚀
          </a>
        </div>
      </section>

      {/* BLOQUES DE CATEGORÍAS */}
      <section id="categorias" style={{ maxWidth: '1200px', margin: '4rem auto 2rem auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
            Explora por Categoría
          </h3>
          <p style={{ color: '#666', fontSize: '0.95rem', marginTop: '0.4rem' }}>Haz clic en una categoría para filtrar y ver la ropa de inmediato</p>
        </div>

        <div className="product-grid">
          <CategoryCard img={imgHombre} title="Hombre" onClick={() => filtrarPorCategoria('hombre')} isActive={categoriaSeleccionada === 'hombre'} />
          <CategoryCard img={imgMujer} title="Mujer" onClick={() => filtrarPorCategoria('mujer')} isActive={categoriaSeleccionada === 'mujer'} />
          <CategoryCard img={imgGorras} title="Gorras (Caps)" onClick={() => filtrarPorCategoria('gorras')} isActive={categoriaSeleccionada === 'gorras'} />
          <CategoryCard img={imgTotebag} title="Totebags" onClick={() => filtrarPorCategoria('totebag')} isActive={categoriaSeleccionada === 'totebag'} />
          <CategoryCard img={imgCuadros} title="Cuadros Decorativos" onClick={() => filtrarPorCategoria('cuadros')} isActive={categoriaSeleccionada === 'cuadros'} />
          <CategoryCard img={imgLlaveros} title="Llaveros" onClick={() => filtrarPorCategoria('llaveros')} isActive={categoriaSeleccionada === 'llaveros'} />
          <CategoryCard img={imgMousepad} title="Mouse Pads" onClick={() => filtrarPorCategoria('mousepad')} isActive={categoriaSeleccionada === 'mousepad'} />
        </div>
      </section>

      {/* VITRINA DE CATÁLOGO GENERAL / BÚSQUEDA */}
      <main ref={catalogoRef} id="catalogo" style={{ maxWidth: '1200px', margin: '2rem auto 0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #e0d6c8', paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', margin: 0, fontStyle: 'italic' }}>
            {hayBusqueda ? `Resultados para: "${busqueda}"` : (categoriaSeleccionada ? titulosSeccion[categoriaSeleccionada] : "Catálogo General / Todos los Productos")}
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            {hayBusqueda ? "Búsqueda en tiempo real en todo el catálogo" : (categoriaSeleccionada ? "Mostrando artículos de esta sección" : "Explora toda nuestra indumentaria y accesorios de cultura urbana")}
          </p>
          {(categoriaSeleccionada || hayBusqueda) && (
            <button 
              onClick={() => { setCategoriaSeleccionada(null); setBusqueda(''); }}
              style={{ marginTop: '1rem', background: '#111', color: '#fff', border: 'none', padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px', textTransform: 'uppercase' }}
            >
              Ver Todo el Catálogo
            </button>
          )}
        </div>

        {/* Renderizado condicional según búsqueda */}
        {hayBusqueda ? (
          <div>
            {(() => {
              let resultadosTotales = [];
              Object.keys(baseDeDatosProductos).forEach(cat => {
                const filtrados = baseDeDatosProductos[cat].filter(prod => 
                  prod.titulo.toLowerCase().includes(busqueda.toLowerCase())
                );
                resultadosTotales = [...resultadosTotales, ...filtrados];
              });

              if (resultadosTotales.length === 0) {
                return (
                  <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666' }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>No encontramos productos que coincidan con "{busqueda}".</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Prueba con otra palabra clave (ej. Armin, Gorra, Cat).</p>
                  </div>
                );
              }

              return (
                <div>
                  <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #d5cbc0', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#ff007f', fontWeight: 'bold', textTransform: 'uppercase' }}>
                      {resultadosTotales.length} coincidencia(s) encontrada(s)
                    </span>
                  </div>
                  <div className="product-grid">
                    {resultadosTotales.map((prod, index) => (
                      <ProductCard 
                        key={index}
                        img={prod.imagen}
                        title={prod.titulo}
                        price={prod.precio}
                        onComprar={() => abrirModalDetalle(prod)}
                        onAbrirDetalle={() => abrirModalDetalle(prod)}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        ) : (
          categoriasAMostrar.map((catKey) => (
            <div key={catKey} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #d5cbc0', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', color: '#111' }}>
                  {titulosSeccion[catKey]}
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#ff007f', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {baseDeDatosProductos[catKey].length} productos
                </span>
              </div>

              <div className="product-grid">
                {baseDeDatosProductos[catKey].map((prod, index) => (
                  <ProductCard 
                    key={index}
                    img={prod.imagen}
                    title={prod.titulo}
                    price={prod.precio}
                    onComprar={() => abrirModalDetalle(prod)}
                    onAbrirDetalle={() => abrirModalDetalle(prod)}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #e0d6c8', padding: '3rem 2rem', color: '#444', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2.5rem', backgroundColor: '#ece3d5' }}>
        <div>
          <p style={{ fontWeight: '900', color: '#111', textTransform: 'uppercase', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Paradise Shop Chile</p>
          <p style={{ color: '#666' }}>Indumentaria urbana y streetwear</p>
          <p style={{ color: '#666', marginTop: '0.2rem' }}>Rancagua, Chile</p>
        </div>
        <div>
          <p style={{ fontWeight: '900', color: '#111', textTransform: 'uppercase', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Navegación</p>
          <p style={{ marginBottom: '0.3rem' }}><a href="#inicio" style={{ color: '#555', textDecoration: 'none' }}>Inicio</a></p>
          <p style={{ marginBottom: '0.3rem' }}><a href="#categorias" style={{ color: '#555', textDecoration: 'none' }}>Categorías</a></p>
          <p style={{ marginBottom: '0.3rem' }}><a href="#catalogo" onClick={irACatalogo} style={{ color: '#555', textDecoration: 'none', cursor: 'pointer' }}>Catálogo</a></p>
          <p style={{ cursor: 'pointer', color: '#ff007f', fontWeight: 'bold' }} onClick={() => setMostrarModalTallas(true)}>Tabla de Medidas</p>
        </div>
        <div>
          <p style={{ fontWeight: '900', color: '#111', textTransform: 'uppercase', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Contacto</p>
          <p style={{ marginBottom: '0.3rem' }}>Correo: <a href="mailto:contacto@radioparadise.cl" style={{ color: '#333', textDecoration: 'none', fontWeight: '600' }}>contacto@radioparadise.cl</a></p>
          <p style={{ color: '#666' }}>Despachos vía Blue Express</p>
        </div>
      </footer>

    </div>
  );
}

export default App;