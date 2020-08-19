// Add your code here

namespace SpriteKind {
    export const zglBall = SpriteKind.create()
    export const zglPlayer = SpriteKind.create()
    export const zglWaypoint = SpriteKind.create()
    export const zglButton = SpriteKind.create()
    export const zglButtonPress = SpriteKind.create()
    export const zglButtonReverse = SpriteKind.create()
    export const zglButtonReversePressed = SpriteKind.create()
}
namespace flowroom {
    let zglButtonSprite: Sprite = null
    let zglBallSprite: Sprite = null
    let zglButtons: Sprite[] = []
    let zglWaypoints: Sprite[] = []
    let rightTiles: tiles.Location[] = []
    let upTiles: tiles.Location[] = []
    let leftTiles: tiles.Location[] = []
    let downTiles: tiles.Location[] = []
    let zglPlayerSprite: Sprite = null
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
    function placeButtonSprite () {
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
    }
    function zglStartup () {
        tiles.setTilemap(tiles.createTilemap(hex`100010000105050505050505050505050505050402090909090909090909090909090906020909090909090909090909090909060209090a0c0e0c0c0c0e0c0c0c0b090602090909090c0909090c09090909090602090909090c0909090c09090909090602090909090c0909090c09090909090602090909090d0c0c0c1009090909090602090909090c0909090c09090909090602090909090e0c0c0c0f0c0c0d09090602090909090c0909090c09090c09090602090909090c0909090c09090b09090602090909090c0909090c09090909090602090909090f0c0c0c0b0909090909060209090909090909090909090909090603080808080808080808080808080807`, img`
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
            `, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile4], TileScale.Sixteen))
    }
    function turnAllWaypoint () {
        downTiles = tiles.getTilesByType(myTiles.tile2)
        leftTiles = tiles.getTilesByType(myTiles.tile4)
        upTiles = tiles.getTilesByType(myTiles.tile5)
        rightTiles = tiles.getTilesByType(myTiles.tile3)
        for (let value2 of downTiles) {
            tiles.setTileAt(value2, myTiles.tile4)
        }
        for (let value2 of leftTiles) {
            tiles.setTileAt(value2, myTiles.tile5)
        }
        for (let value2 of upTiles) {
            tiles.setTileAt(value2, myTiles.tile3)
        }
        for (let value2 of rightTiles) {
            tiles.setTileAt(value2, myTiles.tile2)
        }
        zglWaypoints = sprites.allOfKind(SpriteKind.zglWaypoint)
        for (let value of zglWaypoints) {
            turnWaypointSprite(value)
        }
    }
    function turnWaypointSprite (waypointSprite: Sprite) {
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
    function zglCreateBall () {
        zglBallSprite = sprites.create(img`
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
            `, SpriteKind.zglBall)
        tiles.placeOnRandomTile(zglBallSprite, sprites.dungeon.collectibleRedCrystal)
        zglBallSprite.vx = zglBallSpeed
    }
    function turnAllWaypointReverse () {
        downTiles = tiles.getTilesByType(myTiles.tile2)
        leftTiles = tiles.getTilesByType(myTiles.tile4)
        upTiles = tiles.getTilesByType(myTiles.tile5)
        rightTiles = tiles.getTilesByType(myTiles.tile3)
        for (let value2 of downTiles) {
            tiles.setTileAt(value2, myTiles.tile3)
        }
        for (let value2 of leftTiles) {
            tiles.setTileAt(value2, myTiles.tile2)
        }
        for (let value2 of upTiles) {
            tiles.setTileAt(value2, myTiles.tile4)
        }
        for (let value2 of rightTiles) {
            tiles.setTileAt(value2, myTiles.tile5)
        }
        zglWaypoints = sprites.allOfKind(SpriteKind.zglWaypoint)
        for (let value of zglWaypoints) {
            turnWaypointSpriteReverse(value)
        }
    }
    function zglPlaceWaypoints () {
        for (let value2 of tiles.getTilesByType(myTiles.tile2)) {
            tiles.placeOnTile(zglCreateWaypoint("DOWN"), value2)
        }
        for (let value3 of tiles.getTilesByType(myTiles.tile3)) {
            tiles.placeOnTile(zglCreateWaypoint("RIGHT"), value3)
        }
        for (let value4 of tiles.getTilesByType(myTiles.tile5)) {
            tiles.placeOnTile(zglCreateWaypoint("UP"), value4)
        }
        for (let value5 of tiles.getTilesByType(myTiles.tile4)) {
            tiles.placeOnTile(zglCreateWaypoint("LEFT"), value5)
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

    export function init() {
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

        scene.onOverlapTile(SpriteKind.zglBall, sprites.dungeon.floorLight2, function (sprite, location) {
            sprite.destroy()
        })
        gamejam.onMyGameUpdateInterval(10, function () {
            zglButtons = sprites.allOfKind(SpriteKind.zglButtonPress)
            for (let value of zglButtons) {
                if (!(value.overlapsWith(zglPlayerSprite))) {
                    value.setKind(SpriteKind.zglButton)
                    value.setImage(img`
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
                    turnAllWaypoint()
                }
            }
            zglButtons = sprites.allOfKind(SpriteKind.zglButtonReversePressed)
            for (let value of zglButtons) {
                if (!(value.overlapsWith(zglPlayerSprite))) {
                    value.setKind(SpriteKind.zglButtonReverse)
                    value.setImage(img`
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
                    turnAllWaypointReverse()
                }
            }
        })
        gamejam.onMyGameUpdateInterval(10, function () {
            if (tiles.getTilesByType(sprites.dungeon.chestOpen).length == 0) {
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglPlayer)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglBall)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButton)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButtonPress)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButtonReverse)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglButtonReversePressed)
                cubicbird.destroyAllSpriteOfKind(SpriteKind.zglWaypoint)
                gamejam.roomFinished(true)
            }
        })

        scene.onOverlapTile(SpriteKind.zglBall, sprites.dungeon.chestClosed, function (sprite, location) {
            sprite.destroy()
        })

        gamejam.onMyGameUpdateInterval(2000, function () {
            zglCreateBall()
        })
        scene.onOverlapTile(SpriteKind.zglBall, sprites.dungeon.chestOpen, function (sprite, location) {
            sprite.destroy()
            tiles.setTileAt(location, sprites.dungeon.chestClosed)
        })

        sprites.onOverlap(SpriteKind.zglPlayer, SpriteKind.zglButton, function (sprite, otherSprite) {
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
        placeButtonSprite()
    }
}
