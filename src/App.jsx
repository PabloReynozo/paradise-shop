
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CheckoutParadise from './components/CheckoutParadise.jsx';
import imgHombre from './images/hombre.png';
import imgMujer from './images/mujer.png';
import imgGorras from './images/gorras.png';
import imgTotebag from './images/totebag.png';
import imgCuadros from './images/cuadros.png';
import imgLlaveros from './images/llaveros.png';
import imgMousepad from './images/mousepad.png';

const MAPEO_TEE_TALLAS = { 'XS': 1, 'S': 2, 'M': 3, 'L': 4, 'XL': 5, '2XL': 16, '3XL': 17, '4XL': 18, '5XL': 19, 'Única (38x42 cm)': 6, 'Única': 6, '40x50 cm': 19, 'Ajustable Snapback': 6, 'XL Gamer': 6, 'Ajustable': 6 };
function mapearATee(p) { var tl = (p.titulo||'').toLowerCase(); var idSuperficie = 37; if (tl.indexOf('canguro') !== -1) idSuperficie = 9; else if (tl.indexOf('premium') !== -1) idSuperficie = 31; else if (tl.indexOf('polo') !== -1) idSuperficie = 1; else if (tl.indexOf('gorra') !== -1) idSuperficie = 14; else if (tl.indexOf('totebag') !== -1) idSuperficie = 32; else if (tl.indexOf('cuadro') !== -1) idSuperficie = 26; else if (tl.indexOf('llavero') !== -1) idSuperficie = 29; else if (tl.indexOf('mouse') !== -1) idSuperficie = 25; var idColor = (tl.indexOf('negra') !== -1 || tl.indexOf('negro') !== -1) ? 2 : 1; var idTalla = MAPEO_TEE_TALLAS[p.tallaEscogida || p.tallas[0]] || 2; return { idSuperficie: idSuperficie, idColor: idColor, idTalla: idTalla }; }

const baseDeDatosProductos = {
  hombre: [
    { titulo: "Polera Oversize 300 Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20300%20Blanca.png", material: "80% Algodon y 20% Poliester", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "Impresion Digital DTF Textil HD", corte: "Oversize Fit Streetwear" },
    { titulo: "Polera Oversize Aguila Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20aguila%20Blanca.png", material: "80% Algodon y 20% Poliester", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Blanca Hombre", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Blanca%20Hombre.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Breaking Bad Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Breaking%20Bad%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Cristo Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Cristo%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Cruz Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20cruz%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Armin Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Armin%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Carl Cox Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Carl%20Cox%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Centella Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20centella.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Los Por Los Tragos", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Los%20Por%20Los%20Tragos.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Music is Life", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20music%20is%20life.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Silvestre Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Silvestre%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Yoda DJ Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20hombre%20blanco%20yoda%20dj.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Thor Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Thor%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Oversize Vikingo Blanca", precio: "$23.990 CLP", imagen: "/hombre/Polera%20Oversize%20Vikingo%20Blanca.png", material: "80% Algodon", tejido: "Interlock 280 grs", tallas: ["S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Oversize" },
    { titulo: "Polera Polo Cuello Redondo Blanca Azteca", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20azteca.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular Fit Clasico" },
    { titulo: "Polera Polo Cuello Redondo Blanca Bart Simpson", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20bart%20simpson.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular" },
    { titulo: "Polera Polo Cuello Redondo Blanca Huella", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20Huella.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular" },
    { titulo: "Polera Polo Cuello Redondo Blanca Moto Playa", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20moto%20en%20la%20playa.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular" },
    { titulo: "Polera Polo Cuello Redondo Blanca Superman", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20blanca%20superman.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular" },
    { titulo: "Polera Polo Cuello Redondo Negra Montana", precio: "$25.990 CLP", imagen: "/hombre/Polera-polo-negra-montana.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular" },
    { titulo: "Polera Polo Cuello Redondo Negra Motocicleta", precio: "$25.990 CLP", imagen: "/hombre/Polera%20polo%20cuello%20redondo%20negra%20motocicleta.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["S","M","L","XL","2XL","3XL","4XL","5XL"], estampado: "DTF HD", corte: "Regular" },
    { titulo: "Polera Premium Darth Vader Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Darth%20Vader%20negra.png", material: "100% Algodon Peinado", tejido: "Jersey 180 grs", tallas: ["S","M","L","XL","2XL","3XL"], estampado: "DTF HD", corte: "Standard Premium" },
    { titulo: "Polera Premium Goku Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Goku%20Negra.png", material: "100% Algodon Peinado", tejido: "Jersey 180 grs", tallas: ["S","M","L","XL","2XL","3XL"], estampado: "DTF HD", corte: "Premium" },
    { titulo: "Polera Premium Mano CD Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20mano%20cd%20negra.png", material: "100% Algodon Peinado", tejido: "Jersey 180 grs", tallas: ["S","M","L","XL","2XL","3XL"], estampado: "DTF HD", corte: "Premium" },
    { titulo: "Polera Premium Piccolo Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Piccolo%20Negra.png", material: "100% Algodon Peinado", tejido: "Jersey 180 grs", tallas: ["S","M","L","XL","2XL","3XL"], estampado: "DTF HD", corte: "Premium" },
    { titulo: "Polera Premium Star Wars Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20star%20wars%20negra.png", material: "100% Algodon Peinado", tejido: "Jersey 180 grs", tallas: ["S","M","L","XL","2XL","3XL"], estampado: "DTF HD", corte: "Premium" },
    { titulo: "Polera Premium Super Boo Negra", precio: "$26.990 CLP", imagen: "/hombre/Polera%20premium%20cuello%20redondo%20Super%20boo%20negra.png", material: "100% Algodon Peinado", tejido: "Jersey 180 grs", tallas: ["S","M","L","XL","2XL","3XL"], estampado: "DTF HD", corte: "Premium" },
    { titulo: "Poleron Canguro Premium Frase", nombreComercial: "Frase", precio: "$42.990 CLP", imagen: "/hombre/Poler%C3%B3n%20canguro%20premium%20Frase.png", material: "90% Algodon 10% Poliester", tejido: "Franela 340 grs", tallas: ["S","M","L","XL"], estampado: "DTF HD", corte: "Hoodie Premium" },
    { titulo: "Poleron Canguro Premium Gorilla Feelgood", nombreComercial: "Gorilla Feelgood", precio: "$42.990 CLP", imagen: "/hombre/Poler%C3%B3n%20canguro%20premium%20gorilla_feelgood_cutout.png", material: "90% Algodon 10% Poliester", tejido: "Franela 340 grs", tallas: ["S","M","L","XL"], estampado: "DTF HD", corte: "Hoodie Premium" },
    { titulo: "Poleron Canguro Premium Gorilla Rasta", nombreComercial: "Gorilla Rasta", precio: "$42.990 CLP", imagen: "/hombre/Poleron%20Canguro%20Premium%20gorilla_rasta_cutout.png", material: "90% Algodon 10% Poliester", tejido: "Franela 340 grs", tallas: ["S","M","L","XL"], estampado: "DTF HD", corte: "Hoodie Premium" },
    { titulo: "Poleron Canguro Premium Negro Gorilla Feelgood", nombreComercial: "Gorilla Feelgood Negro", precio: "$42.990 CLP", imagen: "/hombre/Poler%C3%B3n%20canguro%20premium%20negro%20gorilla_feelgood_cutout.png", material: "90% Algodon 10% Poliester", tejido: "Franela 340 grs", tallas: ["S","M","L","XL"], estampado: "DTF HD", corte: "Hoodie Premium" },
    { titulo: "Poleron Canguro Premium Phil Collins", nombreComercial: "Phil Collins", precio: "$42.990 CLP", imagen: "/hombre/Poleron%20Canguro%20Premium%20phil_collins_bw.png", material: "90% Algodon 10% Poliester", tejido: "Franela 340 grs", tallas: ["S","M","L","XL"], estampado: "DTF HD", corte: "Hoodie Premium" }
  ],
  mujer: [
    { titulo: "Polera Mujer Blanco Mujer en Arbol", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20arbol.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Femenino Entallado" },
    { titulo: "Polera Mujer Blanco Mujer en Piano", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Mujer%20en%20piano.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Blanco Ojo Mujer", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Blanco%20Ojo%20Mujer.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Gris Madre e Hijo", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Gris%20Madre%20e%20hijo.png", material: "90% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Lagrimas de Oro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Lagrimas%20de%20Oro.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Mirada de Medianoche", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Medianoche.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Mirada de Oleo", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20de%20Oleo.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Mirada Splash", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20Mirada%20Splash.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Destello Amarillo", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20muje%20Destello%20Amarillo.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Africa", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Africa.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Amigos Fieles", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Amigos%20Fieles.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Arte Callejero", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Arte%20Callejero.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Cara Pintada", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20cara%20pintada.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Dualidad Floral", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dualidad%20Floral.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Dulce Cachorro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Dulce%20Cachorro.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Esencia Afro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Esencia%20Afro.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Estilo Etnico", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Estilo%20Etnico.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Helga", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Helga.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Mirada de Sol", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Mirada%20de%20Sol.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Ojo Floral Blue", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Ojo%20Floral%20Blue.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Patin Retro Speed", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Patin%20Retro%20Speed.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Reina de Girasoles", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Reina%20de%20Girasoles.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Salchicha Pop Art", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20mujer%20Salchicha%20Pop%20Art.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" },
    { titulo: "Polera Mujer Ritmo Retro", precio: "$25.990 CLP", imagen: "/mujer/Polera%20Mujer%20cuello%20redondo%20negra%20mujer%20Ritmo%20Retro.png", material: "100% Algodon", tejido: "Jersey 195 grs", tallas: ["XS","S","M","L","XL","2XL"], estampado: "DTF HD", corte: "Entallado" }
  ],
  gorras: [
    { titulo: "Gorra ACDC", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20acdc.png", material: "Gabardina Resistente", tejido: "Trucker 5 Paneles", tallas: ["Ajustable"], estampado: "DTF Premium", corte: "Snapback" },
    { titulo: "Gorra Alf", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20alf.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Audifonos", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20audifonos.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Bob Marley", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20bob%20marley.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Ceda el Vaso", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20ceda%20el%20vaso.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Guns and Roses", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20Guns%20and%20rose.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Iron Maiden", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20iron%20maiden.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Pausa de Hidratacion", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20pausa%20de%20hidratacion.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Piernodoyuna y Patan", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20piernodoyuna%20y%20patan.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Pink Floyd Negra", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd%20negra.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Pink Floyd", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20pink%20floyd.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Silencio", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20silencio.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Simpson 2", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson%202.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Simpson 3", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson%203.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Simpson", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20simpson.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Star Wars 2", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars%202.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Star Wars Negro", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars%20negro.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Star Wars", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20star%20wars.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Yin Yang", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20yin%20yan.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Yoda 2", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20yoda%202.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" },
    { titulo: "Gorra Yoda Color", precio: "$14.990 CLP", imagen: "/gorras/Gorros%20yoda%20color.png", material: "Gabardina", tejido: "Trucker", tallas: ["Ajustable"], estampado: "DTF", corte: "Snapback" }
  ],
  totebag: [
    { titulo: "Totebag Capibara", precio: "$23.990 CLP", imagen: "/totebag/Totebag%20Capibara.png", material: "Lona 100% Algodon 300 GSM", tejido: "Canvas Heavy", tallas: ["Unica (38x42)"], estampado: "DTF Eco", corte: "Asas Reforzadas" },
    { titulo: "Totebag Madonna", precio: "$23.990 CLP", imagen: "/totebag/Totebag%20Madonna.png", material: "Lona 300 GSM", tejido: "Canvas", tallas: ["Unica"], estampado: "DTF", corte: "Asas" }
  ],
  cuadros: [
    { titulo: "Cuadro Decorativo 40x50 Gato", precio: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Gato.png", material: "Canvas Fine Art", tejido: "Canvas 320 grs", tallas: ["40x50 cm"], estampado: "Ultra HD", corte: "Bastidor" },
    { titulo: "Cuadro Decorativo 40x50 Pluma", precio: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Pluma.png", material: "Canvas", tejido: "Canvas 320", tallas: ["40x50"], estampado: "HD", corte: "Bastidor" },
    { titulo: "Cuadro Decorativo 40x50 Violin", precio: "$27.990 CLP", imagen: "/cuadros/Cuadro%20decorativo%2040x50%20Violin.png", material: "Canvas", tejido: "Canvas 320", tallas: ["40x50"], estampado: "HD", corte: "Bastidor" }
  ],
  llaveros: [
    { titulo: "Llavero Alf", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Alf.png", material: "Acrilico Premium", tejido: "Acrilico 3mm", tallas: ["Unica"], estampado: "Full Color", corte: "Laser" },
    { titulo: "Llavero Gorillaz", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Gorilaz.png", material: "Acrilico", tejido: "Acrilico 3mm", tallas: ["Unica"], estampado: "Full Color", corte: "Laser" },
    { titulo: "Llavero Ramones", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Ramones.png", material: "Acrilico", tejido: "Acrilico 3mm", tallas: ["Unica"], estampado: "Full Color", corte: "Laser" },
    { titulo: "Llavero Simpson", precio: "$6.990 CLP", imagen: "/llaveros/Llaveros%20Simpson.png", material: "Acrilico", tejido: "Acrilico 3mm", tallas: ["Unica"], estampado: "Full Color", corte: "Laser" }
  ],
  mousepad: [
    { titulo: "Mouse Pad Gamer Batman vs Superman", precio: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Batman%20vs%20Superman.png", material: "Microfibra Antideslizante", tejido: "Speed", tallas: ["XL Gamer"], estampado: "Sublimacion HD", corte: "Bordes Cosidos" },
    { titulo: "Mouse Pad Gamer Breaking Bad", precio: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Breaking%20Bad.png", material: "Microfibra", tejido: "Speed", tallas: ["XL"], estampado: "Sublimacion", corte: "Bordes Cosidos" },
    { titulo: "Mouse Pad Gamer Peaky Blinders", precio: "$27.990 CLP", imagen: "/mousepad/Mouse%20Pad%20Gamer%20Peaky%20Blindres.png", material: "Microfibra", tejido: "Speed", tallas: ["XL"], estampado: "Sublimacion", corte: "Bordes Cosidos" }
  ]
};

const CategoryCard = ({ img, title, onClick, isActive }) => (
  <div onClick={onClick} style={{ cursor: 'pointer', border: isActive ? '2.5px solid #ff007f' : '1px solid #e8e0d6', borderRadius: '16px', overflow: 'hidden', background: '#fff', position: 'relative', height: '200px', boxShadow: isActive ? '0 8px 24px rgba(255,0,127,0.15)' : '0 6px 20px rgba(0,0,0,0.06)', transition: 'all 0.25s ease', transform: isActive ? 'translateY(-2px)' : 'none' }}>
    <div style={{ height: '135px', background: '#faf7f2', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}><img src={img} alt={title} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} /></div>
    <div style={{ position: 'absolute', bottom: '0.7rem', left: '0.7rem', right: '0.7rem', backgroundColor: isActive ? '#ff007f' : '#111', color: '#fff', padding: '0.6rem', textAlign: 'center', textTransform: 'uppercase', fontWeight: '700', fontSize: '0.82rem', borderRadius: '8px', letterSpacing: '0.5px' }}>{title}</div>
  </div>
);

const ProductCard = ({ img, title, price, onComprar, onAbrirDetalle }) => (
  <div className="product-card">
    <div className="product-image-container" onClick={onAbrirDetalle} style={{ cursor: 'pointer' }}><img src={img} alt={title} onError={(e)=>{ e.target.onerror=null; e.target.src='/hombre/Polera%20Oversize%20300%20Blanca.png'; }} /></div>
    <div className="product-info">
      <h4 className="product-title" onClick={onAbrirDetalle} style={{ cursor: 'pointer' }}>{title}</h4>
      <p className="product-price">{price}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button onClick={onAbrirDetalle} style={{ flex: 1, backgroundColor: '#111', color: '#fff', border: 'none', padding: '0.6rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem', cursor: 'pointer' }}>Ver Detalle</button>
        <button onClick={onComprar} className="buy-button" style={{ flex: 1 }}>Comprar</button>
      </div>
    </div>
  </div>
);

function App() {
  const [mensajeExito, setMensajeExito] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarritoModal, setMostrarCarritoModal] = useState(false);
  const [mostrarModalTallas, setMostrarModalTallas] = useState(false);
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [mostrarCheckout, setMostrarCheckout] = useState(false);

  useEffect(function() {
    var params = new URLSearchParams(window.location.search);
    var status = params.get("status") || params.get("collection_status");
    if (status === "approved") {
      var ultimo = null;
      try { ultimo = JSON.parse(localStorage.getItem("ultimo_pedido_paradise") || "null"); } catch(e) {}
      if (ultimo) {
        setMensajeExito("Pago aprobado! Enviando a produccion Tee.cl...");
        ultimo.items.forEach(function(item, idx) {
          var body = { referencia: "PS-" + Date.now() + "-" + idx, producto: { idSuperficie: item.tee.idSuperficie, idColor: item.tee.idColor, idTalla: item.tee.idTalla, nombre: item.titulo, talla: item.tallaEscogida, imagenDTF: "https://www.paradiseshop.cl" + item.imagen, cantidad: 1 }, cliente: ultimo.cliente, envio: ultimo.envio };
          fetch("/api/tee_create_order", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body) }).then(function(r){ return r.json(); }).then(function(data){ if (idx === ultimo.items.length -1) { setMensajeExito("Listo! Orden " + (data.idApiOrden || "") + " creada en Tee.cl"); localStorage.removeItem("ultimo_pedido_paradise"); } });
        });
        window.history.replaceState({}, "", "/");
      }
    }
  }, []);

  const catalogoRef = useRef(null);

  const filtrarPorCategoria = (key) => {
    setCategoriaSeleccionada(categoriaSeleccionada === key ? null : key);
    setBusqueda('');
    setMostrarCheckout(false);
    if (catalogoRef.current) catalogoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const irACatalogo = (e) => {
    if(e) e.preventDefault();
    setCategoriaSeleccionada(null);
    setBusqueda('');
    setMostrarCheckout(false);
    if (catalogoRef.current) catalogoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    if (e.target.value.trim().length > 0 && catalogoRef.current) catalogoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const agregarAlCarrito = (prod, talla) => {
    const precioNum = parseInt(prod.precio.replace(/[^0-9]/g,'')) || 26990;
    setCarrito([...carrito, { ...prod, tallaEscogida: talla || (prod.tallas ? prod.tallas[0] : ''), precioNum }]);
    setProductoDetalle(null);
    setMostrarCarritoModal(true);
  };

  const eliminarDelCarrito = (idx) => setCarrito(carrito.filter((_, i) => i !== idx));
  const calcularTotal = () => carrito.reduce((acc, item) => acc + (item.precioNum || 0), 0).toLocaleString('es-CL');

  const titulosSeccion = { hombre: "Hombre / Unisex - 33 productos", mujer: "Mujer - 24 productos", gorras: "Gorras / Jockeys - 21 productos", totebag: "Bolsos de Mano / ToteBag - 2 productos", cuadros: "Cuadros Decorativos - 3 productos", llaveros: "Llaveros - 4 productos", mousepad: "Alfombrilla de Raton / Mouse Pad - 3 productos" };
  let categoriasAMostrar = categoriaSeleccionada ? [categoriaSeleccionada] : Object.keys(baseDeDatosProductos);
  const hayBusqueda = busqueda.trim().length > 0;

  if (mostrarCheckout) {
    return (
      <div style={{ backgroundColor: '#f3ece2', minHeight: '100vh', paddingBottom: '2rem' }}>
        <div style={{ backgroundColor: '#111', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: '900', fontStyle: 'italic' }}>PARADISE <span style={{ color: '#ff007f' }}>SHOP</span>.CL</div>
          <button onClick={() => setMostrarCheckout(false)} style={{ background: '#ff007f', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>← Volver al catalogo</button>
        </div>
        <CheckoutParadise carrito={carrito} totalCarrito={carrito.reduce((acc, item) => acc + (item.precioNum || 0), 0)} onVolver={() => setMostrarCheckout(false)} />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f3ece2', color: '#1a1a1a', minHeight: '100vh', paddingBottom: '4rem' }}>
      
/* --- RESPONSIVE MOBILE FIX --- */
<style>{`
  @media (max-width: 900px) {
    header { flex-direction: column !important; padding: 0.8rem 1rem !important; gap: 0.8rem !important; align-items: stretch !important; }
    header > div:first-child { justify-content: space-between !important; }
    header nav { gap: 0.8rem !important; font-size: 0.75rem !important; overflow-x: auto; white-space: nowrap; padding-bottom: 0.3rem; }
    header > div:last-child { width: 100% !important; }
    header > div:last-child > div:first-child { width: 100% !important; max-width: 100% !important; }
    .product-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.8rem !important; }
    main { padding: 1.5rem 1rem !important; }
    #categorias { padding: 0 1rem !important; margin: 1.5rem auto 1rem !important; }
    #categorias .product-grid { display: flex !important; overflow-x: auto !important; gap: 0.8rem !important; padding-bottom: 0.5rem; scroll-snap-type: x mandatory; }
    #categorias .product-grid > div { min-width: 140px !important; scroll-snap-align: start; }
    footer > div { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
    footer { padding: 2rem 1.2rem 1.2rem !important; }
  }
  @media (max-width: 600px) {
    .product-grid { grid-template-columns: 1fr !important; }
    header { padding: 0.7rem 0.8rem !important; }
    header span { font-size: 1.6rem !important; }
    .carro-modal { max-width: 100vw !important; width: 100vw !important; }
    .checkout-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
    .detalle-modal > div { padding: 1rem !important; margin: 0.5rem !important; max-height: 95vh !important; }
  }
`}</style>

      {mensajeExito && (<div style={{ backgroundColor: "#00c851", color: "#fff", padding: "1rem", textAlign: "center", fontWeight: "bold", position: "fixed", top: 0, left: 0, right: 0, zIndex: 2000 }}>{mensajeExito}</div>)}
      <div style={{ backgroundColor: '#ff007f', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center', padding: '0.4rem 1rem', textTransform: 'uppercase' }}>⚡ Envios Blue Express • DTF HD ⚡</div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 2.5rem', borderBottom: '1px solid #e0d6c8', backgroundColor: '#f3ece2', position: 'sticky', top: 0, zIndex: 100, gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flex: 1 }}>
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: '0.4rem', lineHeight: 1 }} onClick={() => { setCategoriaSeleccionada(null); setBusqueda(''); window.scrollTo({top:0, behavior:'smooth'}); }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '900', fontStyle: 'italic', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em', color: '#111' }}>PARADISE</span>
            <span style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ff007f', letterSpacing: '-0.02em' }}>SHOP.CL</span>
          </div>
          <nav style={{ display: 'flex', gap: '1.8rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', alignItems: 'center', letterSpacing: '0.5px' }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); setCategoriaSeleccionada(null); setBusqueda(''); window.scrollTo({top:0, behavior:'smooth'});}} style={{ color: '#111', textDecoration: 'none', cursor: 'pointer', fontWeight: '700' }}>Inicio</a>
            <a href="#categorias" style={{ color: '#333', textDecoration: 'none' }}>Categorias</a>
            <a href="#catalogo" onClick={irACatalogo} style={{ color: '#333', textDecoration: 'none', cursor: 'pointer' }}>Catalogo</a>
            <button onClick={() => setMostrarModalTallas(true)} style={{ background: '#111', border: 'none', color: '#fff', padding: '0.45rem 0.9rem', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>📏 Tallas</button>
          </nav>
        </div>
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', border: '1.5px solid #111', borderRadius: '28px', padding: '0.5rem 1rem', width: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '1.1rem', marginRight: '0.6rem' }}>🔍</span>
            <input type="text" placeholder="Buscar producto..." value={busqueda} onChange={manejarBusqueda} style={{ border: 'none', outline: 'none', fontSize: '0.9rem', flex: 1, backgroundColor: 'transparent' }} />
            <button title="Buscar por imagen" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', marginLeft: '0.5rem' }}>📷</button>
          </div>
          <button onClick={() => setMostrarCarritoModal(!mostrarCarritoModal)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', position: 'relative' }}>
            <span style={{ fontSize: '1.9rem' }}>🛒</span>
            <span style={{ position: 'absolute', top: '-6px', right: '-8px', backgroundColor: '#ff007f', color: '#fff', padding: '2px 7px', borderRadius: '50%', fontSize: '0.75rem', fontWeight: 'bold', minWidth: '18px', textAlign: 'center' }}>{carrito.length}</span>
          </button>
        </div>
      </header>

      {mostrarCarritoModal && (
        <div className="carro-modal" style={{ position: 'fixed', top: 0, right: 0, width: '100%', maxWidth: '400px', height: '100%', backgroundColor: '#fff', boxShadow: '-5px 0 25px rgba(0,0,0,0.15)', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0d6c8', paddingBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>Tu Carro</h3>
            <button onClick={() => setMostrarCarritoModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 0' }}>
            {carrito.length === 0 ? (<div style={{ textAlign: 'center', color: '#666', marginTop: '4rem' }}><p>Tu carro esta vacio</p></div>) : (carrito.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #f0eae1', paddingBottom: '1rem' }}>
                <img src={item.imagen} alt={item.nombreComercial || item.titulo} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flex: 1 }}><h4 style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>{item.nombreComercial || item.titulo}</h4><p style={{ fontSize: '0.85rem', color: '#ff007f', fontWeight: 'bold' }}>{item.precio}</p></div>
                <button onClick={() => eliminarDelCarrito(index)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}>🗑</button>
              </div>
            )))}
          </div>
          {carrito.length > 0 && (
            <div style={{ borderTop: '1px solid #e0d6c8', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold' }}><span>Total:</span><span style={{ color: '#ff007f' }}>${calcularTotal()} CLP</span></div>
              <button onClick={() => { setMostrarCarritoModal(false); setMostrarCheckout(true); window.scrollTo({top:0, behavior:'smooth'}); }} style={{ width: '100%', backgroundColor: '#ff007f', color: '#fff', border: 'none', padding: '1rem', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer' }}>Ir a Entrega y Datos →</button>
            </div>
          )}
        </div>
      )}

      {mostrarModalTallas && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1300, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: '#fff', maxWidth: '850px', width: '100%', maxHeight: '85vh', borderRadius: '8px', overflowY: 'auto', position: 'relative', padding: '2.5rem 2rem' }}>
            <button onClick={() => setMostrarModalTallas(false)} style={{ position: 'absolute', top: '1rem', right: '1.2rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', fontWeight: 'bold' }}>&times;</button>
            <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #e0d6c8', paddingBottom: '1rem' }}>
              <span style={{ backgroundColor: '#ff007f', color: '#fff', padding: '0.2rem 0.8rem', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '2px' }}>Confeccion Oficial Tee.cl</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', margin: '0.8rem 0 0.4rem 0', fontStyle: 'italic' }}>Guia de Tallas</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ color: '#ff007f', fontWeight: '800' }}>Polo Cuello Redondo</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li><strong>S:</strong> 46 cm x 68 cm</li><li><strong>M:</strong> 51 x 73</li><li><strong>L:</strong> 56 x 75</li><li><strong>XL:</strong> 61 x 76</li><li><strong>2XL:</strong> 66 x 79</li><li><strong>3XL:</strong> 71 x 83</li><li><strong>4XL:</strong> 75 x 86</li><li><strong>5XL:</strong> 80 x 89</li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ color: '#ff007f', fontWeight: '800' }}>Premium</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li><strong>S:</strong> 45 x 69</li><li><strong>M:</strong> 49 x 73</li><li><strong>L:</strong> 54 x 76</li><li><strong>XL:</strong> 59 x 77</li><li><strong>2XL:</strong> 64 x 80</li><li><strong>3XL:</strong> 71 x 83</li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ color: '#ff007f', fontWeight: '800' }}>Oversize Hombre</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li><strong>S:</strong> 59 x 71.5</li><li><strong>M:</strong> 64 x 74</li><li><strong>L:</strong> 69 x 76.5</li><li><strong>XL:</strong> 74 x 79</li><li><strong>2XL:</strong> 79 x 81.5</li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#f9f6f0', padding: '1.2rem', borderRadius: '6px', border: '1px solid #e0d6c8' }}>
                <h4 style={{ color: '#ff007f', fontWeight: '800' }}>Mujer</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li><strong>XS:</strong> 38 x 59</li><li><strong>S:</strong> 43 x 64.5</li><li><strong>M:</strong> 48.5 x 66</li><li><strong>L:</strong> 53.5 x 69</li><li><strong>XL:</strong> 58.5 x 71.5</li><li><strong>2XL:</strong> 60.5 x 73.5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="categorias" style={{ maxWidth: '1280px', margin: '3rem auto 2rem auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', margin: '0 0 0.3rem 0', letterSpacing: '-0.02em', color: '#111' }}>Colecciones Paradise</h2>
          <p style={{ fontSize: '1.05rem', color: '#6b6b6b', margin: 0, fontWeight: '400' }}>7 mundos · DTF HD · Blue Express · Hecho en Chile</p>
        </div>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
          <CategoryCard img={imgHombre} title="Hombre / Unisex" onClick={() => filtrarPorCategoria('hombre')} isActive={categoriaSeleccionada === 'hombre'} />
          <CategoryCard img={imgMujer} title="Mujer" onClick={() => filtrarPorCategoria('mujer')} isActive={categoriaSeleccionada === 'mujer'} />
          <CategoryCard img={imgGorras} title="Gorras / Jockeys" onClick={() => filtrarPorCategoria('gorras')} isActive={categoriaSeleccionada === 'gorras'} />
          <CategoryCard img={imgTotebag} title="Bolsos de Mano" onClick={() => filtrarPorCategoria('totebag')} isActive={categoriaSeleccionada === 'totebag'} />
          <CategoryCard img={imgCuadros} title="Cuadros Decorativos" onClick={() => filtrarPorCategoria('cuadros')} isActive={categoriaSeleccionada === 'cuadros'} />
          <CategoryCard img={imgLlaveros} title="Llaveros" onClick={() => filtrarPorCategoria('llaveros')} isActive={categoriaSeleccionada === 'llaveros'} />
          <CategoryCard img={imgMousepad} title="Alfombrilla de Raton" onClick={() => filtrarPorCategoria('mousepad')} isActive={categoriaSeleccionada === 'mousepad'} />
        </div>
      </section>

      <main ref={catalogoRef} id="catalogo" style={{ maxWidth: '1200px', margin: '2rem auto 0 auto', padding: '3rem 2rem' }}>
        {hayBusqueda ? (
          (() => {
            let resultadosTotales = [];
            Object.keys(baseDeDatosProductos).forEach(cat => {
              const filtrados = baseDeDatosProductos[cat].filter(prod => prod.titulo.toLowerCase().includes(busqueda.toLowerCase()));
              resultadosTotales = [...resultadosTotales, ...filtrados];
            });
            if (resultadosTotales.length === 0) return (<div style={{ textAlign: 'center', padding: '4rem 0' }}>No hay resultados para "{busqueda}"</div>);
            return (<div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>{resultadosTotales.map((prod, index) => (<ProductCard key={index} img={prod.imagen} title={prod.nombreComercial || prod.titulo} price={prod.precio} onComprar={() => agregarAlCarrito(prod)} onAbrirDetalle={() => { setProductoDetalle(prod); setTallaSeleccionada(prod.tallas ? prod.tallas[0] : ''); }} />))}</div>);
          })()
        ) : (
          categoriasAMostrar.map((catKey) => (
            <div key={catKey} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #d5cbc0', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>{titulosSeccion[catKey]}</h3>
                <span style={{ fontSize: '0.85rem', color: '#ff007f', fontWeight: 'bold' }}>{baseDeDatosProductos[catKey].length} productos</span>
              </div>
              <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>{baseDeDatosProductos[catKey].map((prod, index) => (<ProductCard key={index} img={prod.imagen} title={prod.nombreComercial || prod.titulo} price={prod.precio} onComprar={() => agregarAlCarrito(prod)} onAbrirDetalle={() => { setProductoDetalle(prod); setTallaSeleccionada(prod.tallas ? prod.tallas[0] : ''); }} />))}</div>
            </div>
          ))
        )}
      </main>

      {productoDetalle && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1200, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem', boxSizing: 'border-box' }}>
          <div style={{ backgroundColor: '#fff', maxWidth: '900px', width: '100%', maxHeight: '90vh', borderRadius: '8px', overflowY: 'auto', position: 'relative', display: 'flex', flexWrap: 'wrap', padding: '2rem', gap: '2rem' }}>
            <button onClick={() => setProductoDetalle(null)} style={{ position: 'absolute', top: '1rem', right: '1.2rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', fontWeight: 'bold' }}>&times;</button>
            <div style={{ flex: '1 1 340px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f6f0', borderRadius: '6px', padding: '1rem' }}><img src={productoDetalle.imagen} alt={productoDetalle.titulo} style={{ maxWidth: '100%', maxHeight: '420px', objectFit: 'contain' }} onError={(e)=>{ e.target.onerror=null; e.target.src='/hombre/Polera%20Oversize%20300%20Blanca.png'; }} /></div>
            <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ backgroundColor: '#ff007f', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '2px', textTransform: 'uppercase', width: 'fit-content', marginBottom: '0.8rem' }}>Confeccion Tee.cl</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>{productoDetalle.nombreComercial || productoDetalle.titulo}</h2>
              <p style={{ fontSize: '1.5rem', color: '#ff007f', fontWeight: '900', margin: '0 0 1.2rem 0' }}>{productoDetalle.precio}</p>
              {productoDetalle.tallas && (
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Talla:</label>
                    <button onClick={() => setMostrarModalTallas(true)} style={{ background: 'none', border: 'none', color: '#ff007f', fontSize: '0.8rem', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>📏 Ver Tabla</button>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {productoDetalle.tallas.map((t) => (<button key={t} onClick={() => setTallaSeleccionada(t)} style={{ padding: '0.45rem 0.9rem', border: tallaSeleccionada === t ? '2px solid #ff007f' : '1px solid #ccc', backgroundColor: tallaSeleccionada === t ? '#ff007f' : '#fff', color: tallaSeleccionada === t ? '#fff' : '#333', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>{t}</button>))}
                  </div>
                </div>
              )}
              <div style={{ borderTop: '1px solid #e0d6c8', borderBottom: '1px solid #e0d6c8', padding: '1rem', marginBottom: '1.2rem', backgroundColor: '#faf7f2', borderRadius: '6px' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', margin: '0 0 0.6rem 0' }}>Ficha Tecnica:</h4>
                <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: '#444', lineHeight: '1.9' }}>
                  <li><strong>Material:</strong> {productoDetalle.material}</li>
                  <li><strong>Tejido:</strong> {productoDetalle.tejido}</li>
                  <li><strong>Estampado:</strong> {productoDetalle.estampado}</li>
                  <li><strong>Corte:</strong> {productoDetalle.corte}</li>
                  <li><strong>Despacho:</strong> Blue Express $4.000 domicilio / $2.990 Puntos Blue</li>
                </ul>
              </div>
              <button onClick={() => { agregarAlCarrito(productoDetalle, tallaSeleccionada); setProductoDetalle(null); }} style={{ width: '100%', backgroundColor: '#ff007f', color: '#fff', border: 'none', padding: '1rem', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer' }}>Agregar al Carro</button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ backgroundColor: '#111', color: '#fff', marginTop: '5rem', padding: '3.5rem 2.5rem 2rem 2.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '0.8rem' }}>PARADISE <span style={{ color: '#ff007f' }}>SHOP.CL</span></div>
            <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.6', margin: 0 }}>DTF HD · Blue Express · Hecho en Chile.<br/>7 mundos · Streetwear & Arte.</p>
            <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.8rem' }}>
              <a href="https://instagram.com/paradiseshopchile" target="_blank" style={{ background: '#fff', color: '#111', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>IG</a>
              <a href="https://facebook.com/paradiseshopchile" target="_blank" style={{ background: '#ff007f', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>FB</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.5px' }}>Colecciones</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', lineHeight: '2', color: '#ccc' }}>
              <li><a href="#categorias" style={{ color: '#ccc', textDecoration: 'none' }}>Hombre / Unisex</a></li>
              <li><a href="#categorias" style={{ color: '#ccc', textDecoration: 'none' }}>Mujer</a></li>
              <li><a href="#categorias" style={{ color: '#ccc', textDecoration: 'none' }}>Gorras / Jockeys</a></li>
              <li><a href="#categorias" style={{ color: '#ccc', textDecoration: 'none' }}>ToteBag · Cuadros · Llaveros · Mouse Pad</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.5px' }}>Ayuda</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', lineHeight: '2', color: '#ccc' }}>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Tabla de Tallas</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Envíos Blue Express</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Políticas de Devolución</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Cómo comprar</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.5px' }}>Contacto</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', lineHeight: '2', color: '#ccc' }}>
              <li>📧 contacto@radioparadise.cl</li>
              <li>📦 Envíos: Blue Express</li>
              <li>💳 Pago: Mercado Pago</li>
              <li>🇨🇱 Hecho en Chile</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1280px', margin: '2.5rem auto 0 auto', borderTop: '1px solid #222', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.8rem', color: '#777' }}>
          <span>© 2026 Paradise Shop.cl · Todos los derechos reservados · DTF HD</span>
          <span style={{ display: 'flex', gap: '1rem' }}>
            <span>🚚 Blue Express $4.000 domicilio / $2.990 Puntos Blue</span>
            <span>•</span>
            <span>Instagram: @paradiseshopchile</span>
          </span>
        </div>
        <div style={{ maxWidth: '1280px', margin: '2rem auto 0 auto', backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '1.5rem', border: '1px solid #222' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', margin: '0 0 0.8rem 0', color: '#ff007f' }}>Políticas de Devolución y Cambios</h4>
          <p style={{ fontSize: '0.8rem', color: '#aaa', lineHeight: '1.7', margin: 0 }}>
            <strong style={{ color: '#fff' }}>Cambios:</strong> Tienes 10 días corridos desde la recepción para cambios de talla por otra talla del mismo diseño. El producto debe estar sin uso, sin lavar y con etiqueta. Costo de reenvío por Blue Express a cargo del cliente ($4.000).<br/>
            <strong style={{ color: '#fff' }}>Devoluciones:</strong> No realizamos devoluciones por ser productos personalizados confeccionados bajo demanda (DTF HD) salvo falla de fábrica comprobada. Si tu producto llega con falla, escríbenos a contacto@radioparadise.cl con fotos dentro de 48hrs.<br/>
            <strong style={{ color: '#fff' }}>Demoras Blue Express:</strong> Los tiempos de entrega son responsabilidad de Blue Express. Paradise Shop despacha en 24-72hrs hábiles desde el pago confirmado.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
