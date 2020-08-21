// Add your code here
namespace SpriteKind {
    export const XCX种类 = SpriteKind.create()
    export const XCX种类门 = SpriteKind.create()
    export const XCX种类血 = SpriteKind.create()
    export const XCX种类箱子一 = SpriteKind.create()
    export const XCX种类箱子二 = SpriteKind.create()
    export const XCX种类箱子三 = SpriteKind.create()
    export const XCX种类女鬼 = SpriteKind.create()
    export const XCX种类秘密 = SpriteKind.create()
    export const XCX变量秘密覆盖 = SpriteKind.create()
    export const XCX种类秘密覆盖 = SpriteKind.create()
    export const XCX种类拼图 = SpriteKind.create()
}
namespace one0oneroom {
    let XCX血液: Sprite = null
    let XCX变量数字 = 0
    let XCX概率 = 0
    let XCX变量箱子一: Sprite = null
    let XCX变量女鬼: Sprite = null
    let XCX变量拼图: Sprite = null
    let XCX变量箱子二: Sprite = null
    let XCX变量门: Sprite = null
    let XCX变量: Sprite = null
    let XCX变量箱子三: Sprite = null

    function XCX箱子二 () {
        XCX变量箱子二 = sprites.create(img`
            c c b b b b b b b b b b b b c c 
            c b e 4 4 4 4 4 4 4 4 4 4 e b c 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            c b b c c c c c c c c c c b b c 
            `, SpriteKind.XCX种类箱子二)
        tiles.placeOnRandomTile(XCX变量箱子二, myTiles.xcxtile1)
    }

    function XCX彩蛋函数 () {
        
    }

    function XCX箱子三 () {
        XCX变量箱子三 = sprites.create(img`
            c c b b b b b b b b b b b b c c 
            c b e 4 4 4 4 4 4 4 4 4 4 e b c 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            c b b c c c c c c c c c c b b c 
            `, SpriteKind.XCX种类箱子三)
        tiles.placeOnRandomTile(XCX变量箱子三, myTiles.xcxtile1)
    }
    function xcxplayer () {
        XCX变量 = sprites.create(img`
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
            `, SpriteKind.XCX种类)
        controller.moveSprite(XCX变量, 150, 150)
        XCX变量数字 = 3
        scene.cameraFollowSprite(XCX变量)
        tiles.placeOnRandomTile(XCX变量, sprites.dungeon.darkGroundCenter)
        lantern.startLanternEffect(XCX变量)
        lantern.setBreathingEnabled(false)
        lantern.setLightBandWidth(40)
    }
    function XCX血液函数 () {
        XCX血液 = sprites.create(img`
            c c 2 c c c c c 2 c c c c c c 2 
            c c c 2 c c c c 2 c c c 2 2 2 c 
            c c c c 2 c c 2 c 2 2 2 2 c c c 
            2 2 2 2 c 2 2 2 2 c 2 2 2 2 2 c 
            c c c 2 2 2 2 2 2 2 2 c c c c 2 
            2 2 2 2 2 c c 2 2 2 c c 2 2 2 c 
            c c c c 2 2 2 2 2 2 2 2 c c c c 
            c c c 2 c c 2 2 2 2 2 2 2 2 2 2 
            c 2 2 c 2 2 2 2 2 2 2 2 c c c c 
            c 2 2 2 c c 2 2 2 2 2 2 2 2 c c 
            2 c 2 c c 2 c 2 2 c 2 2 c 2 c c 
            c 2 c c 2 2 2 2 2 c 2 2 2 2 2 c 
            c c c 2 2 c 2 2 2 c 2 2 c c 2 c 
            c c 2 c 2 c 2 2 2 c 2 c 2 c c 2 
            c 2 c 2 c 2 c 2 c 2 c 2 c 2 c c 
            c c c c c 2 c 2 c 2 c c c c 2 c 
            `, SpriteKind.XCX种类血)
        tiles.placeOnRandomTile(XCX血液, myTiles.xcxtile9)
    }
    function xcx扣血 () {
        XCX变量数字 += -1
        if (XCX变量数字 == 1) {
            controller.moveSprite(XCX变量, 0, 0)
            XCX函数女鬼()
        }
    }
    function XCX函数概率 () {
        if (Math.percentChance(40)) {
            XCX概率 = 0
            XCX概率 += 1
            game.splash("你拿到了一个碎片。")
        } else {
            XCX概率 += 0
            game.splash("你没拿到碎片")
        }
        if (XCX概率 == 3) {
            game.splash(" 你可以去放碎片了。")
        }
    }
    function XCX门 () {
        XCX变量门 = sprites.create(img`
            c c c c c c c c b c c c c c c c 
            c b c e e e e e e e e e e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e f f f f f f f f e c b c 
            c c c e f f f f f f f f e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e f f f f f f f f e c c c 
            c c b e f f f f f f f f e c c c 
            c c c e f e f f f f f f e c c c 
            c c c e f e f f f f f f e c c c 
            b c c e f f f f f f f f e c c b 
            c c c e f f f f f f f f e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e f f f f f f f f e c c c 
            b c c e e e e e e e e e e c c c 
            c c c c c b c c c c c c c b c c 
            `, SpriteKind.XCX种类门)
        tiles.placeOnRandomTile(XCX变量门, myTiles.xcxtile5)
    }
    function XCX函数拼图 () {
        XCX变量拼图 = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d d f 
            f d d d d d d d d d d d d d d f 
            f d d d f f d f d d d d f f d f 
            f d f f d f f d f f f f f d d f 
            f d d d f f d d d d d d d d d f 
            f d d f f d f f d f f f d d d f 
            f f f f d f d f f d d f f d d f 
            f d d d d f f f d d d d f d d f 
            f d d d d f f f d d d d d f d f 
            f d d d f f d d d d d d f f d f 
            f d f f d f f f d d d f f f d f 
            f d f d d d d f f f f f d f d f 
            f d d d d d d d f f d d d d f f 
            f d d d d d d d d d d d d d f f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.XCX种类拼图)
        tiles.placeOnRandomTile(XCX变量拼图, sprites.dungeon.darkGroundNorthEast0)
    }
    function XCX函数最后完结 () {
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类血)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类箱子一)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类箱子二)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类箱子三)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类女鬼)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类秘密)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类拼图)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX变量秘密覆盖)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类秘密覆盖)
        lantern.stopLanternEffect()
        gamejam.roomFinished(true)
    }
    function XCX函数女鬼 () {
        XCX变量女鬼 = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f . . . . . . . . . . 
            . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
            . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
            . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
            . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
            . . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
            . . . . . . f b d 2 2 d d 2 2 d b f . . . . . . 
            . . . . . . f c d 2 f 1 1 f 2 d c f . . . . . . 
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
            . . . . . . f f f c d 2 2 b d f f f f . . . . . 
            . . . . f c 1 1 1 c b 2 2 f c 1 1 1 c f . . . . 
            . . . . f 1 b 1 b 1 2 f 2 f 1 b 2 b 2 f . . . . 
            . . . . f 2 f 2 f f 2 f f 2 b 2 2 f 2 f . . . . 
            . . . . . 2 . 2 2 2 f f 2 f f 2 2 . 2 . . . . . 
            . . . . 2 . . 2 2 2 . 2 f f 2 . 2 . 2 2 . . . . 
            . . . . 2 . 2 2 2 2 . . 2 . 2 . 2 2 2 2 . . . . 
            . . . . 2 2 2 2 . 2 2 2 . 2 2 . 2 2 . 2 2 . . . 
            . . . . 2 2 2 2 2 2 . . 2 2 2 2 2 . . 2 . . . . 
            . . . . 2 . 2 2 2 . 2 . 2 . . 2 2 . . 2 . . . . 
            `, SpriteKind.XCX种类女鬼)
        XCX变量女鬼.setPosition(XCX变量.x + 4, XCX变量.y + 4)
        cubicbird.moveTowards(XCX变量女鬼, XCX变量, 100)
        XCX变量女鬼.setFlag(SpriteFlag.DestroyOnWall, true)
    }
    function XCX箱子1 () {
        XCX变量箱子一 = sprites.create(img`
            c c b b b b b b b b b b b b c c 
            c b e 4 4 4 4 4 4 4 4 4 4 e b c 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            c b b c c c c c c c c c c b b c 
            `, SpriteKind.XCX种类箱子一)
        tiles.placeOnRandomTile(XCX变量箱子一, myTiles.xcxtile1)
    }
    function XCX函数最后完结2 () {
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类血)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类箱子一)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类箱子二)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类箱子三)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类女鬼)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类秘密)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类拼图)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX变量秘密覆盖)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.XCX种类秘密覆盖)
        lantern.stopLanternEffect()
        gamejam.roomFinished(false)
    }
   

    export function init() {
        
        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类箱子三, function (sprite, otherSprite) {
            if (game.askForNumber("") == 92228) {
                XCX门()
                game.splash("门打开了")
                game.splash("一直靠着墙走就可以了")
            } else {
                game.splash("门打开了")
                game.splash("一直靠着墙走就可以了")
                xcx扣血()
                XCX门()
            }
            XCX变量箱子三.destroy()
            XCX函数概率()
        })

        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类女鬼, function (sprite, otherSprite) {
            animation.runImageAnimation(
            XCX变量,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f 2 f 4 4 f 2 f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e 2 2 . . . 
                . . e 4 f f f f f f f 2 4 e . . 
                . . 4 d f f f f f f f f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f 2 f 4 4 f 2 f e f f . 
                . f e e 4 2 f d d f 2 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f f f f f 2 2 2 4 e . . 
                . . 4 d f f f f f 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 2 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f 2 f 4 4 f 2 f e f f . 
                . f e e 4 2 f d d f 2 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 2 2 2 2 2 . . . 
                . . e 4 f f f f f 2 2 2 4 e . . 
                . . 4 d f f f f f 2 2 2 d 4 . . 
                . . 4 4 f 4 4 5 5 2 4 2 4 4 . . 
                . . . . . f f f f f f 2 . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f 2 f 4 4 f 2 f e f f . 
                . f e e 4 2 f d d f 2 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e 2 2 2 2 2 2 2 2 . . . 
                . . e 4 f 2 2 2 2 2 2 2 4 e . . 
                . . 4 d f 2 f 2 2 2 2 2 d 4 . . 
                . . 4 4 f 4 4 5 2 2 2 2 4 4 . . 
                . . . . . f f f f f f 2 . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f 2 f 4 4 f 2 f e f f . 
                . f e e 4 2 f d d f 2 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . e 2 f 2 2 2 2 2 2 2 2 e . . 
                . . 4 2 f 2 2 2 2 f 2 2 2 4 . . 
                . . 4 4 f 2 2 2 5 4 2 f 2 4 . . 
                . . . 2 . 2 f 2 f f 2 . . . . . 
                . . . 2 . f f 2 . f f . 2 . . . 
                `],
            500,
            true
            )
            pause(2500)
            XCX函数最后完结2()
        })
        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类门, function (sprite, otherSprite) {
            XCX变量门.destroy()
            XCX函数最后完结()
        })
        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类箱子二, function (sprite, otherSprite) {
            if (game.askForNumber("") == 101) {
                game.splash("是妹妹的八岁生日")
                game.splash("但她只过了两次生日")
                game.splash("因为他是2月29号生日")
                game.splash("但是我总把这个日期反着念")
                game.splash("请不要放过里面哪一个数字")
                XCX箱子三()
            } else {
                game.splash("是妹妹的八岁生日")
                game.splash("但她只过了两次生日")
                game.splash("因为他是2月29号生日")
                game.splash("但是我总把这个日期反着念")
                game.splash("请不要放过里面哪一个数字")
                XCX箱子三()
                xcx扣血()
            }
            XCX变量箱子二.destroy()
            XCX函数概率()
        })

        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类拼图, function (sprite, otherSprite) {
            if (XCX概率 == 0) {
                game.splash("你还没有碎片")
                pause(10000)
            }
            if (XCX概率 == 1) {
                game.splash("你还差了两个碎片")
                pause(10000)
            }
            if (XCX概率 == 2) {
                game.splash("你还差一个碎片")
                pause(10000)
            }
            if (XCX概率 == 3) {
                XCX彩蛋函数()
            }
        })

        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类箱子一, function (sprite, otherSprite) {
            if (game.askForNumber("") == 9) {
                game.splash("那年，10月1")
                game.splash("每个数字都有价值。")
                XCX箱子二()
            } else {
                game.splash("那年，10月1")
                game.splash("每个数字都有价值。")
                XCX箱子二()
                xcx扣血()
            }
            XCX变量箱子一.destroy()
            XCX函数概率()
        })

        sprites.onOverlap(SpriteKind.XCX种类, SpriteKind.XCX种类血, function (sprite, otherSprite) {
            game.splash("血。。。")
            game.splash("或许有什么帮助")
            pause(10000)
        })
        tiles.setTilemap(tiles.createTilemap(hex`0e000e000a06060606060606060606060607090110101010101010101014120b0905040404040404110404150f0b0905041104130404040404040f0b0905040404040404110404040f0b0905130404110404040404040f0b0905040404040404040404110f0b0905040404110404110404040f0b0905041104041604040404040f0b0905040404040404041304040f0b0905040411040411040411040f0b0905130404040404040404170f0b09020e0e0e0e0e0e0e0e0e0e030b080d0d0d0d0d0d0d0d0d0d0d0d0c`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 . . . . . . . . . . . . 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2
        `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,myTiles.xcxtile9,sprites.dungeon.darkGroundNorthEast0,myTiles.xcxtile1,myTiles.xcxtile2,myTiles.xcxtile3,myTiles.xcxtile4,myTiles.xcxtile5], TileScale.Sixteen))
        xcxplayer()
        for (let index = 0; index < 9; index++) {
            XCX血液函数()
        }
        XCX箱子1()
        XCX函数拼图()
        game.splash("仔细观察地图")
    }
}