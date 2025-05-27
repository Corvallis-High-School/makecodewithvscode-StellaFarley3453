//Constant variables

//Global variableS

//Classes

//Functions
function createdonut() {
    let donut = sprites.create(assets.image`myDonut`, SpriteKind.Food)
    donut.setPosition(randint(8, 158), randint(8, 112))
}
function createsnake() {
    let enemy = sprites.create(assets.image`mySnake`, SpriteKind.Enemy)
    enemy.follow(player, 150, 15)
    enemy.setPosition(randint(8, 158), randint(8, 112))
}
//Event handlers
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite:Sprite,otherSprite:Sprite){
    sprites.destroy(otherSprite)
    createdonut()
    info.changeScoreBy(1)

})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite:Sprite,otherSprite:Sprite){
    sprites.destroy(otherSprite)
    createsnake()
    info.changeLifeBy(-1)
})
//Main program
info.setScore(0)
let player = sprites.create(assets.image`myCat`, SpriteKind.Player)
controller.moveSprite(player)
createdonut()
createsnake()
scene.setTileMapLevel(assets.tilemap`level`)
scene.cameraFollowSprite(player)