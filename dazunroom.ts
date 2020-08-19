// Add your code here
namespace SpriteKind {
    export const DzPlayer = SpriteKind.create()
    export const Dzbomb = SpriteKind.create()
    export const C4 = SpriteKind.create()
    export const Dzc4 = SpriteKind.create()
    export const DzStone = SpriteKind.create()
    export const Dzflame = SpriteKind.create()
    export const Dzshoe = SpriteKind.create()
    export const Dzpoisonflower = SpriteKind.create()
    export const Dzparaglider = SpriteKind.create()
    export const Dzfire = SpriteKind.create()
    export const Dztrap1 = SpriteKind.create()
    export const Dzprincess = SpriteKind.create()
}

namespace dazunroom{

    function Dzboom () {
        DzTnt = sprites.create(img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . 4 4 e 4 4 e 4 4 . . 
            . . . . f f f f f f f f . . 
            . . . . 4 4 e 4 4 e 4 4 . . 
            . . . . 4 4 e 4 4 e 4 4 . . 
            . . . . f f f f f f f f . . 
            . . . . 4 4 e 4 4 e 4 4 . . 
            . . . . 4 4 e 4 4 e 4 4 . . 
            . . . . f f f f f f f f . . 
            . . . . 4 4 e 4 4 e 4 4 . . 
            . . . . . . . . . . . . . . 
            `, SpriteKind.Dzc4)
        DzTnt.setPosition(Dzhero.x, Dzhero.y)
        Dzgetbomb = 0
        DzTnt.say("3")
        pause(1000)
        DzTnt.say("2")
        pause(1000)
        DzTnt.say("1")
        pause(1000)
        DzTnt.destroy()
        Dzflame = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
            . 5 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 5 
            . 5 2 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 2 5 
            . 5 2 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 2 5 
            . 5 2 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 2 5 
            . 5 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 5 
            . 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            `, SpriteKind.Dzflame)
        Dzflame.setPosition(DzTnt.x, DzTnt.y)
        pause(500)
        Dzflame.destroy()
    }
    let Dzflame: Sprite = null
    let DzTnt: Sprite = null
    let Dzprojectile: Sprite = null
    let Dzgetfire = 0
    let Dzdash = 0
    let DzHerodirection = 0
    let Dzgetshoot = 0
    let Dzdoublejump = 0
    let Dzgetbomb = 0
    let Dzhero: Sprite = null
    let Dzinterval = 0

    export function init() {
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            if (Dzgetshoot) {
                if (DzHerodirection) {
                    Dzhero.setImage(img`
                        . . . . . . . . . . . . . 
                        . . . f f f f f f . . . . 
                        . f f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f c f f f c f f f . 
                        f c f f c c f f f c c f f 
                        f c c f f f f e f f f f f 
                        f f f f f f f e e f f f . 
                        f f e e f b f e e f f . . 
                        . f e 4 e 1 f 4 4 f f . . 
                        . f f f e e 4 4 4 f . . . 
                        . . f e 4 4 e e f f . . . 
                        . . f e 4 4 e 7 7 f . . . 
                        . f f f e e f 6 6 f f . . 
                        . f f f f f f f f f f . . 
                        . . f f . . . f f f . . . 
                        `)
                    Dzhero.startEffect(effects.trail, 500)
                } else {
                    Dzhero.setImage(img`
                        . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . 
                        . . . f f f f f f f f f . 
                        . . f f f c f f f f f f . 
                        . f f f c f f f c f f f f 
                        f f c c f f f c c f f c f 
                        f f f f f e f f f f c c f 
                        . f f f e e f f f f f f f 
                        . f f f e e f b f e e f f 
                        . . f f 4 4 f 1 e 4 e f f 
                        . . . f 4 4 4 4 e f f f . 
                        . . . f f e e e e 4 4 4 . 
                        . . . f 7 7 7 7 e 4 4 e . 
                        . . f f 6 6 6 6 f e e f . 
                        . . f f f f f f f f f f . 
                        . . . f f f . . . f f . . 
                        `)
                    Dzhero.startEffect(effects.trail, 500)
                }
                if (Dzdoublejump != 0) {
                    Dzhero.vy = -120
                    Dzdoublejump = 0
                }
            }
        })
        sprites.onOverlap(SpriteKind.Dzflame, SpriteKind.DzStone, function (sprite, otherSprite) {
            otherSprite.destroy()
        })
        scene.onOverlapTile(SpriteKind.DzPlayer, myTiles.dztile3, function (sprite, location) {
            Dzhero.vx = 0
            effects.clearParticles(Dzhero)
        })
        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
            if (Dzdash) {
                if (DzHerodirection) {
                    Dzhero.setImage(img`
                        e e e e e e e e e e e e e 
                        e 4 4 4 4 4 4 4 4 4 4 e e 
                        e 4 4 4 4 4 4 4 4 4 e e . 
                        e 4 4 4 4 4 4 4 e e e . . 
                        e e 4 4 4 4 4 4 e f . . . 
                        . f e e 4 4 4 e e f f . . 
                        f f f e e e e e c f f f . 
                        f c f f e e f f f c c f f 
                        f c c f f f f e f f f f f 
                        f f f f f f f e e f f f . 
                        f f e e f b f e e f f f . 
                        f f e 4 e 1 f 4 4 f f . . 
                        . f f f e 4 4 4 4 f . . . 
                        . 4 4 4 e e e e f f . . . 
                        . e 4 4 e 7 7 7 7 f . . . 
                        . f e e f 6 6 6 6 f f . . 
                        . f f f f f f f f f f . . 
                        . . f f . . . f f f . . . 
                        `)
                } else {
                    Dzhero.setImage(img`
                        e e e e e e e e e e e e e 
                        e 4 4 4 4 4 4 4 4 4 4 4 e 
                        . e e 4 4 4 4 4 4 4 4 4 e 
                        . . e e 4 4 4 4 4 4 4 e e 
                        . . . e e 4 4 4 4 4 e e . 
                        . . f f e e 4 4 4 4 e f . 
                        . f f f c e e 4 c e e f f 
                        f f c c f f e e e e f c f 
                        f f f f f e f f e f c c f 
                        . f f f e e f f f f f f f 
                        . f f f e e f b f e e f f 
                        . . f f 4 4 f 1 e 4 e f f 
                        . . . f 4 4 4 4 e f f f . 
                        . . . f f e e e e 4 4 4 . 
                        . . . f 7 7 7 7 e 4 4 e . 
                        . . f f 6 6 6 6 f e e f . 
                        . . f f f f f f f f f f . 
                        . . . f f f . . . f f . . 
                        `)
                }
            }
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Dzpoisonflower, function (sprite, otherSprite) {
            otherSprite.startEffect(effects.spray)
            otherSprite.startEffect(effects.disintegrate)
            otherSprite.destroy()
            sprite.destroy()
        })
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (Dzgetbomb) {
                Dzboom()
            }
            if (Dzgetfire) {
                Dzhero.startEffect(effects.warmRadial, 500)
                if (DzHerodirection) {
                    Dzprojectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        2 . . . 2 2 2 2 . . . . . . . . 
                        2 2 2 2 2 2 4 2 2 2 2 2 . . . . 
                        4 4 4 4 4 4 4 4 4 4 4 2 . . . . 
                        5 5 5 5 5 5 5 5 5 5 4 4 2 . . . 
                        5 5 5 5 5 5 5 5 5 5 4 4 2 . . . 
                        5 5 5 5 5 5 5 5 4 4 4 4 2 . . . 
                        4 4 4 4 4 4 4 4 2 2 2 2 . . . . 
                        2 2 2 2 2 2 2 2 2 . . . . . . . 
                        2 . . . . . . . . . . . . . . . 
                        2 . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, Dzhero, 200, 0)
                } else {
                    Dzprojectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 . . . . . . 2 2 
                        . . 2 2 2 2 4 2 2 2 2 2 2 2 2 4 
                        . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                        2 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
                        2 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                        2 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
                        2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
                        . 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
                        . . . . . . . . . . . . . 2 2 2 
                        . . . . . . . . . . . . . . . 2 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, Dzhero, -200, 0)
                }
            }
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dzparaglider, function (sprite, otherSprite) {
            Dzdash = 1
            otherSprite.destroy()
            game.splash("push \"B\" in the wind and you can fly ")
        })
        scene.onOverlapTile(SpriteKind.DzPlayer, myTiles.dztile5, function (sprite, location) {
            if (controller.B.isPressed() && Dzdash) {
                Dzhero.vx = 50
                Dzhero.vy = 1
            }
        })
        scene.onOverlapTile(SpriteKind.DzPlayer, sprites.castle.shrub, function (sprite, location) {
            tiles.placeOnTile(Dzhero, tiles.getTileLocation(1, 7))
        })
        scene.onOverlapTile(SpriteKind.DzPlayer, sprites.dungeon.collectibleInsignia, function (sprite, location) {
            tiles.placeOnTile(Dzhero, tiles.getTileLocation(1, 2))
            lantern.startLanternEffect(sprite)
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
            Dzhero,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            Dzinterval,
            true
            )
            DzHerodirection = 0
        })
        controller.right.onEvent(ControllerButtonEvent.Released, function () {
            animation.stopAnimation(animation.AnimationTypes.All, Dzhero)
            Dzhero.setImage(img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `)
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dzfire, function (sprite, otherSprite) {
            otherSprite.destroy()
            Dzgetfire = 1
            game.splash("push \"A\"")
        })
        controller.left.onEvent(ControllerButtonEvent.Released, function () {
            animation.stopAnimation(animation.AnimationTypes.All, Dzhero)
            Dzhero.setImage(img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
            Dzhero,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            Dzinterval,
            true
            )
            DzHerodirection = 1
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dzshoe, function (sprite, otherSprite) {
            Dzgetshoot = 1
            otherSprite.destroy()
            game.splash("I can jump now !")
        })
        scene.onHitWall(SpriteKind.DzPlayer, function (sprite, location) {
            Dzdoublejump = 1
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.DzStone, function (sprite, otherSprite) {
            Dzhero.x += -5
            game.splash("There is a huge stone at the entrance")
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dzbomb, function (sprite, otherSprite) {
            otherSprite.destroy()
            Dzgetbomb = 1
            game.splash("I think i can use the ", "bomb to destroy something.")
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dztrap1, function (sprite, otherSprite) {
            tiles.placeOnTile(sprite, tiles.getTileLocation(1, 3))
            scene.cameraShake(4, 500)
        })
        controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
            tiles.placeOnTile(Dzhero, tiles.getTileLocation(2, 14))
        })
        controller.B.onEvent(ControllerButtonEvent.Released, function () {
            if (Dzdash) {
                Dzhero.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . f f f f f f . . . . 
                    . f f f f f f f f f . . . 
                    . f f f f f f c f f f . . 
                    f f f f c f f f c f f f . 
                    f c f f c c f f f c c f f 
                    f c c f f f f e f f f f f 
                    f f f f f f f e e f f f . 
                    f f e e f b f e e f f . . 
                    . f e 4 e 1 f 4 4 f f . . 
                    . f f f e e 4 4 4 f . . . 
                    . . f e 4 4 e e f f . . . 
                    . . f e 4 4 e 7 7 f . . . 
                    . f f f e e f 6 6 f f . . 
                    . f f f f f f f f f f . . 
                    . . f f . . . f f f . . . 
                    `)
            }
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dzprincess, function (sprite, otherSprite) {
            cubicbird.destroyAllSpriteOfKind(SpriteKind.DzPlayer)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzbomb)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzc4)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.C4)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.DzStone)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzflame)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzshoe)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzpoisonflower)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzparaglider)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzfire)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dzprincess)
            cubicbird.destroyAllSpriteOfKind(SpriteKind.Dztrap1)
            gamejam.roomFinished(true)
        })
        sprites.onOverlap(SpriteKind.DzPlayer, SpriteKind.Dzpoisonflower, function (sprite, otherSprite) {
            tiles.placeOnTile(Dzhero, tiles.getTileLocation(2, 8))
            game.splash("This plant is poisonous,I can not touch it.")
        })
        
        scene.setBackgroundImage(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b 6 6 
            b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b 
            b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 
            b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b c c c c c c c c c c c c c b b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c b b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 c 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b 6 6 6 6 6 c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b 6 6 c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b 6 6 6 6 b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b b b c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b b c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 
            b b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 
            b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 
            b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 
            b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 
            b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b 
            b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b 
            c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b 6 b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
            `)
        tiles.setTilemap(tiles.createTilemap(hex`100010000405050505050505050505050505050106000000000c00000000000000000008060000000000000000000000000000080600000b0000000b0000000000000008060a0a0a0f0f0f0a0a0a0a0a0a0a0a0806000000000000000000000000000008060e0e0e00000000000000000000000806000000000e000000000000000000080600000e000000000000000000001008060d0d0d0d0d0d0d0d0d0d0d0d0d0d08060000001212121212121213000000080600000000000000000000000000110806000009090000000000000909090908060000000009000000000000090909080600000000000000000000000000000802070707070707070707070707070703`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . 2 . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . 2 . . . 2 . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 . . . . . . . . . . . 2 
            2 . . . . 2 . . . . . . . . . 2 
            2 . . 2 . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . 2 2 . . . . . . 2 2 2 2 2 
            2 . . . . 2 . . . . . . 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.builtin.forestTiles2,sprites.builtin.forestTiles0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.collectibleInsignia,sprites.castle.shrub,myTiles.dztile5,myTiles.dztile3], TileScale.Sixteen))
        Dzinterval = 200
        Dzhero = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.DzPlayer)
        Dzgetbomb = 0
        Dzdoublejump = 0
        Dzgetshoot = 0
        let Dztrapflag = 0
        tiles.placeOnTile(Dzhero, tiles.getTileLocation(3, 14))
        scene.cameraFollowSprite(Dzhero)
        controller.moveSprite(Dzhero, 50, 0)
        Dzhero.ay = 200
        let Dzbombitem = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 4 . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . b b b b b b b b b . . . . 
            . . . b b b b b b b b b . . . . 
            . . . b b b b b b b b b . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Dzbomb)
        tiles.placeOnTile(Dzbombitem, tiles.getTileLocation(1, 14))
        let DzStone = sprites.create(img`
            . . . . . . c c c c c c . . . . 
            . . . . c c b b d d d d c . . . 
            . . . c c b b d d d d d d c . . 
            . . c b b d b d d d d d d b c . 
            . c b b b d b b d d d d d b c . 
            . c b b b d d b d d d d b b c . 
            c b c b b b d d b b b b b c c . 
            c b c c b b b b d d d b c c c . 
            c b b c c c c c c c c c c c c . 
            c c b b b b b b c c b d d d b c 
            c c c c c c c c c d d d d d d c 
            c c c c c c c b c b d d d d d b 
            c b b b c c c b c c b d d d c b 
            c c b b b c c b b c c c c b b c 
            c c c c c c c c b b b b b b c c 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.DzStone)
        tiles.placeOnTile(DzStone, tiles.getTileLocation(11, 14))
        let DzShoe = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f 5 5 5 5 5 f . . . 
            . . . . . . f 9 9 9 9 9 1 1 1 1 
            . . . . . . f 9 9 9 1 1 1 1 1 1 
            . . . . . . f 9 9 9 1 1 1 1 1 1 
            . . . . . . f 9 9 1 1 1 1 1 1 1 
            . . . . f f 9 9 9 1 1 1 1 1 1 . 
            . . . f f 9 9 9 1 1 1 1 1 1 f . 
            . . f f 9 9 9 9 9 1 1 1 1 f f . 
            . . f 9 9 9 9 9 9 9 9 9 f f f . 
            . . f f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Dzshoe)
        tiles.placeOnTile(DzShoe, tiles.getTileLocation(13, 14))
        let Dzpoisonflower = sprites.create(img`
            . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . . 
            . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . . . 
            . 8 c 8 . . 6 8 . 8 a 8 . . 6 8 . 8 c 8 . . 6 8 
            . 8 c 8 . 6 6 8 . 8 a 8 . 6 6 8 . 8 c 8 . 6 6 8 
            . . 8 6 8 8 8 . . . 8 6 8 8 8 . . . 8 6 8 8 8 . 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            6 6 . . 8 a 8 . 6 6 . . 8 c 8 . 6 6 . . 8 a 8 . 
            8 6 6 8 a a 8 . 8 6 6 8 c c 8 . 8 6 6 8 a a 8 . 
            . 8 8 a a 8 . . . 8 8 c c 8 . . . 8 8 a a 8 . . 
            . 8 a a 8 . . . . 8 c c 8 . . . . 8 a a 8 . . . 
            . 8 a 8 . 8 6 . . 8 c 8 . 8 6 . . 8 a 8 . 8 6 . 
            . 8 a 8 . 8 6 6 . 8 c 8 . 8 6 6 . 8 a 8 . 8 6 6 
            . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            . . . . 8 c 8 . . . . . 8 a 8 . . . . . 8 c 8 . 
            . . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . 
            . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            . . . . 8 c 8 . . . . . 8 a 8 . . . . . 8 c 8 . 
            . . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . 
            `, SpriteKind.Dzpoisonflower)
        tiles.placeOnTile(Dzpoisonflower, tiles.getTileLocation(14, 8))
        Dzpoisonflower = sprites.create(img`
            . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . . 
            . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . . . 
            . 8 c 8 . . 6 8 . 8 a 8 . . 6 8 . 8 c 8 . . 6 8 
            . 8 c 8 . 6 6 8 . 8 a 8 . 6 6 8 . 8 c 8 . 6 6 8 
            . . 8 6 8 8 8 . . . 8 6 8 8 8 . . . 8 6 8 8 8 . 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            6 6 . . 8 a 8 . 6 6 . . 8 c 8 . 6 6 . . 8 a 8 . 
            8 6 6 8 a a 8 . 8 6 6 8 c c 8 . 8 6 6 8 a a 8 . 
            . 8 8 a a 8 . . . 8 8 c c 8 . . . 8 8 a a 8 . . 
            . 8 a a 8 . . . . 8 c c 8 . . . . 8 a a 8 . . . 
            . 8 a 8 . 8 6 . . 8 c 8 . 8 6 . . 8 a 8 . 8 6 . 
            . 8 a 8 . 8 6 6 . 8 c 8 . 8 6 6 . 8 a 8 . 8 6 6 
            . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            . . . . 8 c 8 . . . . . 8 a 8 . . . . . 8 c 8 . 
            . . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . 
            . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            . . . . 8 c 8 . . . . . 8 a 8 . . . . . 8 c 8 . 
            . . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . 
            `, SpriteKind.Dzpoisonflower)
        tiles.placeOnTile(Dzpoisonflower, tiles.getTileLocation(10, 8))
        Dzpoisonflower = sprites.create(img`
            . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . . 
            . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . . . 
            . 8 c 8 . . 6 8 . 8 a 8 . . 6 8 . 8 c 8 . . 6 8 
            . 8 c 8 . 6 6 8 . 8 a 8 . 6 6 8 . 8 c 8 . 6 6 8 
            . . 8 6 8 8 8 . . . 8 6 8 8 8 . . . 8 6 8 8 8 . 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            6 6 . . 8 a 8 . 6 6 . . 8 c 8 . 6 6 . . 8 a 8 . 
            8 6 6 8 a a 8 . 8 6 6 8 c c 8 . 8 6 6 8 a a 8 . 
            . 8 8 a a 8 . . . 8 8 c c 8 . . . 8 8 a a 8 . . 
            . 8 a a 8 . . . . 8 c c 8 . . . . 8 a a 8 . . . 
            . 8 a 8 . 8 6 . . 8 c 8 . 8 6 . . 8 a 8 . 8 6 . 
            . 8 a 8 . 8 6 6 . 8 c 8 . 8 6 6 . 8 a 8 . 8 6 6 
            . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            . . . . 8 c 8 . . . . . 8 a 8 . . . . . 8 c 8 . 
            . . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . 
            . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 . . 8 6 8 . 8 8 
            . . . 8 6 8 . . . . . 8 6 8 . . . . . 8 6 8 . . 
            . . . . 8 c 8 . . . . . 8 a 8 . . . . . 8 c 8 . 
            . . . 6 c c 8 . . . . 6 a a 8 . . . . 6 c c 8 . 
            `, SpriteKind.Dzpoisonflower)
        tiles.placeOnTile(Dzpoisonflower, tiles.getTileLocation(12, 8))
        let Dzfan = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e . . . . . . . . . 
            . . . . . e 4 e e . . . . . . . 
            . . . . e 4 4 4 4 e e . . . . . 
            . . . e e 4 4 4 4 4 e e e . . . 
            . . . e 4 4 4 4 4 4 4 4 e e . . 
            . . e e 4 e e e e e e 4 4 e e . 
            . e e 4 4 4 4 4 4 4 4 e e e . . 
            . e 4 4 4 4 4 4 4 e e e e . . . 
            e e 4 4 4 e e e e e . . e . . . 
            e 4 4 e e . . . e e e e e . . . 
            . e e . e e e e e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Dzparaglider)
        tiles.placeOnTile(Dzfan, tiles.getTileLocation(1, 10))
        Dzfan.startEffect(effects.blizzard)
        Dzfan = sprites.create(img`
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . b b b . . . . . . . . . . 
            . . . b b b 9 9 9 . . . . . . . 
            . . . b b 9 9 9 9 . . . . . . . 
            . . . b b 9 9 9 9 . . . . . . . 
            . . . 9 2 2 2 . . . . . . . . . 
            . 9 9 9 2 2 5 . . . . . . . . . 
            . 9 9 9 2 5 5 . . . . . . . . . 
            . 9 9 9 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Dzfan, tiles.getTileLocation(3, 10))
        let Dzfirepearl = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Dzfire)
        tiles.placeOnTile(Dzfirepearl, tiles.getTileLocation(1, 5))
        let Dztrap1 = sprites.create(img`
            . . . . . . . . d . . . . . . . 
            . . . . . . . . d . . . . . . . 
            . . . . . . . . d . . . . . . d 
            . . . . d . . . d . . . . . . d 
            . . . . d . . d d . . . . . d d 
            . . . d d . . d 1 . . . . . d 1 
            . . . d 1 . . d 1 1 . . . d d 1 
            . . d d 1 1 . d 1 1 . . . d 1 1 
            . . d 1 1 1 . d 1 1 . . d d 1 1 
            . . d 1 1 1 . 1 1 1 1 . d 1 1 1 
            . d d 1 1 1 1 1 1 1 1 . d 1 1 1 
            . d 1 1 1 1 1 1 1 1 1 1 d 1 1 1 
            1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Dztrap1)
        tiles.placeOnTile(Dztrap1, tiles.getTileLocation(3, 2))
        Dztrap1 = sprites.create(img`
            . . . . . . . . d . . . . . . . 
            . . . . . . . . d . . . . . . . 
            . . . . . . . . d . . . . . . d 
            . . . . d . . . d . . . . . . d 
            . . . . d . . d d . . . . . d d 
            . . . d d . . d 1 . . . . . d 1 
            . . . d 1 . . d 1 1 . . . d d 1 
            . . d d 1 1 . d 1 1 . . . d 1 1 
            . . d 1 1 1 . d 1 1 . . d d 1 1 
            . . d 1 1 1 . 1 1 1 1 . d 1 1 1 
            . d d 1 1 1 1 1 1 1 1 . d 1 1 1 
            . d 1 1 1 1 1 1 1 1 1 1 d 1 1 1 
            1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Dztrap1)
        tiles.placeOnTile(Dztrap1, tiles.getTileLocation(7, 2))
        let Dztraplist = sprites.allOfKind(Dztrap1.kind())
        let Dzprincess = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Dzprincess)
        tiles.placeOnTile(Dzprincess, tiles.getTileLocation(14, 3))
        game.onUpdateInterval(2000, function () {
            Dztrapflag += 1
            if (Dztrapflag % 2 == 0) {
                for (let 值 of Dztraplist) {
                    值.setFlag(SpriteFlag.Invisible, false)
                    值.setFlag(SpriteFlag.Ghost, false)
                }
            } else {
                for (let 值 of Dztraplist) {
                    值.setFlag(SpriteFlag.Invisible, true)
                    值.setFlag(SpriteFlag.Ghost, true)
                }
            }
        })
    }
}