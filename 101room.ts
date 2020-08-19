// Add your code here
namespace SpriteKind {
    export const XCX种类 = SpriteKind.create()
    export const XCX种类门 = SpriteKind.create()
    export const XCX种类血 = SpriteKind.create()
}
namespace one0oneroom {
    let XCX变量门: Sprite = null
    let XCX血液: Sprite = null
    let XCX变量: Sprite = null

    function xcxplayer () {
        XCX变量 = sprites.create(img`
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
            . . . . . . f b d b f d d f b d b f . . . . . . 
            . . . . . . f c d c f 1 1 f c d c f . . . . . . 
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
            . . . . . . f f f c d b 1 b d f f f f . . . . . 
            . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
            . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
            . . . . f b f b f f f f f f b f b f b f . . . . 
            . . . . . . . . . f f f f f f . . . . . . . . . 
            . . . . . . . . . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            `, SpriteKind.XCX种类)
        controller.moveSprite(XCX变量, 150, 150)
        scene.cameraFollowSprite(XCX变量)
        tiles.placeOnRandomTile(XCX变量, sprites.dungeon.darkGroundCenter)
        lantern.startLanternEffect(XCX变量)
        lantern.setBreathingEnabled(false)
        lantern.setLightBandWidth(20)
    }

    export function init() {
        
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
            game.splash("血。。。")
        })
        
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
            tiles.placeOnRandomTile(XCX变量门, sprites.dungeon.collectibleInsignia)
        }

        tiles.setTilemap(tiles.createTilemap(hex`0e000e000a06060606060606060606060607090110101010101010101010130b0905040404040404120404110f0b0905041204040404040404040f0b0905040404040404120404040f0b0905040404120404040404040f0b0905040404040404040404120f0b0905040404120404120404040f0b0905041204040404040404040f0b0905040404040404040404040f0b0905040412040412040412040f0b0905040404040404040404040f0b09020e0e0e0e0e0e0e0e0e0e030b080d0d0d0d0d0d0d0d0d0d0d0d0c`, img`
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
            `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia,myTiles.xcxtile9,sprites.dungeon.darkGroundNorthEast0], TileScale.Sixteen))
        xcxplayer()
        for (let index = 0; index < 9; index++) {
            XCX血液函数()
        }
        XCX门()

    }
}