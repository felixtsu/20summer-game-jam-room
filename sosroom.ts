// Add your code here

namespace SpriteKind {
    export const Zhr = SpriteKind.create()
    export const ZhrE = SpriteKind.create()
    export const Zhr直升机 = SpriteKind.create()
    export const Zhr电话 = SpriteKind.create()
}


namespace sosroom{
    let Zhr_敌人: Sprite = null
    let Zhr电话: Sprite = null
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
            gamejam.roomFinished(false)
        })
        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.Zhr电话, function (sprite, otherSprite) {
            gamejam.roomFinished(true)
        })
        
        sprites.onOverlap(SpriteKind.Zhr, SpriteKind.Zhr直升机, function (sprite, otherSprite) {
            gamejam.roomFinished(true)
        })
      
        tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010102010102010101010101010101010101020101020101010102020101010201010101010201010101010101010102010101010102020101010101010101020101010101010101020201010201010202010101010101010102010101010101010101010202010101010102010101010101010101010202010101010101010101010101010101010101010101010202020101010101010101010101020202010101010101020202010101010101010101020101010101010101010101010101020201010101010101010101010101020201010101010202020101010101010101010101010101010101010101010101010101`, img`
            . . . . . . . . . . . . . . . 2 
            . . 2 . . . . . . . . . . . . 2 
            . . 2 . . . . 2 2 . . . 2 . . . 
            . . 2 . . . . . . . . . 2 . . . 
            . . 2 2 . . . . . . . . 2 . . . 
            . . . . . 2 2 . . 2 . . 2 2 . . 
            . . . . . . 2 . . . . . . . . . 
            . 2 2 . . . . . 2 . . . . . . . 
            . . . 2 2 . . . . . . . . . . . 
            . . . . . . . . . . . 2 2 2 . . 
            . . . . . . . . . 2 2 2 . . . . 
            . . 2 2 2 . . . . . . . . . 2 . 
            . . . . . . . . . . . . . 2 2 . 
            . . . . . . . . . . . . 2 2 . . 
            . . . 2 2 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.builtin.brick], TileScale.Sixteen))
        let Zhr = sprites.create(img`
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
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
        for (let index = 0; index < 6; index++) {
            zhr刺客()
        }
        pause(20000)
        let Zhr直升机 = sprites.create(img`
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
        tiles.placeOnRandomTile(Zhr直升机, sprites.castle.tileDarkGrass3)
        if (Math.percentChance(10)) {
            Zhr电话 = sprites.create(img`
                . . . . . . . f . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . d 6 6 6 d . . . . . . 
                . . . . . d 6 6 6 d . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . d f d f d . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . d f d f d . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . d f d f d . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Zhr电话)
            tiles.placeOnRandomTile(Zhr电话, sprites.castle.tileDarkGrass3)
        }

    }

}
