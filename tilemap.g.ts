// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`2000200002020202020202020101010101010101010101010101010101010101010101010101010101010102020202020202020202020202020202020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020101010102020202020202020202020202020201020101010102010101010102010101010101020101010101010101010101020102010101010201010101010202010101010102010101010101010101010102010201010101020101010101010202020101010202010101010101010101010201020101010102010101010101010102010101020202010101010101010101020102010101010201010101010101010201010102010102010101010101010102010201010101020101010101010101020101010201010201010101010101010201020101010102010101010101010102010101020101020101010101020202020102010101020101010101010101010201010102010102010101010101010101020201010102010101010101010101020101010201010101010101010101010101020101010201010101010101010102010101020101010101010101010101010102010101020101010101010101010201010102010101010101010101010101010201010102010101010101010101020101010201010101010101010101010101020101010201010101010101010102010101020101010101010101010101010102010101020101010101010101010201010102010101010101010101010101010201010102010101010101010101020101010201010101010101010101010101020201010201010101010101010102010101020101010101010101010101010102020101020101010101010101010201010102010101010101010101010101010202010102010101010101010101020101010202010101010101010101010101020201010201010101010101010102010101010201010101010101010101010102010101020101010101010101010201010101020101010101010101010101010201010102010101010101010101020101010201010101010101010101010101020101010202020202020202010102010101020101010101010101010101010102010101010101010101010202020201010102020202020202020202020202030201010101010101010101010101020101010101010101010101010101010103020202020202020202020202020202020202020202020202020202020202020301010101010101010101010101010101010101010101010101010101010101030101010101010101010101010101010101010101010101010101010101010103`, img`
22222222..............222.......
.......22222222222222222222.....
................................
................................
2.2222222222....222222222222222.
...........2......2...........2.
...........22.....2...........2.
............222...22..........2.
..............2...222.........2.
..............2...2..2........2.
..............2...2..2........2.
..............2...2..2.....2222.
..............2..22..2.....2...2
..............2..22.............
..............2...2.............
..............2...2.............
..............2...2.............
..............2...2.............
..............2...2.............
..............2...2.............
..............2...2.............
..............2...2.............
..............2...22............
..............2...22............
..............2....2............
..............2...2.............
..............2...2.............
..............2...2222222222222.
..............2.................
..............22222222222222222.
................................
................................
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
            case "層級2":
            case "層級2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級3":
            case "層級3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級5":
            case "層級5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級6":
            case "層級6":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級7":
            case "層級7":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級9":
            case "層級9":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級10":
            case "層級10":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級8":
            case "層級8":return tiles.createTilemap(hex`2300230003030303030303030303030303030303030303030303030303030303030303030303030302020202020202020202020202020202020202020202020202020202020202020203030202020303030302020202020202020202020202020202020202020202020202020303020202020202030202020202020202020202020202020202020202020202020202030302020202020203020202020202020202020202020202020202020202020202020203030303030302020302020202020202020202020202020202020202020202020202020303020202030202030202020202020303030202020202020202020202020202020202030302020203020203020202020202030203030302020202020202020202020202020203030202020302020302020202020203020202030303020202020202020202020202020303020202030202030202020202020302020202020303030303020202020202020202030302020203020203020202020202030202020202020202020303020202020202020203030202020302020302020202020203020202020202020202020303020202020202020303020202030202030202020202020302020202020202020202020303020202020202030303030303020203030303030303030202020203030302020203030303030303030303030202020202020202020202020202020202020202030303030302020202020202030303020202020202020202020202020202010101020202020202020202020202020202030302020202020202020202020202020201010102020202020202020202020202020203030202020202020202020202020202020101010202020202020202020202020202020303020202020202020202020202020202020202020202020202020202020202020202030302020303030303030303030303030303030303030303030303030303030202020303030202030202020202020202020202020202020202020202020202020203050505030303020203020202020202020202020202020202020202020202020202020305050503030302020302020202020202020202020202020202020202020202020202030505050303030202030202020202020202020202020202020202020202020202020203020202030303020203020202020202020202020202020202020202020202020202020202020202030302020302020202020202020202020202020202020202020202020202020202020203030202030303030202020202020202020202020202020202020202020202020202020303020203030203020202030303030303030303030303030302020202020202020202030302020202020202020202020202020202020202020202030303030303030303030303030202020202020202020202020202020202020202020202020202020202020302020303020202020202020202020202020202020202020202020202020202020202030202030302020202020202020202020202020202020202020202020202020202020203020203030202020202020202020202020202020202020202020202020202020202020204040303020202020202020202020202020202020202020202020202020202020202020404030303030303030303030303030303030303030303030303030303030303030303030303`, img`
22222222222222222222222222222222222
2.................................2
2...2222..........................2
2......2..........................2
2......2..........................2
22222..2..........................2
2...2..2......222.................2
2...2..2......2.222...............2
2...2..2......2...222.............2
2...2..2......2.....22222.........2
2...2..2......2.........22........2
2...2..2......2..........22.......2
2...2..2......2...........22......2
22222..22222222....222...2222222222
2....................22222.......22
2.................................2
2.................................2
2.................................2
2.................................2
2..222222222222222222222222222....2
2..2.........................2....2
2..2.........................2....2
2..2.........................2....2
2..2.........................2....2
2..2..............................2
2..2..............................2
2..2222...........................2
2..22.2...22222222222222..........2
2......................222222222222
2..............................2..2
2..............................2..2
2..............................2..2
2.................................2
2.................................2
22222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
            case "層級4":
            case "層級4":return tiles.createTilemap(hex`2000200001010101010101010101010101010101010101010101010101010101010101010103030303030303030303030303030303030303030303030303030303030301010302030303030303030303030303030303030303030303030303030303030101030303030303030303030303030303030303030303030303030303030303010103030303030303030303030303030103030303030303030303030303030301010303030303030303030303030303010303030303030303030303030303030101030303030303030303030303030301010101010101010101010103030303010103030303030303030303030303030303030303030303030303010303030301010303030303030303030303030303030303030303030303030301030303030101030301010101010101010101010103030303030303030303010103030303010101010103030303030303030303010303030303030303030301030303030301010303010303030303030303030301030303030303030301010103030303030101030301030303030303030303030101010101010303010103030303030303010103030301030303030303030303030303030301030303010103030303030301010303030103030303030303030303030303030103030303010101010101010101030303010303030303030303030303030303010303030303030303030303010103030301010303030303030303030303030301030303030303030303030301010303030301030303030303030303030303030103030303030303030303030101030303030101030303030303030303030303010303030303030303030303010103030303030101030303030303030303030301030303030303030303030301010303030303030101030303030303030303030103030303030303030303030101030303030303030103030303030303030303010101010101010103030303010103030303030303010303030303030303030303030303030303010303030301010303030303030301010303030303030303030303030303030301030303030101030303030303030301030303030303030303030303030303030103030303010103030303030303030103030303030303030303030303030303010303030301010303030303030303010103030303030303030303030303030301030303030101030303030303030303010101010101010303030101030301010103030303010103030303030303030303030305050501010101010101010103030303030301010303030303030303030303030505050303030303030304030303030303030101030303030303030303030303050505030303030303030403030303030303010101010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222222
2..............................2
2..............................2
2..............................2
2..............2...............2
2..............2...............2
2..............222222222222....2
2.........................2....2
2.........................2....2
2..222222222222..........22....2
2..222222222222..........2.....2
2..222222222222........222.....2
2..22222222222222222..22.......2
2...2222222222222222...22......2
2...2222222222222222....22222222
2...2222222222222222...........2
2...2222222222222222...........2
2....222222222222222...........2
2....222222222222222...........2
2.....22222222222222...........2
2......2222222222222...........2
2.......2222222222222222222....2
2.......2222222222222222222....2
2.......2222222222222222222....2
2........222222222222222222....2
2........222222222222222222....2
2........222222222222222222....2
2.........22222222222222222....2
2...............222222222......2
2..............................2
2..............................2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
            case "層級11":
            case "層級11":return tiles.createTilemap(hex`4000400005050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050202020202020202020202020202020202020202020202020202020202020202020202020204020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202040202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202020202020202020402020202020202020202020202020202020202020202020205050505050505050505050505050505050202020205050505050505050505050505050505050505050502020202020202020202020202020202020202020202050502020202020202020202020202020502020202050202020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020205020202020502020202020202020202020202020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202050202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020502020202050202020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020205020202020502020202020202020202020202020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202050202020205020202020202020202020202020202020202020202020202020505050202020202020202020202020202050502020202020202020202020202020502020202050202020202020202020505050505050505050505050505050505020205050505050505050505020202020505020202020202020202020202020205020202020505050505050505050502020202020202020202020202020202020202020202020202020202050202020205050202020202020202020202020202020101010102020202020202020202020202020202020202020202020202020202020202020202020202020502020202050502020202020202020202020202020201010101020202020202020202020202020202020202020202020202020202020202020202020202020205020202020505020202020202020202020202020202010101010202020202020202020202020202020202020202020202020202020202020202020202020202050202020205050202020202020202020202020202020101010102020202020202020202020202020202020202020202020202020202020202020202050505050502020202050505050505050505050505050505050502020202050505050505050505050505050505050505050505050505050505050505050505050502020205050202020505020202020202020202020202020202050202020502020202020202020202020202020202020202020202020202020202020202020202020202020505050205050202020202020202020202020202020502020205020202020202020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020205020202050202020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020502020505020202020202020202020202020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020205020202050202020202020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202050202020502020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020502020205050505050505050505050505050505050505050505050505050202020202020202020202020202020205050202020202020202020202020202020205020202050202020202020202020202020202020202020202020202020502020202020202020202020202020202050502020202020202020202020202020202050202020202050202020202020202020202020202020202020202020205020202020202020202020202020202020505020202020202020202020202020202020502020202050502020202020202020202020202020202020202020202050202020202020202020202020202020205050202020202020202020202020202020205020202020505020202020202020202020202020202020202020202020502020202020202020202020202020202050502020202020202020202020202020202050202020202050202020202020202020202020202020202020202020205020202020202020202020202020202020505020202020202020202020202020202020502020202020505020202020202020202020202020202020202020202050202020202020202020202020202020205050202020202020202020202020202020505020202020202050505050505050505050505050502020202020202020502020202020202020202020202020202050502020202020202020202020202020205020202020202020202020202020202020202020202050505050502020205020202020202020202020202020202020505020202020202020202020202020202050202020202020202020202020202020202020202020202020205050505050502020202020202050505050505050505050202020202020202020202020202020502020202020202020202020202020202020202020202020202020202050505050505050505050502020302020205050502020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020505020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202020202030202020205050202020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020302020202050502020202020202020202020202020202050202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020505020202020202020202020202020202020502020202020202020202020202020202020202020202020202020202020202020202020202020202030202020205050202020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020303020202050502020202020202020202020202020202050202020202020202020202020202020202020202020202020202020202020202020202020202020202030202020505020202020202020202020202020202020502020202020202020202020202020202020202020202020202020202020202020202020202020202020302020205050202020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202050502020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202020202030202020505020202020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020302020205050202020202020202020202020202020202050202020202020202020202020202020202020202020202020202020202020202020202020202020203020202050502020202020202020202020202020202020502020202020202020202020202020202020202020202020202020202020202020202020202020202030202020505020202020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020302020205050202020202020202020202020202020202020502020202020202020202020202020202020202020202020202020202020202020202020202020203020202050502020202020202020202020202020202020205020202020202020202020202020505050505050505050505050505050505050505050505020202030202020505020202020202020202020202020202020202050202020202020205050505050502020202020202020202020202020202020202020202020505050502020205050202020202020202020202020202020202020505050505050505020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`
2222222222222222222222222222222222222222222222222222222222222222
2..............................................................2
2..............................................................2
2..............................................................2
2222222222222222....222222222222222222222......................2
2..............2....2..........................................2
2..............2....2..........................................2
2..............2....2..........................................2
2..............2....2..........................................2
2..............2....2..........................................2
2..............2....2.........................222..............2
2..............2....2.........22222222222222222..2222222222....2
2..............2....2222222222............................2....2
2.........................................................2....2
2.........................................................2....2
2.........................................................2....2
2.....................................................22222....2
2222222222222222....22222222222222222222222222222222222...22...2
2...............2...2......................................222.2
2...............2...2..........................................2
2...............2...2..........................................2
2................2..22.........................................2
2................2...2.........................................2
2................2...2.........................................2
2................2...22222222222222222222222222................2
2................2...2........................2................2
2................2.....2......................2................2
2................2....22......................2................2
2................2....22......................2................2
2................2.....2......................2................2
2................2.....22.....................2................2
2...............22......22222222222222........2................2
2...............2.....................22222...2................2
2...............2.........................222222.......222222222
2...............2............................22222222222......22
2...............2..............................................2
2...............22.............................................2
2................2.............................................2
2................2.............................................2
2................2.............................................2
2................2.............................................2
2................2.............................................2
2................2.............................................2
2................2.............................................2
2................22............................................2
2.................2............................................2
2.................2............................................2
2.................2............................................2
2.................2............................................2
2..................2...........................................2
2..................2.............22222222222222222222222.......2
2..................2.......222222.......................2222...2
2..................22222222....................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2..............................................................2
2222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖0":
            case "tile2":return tile2;
            case "我的貼圖1":
            case "tile3":return tile3;
            case "我的貼圖2":
            case "tile4":return tile4;
            case "我的貼圖3":
            case "tile5":return tile5;
            case "我的貼圖4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
