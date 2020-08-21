// Add your code here
namespace SpriteKind {
    export const Zhr = SpriteKind.create()
    export const ZhrE = SpriteKind.create()
    export const Zhr直升机 = SpriteKind.create()
    export const Zhr电话 = SpriteKind.create()
    export const Zhr钥匙 = SpriteKind.create()
    export const Zhr铲子 = SpriteKind.create()
    export const Zhr传送门 = SpriteKind.create()
    export const Zhr蛇 = SpriteKind.create()
}


namespace sosroom{
    let Zhr直升机: Sprite = null
    let Zhr铲子: Sprite = null
    let Zhr_敌人: Sprite = null
    let zhrr钥 = 0
    let Zhr蛇: Sprite = null
    let Zhr钥: Sprite = null
    let Zhrr铲子 = 0
    let Zhr传送: Sprite = null
    let Zhr: Sprite = null
    function zhrr刺客 () {
        cubicbird.destroyAllSpriteOfKind(SpriteKind.ZhrE)
        lantern.stopLanternEffect()
        Zhr直升机 = sprites.create(img`
            . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . 
            . . . . . . . . . . f f f f . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . 8 8 8 . 
            . . 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 8 . 1 . 8 
            8 8 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 1 . 8 
            8 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 1 1 1 8 
            . 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 . . 1 . . 8 
            . . 8 8 8 8 8 8 8 8 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . 8 8 8 8 8 8 8 6 6 6 6 6 6 8 8 8 8 8 8 8 . . . . . . . . . 
            . . . . 8 8 8 8 8 8 6 6 6 6 f 6 8 8 8 8 8 8 . . . . . . . . . . 
            . . . . . . . . 8 8 6 6 6 6 6 6 8 8 8 . . . . . . . . . . . . . 
            . . . . . . . . 8 8 6 6 6 6 6 6 8 8 8 . . . . . . . . . . . . . 
            `, SpriteKind.Zhr直升机)
        tiles.placeOnRandomTile(Zhr直升机, myTiles.zhrtile1)
        Zhr.say("直升机来了想办法进去。", 1000)
        pause(1000)
        Zhr.say("拿铲子找钥匙。", 1000)
        Zhr铲子 = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . d d d d d d d d d d . . . 
            . . . d d d d d d d d d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . d d . . . . . . . 
            `, SpriteKind.Zhr铲子)
        tiles.placeOnRandomTile(Zhr铲子, sprites.castle.tileDarkGrass3)
    }

    function zhr刺客 () {
        Zhr_敌人 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f f e f b f 4 4 f b f e f f . 
            . f e f 4 d d d d d d 4 f e f . 
            f d f e f f f f f f f f e f f e 
            f b f f e f f f f f f e 4 f d d 
            f b f 4 f 2 f f f f 2 f 1 e d d 
            f c f . f 2 2 f f 2 2 f 4 4 e e 
            . f f . f 4 4 5 5 4 4 f . . . . 
            . . . . f f f f f f f f . . . . 
            `, SpriteKind.ZhrE)
        tiles.placeOnRandomTile(Zhr_敌人, sprites.castle.tileDarkGrass3)
        Zhr_敌人.setVelocity(50, 50)
        Zhr_敌人.setFlag(SpriteFlag.BounceOnWall, true)
    }
    

    export function init() {
        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.ZhrE, function (sprite, otherSprite) {
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.ZhrE)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr直升机)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr钥匙)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr铲子)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr传送门)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr蛇)
            lantern.stopLanternEffect()
            gamejam.roomFinished(false)
        })
        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.Zhr传送门, function (sprite, otherSprite) {
            tiles.placeOnRandomTile(Zhr, sprites.castle.tileDarkGrass2)
        })
        scene.onOverlapTile(SpriteKind.Zhr, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
            game.splash("你身上有多少个装备")
            if (game.askForNumber("") == 7) {
                tiles.setTileAt(tiles.getTileLocation(13, 3), sprites.castle.tileDarkGrass1)
                Zhr传送 = sprites.create(img`
                    f f f f f f f f f f f f f f f f
                    f f f f f f f f f f f f f f f f
                    f f f f f f f f c c c f f f f f
                    f 6 6 f f f c c c c f f f f f f
                    f 6 f f f f c f f f f f f f f f
                    f 6 6 f f f c f f 6 6 6 6 6 6 f
                    f f 6 6 6 f a a a f f f f f 6 6
                    c f f f 6 6 a a a c f f f f f f
                    c c f f f f a a a c c c f f f f
                    f c c c c c c f 6 f f c c f f f
                    f f f f f f f 6 f f f f c f f f
                    f f f f f f 6 6 f f f f c c f f
                    f f f f 6 6 f f f f f f f f f f
                    f f f 6 6 f f f f f f f f f f f
                    f f f 6 f f f f f f f f f f f f
                    f f f f f f f f f f f f f f f f
                `, SpriteKind.Zhr传送门)
                tiles.placeOnTile(Zhr传送, tiles.getTileLocation(15, 0))
            } else {
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.ZhrE)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr钥匙)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr直升机)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr铲子)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr传送门)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr蛇)
                lantern.stopLanternEffect()
                gamejam.roomFinished(false)
            }
        })
        controller.A.onEvent(ControllerButtonEvent.Released, function () {
            if (Zhr.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass3)) {
                if (Math.percentChance(30)) {
                    if (Zhrr铲子 == 1) {
                        tiles.setTileAt(tiles.getTileLocation(cubicbird.tileColumnOfSprite(Zhr), cubicbird.tileRowOfSprite(Zhr)), myTiles.zhrtile5)
                        Zhr钥 = sprites.create(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . 5 5 5 5 5 5 5 5 . . . . 
                            . . . . 5 . . . . . . 5 . . . . 
                            . . . . 5 . . . . . . 5 . . . . 
                            . . . . 5 . . . . . . 5 . . . . 
                            . . . . 5 . . . . . . 5 . . . . 
                            . . . . 5 5 5 5 5 5 5 5 . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 5 . . . . . . 
                            . . . . . . . 5 5 . . . . . . . 
                            . . . . . . . 5 5 5 . . . . . . 
                            `, SpriteKind.Zhr钥匙)
                        tiles.placeOnTile(Zhr钥, tiles.getTileLocation(cubicbird.tileColumnOfSprite(Zhr), cubicbird.tileRowOfSprite(Zhr) - 1))
                    } else {
                        tiles.setTileAt(tiles.getTileLocation(cubicbird.tileColumnOfSprite(Zhr), cubicbird.tileRowOfSprite(Zhr)), myTiles.zhrtile5)
                        Zhr蛇 = sprites.create(img`
                            . . . . c c c c c c . . . . . . 
                            . . . c 6 7 7 7 7 6 c . . . . . 
                            . . c 7 7 7 7 7 7 7 7 c . . . . 
                            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                            . . f 7 7 7 7 6 c 7 7 6 f c . . 
                            . . . f c c c c 7 7 6 f 7 7 c . 
                            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                            . . c c c c c c c c c f . . . . 
                            `, SpriteKind.Zhr蛇)
                        tiles.placeOnTile(Zhr蛇, tiles.getTileLocation(cubicbird.tileColumnOfSprite(Zhr), cubicbird.tileRowOfSprite(Zhr) - 1))
                        Zhr.say("不好，有蛇！！！")
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr)
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.ZhrE)
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr直升机)
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr钥匙)
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr铲子)
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr蛇)
                        cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr传送门)
                        lantern.stopLanternEffect()
                        gamejam.roomFinished(false)
                    }
                }
            }
        })
        scene.onOverlapTile(SpriteKind.Zhr, myTiles.zhrtile4, function (sprite, location) {
            if (zhrr钥 == 1) {
                tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010102060606010102020202010101010101020606060101010101010101010202010206060601010101010101010101010102050606010101010101010101010101020606060101010102020202020201010202040201010101020707070702010101010101010201010203070707020101010101010102010102070707070201010101020201020101020202020202010101010101010101010101010101010101010101010101010101010101010101010102010101010102010101010101010101010101010101010102020101010101020101010102020101010101010101010101010101010101010101010101010101010101`, img`
                    . . . . . . . . . . . . 2 . . . 
                    . . 2 2 2 2 . . . . . . 2 . . . 
                    . . . . . . . . . 2 2 . 2 . . . 
                    . . . . . . . . . . . . 2 . . . 
                    . . . . . . . . . . . . 2 . . . 
                    . . . . 2 2 2 2 2 2 . . 2 2 . 2 
                    . . . . 2 . . . . 2 . . . . . . 
                    . 2 . . 2 . . . . 2 . . . . . . 
                    . 2 . . 2 . . . . 2 . . . . 2 2 
                    . 2 . . 2 2 2 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . 
                    . . . 2 . . . . . . . . . . . . 
                    . . . . . 2 2 . . . . . 2 . . . 
                    . 2 2 . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.builtin.brick,myTiles.zhrtile1,myTiles.zhrtile4,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2], TileScale.Sixteen))
                tiles.setTileAt(tiles.getTileLocation(14, 5), sprites.castle.tileDarkGrass3)
            }
            if (zhrr钥 < 1) {
                Zhr.say("我没有钥匙。", 1000)
                tiles.placeOnRandomTile(Zhr, sprites.castle.tileDarkGrass3)
            }
        })

        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.Zhr铲子, function (sprite, otherSprite) {
            Zhrr铲子 = 1
            Zhr铲子.destroy()
        })
        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.Zhr直升机, function (sprite, otherSprite) {
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.ZhrE)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr直升机)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr钥匙)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr传送门)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr铲子)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Zhr蛇)
            lantern.stopLanternEffect()
            gamejam.roomFinished(true)
        })

        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.Zhr钥匙, function (sprite, otherSprite) {
            zhrr钥 = 1
            Zhr钥.destroy()
        })

        tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010102060606010102020202010101010101020606060101010101010101010202010206060601010101010101010101010102060606010101010101010101010101020606060101010102020202020201010202040201010101020505050502010101010101010201010203050505020101010101010102010102050505050201010101020201020101020202020202010101010101010101010101010101010101010101010101010101010101010101010102010101010102010101010101010101010101010101010102020101010101020101010102020101010101010101010101010101010101010101010101010101010101`, img`
            . . . . . . . . . . . . 2 . . . 
            . . 2 2 2 2 . . . . . . 2 . . . 
            . . . . . . . . . 2 2 . 2 . . . 
            . . . . . . . . . . . . 2 . . . 
            . . . . . . . . . . . . 2 . . . 
            . . . . 2 2 2 2 2 2 . . 2 2 . 2 
            . . . . 2 . . . . 2 . . . . . . 
            . 2 . . 2 . . . . 2 . . . . . . 
            . 2 . . 2 . . . . 2 . . . . 2 2 
            . 2 . . 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 2 . . 
            . . . 2 . . . . . . . . . . . . 
            . . . . . 2 2 . . . . . 2 . . . 
            . 2 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.builtin.brick,myTiles.zhrtile1,myTiles.zhrtile4,sprites.castle.tileDarkGrass2,myTiles.zhrtile6], TileScale.Sixteen))
        Zhr = sprites.create(img`
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 7 7 7 7 7 7 f e f f . 
            . f e e 4 7 7 d d 7 7 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e 7 4 4 4 4 7 e f . . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
            . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . 7 7 . . 7 7 . . . . . 
            `, SpriteKind.Zhr)
        lantern.setLightBandWidth(20)
        lantern.startLanternEffect(Zhr)
        tiles.placeOnRandomTile(Zhr, sprites.castle.tileDarkGrass3)
        controller.moveSprite(Zhr, 100, 100)
        scene.cameraFollowSprite(Zhr)
        game.splash("躲避刺客，等待救援。")
        for (let index = 0; index < 4; index++) {
            zhr刺客()
        }
        gamejam.runLater(10000, function() {
            zhrr刺客()            
        })
    }

}
