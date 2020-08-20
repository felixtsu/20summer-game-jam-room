// Add your code here
namespace SpriteKind {
    export const zglBall = SpriteKind.create()
    export const zglPlayer = SpriteKind.create()
    export const zglWaypoint = SpriteKind.create()
    export const zglButton = SpriteKind.create()
    export const zglButtonPress = SpriteKind.create()
    export const zglButtonReverse = SpriteKind.create()
    export const zglButtonReversePressed = SpriteKind.create()
    export const zglShadow = SpriteKind.create()
    export const zglElder = SpriteKind.create()
    export const zglTeleportBeam = SpriteKind.create()
    export const zglOpenBox = SpriteKind.create()
    export const zglCloseBox = SpriteKind.create()
}
namespace flowroom {
    let zglTeleportBeamSprite: Sprite = null
    let zglBallSprite: Sprite = null
    let zglButtons: Sprite[] = []
    let zglElderSprite: Sprite = null
    let zglBoxSprite: Sprite = null
    let zglBeamOpened = false
    let zglButtonSprite: Sprite = null
    let zglShadowSprite: Sprite = null
    let zglPlayerSprite: Sprite = null
    let zglWaypoints: Sprite[] = []
    let rightTiles: tiles.Location[] = []
    let upTiles: tiles.Location[] = []
    let leftTiles: tiles.Location[] = []
    let downTiles: tiles.Location[] = []
    let zglWaypointSprite: Sprite = null
    let zglBallSpeed = 0
    function zglCreateWaypoint (direction: string) {
        zglWaypointSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.zglWaypoint)
        zglWaypointSprite.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataString(zglWaypointSprite, "direction", direction)
        return zglWaypointSprite
    }
    function zglTurnAllWaypoint () {
        downTiles = tiles.getTilesByType(myTiles.zgltile2)
        leftTiles = tiles.getTilesByType(myTiles.zgltile4)
        upTiles = tiles.getTilesByType(myTiles.zgltile5)
        rightTiles = tiles.getTilesByType(myTiles.zgltile3)
        for (let value2 of downTiles) {
            tiles.setTileAt(value2, myTiles.zgltile4)
        }
        for (let value22 of leftTiles) {
            tiles.setTileAt(value22, myTiles.zgltile5)
        }
        for (let value23 of upTiles) {
            tiles.setTileAt(value23, myTiles.zgltile3)
        }
        for (let value24 of rightTiles) {
            tiles.setTileAt(value24, myTiles.zgltile2)
        }
        zglWaypoints = sprites.allOfKind(SpriteKind.zglWaypoint)
        for (let value of zglWaypoints) {
            zglTurnWaypointSprite(value)
        }
    }
    function zglCreatePlayerSprite () {
        zglPlayerSprite = sprites.create(img`
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
            `, SpriteKind.zglPlayer)
        tiles.placeOnTile(zglPlayerSprite, tiles.getTileLocation(2, 2))
        controller.moveSprite(zglPlayerSprite)
        scene.cameraFollowSprite(zglPlayerSprite)
        zglPlayerSprite.z = 10
        zglShadowSprite = sprites.create(img`
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
            . . . d d d d d d d d d d . . . 
            . . d f f f f f f f f f f d . . 
            . d f f f f f f f f f f f f d . 
            . . d f f f f f f f f f f d . . 
            `, SpriteKind.zglShadow)
        zglShadowSprite.z = 9
        zglShadowSprite.setPosition(zglPlayerSprite.x, zglPlayerSprite.y)
    }
    function zglStartup () {
        tiles.setTilemap(tiles.createTilemap(hex`10001000010505050505050505050505050505040209090909090911091009090909090602090909090909090909090909090906020909120b0d0b0b0b0d0b0b0b0a090602090909090b0909090b09090909090602090909090b0909090b09090909090602090909090b0909090b09090909090602090909090c0b0b0b0f09090909090602090909090b0909090b09090909090602090909090d0b0b0b0e0b0b0c09090602090909090b0909090b09090b09090602090909090b0909090b09090a09090602090909090b0909090b09090909090602090909090e0b0b0b0a0909090909060209090909090909090909090909090603080808080808080808080808080807`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.chestOpen,myTiles.zgltile1,myTiles.zgltile2,myTiles.zgltile3,myTiles.zgltile5,myTiles.zgltile4,myTiles.zgltile6,myTiles.zgltile7,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
    }
    function zglTurnWaypointSprite (waypointSprite: Sprite) {
        if (sprites.readDataString(waypointSprite, "direction") == "UP") {
            sprites.setDataString(waypointSprite, "direction", "RIGHT")
        } else if (sprites.readDataString(waypointSprite, "direction") == "RIGHT") {
            sprites.setDataString(waypointSprite, "direction", "DOWN")
        } else if (sprites.readDataString(waypointSprite, "direction") == "DOWN") {
            sprites.setDataString(waypointSprite, "direction", "LEFT")
        } else {
            sprites.setDataString(waypointSprite, "direction", "UP")
        }
    }
    function zglPlaceButtonSprite () {
        zglButtonSprite = sprites.create(img`
            b b b b b b b b b b b b b b b b 
            b c b e 4 4 4 4 4 4 4 4 e b c b 
            b b e 4 4 4 4 4 4 4 4 4 4 e b b 
            b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
            b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
            b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
            b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
            b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
            b b d 4 4 4 4 4 4 4 4 4 4 d b b 
            b b d 4 4 4 4 4 4 4 4 4 4 d b b 
            b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
            b b 4 4 d d d d d d d d 4 4 b b 
            b b c 4 4 4 4 4 4 4 4 4 4 c b b 
            b b b c c c c c c c c c c b b b 
            b c b b b b b b b b b b b b c b 
            b b b b b b b b b b b b b b b b 
            `, SpriteKind.zglButton)
        tiles.placeOnTile(zglButtonSprite, tiles.getTileLocation(7, 2))
        zglButtonSprite = sprites.create(img`
            b b b b b b b b b b b b b b b b 
            b c b c 6 6 6 6 6 6 6 6 c b c b 
            b b c 6 6 6 6 6 6 6 6 6 6 c b b 
            b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
            b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
            b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
            b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
            b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
            b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
            b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
            b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
            b b 6 6 9 9 9 9 9 9 9 9 6 6 b b 
            b b c 6 6 6 6 6 6 6 6 6 6 c b b 
            b b b c c c c c c c c c c b b b 
            b c b b b b b b b b b b b b c b 
            b b b b b b b b b b b b b b b b 
            `, SpriteKind.zglButtonReverse)
        tiles.placeOnTile(zglButtonSprite, tiles.getTileLocation(9, 2))
    }

    function zglClearAllSprites () {
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglBall)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglPlayer)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglWaypoint)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButton)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButtonPress)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButtonReverse)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButtonReversePressed)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglShadow)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglElder)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglTeleportBeam)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglOpenBox)
        cubicbird.destroyAllSpriteOfKind(SpriteKind.zglCloseBox)
    }
    function zglPlaceBox () {
        for (let value of tiles.getTilesByType(sprites.dungeon.chestOpen)) {
            zglBoxSprite = sprites.create(img`
                . b b b b b b b b b b b b b b . 
                b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
                b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
                b e e 4 4 4 4 4 4 4 4 4 4 e e b 
                b b b b b b b d d b b b b b b b 
                . b b b b b b c c b b b b b b . 
                b c c c c c b c c b c c c c c b 
                b c c c c c c b b c c c c c c b 
                b c c c c c c c c c c c c c c b 
                b c c c c c c c c c c c c c c b 
                b b b b b b b b b b b b b b b b 
                b e e e e e e e e e e e e e e b 
                b e e e e e e e e e e e e e e b 
                b c e e e e e e e e e e e e c b 
                b b b b b b b b b b b b b b b b 
                . b b . . . . . . . . . . b b . 
                `, SpriteKind.zglOpenBox)
            tiles.placeOnTile(zglBoxSprite, value)
        }
    }
    function zglPlaceElderSprite () {
        zglElderSprite = sprites.create(img`
            . . . . . d d d d . . . . . 
            . . . d d 1 1 1 1 d d . . . 
            . . d 1 1 1 1 1 1 1 1 d . . 
            . d 1 1 1 1 1 1 1 1 1 1 d . 
            . d 1 1 1 d b b d 1 1 1 d . 
            d 1 1 1 b 4 4 4 4 b 1 1 1 d 
            d 1 1 c c 4 4 4 4 c c 1 1 d 
            d b b f b f 4 4 f b f b b d 
            d b b 4 1 f d d f 1 4 b b d 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.zglElder)
        tiles.placeOnTile(zglElderSprite, tiles.getTileLocation(3, 2))
    }
    function zglCreateBall () {
        zglBallSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.zglBall)
        tiles.placeOnRandomTile(zglBallSprite, sprites.dungeon.collectibleBlueCrystal)
        zglBallSprite.vx = zglBallSpeed
    }
    function zglPlaceWaypoints () {
        for (let value29 of tiles.getTilesByType(myTiles.zgltile2)) {
            tiles.placeOnTile(zglCreateWaypoint("DOWN"), value29)
        }
        for (let value32 of tiles.getTilesByType(myTiles.zgltile3)) {
            tiles.placeOnTile(zglCreateWaypoint("RIGHT"), value32)
        }
        for (let value42 of tiles.getTilesByType(myTiles.zgltile5)) {
            tiles.placeOnTile(zglCreateWaypoint("UP"), value42)
        }
        for (let value52 of tiles.getTilesByType(myTiles.zgltile4)) {
            tiles.placeOnTile(zglCreateWaypoint("LEFT"), value52)
        }
    }
    function turnWaypointSpriteReverse (waypointSprite: Sprite) {
        if (sprites.readDataString(waypointSprite, "direction") == "UP") {
            sprites.setDataString(waypointSprite, "direction", "LEFT")
        } else if (sprites.readDataString(waypointSprite, "direction") == "RIGHT") {
            sprites.setDataString(waypointSprite, "direction", "UP")
        } else if (sprites.readDataString(waypointSprite, "direction") == "DOWN") {
            sprites.setDataString(waypointSprite, "direction", "RIGHT")
        } else {
            sprites.setDataString(waypointSprite, "direction", "DOWN")
        }
    }
    function zglTurnAllWaypointReverse () {
        downTiles = tiles.getTilesByType(myTiles.zgltile2)
        leftTiles = tiles.getTilesByType(myTiles.zgltile4)
        upTiles = tiles.getTilesByType(myTiles.zgltile5)
        rightTiles = tiles.getTilesByType(myTiles.zgltile3)
        for (let value25 of downTiles) {
            tiles.setTileAt(value25, myTiles.zgltile3)
        }
        for (let value26 of leftTiles) {
            tiles.setTileAt(value26, myTiles.zgltile2)
        }
        for (let value27 of upTiles) {
            tiles.setTileAt(value27, myTiles.zgltile4)
        }
        for (let value28 of rightTiles) {
            tiles.setTileAt(value28, myTiles.zgltile5)
        }
        zglWaypoints = sprites.allOfKind(SpriteKind.zglWaypoint)
        for (let value5 of zglWaypoints) {
            turnWaypointSpriteReverse(value5)
        }
    }
    function zglShowBeam () {
        controller.moveSprite(zglPlayerSprite, 0, 0)
        scene.cameraFollowSprite(zglElderSprite)
        zglTeleportBeamSprite = sprites.create(img`
            . . d d d d d d d d d d d . . . 
            d d 1 1 1 1 1 1 1 1 1 1 1 d d . 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 d 8 
            8 8 8 1 1 1 1 1 1 1 1 1 1 8 8 8 
            . 8 9 8 8 8 8 8 8 8 8 8 8 8 9 8 
            . 8 9 1 1 9 1 9 8 8 8 8 9 1 9 8 
            . 8 9 1 1 9 1 9 1 1 9 9 1 1 9 8 
            . 8 9 1 1 9 1 9 1 1 9 9 1 9 8 8 
            . 8 9 1 1 9 1 9 1 1 9 1 1 9 8 . 
            . 8 9 1 1 9 9 9 1 1 9 1 1 9 8 . 
            . 8 9 1 1 9 9 9 1 1 9 1 1 9 8 . 
            . 8 8 8 1 9 9 9 1 1 9 1 1 9 8 . 
            . 8 8 8 1 9 9 9 1 9 9 1 1 9 8 . 
            . 8 8 8 1 9 9 9 1 9 1 1 1 9 . . 
            . . 8 8 1 9 9 9 1 9 1 1 1 9 . . 
            . . 8 8 1 9 9 . 9 9 1 1 1 9 . . 
            8 . 1 8 1 9 9 1 1 9 1 1 1 9 . . 
            . . 9 1 9 9 9 1 9 9 1 1 9 9 . . 
            . . 9 1 9 1 9 1 8 9 1 9 9 9 . . 
            . . . 1 9 9 9 1 8 9 9 8 9 8 . . 
            . . 9 1 9 8 9 1 8 9 9 9 9 8 . . 
            . . 1 9 9 8 9 1 8 9 9 9 9 8 . . 
            . . . 9 8 9 8 1 8 9 9 9 9 8 . . 
            . . . 9 8 9 8 8 1 9 9 8 8 9 . . 
            . . . 1 8 1 9 8 9 9 8 9 8 . . . 
            . . . 9 8 1 9 1 9 9 8 9 9 . . . 
            . . . 9 8 1 1 1 9 1 8 8 9 . . . 
            . . 9 9 9 8 9 9 9 9 8 9 8 . . . 
            . 9 8 1 1 1 1 1 1 1 1 1 9 8 8 . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 1 9 . 
            . 8 9 1 1 1 1 1 1 1 1 1 1 8 8 . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            `, SpriteKind.zglTeleportBeam)
        tiles.placeOnTile(zglTeleportBeamSprite, tiles.getTileLocation(4, 2))
        zglTeleportBeamSprite.y += -8
        zglElderSprite.say("能量足够了，现在可以利用传送门去其他地方了", 2000)
        pause(2000)
        controller.moveSprite(zglPlayerSprite)
        scene.cameraFollowSprite(zglPlayerSprite)
    }



    export function init() {
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
            zglPlayerSprite,
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
            200,
            true
            )
        })
        sprites.onOverlap(SpriteKind.zglPlayer, SpriteKind.zglElder, function (sprite, otherSprite) {
            otherSprite.setFlag(SpriteFlag.Ghost, true)
            otherSprite.say("探险者，我们的魔法可以把你传送到别的地方", 5000)
        })
        sprites.onOverlap(SpriteKind.zglBall, SpriteKind.zglWaypoint, function (sprite, otherSprite) {
            if (cubicbird.distance(sprite, otherSprite) < 0.5) {
                sprite.setPosition(otherSprite.x, otherSprite.y)
                if (sprites.readDataString(otherSprite, "direction") == "UP") {
                    sprite.setVelocity(0, 0 - zglBallSpeed)
                } else if (sprites.readDataString(otherSprite, "direction") == "RIGHT") {
                    sprite.setVelocity(zglBallSpeed, 0)
                } else if (sprites.readDataString(otherSprite, "direction") == "DOWN") {
                    sprite.setVelocity(0, zglBallSpeed)
                } else {
                    sprite.setVelocity(0 - zglBallSpeed, 0)
                }
            }
        })
        sprites.onOverlap(SpriteKind.zglPlayer, SpriteKind.zglButtonReverse, function (sprite, otherSprite) {
            music.pewPew.play()
            otherSprite.setKind(SpriteKind.zglButtonReversePressed)
            otherSprite.setImage(img`
                b b b b b b b b b b b b b b b b 
                b c b b b b b b b b b b b b c b 
                b b b c 6 6 6 6 6 6 6 6 c b b b 
                b b c 6 6 6 6 6 6 6 6 6 6 c b b 
                b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
                b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
                b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
                b b c 6 9 9 9 9 9 9 9 9 6 c b b 
                b b b c c c c c c c c c c b b b 
                b c b b b b b b b b b b b b c b 
                b b b b b b b b b b b b b b b b 
                `)
        })
        sprites.onOverlap(SpriteKind.zglBall, SpriteKind.zglOpenBox, function (sprite, otherSprite) {
            music.magicWand.play()
            sprite.destroy()
            otherSprite.setImage(img`
                . . b b b b b b b b b b b b . . 
                . b e 4 4 4 4 4 4 4 4 4 4 e b . 
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
                . b b . . . . . . . . . . b b . 
                `)
            otherSprite.setKind(SpriteKind.zglCloseBox)
            if (sprites.allOfKind(SpriteKind.zglOpenBox).length == 0 && !(zglBeamOpened)) {
                zglBeamOpened = true
                zglShowBeam()
            }
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
            zglPlayerSprite,
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
            200,
            true
            )
        })

        sprites.onOverlap(SpriteKind.zglBall, SpriteKind.zglCloseBox, function (sprite, otherSprite) {
            sprite.destroy()
        })
        sprites.onOverlap(SpriteKind.zglPlayer, SpriteKind.zglTeleportBeam, function (sprite, otherSprite) {
            zglClearAllSprites()
            gamejam.roomFinished(true)
        })
        scene.onOverlapTile(SpriteKind.zglBall, sprites.dungeon.floorLight2, function (sprite, location) {
            sprite.destroy()
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
            zglPlayerSprite,
            [img`
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
                `],
            200,
            true
            )
        })
        gamejam.onMyGameUpdateInterval(10, function () {
            zglShadowSprite.setPosition(zglPlayerSprite.x, zglPlayerSprite.y)
        })
        gamejam.onMyGameUpdateInterval(10, function () {
            zglButtons = sprites.allOfKind(SpriteKind.zglButtonPress)
            for (let value3 of zglButtons) {
                if (!(value3.overlapsWith(zglPlayerSprite))) {
                    value3.setKind(SpriteKind.zglButton)
                    value3.setImage(img`
                        b b b b b b b b b b b b b b b b 
                        b c b e 4 4 4 4 4 4 4 4 e b c b 
                        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
                        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
                        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
                        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
                        b b 4 4 d d d d d d d d 4 4 b b 
                        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
                        b b b c c c c c c c c c c b b b 
                        b c b b b b b b b b b b b b c b 
                        b b b b b b b b b b b b b b b b 
                        `)
                    zglTurnAllWaypoint()
                }
            }
            zglButtons = sprites.allOfKind(SpriteKind.zglButtonReversePressed)
            for (let value4 of zglButtons) {
                if (!(value4.overlapsWith(zglPlayerSprite))) {
                    value4.setKind(SpriteKind.zglButtonReverse)
                    value4.setImage(img`
                        b b b b b b b b b b b b b b b b 
                        b c b c 6 6 6 6 6 6 6 6 c b c b 
                        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
                        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
                        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
                        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
                        b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
                        b b 6 6 9 9 9 9 9 9 9 9 6 6 b b 
                        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
                        b b b c c c c c c c c c c b b b 
                        b c b b b b b b b b b b b b c b 
                        b b b b b b b b b b b b b b b b 
                        `)
                    zglTurnAllWaypointReverse()
                }
            }
        })

        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
            zglPlayerSprite,
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
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        })

        gamejam.onMyGameUpdateInterval(2000, function () {
            if (!(zglBeamOpened)) {
                zglCreateBall()
            }
        })
        sprites.onOverlap(SpriteKind.zglPlayer, SpriteKind.zglButton, function (sprite, otherSprite) {
            music.pewPew.play()
            otherSprite.setKind(SpriteKind.zglButtonPress)
            otherSprite.setImage(img`
                b b b b b b b b b b b b b b b b 
                b c b b b b b b b b b b b b c b 
                b b b e 4 4 4 4 4 4 4 4 e b b b 
                b b e 4 4 4 4 4 4 4 4 4 4 e b b 
                b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                b b d 4 4 4 4 4 4 4 4 4 4 d b b 
                b b d 4 4 4 4 4 4 4 4 4 4 d b b 
                b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
                b b c 4 d d d d d d d d 4 c b b 
                b b b c c c c c c c c c c b b b 
                b c b b b b b b b b b b b b c b 
                b b b b b b b b b b b b b b b b 
                `)
        })

        zglBallSpeed = 30
        zglStartup()
        zglCreatePlayerSprite()
        zglPlaceWaypoints()
        zglPlaceButtonSprite()
        zglPlaceElderSprite()
        zglPlaceBox()
    }
}
