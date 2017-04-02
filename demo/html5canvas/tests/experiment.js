
var embox2dTest_experiment = function() {
	//constructor
}

embox2dTest_experiment.prototype.setNiceViewCenter = function() {
	//called once when the user changes to this test from another test
	PTM = 26;
	setViewCenterWorld( new b2Vec2(0,8), true );
}

embox2dTest_experiment.prototype.setup = function() {
	var staticBodyDef = new b2BodyDef();
	staticBodyDef.set_position(new b2Vec2(0.0, -10.0));

	var groundBody = world.CreateBody(staticBodyDef);
	var groundBox = new b2PolygonShape();

	groundBox.SetAsBox(50.0, 10.0);
	groundBody.CreateFixture(groundBox, 0.0);

	var dynamicBodyDef = new b2BodyDef();

	dynamicBodyDef.set_type(Box2D.b2_dynamicBody);
	dynamicBodyDef.set_position(new b2Vec2(0.0, 1.0));
	var DEGTORAD = 0.0174532925199432957;
	//dynamicBodyDef.set_linearVelocity(new b2Vec2(-4.0, -4.0));
	//dynamicBodyDef.set_angularVelocity(-90 * DEGTORAD);
	dynamicBodyDef.set_angle(30.0);

	var dynamicBody = world.CreateBody(dynamicBodyDef);
	window.dynamicBody = dynamicBody;;

	var polygonShape = new b2PolygonShape();

	polygonShape.SetAsBox(1.0, 1.0);

	var fixtureDef = new b2FixtureDef();
	fixtureDef.set_shape(polygonShape);
	fixtureDef.set_density(1.0);
	fixtureDef.set_friction(0.3);

	dynamicBody.CreateFixture(fixtureDef);

	window.dynamicBody = dynamicBody;
}
/**
 * Created by marcin on 02.04.17.
 */
