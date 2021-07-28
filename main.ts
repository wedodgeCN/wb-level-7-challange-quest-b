namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (info.score() == 10) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.thump.play()
    otherSprite.destroy()
    info.changeScoreBy(-1)
})
let projectile: Sprite = null
scene.setBackgroundColor(9)
game.setDialogFrame(img`
    ..66666666666666666666..
    .6699999999999999999966.
    669991111111111111199966
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    669991111111111111199966
    .6699999999999999999966.
    ..66666666666666666666..
    `)
game.showLongText("Avoid the gray storm clouds!", DialogLayout.Center)
let mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
mySprite.x = 120
controller.moveSprite(mySprite, 0, 100)
info.setScore(0)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
        `, 50, 0)
    projectile.y = randint(10, 110)
    projectile.setKind(SpriteKind.Goal)
    if (Math.percentChance(25)) {
        projectile.setImage(img`
            .........cccc...........
            .......ccddddcc.........
            ......ccddddddccccc.....
            ......cdddddddbbbddc....
            ......cddddddddbddddc...
            ...cccbddddddddbddddc...
            ..cdddddddddddddddddcc..
            .cdddddddddddddddddbddc.
            .cdddbdddddddddddddddddc
            fbbdbddddddddddddddddddf
            fbbbbdddddddddddddddddbf
            fbbcbdddddbdddddbbdddbf.
            .fccbbdddbbbbddbbcbbbff.
            .ffccbbbbbcbbbbbbbcff...
            ...fffbbbcccbbbbbff.....
            ......fffffffffff.......
            `)
        projectile.setKind(SpriteKind.Enemy)
    }
})
