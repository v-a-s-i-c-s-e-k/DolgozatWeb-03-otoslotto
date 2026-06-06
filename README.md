# 3. feladat - Ötöslottó

## Feladat leírása

A feladat célja egy paraméter nélküli `otoslotto` függvény készítése.

A függvény 5 darab véletlenszámot generál 1 és 90 között, majd ezeket egy tömbben adja vissza növekvő sorrendben. A számok között nem lehet ismétlődés.

## Elvárt működés

Az `otoslotto` függvény visszatérési értéke egy 5 elemű tömb.

A tömbben szereplő számokra igaz, hogy:

- minden szám 1 és 90 közé esik,
- pontosan 5 darab szám van,
- nincs ismétlődés,
- a számok növekvő sorrendben vannak.

Példa lehetséges eredményre:

`[3, 18, 34, 56, 89]`

## Fájlok

- `index.html` - az oldal HTML szerkezete
- `style.css` - az oldal megjelenésének beállításai
- `script.js` - a JavaScript megoldás
- `README.md` - a feladat dokumentációja

## Tesztelés

A megoldás az `index.html` fájl böngészőben történő megnyitásával tesztelhető.

Teszteléskor ellenőrizni kell, hogy:

- a függvény pontosan 5 számot ad vissza,
- minden szám 1 és 90 közötti,
- nincs ismétlődő szám,
- a számok növekvő sorrendben vannak.
