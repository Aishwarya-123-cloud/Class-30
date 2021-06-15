class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.catapult1 = loadImage("sprites/sling1.png");
        this.catapult2 = loadImage("sprites/sling2.png");
        this.catapult3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
     attach(body){
         this.sling.bodyA = body;
     }


    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x < 230){
            strokeWeight(3)
            line(pointA.x -20, pointA.y, pointB.x - 10, pointB.y)
            line(pointA.x -20, pointA.y, pointB.x  + 20, pointB.y)
            image(this.catapult3,pointA.x - 25, pointA.y - 10,10,30)
            }else{
                strokeWeight(7);
                line(pointA.x -20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x -20, pointA.y, pointB.x  + 20, pointB.y);
                image(this.catapult3,pointA.x - 25, pointA.y - 10,10,30);
            }
            
           
        }
        image(this.catapult1,230,18);
        image(this.catapult2,205,18);
        

    }
    
}