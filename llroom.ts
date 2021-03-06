// Add your code here
namespace SpriteKind {
    export const llEnemy = SpriteKind.create()
    export const llGhost = SpriteKind.create()
    export const llEnemy2 = SpriteKind.create()
}

namespace llroom {

    let llDuck: Sprite = null
    let llSnake: Sprite = null
    let llfire = 0
    let llGhost2: Sprite = null
    let llSpeed = 0
    let llHero: Sprite = null

    function llDestroy () {
        let myEnemy = 0
        let mySprite = 0
        let llBreak = 0
        cubicbird.destroyAllSpriteOfKind(info.score())
        cubicbird.destroyAllSpriteOfKind(info.life())
        cubicbird.destroyAllSpriteOfKind(llBreak)
        cubicbird.destroyAllSpriteOfKind(llfire)
        cubicbird.destroyAllSpriteOfKind(mySprite)
        cubicbird.destroyAllSpriteOfKind(myEnemy)
        cubicbird.destroyAllSpriteOfKind(llSpeed)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.Player)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.Enemy)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.llEnemy)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.llGhost)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.llEnemy2)
        info.stopCountdown()
    }    
    function llHasDuck () {
        llDuck = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.llEnemy)
        llDuck.setPosition(248, 98)
        llDuck.setVelocity(0, 50)
        llDuck.y += 30
        llDuck.setFlag(SpriteFlag.BounceOnWall, true)
    }

    function llHasBg () {
        tiles.setTilemap(tiles.createTilemap(hex`1000100001040404040404040404040404040a0a02060707070706070707070707060603070606070606060607060606070707030207060707070606060607060606060302060606060608060707070707070607070706070706060607060606060606030206060907070706070706070707070302070707070606060606060706060603020706070606070707070607060707030206060707080706060606070606060307070607060606070707070707070703020606070607070606060606080706030207070606070606070b0b0606060b0b02060606070707060607070707070707070707070706070706060707060606030c050505050505050505050505070507`, img`
            . . . . . . . . . . . . . . . .
            . . 2 2 2 2 . 2 2 2 2 2 2 . . .
            2 . . 2 . . . . 2 . . . 2 2 2 .
            . 2 . 2 2 2 . . . . 2 . . . . .
            . . . . . . . . 2 2 2 2 2 2 . 2
            2 2 . 2 2 . . . 2 . . . . . . .
            . . . . 2 2 2 . 2 2 . 2 2 2 2 .
            . 2 2 2 2 . . . . . . 2 . . . .
            . 2 . 2 . . 2 2 2 2 . 2 . 2 2 .
            . . . 2 2 . 2 . . . . 2 . . . .
            2 2 . 2 . . . 2 2 2 2 2 2 2 2 .
            . . . 2 . 2 2 . . . . . . 2 . .
            . 2 2 . . 2 . . 2 . . . . . . .
            . . . . 2 2 2 . . 2 2 2 2 2 2 2
            2 . 2 2 2 . 2 2 . . 2 2 . . . .
            . . . . . . . . . . . . . 2 . 2
        `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleRedCrystal,sprites.castle.tileDarkGrass1,sprites.castle.shrub,sprites.builtin.coral5], TileScale.Sixteen))
        tiles.setTileAt(tiles.getTileLocation(9, 3), sprites.dungeon.chestClosed)
        info.startCountdown(180)
        info.setLife(3)
        controller.moveSprite(llHero, 50, 50)
        scene.cameraFollowSprite(llHero)
    }
    function llHasHero () {
        llHero = sprites.create(img`
            . . . . . f f f f . . . . . . . 
            . . . f f f 2 2 f f f . . . . . 
            . . f f f 2 2 2 2 f f f . . . . 
            . f f f e e e e e e f f f . . . 
            . f f e 2 2 2 2 2 2 e e f . . . 
            . f e 2 f f f f f f 2 e f . . . 
            . f f f f e e e e f f f f . . . 
            f f e f b f 4 4 f b f e f f . . 
            f e e 4 1 f d d f 1 4 e e f . . 
            . f f f f d d d d d e e f . . . 
            f d d d d f 4 4 4 e e f . . . . 
            f b b b b f 2 2 2 2 f 4 e . . . 
            f b b b b f 2 2 2 2 f d 4 . . . 
            . f c c f 4 5 5 4 4 f 4 4 . . . 
            . . f f f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `, SpriteKind.Player)
        llHero.setPosition(10, 18)
    }
    function llHasGhost () {
        llGhost2 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . f f f c 1 1 1 1 1 1 1 f . . . 
            c 1 1 1 c d 1 1 1 1 1 1 1 f . . 
            1 b 1 b 1 b 1 1 1 1 d d d f . . 
            b f b f f c f 1 1 f c d d f . . 
            . . f c f 1 1 1 1 1 1 b b f . . 
            . . . c c b d b 1 b 1 f c f . . 
            . . . f f f b f b f d f f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f f f f f f f f f f f . 
            . . . . . f f f f f c 1 1 1 c f 
            . . . . . f f f f f 1 b 1 b 1 f 
            . . . . . . f f f f b f b f b f 
            . . . . . . . f f f f . . . . . 
            `, SpriteKind.llEnemy2)
        llGhost2.setPosition(8, 248)
        llGhost2.setVelocity(50, 0)
        llGhost2.x += 5
        llGhost2.setFlag(SpriteFlag.BounceOnWall, true)
    }

    function llHasSnake () {
        llSnake = sprites.create(img`
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
            `, SpriteKind.Enemy)
        llSnake.setVelocity(20, 0)
        llSnake.setPosition(8, 72)
        llSnake.x += 30
        llSnake.setFlag(SpriteFlag.BounceOnWall, true)
    }

    export function init() {
        scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral5, function (sprite, location) {
            llDestroy()
            gamejam.roomFinished(true)
        })
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            llHero.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                f d f e e d d d d d 4 e f f . . 
                f b f f e e 4 4 4 e d d 4 e . . 
                f b f 4 f 2 2 2 2 e d d e . . . 
                f c f . f 2 2 c c c e e . . . . 
                . f f . f 4 4 c d c 4 f . . . . 
                . . . . f f f d d c f f . . . . 
                . . . . . f d d c f f . . . . . 
                `)
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            llHero.setImage(img`
                . . . . . . . f f . . . . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f 2 2 2 2 2 2 f f f . . 
                . . f f f 2 2 2 2 2 2 f f f . . 
                . . f e e e e e e e e e e f f . 
                . f f e 2 2 2 2 2 2 2 2 e f f . 
                . f f f f f e e e e f f f f f . 
                f d f e f b f 4 4 f b f e f f . 
                f b f e 4 1 f d d f 1 4 e f . . 
                f b f f e 4 d d d d 4 e f e . . 
                f c f e f 2 2 2 2 2 f 4 e . . . 
                . f f 4 f 4 4 5 5 4 f 4 e . . . 
                . . . . f f f f f f d d e . . . 
                . . . . . f f f f e d d e . . . 
                . . . . . . . . . . e e . . . . 
                `)
        })
        scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
            if (llSpeed == 0) {
                controller.moveSprite(llHero, 25, 25)
            }
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            llHero.setImage(img`
                . . . . . f f f f . . . . . . . 
                . . . f f f 2 2 f f f . . . . . 
                . . f f f 2 2 2 2 f f f . . . . 
                . f f f e e e e e e f f f . . . 
                . f f e 2 2 2 2 2 2 e e f . . . 
                . f e 2 f f f f f f 2 e f . . . 
                . f f f f e e e e f f f f . . . 
                f f e f b f 4 4 f b f e f f . . 
                f f e f b f 4 4 f b f e f f . . 
                f e e 4 d d d d d d 4 e e f . c 
                d f e e d d d d d 4 e e f f e c 
                b f f e e 4 4 4 4 e e 4 f d d c 
                b f 4 f 2 2 2 2 2 2 f 1 e d d e 
                c f . f 2 2 2 2 2 2 f 4 4 e e . 
                f f . f 4 4 5 5 4 4 f . . . . . 
                . . . f f f f f f f f . . . . . 
                `)
        })
        scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
            if (llSpeed == 0) {
                controller.moveSprite(llHero, 15, 15)
            }
        })
    
        scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
            game.splash("一个数字，去掉前面一个数字后，是13。去掉最后一个数字后，是40。这个数字是什么？")
            if (game.askForNumber("", 3) == 43) {
                controller.moveSprite(llHero, 80, 80)
                llSpeed = 1
            } else {
                game.splash("答错了")
                lantern.startLanternEffect(llHero)
                lantern.setLightBandWidth(10)
                controller.moveSprite(llHero, 50, 50)
            }
            tiles.setTileAt(location, sprites.castle.tilePath5)
        })
        scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
            if (llfire == 0) {
                llHero.setPosition(10, 18)
                game.splash("路边的野花不要采！")
                info.changeLifeBy(-1)
            }
        })
        info.onLifeZero(function () {
            llDestroy()
            gamejam.roomFinished(false)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.llEnemy, function (sprite, otherSprite) {
            info.changeLifeBy(-1)
            llHero.setPosition(randint(0, 256), randint(0, 256))
            if (llSpeed == 0) {
                controller.moveSprite(llHero, 25, 25)
            }
        })

        scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
            tiles.setTileAt(location, sprites.castle.tilePath5)
            game.splash("恭喜你可以采花啦")
            llfire = 1
            info.startCountdown(180)
            info.setLife(3)
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            llHero.setImage(img`
                . . . . . . . f f f f f f . . . 
                . . . . . . f 2 f e e e e f f . 
                . . . . . f 2 2 2 f e e e e f f 
                c c . . . f e e e e f f e e e f 
                c d c . f e 2 2 2 2 e e f f f f 
                c d d c f 2 e f f f f 2 2 2 e f 
                . c d d c f f e e e f f f f f f 
                . . c d d c e 4 4 f b e 4 4 e f 
                . . . c d c e d d f 1 4 d 4 e e 
                . . . c c c d e d d d 4 e e e f 
                . . . . e d d 4 e 4 4 e e f f . 
                . . . . . e e 4 4 2 2 2 2 f . . 
                . . . . . . f 2 e 2 2 2 2 f . . 
                . . . . . . f 5 5 4 4 4 4 f . . 
                . . . . . . . f f f f f f . . . 
                . . . . . . . . . f f f . . . . 
                `)
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.llEnemy2, function (sprite, otherSprite) {
            info.setLife(0)
            llDestroy()
            gamejam.roomFinished(false)
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            info.changeLifeBy(-1)
            llHero.setPosition(10, 18)
        })

        game.splash("hi，欢迎来到迷宫，想一切办法出去！")
        llHasHero()
        llHasSnake()
        llHasBg()
        llHasDuck()
        llHasGhost()
    }

}

