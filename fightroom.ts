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
}
namespace fightroom {

    let zyx桃子: Sprite = null
    let zyx十三水: Sprite = null
    let zyx变得 = 0
    let zyx内部 = 0
    let zyx搅屎棍: Sprite = null
    let zyx威: Sprite = null
    let zyx刚刚: Sprite = null
    let zyx变脸 = 0
    let zyx呜呜呜: Sprite = null
    
    export function init(){
        sprites.onOverlap(SpriteKind.zyx, SpriteKind.zyx吧宝贝, function (sprite, otherSprite) {
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
                `, SpriteKind.zyx各国)
            tiles.placeOnRandomTile(zyx刚刚, myTiles.zyxtile12)
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
            tiles.placeOnRandomTile(zyx威, myTiles.zyxtile13)
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
            tiles.placeOnRandomTile(zyx搅屎棍, myTiles.zyxtile14)
        }
    })
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        zyx内部 = 2
    })
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        
    })
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (zyx变得 == 2) {
            zyx十三水.setVelocity(100, 100)
            zyx十三水 = sprites.create(img`
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
                `, SpriteKind.zyx广告)
        }
        if (zyx内部 == 1) {
            zyx十三水 = sprites.createProjectileFromSprite(img`
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
                `, zyx呜呜呜, -100, 0)
        }
        if (zyx内部 == 2) {
            zyx十三水 = sprites.createProjectileFromSprite(img`
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
    })
    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        zyx内部 = 1
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.zyx各国, function (sprite, otherSprite) {
        game.splash("这是低级难度")
        otherSprite.destroy()
        zyx桃子 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 3 3 3 3 . . . 
            . . . . . . . 3 3 3 3 3 3 . . . 
            . . . . . . . 3 3 3 3 3 3 . . . 
            . . . . . . 3 3 3 3 3 3 3 . 3 . 
            . . . 3 3 3 3 3 f 3 3 3 3 3 . 3 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            . 3 3 f 3 3 3 3 3 3 3 3 f 3 3 3 
            . 3 3 3 3 2 3 3 3 2 3 3 3 3 3 3 
            . 3 3 3 3 2 3 2 3 2 3 3 3 3 3 . 
            . 3 3 3 2 3 3 3 3 3 2 3 3 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.zyx天天)
        tiles.placeOnRandomTile(zyx桃子, sprites.builtin.oceanDepths10)
        zyx变得 = 2
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.zyx上课吗, function (sprite, otherSprite) {
        
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
        
    })
    sprites.onOverlap(SpriteKind.zyx, SpriteKind.梳子, function (sprite, otherSprite) {
        otherSprite.destroy()
        zyx变脸 = 1
        tiles.setTilemap(tiles.createTilemap(hex`10001000101010101010101010101010101010100a0c03050b100606060606060606061008030b0b0b100606060606060606061008050d0e0f10060606060606060606100909090b0b1006060606060606060610020b0b080b1006060606060606060610100b0b080b1006060606060606060610100b0b080b1006060606060606060610100b0b080b1006060606060606060610100b0b080b1006060606060606060610100b0b080b1006060606060606060610100b0b080b1006060606060606060610100b0b080b1010060606060606060610100b0b080b1006060606060606060610100b04010b100606060606060606071010101010101010101010101010101010`, img`
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
            `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.oceanDepths10,sprites.builtin.oceanDepths11,myTiles.zyxtile2,myTiles.zyxtile3,myTiles.zyxtile4,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile12,myTiles.zyxtile13,myTiles.zyxtile14,myTiles.zyxtile15], TileScale.Sixteen))
        game.splash("跟着箭头走。")
        pause(5000)
        tiles.setTilemap(tiles.createTilemap(hex`100010000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d09020408070505050505050505050d0802080808070505050505050505050d08040a0b0c070505050505050505050d0808080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08080808070505050505050505050d0d08030108070505050505050505060d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`, img`
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
            `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.zyxtile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.builtin.oceanDepths10,sprites.builtin.oceanDepths11,sprites.builtin.forestTiles10,sprites.builtin.brick,sprites.builtin.forestTiles0,myTiles.zyxtile12,myTiles.zyxtile13,myTiles.zyxtile14,myTiles.zyxtile15], TileScale.Sixteen))
    })
    
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
    let zyx_箱子 = sprites.create(img`
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
        `, SpriteKind.zyx吧宝贝)
    tiles.placeOnRandomTile(zyx_箱子, sprites.builtin.forestTiles0)
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
        `, SpriteKind.zyx)
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
        `, SpriteKind.梳子)
    tiles.placeOnRandomTile(zyx钥匙, sprites.dungeon.floorLight2)
    controller.moveSprite(zyx呜呜呜)

    }
}