// Add your code here
namespace SpriteKind {
    export const llEnemy = SpriteKind.create()
}

namespace llroom {
    let llDuck: Sprite = null
    let llSnake: Sprite = null
    let llHero: Sprite = null

    function llHasBg () {
            tiles.setTilemap(tiles.createTilemap(hex`100010000105050505050505050505050505090203070808080808080808080808070704030707070707070708070707080808040308070808080707080708070707070403070707080709070808080808080808080807070807070708070707070707040307070b08080807080707080808080408070808080707070807070807070804080707070807070808080708070808040307070808090707070707080707070408080808070707080808080808080904030708070708080807070707090707040308080708070707070707070707070403070707080708080808080808080808030808080807070707080707070707040c08060606060608060606060808060a`, img`
                . . . . . . . . . . . . . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . . . . . 2 . . . 2 2 2 . 
                . 2 . 2 2 2 . . 2 . 2 . . . . . 
                . . . . 2 . . . 2 2 2 2 2 2 2 2 
                2 2 . . 2 . . . 2 . . . . . . . 
                . . . . 2 2 2 . 2 . . 2 2 2 2 . 
                2 . 2 2 2 . . . 2 . . 2 . . 2 . 
                2 . . . 2 . . 2 2 2 . 2 . 2 2 . 
                . . . 2 2 . . . . . . 2 . . . . 
                2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
                . . 2 . . 2 2 2 . . . . . . . . 
                . 2 2 . 2 . . . . . . . . . . . 
                . . . . 2 . 2 2 2 2 2 2 2 2 2 2 
                . 2 2 2 2 . . . . 2 . . . . . . 
                . 2 . . . . . 2 . . . . 2 2 . . 
                `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.builtin.coral2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
            info.startCountdown(180)
            info.setLife(3)
            controller.moveSprite(llHero, 100, 100)
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
        llSnake.setPosition(8, 40)
        llSnake.x += 30
        llSnake.setFlag(SpriteFlag.BounceOnWall, true)
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

    export function init() {
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
        scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
            let llfire = 0
            if (llfire == 0) {
                llHero.setPosition(10, 18)
                game.splash("路边的野花不要采！")
                info.changeLifeBy(-1)
            }
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
        sprites.onOverlap(SpriteKind.Player, SpriteKind.llEnemy, function (sprite, otherSprite) {
            info.changeLifeBy(-1)
            llHero.setPosition(10, 18)
            llHero.setVelocity(20, 20)
        })
        
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            info.changeLifeBy(-1)
            llHero.setPosition(10, 18)
        })
       
        llHasHero()
        llHasSnake()
        llHasBg()
        llHasDuck()
        game.splash("hi，欢迎来到迷宫，想一切办法出去！")
    }   
}

