//   ___      ___ _______   ________ _________  ________  ________            ___  ________      
//  |\  \    /  /|\  ___ \ |\   ____\\___   ___\\   __  \|\   __  \          |\  \|\   ____\     
//  \ \  \  /  / | \   __/|\ \  \___\|___ \  \_\ \  \|\  \ \  \|\  \         \ \  \ \  \___|_    
//   \ \  \/  / / \ \  \_|/_\ \  \       \ \  \ \ \  \\\  \ \   _  _\      __ \ \  \ \_____  \   
//    \ \    / /   \ \  \_|\ \ \  \____   \ \  \ \ \  \\\  \ \  \\  \| ___|\  \\_\  \|____|\  \  
//     \ \__/ /     \ \_______\ \_______\  \ \__\ \ \_______\ \__\\ _\|\__\ \________\____\_\  \ 
//      \|__|/       \|_______|\|_______|   \|__|  \|_______|\|__|\|__\|__|\|________|\_________\
//                                                                                   \|_________|

/**
* @version      0.1.2
* @author       James Liu http://jamesliu.info @jamesliu96 <j@jamesliu.info>
* @copyright    2014 James Liu
* @license      MIT License
*
* @overview     Vector.js v0.1.2
* @repository   github.com/jamesliu96/vector.js
*/

"use strict";

var Vector = function(a, b, c) {
    this.a = Number(a) || 0;
    this.b = Number(b) || 0;
    this.c = Number(c) || 0;
    this.length = Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
    return;
};

Vector.prototype.toString = function() {
    return "(" + this.a.toString() + "," + this.b.toString() + "," + this.c.toString() + ")";
};

Vector.prototype.toArray = function() {
    return new Array(this.a, this.b, this.c);
};

Vector.prototype.dot = function(v) {
    if(Vector.prototype.isPrototypeOf(v))
        return this.a * v.a + this.b * v.b + this.c * v.c;
    return;
};

Vector.prototype.cross = function(v) {
    if(Vector.prototype.isPrototypeOf(v))
        return new Vector(this.b * v.c - this.c * v.b, this.c * v.a - this.a * v.c, this.a * v.b - this.b * v.a);
    return;
};

Vector.prototype.angle = function(v) {
    if(Vector.prototype.isPrototypeOf(v))
        return Math.acos(this.dot(v) / (this.length * v.length)) * 180 / Math.PI;
    return;
};
