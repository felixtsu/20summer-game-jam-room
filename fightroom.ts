// Add your code here
namespace SpriteKind {
    export const 梳子 = SpriteKind.create()
    export const zyx = SpriteKind.create()
    export const 翟云霄吧宝贝 = SpriteKind.create()
    export const zyx吧宝贝 = SpriteKind.create()
    export const zyx各国 = SpriteKind.create()
    export const zyx上课吗 = SpriteKind.create()
    export const zyx教师资格证 = SpriteKind.create()
    export const zyx所 = SpriteKind.create()
    export const zyxTNT = SpriteKind.create()
    export const zyx天天 = SpriteKind.create()
    export const zyx广告 = SpriteKind.create()
    export const zyx金箍棒 = SpriteKind.create()
    export const zyx箱 = SpriteKind.create()
    export const zyx住 = SpriteKind.create()
    export const zyx钥匙 = SpriteKind.create()
    export const zyx桃子 = SpriteKind.create()
    export const zyx哈哈哈 = SpriteKind.create()
    export const zyx乒乒乓乓 = SpriteKind.create()
    export const zyx待会吧 = SpriteKind.create()
    export const zyx啊啊啊 = SpriteKind.create()
    export const zyxMMS = SpriteKind.create()
    export const zyxjhjhhi = SpriteKind.create()
    export const zyxboss33 = SpriteKind.create()
    export const zyxxxxx = SpriteKind.create()
}
namespace fightroom {

    let zyx_箱子: Sprite = null
    let zyx血量2 = 0
    let zyx血量 = 0
    let zyx搅屎棍: Sprite = null
    let zyx威: Sprite = null
    let zyx变脸 = 0
    let zyx啊啊啊啊啊呜呜呜呜 = 0
    let zyx死地而 = 0
    let zyx啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦 = 0
    let zyxboss3: Sprite = null
    let zyx刚刚: Sprite = null
    let zyx血量3 = 0
    let zyxprojectile: Sprite = null
    let zyxboss2: Sprite = null
    let zyx额济纳喜上加喜是谁机会 = 0
    let zyx智障 = 0
    let zyx事事顺遂 = 0
    let zyx再见: Sprite = null
    let zyx核核核 = 0
    let zyx核: Sprite = null
    let zyx桃子: Sprite = null
    let zyx内部 = 0
    let zyx呜呜呜: Sprite = null
    let zyx变得 = 0
    
    export function init(){
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            zyx内部 = 3
            animation.runImageAnimation(
            zyx呜呜呜,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            500,
            false
            )
        })
        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
            
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx桃子, function (sprite, otherSprite) {
            tiles.placeOnRandomTile(zyx桃子, myTiles.zyxtile15)
            info.changeLifeBy(-1)
            pause(5000)
            zyx核 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . e e e e . . . 
                . . . . . . . . e e e e e e . . 
                . . . e . . . e e e e e e e e . 
                . . . e e e e e f e e e e e e . 
                . . . e e e e e e e e e e e e . 
                . . . e e e e e e e e e e e e . 
                . . . . e e 2 e 2 e e e e e . . 
                . . . . . . . 2 e e e e e e . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, zyx桃子, 50, 50)
            zyx核核核 += 1
            if (zyx核核核 == 10) {
                zyx核.lifespan = 0.1
            }
        })
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (2 == zyx变得) {
                if (zyx内部 == 1) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . 5 2 2 2 2 2 2 2 2 2 2 2 5 . . 
                        . 5 2 2 2 2 2 2 2 2 2 2 2 5 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, zyx呜呜呜, -100, 0)
                }
                if (zyx内部 == 2) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
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
                        . . . . 5 2 2 2 2 2 2 2 2 2 2 5 
                        . . . . 5 2 2 2 2 2 2 2 2 2 2 5 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, zyx呜呜呜, 100, 0)
                }
                if (zyx内部 == 3) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 5 5 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 5 5 . . . . . . . . . 
                        `, zyx呜呜呜, 0, -100)
                }
                if (zyx内部 == 4) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 5 5 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 5 5 . . . . . . . . . 
                        `, zyx呜呜呜, 0, 100)
                }
                zyx再见.setKind(SpriteKind.zyx待会吧)
            }
            if (30 == zyx事事顺遂) {
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx待会吧)
                if (zyx内部 == 1) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . 4 4 4 1 1 4 4 4 . . 
                        . . . . . . 4 f 4 9 9 4 f 4 . . 
                        . . . . . . 4 4 4 f f 4 4 4 . . 
                        . . . . . . 4 a 6 7 7 6 a 4 . . 
                        . . . . . . 4 a a 8 8 a a 4 . . 
                        . . . . . . 4 5 d f f d 5 4 . . 
                        . . . . . . 4 5 5 c c 5 5 4 . . 
                        . . . . . . 4 e e 3 b e e 4 . . 
                        . . . . . . 4 2 e b 3 e 2 4 . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, zyx呜呜呜, -100, 0)
                }
                if (zyx内部 == 2) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . 4 4 4 1 1 4 4 4 . . 
                        . . . . . . 4 f 4 9 9 4 f 4 . . 
                        . . . . . . 4 4 4 f f 4 4 4 . . 
                        . . . . . . 4 a 6 7 7 6 a 4 . . 
                        . . . . . . 4 a a 8 8 a a 4 . . 
                        . . . . . . 4 5 d f f d 5 4 . . 
                        . . . . . . 4 5 5 c c 5 5 4 . . 
                        . . . . . . 4 e e 3 b e e 4 . . 
                        . . . . . . 4 2 e b 3 e 2 4 . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, zyx呜呜呜, 100, 0)
                }
                if (zyx内部 == 3) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . 4 4 4 1 1 4 4 4 . . 
                        . . . . . . 4 f 4 9 9 4 f 4 . . 
                        . . . . . . 4 4 4 f f 4 4 4 . . 
                        . . . . . . 4 a 6 7 7 6 a 4 . . 
                        . . . . . . 4 a a 8 8 a a 4 . . 
                        . . . . . . 4 5 d f f d 5 4 . . 
                        . . . . . . 4 5 5 c c 5 5 4 . . 
                        . . . . . . 4 e e 3 b e e 4 . . 
                        . . . . . . 4 2 e b 3 e 2 4 . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, zyx呜呜呜, 0, -100)
                }
                if (zyx内部 == 4) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . 4 4 4 1 1 4 4 4 . . 
                        . . . . . . 4 f 4 9 9 4 f 4 . . 
                        . . . . . . 4 4 4 f f 4 4 4 . . 
                        . . . . . . 4 a 6 7 7 6 a 4 . . 
                        . . . . . . 4 a a 8 8 a a 4 . . 
                        . . . . . . 4 5 d f f d 5 4 . . 
                        . . . . . . 4 5 5 c c 5 5 4 . . 
                        . . . . . . 4 e e 3 b e e 4 . . 
                        . . . . . . 4 2 e b 3 e 2 4 . . 
                        . . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, zyx呜呜呜, 0, 100)
                }
                zyx再见.setKind(SpriteKind.zyxjhjhhi)
            }
            if (223 == zyx智障) {
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyxjhjhhi)
                if (zyx内部 == 1) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        `, zyx呜呜呜, -100, 0)
                }
                if (zyx内部 == 2) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        `, zyx呜呜呜, 100, 0)
                }
                if (zyx内部 == 3) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        `, zyx呜呜呜, 0, -100)
                }
                if (zyx内部 == 4) {
                    zyx再见 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b b b b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . b b b b b e e b b b b b . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        . . . . . . e e . . . . . . . . 
                        `, zyx呜呜呜, 0, 100)
                }
                zyx再见.setKind(SpriteKind.zyxxxxx)
            }
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx啊啊啊, function (sprite, otherSprite) {
            info.changeScoreBy(1)
            zyx额济纳喜上加喜是谁机会 += 1
            if (zyx额济纳喜上加喜是谁机会 > 1) {
                tiles.placeOnRandomTile(zyxboss2, sprites.castle.tilePath5)
                zyxprojectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    1 . . 1 . . . . . . . . . . . . 
                    . 2 2 2 2 5 2 2 2 2 2 2 f 2 1 . 
                    . 2 5 2 2 2 2 2 5 2 2 2 2 2 2 2 
                    . 2 2 2 5 2 2 2 2 2 2 2 f 2 1 . 
                    1 . . 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, zyxboss2, 100, 100)
                zyxprojectile.follow(zyx呜呜呜, 70)
                zyxprojectile.setKind(SpriteKind.zyxMMS)
            }
        })
        sprites.onOverlap(SpriteKind.zyxMMS, SpriteKind.zyxMMS, function (sprite, otherSprite) {
            otherSprite.destroy(effects.disintegrate, 500)
            sprite.destroy(effects.disintegrate, 500)
        })
        sprites.onOverlap(SpriteKind.zyxboss33, SpriteKind.zyxxxxx, function (sprite, otherSprite) {
            zyx血量3 += -0.5
            cubicbird.displayHitPointBar(zyx血量3)
            if (zyx血量3 == 0) {
                scene.cameraFollowSprite(zyxboss3)
                animation.runImageAnimation(
                zyxboss2,
                [img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b b b b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b b b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b b b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b b b b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b b b b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b b b b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b b b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 2 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 2 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b b b b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b b 1 b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b b b b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b b b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 2 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 2 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b b b b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b b 1 b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 2 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 2 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b b b b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b b 1 b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 1 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b b b b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b b 1 b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 1 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 1 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 b . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 b b b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 b b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 b b b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 b b b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 b b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b b 1 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 1 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 2 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 1 1 b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 1 1 b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 1 b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 b b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b b b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 2 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 1 2 2 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 2 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 2 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 b b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 1 1 b b b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 1 1 b b b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 1 b b b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b b b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 1 b b b f f f b b b b b b b b . . 
                    b b b b b b b b b b b 1 b 1 b b b f f f b b b b b b b b b . 
                    b b b b b b b b b b b 1 b 1 b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 b 1 b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 2 2 2 2 b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 2 2 2 2 b b b b b b b b b b b b 
                    b b b b 2 2 2 b b b 2 1 2 1 2 2 2 b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 2 b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b 1 b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 1 b b 1 f f f b b b b b b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f b b b b b b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b b b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 b b b b b b 1 b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b 1 1 b b b b b b b 
                    b b b b b b b b b b b 1 1 1 2 2 2 2 b b b b b 1 b b b b b b 
                    b b b b b b b b b b b 1 1 1 2 2 2 2 b b b b b b 1 1 b b b b 
                    b b b b 2 2 2 b b b 2 1 2 1 2 2 2 b b b b b b b b b 1 1 1 b 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 2 b b b b b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b b b b b b 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f f f b b b 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f f f b b b 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f f f b b b b 1 1 b b 1 b f f f b b b b b b b . . . 
                    b b b b b b b b b b b 1 1 1 b b 1 f f f b b b b b b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f b b b b b b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b b b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 b b b b b b 1 b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b 1 1 b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b b b 1 b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b b b b 1 1 b b b b 
                    b 1 1 1 1 1 2 b b b 2 1 2 1 2 2 2 b b b b b b b b b 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 2 b b b b b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f b b b b b b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f b b b b b b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f b b b b b b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b b b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 b b b b b b 1 b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b 1 1 b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b b b 1 b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 1 1 2 2 2 2 b b b b b b 1 1 b b b b 
                    b 1 1 1 1 1 2 b b b 2 1 2 1 2 2 2 b b b b b b b b b 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 2 b b b b b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f b b b b b b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f b b b b b b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f b b b b b b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b b b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 b b b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b 1 b b b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 2 2 2 b b b 1 1 b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 2 2 2 b b b b b 1 b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 2 2 2 b b b b b b 1 1 b b b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 2 2 b b b b b b b b b 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 2 b b b b b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f b b b b b b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f b b b b b b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f b b b b b b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b b b b b b b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 b b b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b 1 b b b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b b 1 1 b b b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 b b b b b b 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b 1 b b b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 b b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 b b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b b 1 1 b b b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 b b b b b b 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 b b b . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 b b b b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b 1 b b b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b 1 b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 b b b 1 1 1 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b 1 b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 b b b 1 1 1 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 b b b b b b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b b b b b b b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b b b b b b b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 b b 1 f f f 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b 1 1 f f 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 b b b b b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b 1 b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b 1 1 1 1 1 b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 b f f f 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 1 1 1 1 f f 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 f f 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b b 1 b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b 1 1 1 1 1 b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 1 1 1 1 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b b 1 b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 b b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b 1 1 1 1 1 b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 1 1 1 1 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 b 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 b 1 1 1 1 1 1 b b b b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b 1 1 1 1 1 b b b b b 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b 1 1 1 1 1 b b b b b 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b . . . . . 
                    b b b b f 1 1 1 1 1 b 1 1 b b 1 1 1 1 1 1 1 1 1 1 b b . . . 
                    b b b b b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b b b b b 1 b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b 1 1 1 1 1 1 1 1 1 1 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b 1 1 1 1 1 1 1 1 1 1 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b 1 1 1 1 1 b 1 1 1 1 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . b b b b b b b 1 1 1 . . . . . . . . . . . . . . . . 
                    . . . b b b b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . 
                    . b b b b b b b b b 1 1 1 1 1 1 1 b b b . . . . . . . . . . 
                    b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b . . . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b . . . . . 
                    b b b b f 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 b b . . . 
                    b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . 
                    b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 b 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 2 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b 1 1 1 1 1 2 2 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    b b b b 2 2 2 2 2 2 2 1 1 2 1 b b b b b 1 1 1 1 1 1 1 1 1 1 
                    b b b b 2 2 2 2 2 2 2 2 1 b b 1 b b b b 1 1 1 1 1 1 1 1 1 1 
                    b b b b b b b b b b b 1 1 1 b 1 b b b b 1 1 1 1 1 b 1 1 1 1 
                    b b b b b b b b b b b 1 1 1 . . 1 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . 1 1 1 1 1 1 1 . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 1 . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . 1 1 1 1 1 1 1 . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 b . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 1 . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . 1 1 1 1 1 1 1 . 1 1 . . . . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 b . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 4 4 4 4 4 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 1 . . . . . . . 1 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `],
                500,
                false
                )
                pause(25000)
                scene.cameraFollowSprite(zyx呜呜呜)
                tiles.placeOnRandomTile(zyx呜呜呜, sprites.dungeon.collectibleInsignia)
                zyx啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦 = 22
            }
            if (zyx血量3 == 0) {
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Food)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Enemy)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.Enemy)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.梳子)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx吧宝贝)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.翟云霄吧宝贝)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx上课吗)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx各国)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx教师资格证)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx所)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyxTNT)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx天天)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx广告)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx金箍棒)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx箱)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx住)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx钥匙)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx桃子)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx哈哈哈)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx乒乒乓乓)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx待会吧)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zyx啊啊啊)
                gamejam.roomFinished(true)
            }
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx教师资格证, function (sprite, otherSprite) {
            if (zyx死地而 == 9) {
                zyx啊啊啊啊啊呜呜呜呜 = 11
                info.changeScoreBy(1)
                otherSprite.setFlag(SpriteFlag.Ghost, true)
                otherSprite.say("这是终极难度。")
                tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020602080502040404040d0404040402050205050502040404040d0d040404020508090a0b0204040404040d0d0404020505050c050204040d04040d040d04020705050c0502040d0404040d0d0d04020205050c05020404040d0404040404020205050c05020404040d0404040404020205050c050204040d040d040d0404020205050c0502040d0d0d0d0d040404020205050c050204040d0d0d0d040404020205050c0502040404040d040d0404020205050c05020404040d0d04040404020205050c0502040404040d0404040402020503010502040d040404040404040202020202020202020202020202020202`, img`
                    . . . . . 2 . . . . . . . . . . 
                    . . 2 2 . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    2 . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29,myTiles.zyxtile2,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen))
                pause(1000)
                tiles.setTilemap(tiles.createTilemap(hex`10001000020202020202020202020202020202020206020805020404040e04040e0404020502050505020404040404040e0404020508090a0b0204040e0e0404040404020505050d050204040404040404040e020705050d05020e040e040e040e0404020205050d0502040404040404040e04020205050d050204040e040404040404020205050d050204040e040e040e0404020205050d0502040404040404040404020205050d0502040e040404040e0e04020205050d05020404040e0e040e0404020205050d0c0204040404040404040402020505050d02040e04040e04040e0402020503010d020404040404040e040402020202020d0c02020202020202020202`, img`
                    . . . . . 2 . . . . . . . . . . 
                    . . 2 2 . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    2 . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29,myTiles.zyxtile4,myTiles.zyxtile30,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen))
                otherSprite.destroy()
                zyxboss3 = sprites.create(img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . b b b b b . . . . . . . . . . . . 
                    . . . . . . . . b b b b b b b b b b . . . . . . . 
                    . b . . . . . b b b b b b b b b b b . . . . . . . 
                    . b b . . . . b b b b b b b b b b b . . . . b b b 
                    . . b . . . b b b b b b b b b b b b b b . . b . . 
                    . . b . b b b b b b b b b b b b b b b b b . b . . 
                    . . b b b b b b b b b b b b b b b f b b b b b b b 
                    . b b b b f f b b b b b b b b b f b b b b b b b b 
                    . b b b b b f f f b b b b b f f b b b b b b b b b 
                    b b b b b b b b f f b b b b f b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b 
                    b b b b b b f 2 b b b b b b 2 2 2 2 b b b b b b b 
                    b b b b b b b 2 2 2 2 2 2 2 b b b b b b b b b b b 
                    b b b b b b b b b b b b b b b b b b b b b b b b b 
                    . . . . b . . . . . . . . . . . . . b . . . . . . 
                    . . . . b . . . . . . . . . . . . . b . . . . . . 
                    . . . b b . . . . . . . . . . . . . b b b . . . . 
                    . . . b b . . . . . . . . . . . . . b b b . . . . 
                    b b b b b . . . . . . . . . . . . . b b b b b b b 
                    . b b b b . . . . . . . . . . . . . b b b b b . . 
                    . b b b b . . . . . . . . . . . . . b b b b b . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `, SpriteKind.zyxboss33)
                zyx智障 = 223
                zyx血量3 = 100
                tiles.placeOnRandomTile(zyxboss3, sprites.dungeon.floorDarkDiamond)
                cubicbird.displayHitPointBar(zyx血量3)
            }
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            zyx内部 = 1
            animation.runImageAnimation(
            zyx呜呜呜,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            500,
            false
            )
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx箱, function (sprite, otherSprite) {
            otherSprite.setFlag(SpriteFlag.Ghost, true)
            otherSprite.destroy()
            info.changeScoreBy(1)
            if (zyx变脸 == 1) {
                zyx刚刚 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 2 2 . . . . . . . . 
                    . . . . . . 5 5 . . . . . . . . 
                    `, SpriteKind.zyx金箍棒)
                tiles.placeOnRandomTile(zyx刚刚, myTiles.zyxtile27)
                zyx威 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 4 4 4 4 . . 
                    . . . . . . 4 4 4 1 1 4 4 4 . . 
                    . . . . . . 4 f 4 9 9 4 f 4 . . 
                    . . . . . . 4 4 4 f f 4 4 4 . . 
                    . . . . . . 4 a 6 7 7 6 a 4 . . 
                    . . . . . . 4 a a 8 8 a a 4 . . 
                    . . . . . . 4 5 d f f d 5 4 . . 
                    . . . . . . 4 5 5 c c 5 5 4 . . 
                    . . . . . . 4 e e 3 b e e 4 . . 
                    . . . . . . 4 2 e b 3 e 2 4 . . 
                    . . . . . . 4 4 4 4 4 4 4 4 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.zyx上课吗)
                tiles.placeOnRandomTile(zyx威, myTiles.zyxtile28)
                zyx搅屎棍 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . b b b b b b b b b b b b b . . 
                    . b b b b b b b b b b b b b . . 
                    . b b b b b b b b b b b b b . . 
                    . b b b b b b b b b b b b b . . 
                    . b b b b b b b b b b b b b . . 
                    . b b b b b b b b b b b b b . . 
                    . b b b b b e e e e b b b b . . 
                    . b b b b b e e e e b b b b . . 
                    . . . . . . e e e e . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    `, SpriteKind.zyx教师资格证)
                tiles.placeOnRandomTile(zyx搅屎棍, myTiles.zyxtile29)
            }
        })
        sprites.onOverlap(SpriteKind.zyx桃子, SpriteKind.zyx待会吧, function (sprite, otherSprite) {
            zyx血量 += -5
            cubicbird.displayHitPointBar(zyx血量)
            if (zyx血量 == 0) {
                scene.cameraFollowSprite(zyx桃子)
                animation.runImageAnimation(
                zyx桃子,
                [img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 . . . . . . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 . . . . . . . . . . . 
                    . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . 
                    . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 e e 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 e e 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 e 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 e 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 e 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 e 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 e 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 e 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 e 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 e 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 e 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 e 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 3 3 3 3 3 3 e 3 3 3 e 3 3 3 3 3 3 3 3 e 3 e . . 
                    . . . . 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . 
                    . . . e 3 e 3 3 3 3 3 3 3 3 3 3 2 3 3 3 3 3 3 3 e 3 3 . . . 
                    . . . . 2 2 . . . . . e . . . . 2 . . . 2 . . . . . . . . . 
                    . . . 2 2 . . . . . . 2 . . . . 2 . . . 2 . . 2 2 . . . . . 
                    . . . 2 . . . . . . . 2 . . . . 2 . . . . 2 . 2 . . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . 2 . . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . 2 . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . 2 2 . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . 
                    . . . . . . . . . . . 2 2 . . . 2 . . . . . . . . 2 . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 e 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 2 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 2 2 3 3 3 3 e 3 3 2 3 2 2 2 3 3 3 . . . . 
                    . . . . . . 3 3 3 2 3 3 3 3 3 2 3 3 2 e 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 2 3 3 3 3 e 3 2 2 3 3 2 2 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 2 e 3 3 2 3 2 2 3 3 2 2 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 2 3 3 3 2 2 e 3 3 3 e 3 3 3 3 2 2 3 3 e 3 e . . 
                    . . . . 3 e 3 3 2 3 2 3 3 3 3 3 3 3 3 e 3 3 2 3 3 3 3 . . . 
                    . . . e 3 e 3 3 2 3 3 3 3 3 3 3 2 3 3 2 3 3 3 3 e 3 3 2 . . 
                    . . . . 2 2 . . 2 . . e . . . . 2 . . 2 2 . . . . . . 2 . . 
                    . . . 2 2 . . . 2 . . 2 . . . . 2 . . . 2 . . 2 2 . . 2 . . 
                    . . . 2 . . . . 2 . . 2 . . . . 2 . . . . 2 . 2 . . . 2 2 . 
                    . . . 2 . . . 2 2 . . . 2 . . . 2 . . . . 2 . 2 . . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . 2 . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . 2 2 . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . 
                    . . . . . . . . . . . 2 2 . . . 2 . . . . . . . . 2 . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . 
                    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . . . 
                    . . . . . . . . . . . . 3 3 3 3 3 3 e 3 3 3 3 . . . . . . . 
                    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
                    . . . . . . . . . . 3 3 3 3 e 3 3 3 3 3 3 e 3 3 3 . . . . . 
                    . . . . . . . . 3 3 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 3 2 3 3 3 3 3 3 3 e 3 3 3 3 3 3 3 . . . . 
                    . . . . . . . 3 3 2 2 3 3 3 3 e 3 3 2 3 2 2 2 3 3 3 . . . . 
                    . . . . . . 3 3 3 2 3 3 3 3 3 2 3 3 2 e 3 3 3 e 3 3 3 . . . 
                    . . . . . 3 3 2 3 3 3 3 e 3 2 2 3 3 2 2 3 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 2 e 3 3 2 3 2 2 3 3 2 2 3 e 3 3 3 3 3 3 . . . 
                    . . . . 3 e 2 3 3 3 2 2 e 3 3 3 e 3 3 3 3 2 2 3 3 e 3 e . . 
                    . . . . 3 e 3 3 2 3 2 3 3 3 3 3 3 3 3 e 3 3 2 3 3 3 3 . . . 
                    . . . e 3 e 3 3 2 3 3 3 3 3 3 3 2 3 3 2 3 3 3 3 e 3 3 2 . . 
                    . . . . 2 2 . . 2 . . e . . . . 2 . . 2 2 . . . . . . 2 . . 
                    . . . 2 2 . . . 2 . . 2 . . . . 2 . . . 2 . . 2 2 . . 2 . . 
                    . . . 2 . . . . 2 . . 2 . . . . 2 . . . . 2 . 2 . . . 2 2 . 
                    . . . 2 . . . 2 2 . . . 2 . . . 2 . . . . 2 . 2 . . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . 2 . . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . 2 2 . . . . 
                    . . . 2 . . . . . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . 
                    . . . . . . . . . . . 2 2 . . . 2 . . . . . . . . 2 . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . e e e e e e . . . . . . . . . . . . 
                    . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
                    . . . . . . . . . . . e e e e e e e e e . . . . . . . . . . 
                    . . . . . . . . . . e e e e e e e e e e e . . . . . . . . . 
                    . . . . . . . . . e e e e e e e e e e e e . . . . . . . . . 
                    . . . . . . . . e e e e e e e e e e e e e e . . . . . . . . 
                    . . . . . . . . e e e e e e e e e e e e e e e . . . . . . . 
                    . . . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
                    . . . . . . e e e e e e e e e e e e e e e e e e e . . . . . 
                    . . . . . e e e e f e e e e e e e e f e e e e e e e . . . . 
                    . . . . e e e e e e e e e e e e e e e e e e e e e e . . . . 
                    . . e e e e e e e e e e e e e e e e e e e e e e e e e . . . 
                    . e e e e e e e e e e e e e e e e e e e e e e e e e e e . . 
                    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
                    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
                    e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e 
                    e e e e e e e f e e e e e e e e e e e e e f e e e e e e e e 
                    e e e e e e e e f f f e e e e e e e e e f f e e e e e e e e 
                    e e e e e e e e e e f f f f f f f f f f e e e e e e e e e e 
                    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
                    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
                    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `],
                500,
                false
                )
                pause(10000)
                scene.cameraFollowSprite(zyx呜呜呜)
                tiles.placeOnRandomTile(zyx呜呜呜, sprites.dungeon.collectibleInsignia)
                game.splash("请继续跟着箭头走。", "Please 永远跟着箭头走。")
                zyx智障 = 2
            }
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx上课吗, function (sprite, otherSprite) {
            if (zyx智障 == 2) {
                zyx事事顺遂 = 30
                info.changeScoreBy(1)
                otherSprite.setFlag(SpriteFlag.Ghost, true)
                otherSprite.say("这是中级难度")
                tiles.setTilemap(tiles.createTilemap(hex`10001000020202020202020202020202020202020206020805020c0c04040404040c0c020502050505020404040c0c0c0c0c0c020508090a0b0204040404040404040c020505050d0502040c0404040404040c020705050d0502040c04040c0c0c0c04020205050d0502040c04040404040c04020205050d0502040c04040404040c04020205050d0502040c0c0c0c04040404020205050d0502040404040404040404020205050d0502040404040404040c04020205050d0502040c0c0c0c04040c04020205050d0502040c04040404040c04020205050d0502040c040c0c0c0c0c04020205030105020c0c04040404040c0c0202020202020202020202020202020202`, img`
                    . . . . . 2 . . . . . . . . . . 
                    . . 2 2 . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    2 . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29,sprites.castle.tilePath5,myTiles.zyxtile2], TileScale.Sixteen))
                pause(1000)
                tiles.setTilemap(tiles.createTilemap(hex`10001000020202020202020202020202020202020206020805020c0c04040404040c0c020502050505020404040c0c0c0c0c0c020508090a0b0204040404040404040c020505050e0502040c0404040404040c020705050e0502040c04040c0c0c0c04020205050e0502040c04040404040c04020205050e0502040c04040404040c04020205050e0502040c0c0c0c04040404020205050e0502040404040404040404020205050e0502040404040404040c04020205050e0502040c0c0c0c04040c04020205050e0d02040c04040404040c0402020505050e02040c040c0c0c0c0c0402020503010e020c0c04040404040c0c02020202020e0d02020202020202020202`, img`
                    . . . . . 2 . . . . . . . . . . 
                    . . 2 2 . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . 2 . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    2 . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29,sprites.castle.tilePath5,myTiles.zyxtile4,myTiles.zyxtile30], TileScale.Sixteen))
                otherSprite.destroy()
                zyxboss2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 1 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . f f f 1 1 1 1 f f f 1 . . . . 
                    . . . . 1 f f f 1 1 1 1 f f f 1 . . . . 
                    . . . 1 1 f f f 1 1 1 1 f f f 1 . . . . 
                    . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . . . 1 1 1 1 1 9 2 2 9 1 1 1 1 . . . . 
                    9 9 9 9 1 1 1 1 2 9 9 2 1 1 1 9 9 9 9 9 
                    9 9 9 5 5 5 5 5 9 2 2 9 5 5 5 5 9 9 9 9 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . 
                    . . . . . 5 5 5 5 5 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . 
                    `, SpriteKind.zyx啊啊啊)
                zyx智障 = 1
                zyx血量2 = 100
                tiles.placeOnRandomTile(zyxboss2, sprites.castle.tilePath5)
                cubicbird.displayHitPointBar(zyx血量2)
                zyx死地而 = 9
            }
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx金箍棒, function (sprite, otherSprite) {
            info.changeScoreBy(1)
            otherSprite.setFlag(SpriteFlag.Ghost, true)
            zyx变得 = 2
            otherSprite.say("这是低级难度。")
            tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020702090602040404040404040404020602060606020404040404040504040206090b0c0d02040404040404040404020606061006020405040404040404050208060610060204040404040404040402020606100602040404040504040404020206061006020404040404040405040202060610060204050404040404040402020606100602040404040404040404020206061006020404040404040504040202060610060204040504040404040402020606100f0204040404040404040402020606061002040404040405040405020206030110020a0e0404040404040402020202020f0f0f0f0202020202020202`, img`
                . . . . . . . . . . . . . . . . 
                . . 2 2 . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                2 . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.forestTiles10,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile16,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29,myTiles.zyxtile2,myTiles.zyxtile4,myTiles.zyxtile30], TileScale.Sixteen))
            pause(5000)
            tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020702090602040404040404040404020602060606020404040404040504040206090b0c0d0204040404040404040402060606060602040504040404040405020806060606020404040404040404040202060606060204040404050404040402020606060602040404040404040504020206060606020405040404040404040202060606060204040404040404040402020606060602040404040404050404020206060606020404050404040404040202060606060204040404040404040402020606060602040404040405040405020206030106020a04040404040404040202020202020202020202020202020202`, img`
                . . . . . . . . . . . . . . . . 
                . . 2 2 . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                2 . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.forestTiles10,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile16,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29], TileScale.Sixteen))
            otherSprite.destroy()
            zyx桃子 = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . 3 3 3 3 . . . . . . . 
                . . . . . . . 3 3 3 3 3 3 . . . . . . . 
                . . . . . . . 3 3 3 3 3 3 . . 3 3 3 . . 
                . . . . . . 3 3 3 3 3 3 3 . 3 3 3 3 3 . 
                . . . 3 3 3 3 3 f 3 3 3 3 3 . 3 3 3 3 . 
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 f 3 3 3 3 3 3 3 3 f 3 3 3 3 3 3 3 
                3 3 3 3 3 2 3 3 3 2 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 2 3 2 3 2 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 2 3 3 3 3 3 2 3 3 3 3 3 3 3 3 . 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . . 3 3 . . . . . . . 3 3 3 3 3 3 . . 
                . . . 3 . . . . . . . . . . 3 3 3 . . . 
                . . 3 . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                `, SpriteKind.zyx桃子)
            zyx智障 = 0
            zyx血量 = 100
            cubicbird.displayHitPointBar(zyx血量)
            tiles.placeOnRandomTile(zyx桃子, myTiles.zyxtile16)
            zyx桃子.setVelocity(100, 100)
            zyx桃子.setFlag(SpriteFlag.BounceOnWall, true)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            zyx内部 = 2
            animation.runImageAnimation(
            zyx呜呜呜,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            500,
            false
            )
        })
        sprites.onOverlap(SpriteKind.zyx啊啊啊, SpriteKind.zyxjhjhhi, function (sprite, otherSprite) {
            zyx血量2 += -1
            cubicbird.displayHitPointBar(zyx血量2)
            if (zyx血量2 == 0) {
                scene.cameraFollowSprite(zyxboss2)
                animation.runImageAnimation(
                zyxboss2,
                [img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
                    1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 
                    1 1 f f 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 f f 
                    1 f 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f f 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 1 1 1 1 
                    1 1 1 1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 1 1 1 1 
                    1 1 1 1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 1 1 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 
                    1 1 f f 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 f f 
                    1 f 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f f 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 f 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f f 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 f 
                    f 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f f 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 f 5 
                    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
                    5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 
                    5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 
                    1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 
                    1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 
                    5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 
                    5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 
                    5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 
                    5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
                    5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 5 5 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 5 5 5 5 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 5 5 5 5 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 
                    5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 
                    5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `,img`
                    . . e . . . . . . . . . . . . . . . . e . . . . . . . e e . 
                    . e . . . . . . . . . . . . . . . e e . . . . . . e e . . . 
                    . e . . . . . . . . . . . . . f e . . . . . . e e . . . . . 
                    . e . . . . . f f . . . . . f e . . . . . . e . . . . . . . 
                    e . . . . . f . . . . . . f . e . . . . e e . . . . . . . . 
                    e . . . . . f e . . . . . f e . . . . e . f f . . . . . . . 
                    e . . . . f . e . . . . f . e . . . e . f . . . . . . . . . 
                    e . . . . f . e . . . f . e . . . e . f . . . . . . . . . . 
                    e . . . f . . e . . . f . e . . e . f . f . . . . . . . . . 
                    e . . . f . e . . . f . e . . e . f . f . . . . . . . . . . 
                    e . . f . . e . . f . . e . e . f . f . . . . . . . . e e . 
                    . e . f . . e . . f . . e . e . f f . . . . . e e e e e e e 
                    . e . f . . e . . f . e . e . f f . . e e e e f e . e e . . 
                    . e f . . e e . . f . e e . f f . e e . . f e e e e . . . . 
                    . . f . e . e . . . f e e . f e e . . . f e e . . . . . . . 
                    . . f . e . e . . f . e e f e . . . . f e . . . . . . . . . 
                    . . e e . . e . f . . e e e . . . f f . . . . . . . . . . . 
                    . . e . . . f e . . . e e . . . f . . . . e e e e e e e e e 
                    . e . . . f e e . . . e e . . e e e e e e . . . . . . . . . 
                    . . . . f e f e . f e e f . . e e e e e . . . f f f f f . . 
                    . . . f e f . . e e e e . . e . . . f f e e f . . . . . f f 
                    . . . f e f . . f e e . . e e . . . . . . . e e . . . . . . 
                    . . f e f . . . e e . e f e e f . . . . . . . . e . . . . . 
                    . . f e . . . f e e . e e e e . f . . . f f f f f e . . . . 
                    . f e . . . . e . . . e e . . e f . . . . . . . . . e f . . 
                    f . e . . . . e . . . e e . . e f . . . . . . . . . . e . . 
                    f e . . . . e . . . e f e . . . e . . . . . . . . . . . e . 
                    f . . . . . e . . . e e e . . . f e . . . . . . . . . . e . 
                    f . . . . e f . . e . f . e . . f . e . . . . . . . . . . e 
                    . . . . . . f . e . . . . . . . . . . e . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `],
                500,
                false
                )
                pause(25000)
                scene.cameraFollowSprite(zyx呜呜呜)
                tiles.placeOnRandomTile(zyx呜呜呜, sprites.dungeon.collectibleInsignia)
                zyx啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦 = 22
            }
        })
        sprites.onOverlap(SpriteKind.zyx住, SpriteKind.zyx钥匙, function (sprite, otherSprite) {
            otherSprite.destroy()
            zyx变脸 = 1
            tiles.setTilemap(tiles.createTilemap(hex`100010000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0a0c03050b0d0606060606060606060d08030b0b0b0d0606060606060606060d08050e0f100d0606060606060606060d0909090b0b0d0606060606060606060d020b0b080b0d0606060606060606060d0d0b0b080b0d0606060606060606060d0d0b0b080b0d0606060606060606060d0d0b0b080b0d0606060606060606060d0d0b0b080b0d0606060606060606060d0d0b0b080b0d0606060606060606060d0d0b0b080b0d0606060606060606060d0d0b0b080b0d0d06060606060606060d0d0b0b080b0d0606060606060606060d0d0b04010b0d0606060606060606070d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`, img`
                . . . . . . . . . . . . . . . . 
                . . 2 2 . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                2 . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.oceanDepths10,sprites.builtin.oceanDepths11,myTiles.zyxtile2,myTiles.zyxtile3,myTiles.zyxtile4,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29], TileScale.Sixteen))
            zyx_箱子 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 
                f 9 1 1 1 1 1 1 1 1 1 1 1 1 9 f 
                9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 
                9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 
                9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 
                9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 
                9 9 7 7 7 7 7 7 7 7 7 7 7 7 9 9 
                9 9 7 7 7 7 7 7 7 7 7 7 7 7 9 9 
                9 9 7 7 7 7 7 7 7 7 7 7 7 7 9 9 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                2 2 9 9 9 9 9 9 9 9 9 9 9 9 2 2 
                9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                `, SpriteKind.zyx箱)
            tiles.placeOnRandomTile(zyx_箱子, sprites.builtin.forestTiles0)
            game.splash("跟着箭头走。")
            pause(5000)
            tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020702090602040404040404040404020602060606020404040404040504040206090b0c0d0204040404040404040402060606060602040504040404040405020806060606020404040404040404040202060606060204040404050404040402020606060602040404040404040504020206060606020405040404040404040202060606060204040404040404040402020606060602040404040404050404020206060606020404050404040404040202060606060204040404040404040402020606060602040404040405040405020206030106020a04040404040404040202020202020202020202020202020202`, img`
                . . . . . 2 . . . . . . . . . . 
                . . 2 2 . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . 2 . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                2 . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.forestTiles10,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15,sprites.dungeon.stairLadder,myTiles.zyxtile16,myTiles.zyxtile27,myTiles.zyxtile28,myTiles.zyxtile29], TileScale.Sixteen))
        })
        sprites.onOverlap(SpriteKind.zyxMMS, SpriteKind.zyx住, function (sprite, otherSprite) {
            sprite.destroy(effects.rings, 500)
            info.changeLifeBy(-1)
            pause(10000)
            info.changeScoreBy(-1)
            zyx额济纳喜上加喜是谁机会 += 1
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            zyx内部 = 4
            animation.runImageAnimation(
            zyx呜呜呜,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `],
            500,
            false
            )
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
            
        })

        info.setLife(10)
        tiles.setTilemap(tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a090305080a0606060606060606060a08030808080a0606060606060606060a08050808080a0606060606060606060a08080808080a0606060606060606060a02080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080808080a0606060606060606060a0a080401080a0606060606060606070a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 . 2 . . . . . . . . . . 
            . 2 . . . 2 . . . . . . . . . . 
            . 2 . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            2 . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.oceanDepths10,sprites.builtin.oceanDepths11,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile15], TileScale.Sixteen))
        let zyxsaaaaaaaaaaaaaaa = 0
        zyx变得 = 0
        zyx呜呜呜 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.zyx住)
        tiles.placeOnRandomTile(zyx呜呜呜, sprites.dungeon.collectibleInsignia)
        scene.cameraFollowSprite(zyx呜呜呜)
        let zyx钥匙 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 . . . 5 . 5 . 5 . 5 . 5 . 
            5 5 5 . . . 5 . 5 . 5 . 5 . 5 . 
            . . . . . . 5 . 5 . 5 . 5 . 5 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.zyx钥匙)
        tiles.placeOnRandomTile(zyx钥匙, sprites.dungeon.floorLight2)
        controller.moveSprite(zyx呜呜呜, 100, 100)
        gamejam.onMyGameUpdateInterval(3000, function () {
            tiles.placeOnRandomTile(zyxboss3, sprites.dungeon.floorDarkDiamond)
        })
        gamejam.onMyGameUpdateInterval(3000, function () {
            tiles.placeOnRandomTile(zyxboss2, sprites.castle.tilePath5)
        })
    }
}