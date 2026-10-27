import React, { useState } from 'react';
import './App.css';

import imgHombre from './images/hombre.png';
import imgMujer from './images/mujer.png';
import imgGorras from './images/gorras.png';
import imgTotebag from './images/totebag.png';
import imgCuadros from './images/cuadros.png';
import imgLlaveros from './images/llaveros.png';
import imgMousepad from './images/mousepad.png';

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

// Componente para tarjetas de categoría superior (en cuadrícula)
const CategoryCard = ({ img, title, onClick }) => (
  <div onClick={onClick} className="category-card" style={{ cursor: 'pointer' }}>
    <div className="category-image-container">
      <img src={img} alt={title} />
    </div>
    <div className="category-title">{title}</div>
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
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarritoModal, setMostrarCarritoModal] = useState(false);
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');

  const agregarAlCarrito = (producto, talla = 'Única') => {
    setCarrito([...carrito, { ...producto, tallaSeleccionada: talla }]);
    setMostrarCarritoModal(true);
  };

  const productosFiltrados = categoriaSeleccionada 
    ? baseDeDatosProductos[categoriaSeleccionada] 
    : Object.values(baseDeDatosProductos).flat();

  const resultadosBusqueda = busqueda.trim() === '' 
    ? productosFiltrados 
    : productosFiltrados.filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo" onClick={() => { setCategoriaSeleccionada(null); setBusqueda(''); }} style={{ cursor: 'pointer' }}>
          PARADISE <span>SHOP</span>.CL
        </div>
        <nav className="nav-links">
          <button onClick={() => { setCategoriaSeleccionada(null); setBusqueda(''); }}>Inicio</button>
          <button onClick={() => setMostrarBuscador(!mostrarBuscador)}>Catálogo</button>
        </nav>
        <div className="header-actions">
          <button onClick={() => setMostrarCarritoModal(true)} className="cart-icon-btn">
            🛒 <span className="cart-count">{carrito.length}</span>
          </button>
        </div>
      </header>

      <section className="hero-section">
        <h1>COLECCIÓN EXCLUSIVA PARADISE SHOP</h1>
        <p>Encuentra tus diseños favoritos en poleras, polerones, gorras, cuadros y más.</p>
        {mostrarBuscador && (
          <div style={{ marginTop: '1rem' }}>
            <input 
              type="text" 
              placeholder="Buscar producto..." 
              value={busqueda} 
              onChange={(e) => setBusqueda(e.target.value)} 
              style={{ padding: '0.8rem', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        )}
      </section>

      {!categoriaSeleccionada && busqueda === '' && (
        <section className="categories-section">
          <h2>CATEGORÍAS OFICIALES</h2>
          <div className="categories-grid">
            <CategoryCard img={imgHombre} title="HOMBRE / UNISEX" onClick={() => setCategoriaSeleccionada('hombre')} />
            <CategoryCard img={imgMujer} title="MUJER" onClick={() => setCategoriaSeleccionada('mujer')} />
            <CategoryCard img={imgGorras} title="GORRAS / JOCKEYS" onClick={() => setCategoriaSeleccionada('gorras')} />
            <CategoryCard img={imgTotebag} title="TOTE BAGS" onClick={() => setCategoriaSeleccionada('totebag')} />
            <CategoryCard img={imgCuadros} title="CUADROS DECORATIVOS" onClick={() => setCategoriaSeleccionada('cuadros')} />
            <CategoryCard img={imgLlaveros} title="LLAVEROS" onClick={() => setCategoriaSeleccionada('llaveros')} />
            <CategoryCard img={imgMousepad} title="MOUSE PADS" onClick={() => setCategoriaSeleccionada('mousepad')} />
          </div>
        </section>
      )}

      <section className="products-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>{categoriaSeleccionada ? `Categoría: ${categoriaSeleccionada.toUpperCase()}` : 'CATÁLOGO GENERAL DE PRODUCTOS'}</h2>
          {categoriaSeleccionada && (
            <button onClick={() => setCategoriaSeleccionada(null)} style={{ padding: '0.5rem 1rem', background: '#111', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              ← Ver Todas las Categorías
            </button>
          )}
        </div>

        <div className="products-grid">
          {resultadosBusqueda.map((prod, idx) => (
            <ProductCard 
              key={idx} 
              img={prod.imagen} 
              title={prod.titulo} 
              price={prod.precio} 
              onComprar={() => agregarAlCarrito(prod)} 
              onAbrirDetalle={() => setProductoDetalle(prod)} 
            />
          ))}
        </div>
      </section>

      {productoDetalle && (
        <div className="modal-overlay" onClick={() => setProductoDetalle(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '500px', width: '90%', color: '#111' }}>
            <h3>{productoDetalle.titulo}</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff007f' }}>{productoDetalle.precio}</p>
            <p><strong>Material:</strong> {productoDetalle.material}</p>
            <p><strong>Tejido:</strong> {productoDetalle.tejido}</p>
            <p><strong>Estampado:</strong> {productoDetalle.estampado}</p>
            <p><strong>Corte:</strong> {productoDetalle.corte}</p>
            
            <div style={{ margin: '1rem 0' }}>
              <strong>Tallas Disponibles:</strong>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                {productoDetalle.tallas.map((t, i) => (
                  <button 
                    key={i} 
                    onClick={() => setTallaSeleccionada(t)}
                    style={{ padding: '0.5rem 1rem', border: tallaSeleccionada === t ? '2px solid #ff007f' : '1px solid #ccc', background: tallaSeleccionada === t ? '#ff007f' : '#fff', color: tallaSeleccionada === t ? '#fff' : '#111', cursor: 'pointer', borderRadius: '4px' }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button 
                onClick={() => { agregarAlCarrito(productoDetalle, tallaSeleccionada || productoDetalle.tallas[0]); setProductoDetalle(null); }}
                style={{ flex: 1, background: '#ff007f', color: '#fff', border: 'none', padding: '0.8rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' }}
              >
                Añadir al Carrito
              </button>
              <button onClick={() => setProductoDetalle(null)} style={{ background: '#ccc', border: 'none', padding: '0.8rem', cursor: 'pointer', borderRadius: '4px' }}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {mostrarCarritoModal && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="modal-content" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '500px', width: '90%', color: '#111' }}>
            <h3>🛒 Carrito de Compras</h3>
            {carrito.length === 0 ? (
              <p style={{ margin: '1.5rem 0' }}>Tu carrito está vacío.</p>
            ) : (
              <div style={{ maxHeight: '250px', overflowY: 'auto', margin: '1rem 0' }}>
                {carrito.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem' }}>{item.titulo}</h4>
                      <small>Talla: {item.tallaSeleccionada}</small>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>{item.precio}</span>
                  </div>
                ))}
              </div>
            )}
            <button onClick={() => setMostrarCarritoModal(false)} style={{ width: '100%', background: '#111', color: '#fff', border: 'none', padding: '0.8rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px', marginTop: '1rem' }}>
              Seguir Comprando
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;