﻿function GetPluginSettings()
{
	return {
		"name":			"IDNet",			// as appears in 'insert object' dialog, can be changed as long as "id" stays the same
		"id":			"IDNet",			// this is used to identify this plugin and is saved to the project; never change it
		"version":		"1.0",					// (float in x.y format) Plugin version - C2 shows compatibility warnings based on this
		"description":	"Integrate in your game IDNet sdk.",
		"author":		"Scirra",
		"help url":		"http://www.id.net",
		"category":		"Platform specific",	// Prefer to re-use existing categories, but you can set anything here
		"type":			"object",				// either "world" (appears in layout and is drawn), else "object"
		"rotatable":	false,					// only used when "type" is "world".  Enables an angle property on the object.
		"flags":		0						// uncomment lines to enable flags...
						| pf_singleglobal		// exists project-wide, e.g. mouse, keyboard.  "type" must be "object".
	};
};

////////////////////////////////////////
// Parameter types:
// AddNumberParam(label, description [, initial_string = "0"])			// a number
// AddStringParam(label, description [, initial_string = "\"\""])		// a string
// AddAnyTypeParam(label, description [, initial_string = "0"])			// accepts either a number or string
// AddCmpParam(label, description)										// combo with equal, not equal, less, etc.
// AddComboParamOption(text)											// (repeat before "AddComboParam" to add combo items)
// AddComboParam(label, description [, initial_selection = 0])			// a dropdown list parameter
// AddObjectParam(label, description)									// a button to click and pick an object type
// AddLayerParam(label, description)									// accepts either a layer number or name (string)
// AddLayoutParam(label, description)									// a dropdown list with all project layouts
// AddKeybParam(label, description)										// a button to click and press a key (returns a VK)
// AddAnimationParam(label, description)								// a string intended to specify an animation name
// AddAudioFileParam(label, description)								// a dropdown list with all imported project audio files

////////////////////////////////////////
// Conditions

// AddCondition(id,					// any positive integer to uniquely identify this condition
//				flags,				// (see docs) cf_none, cf_trigger, cf_fake_trigger, cf_static, cf_not_invertible,
//									// cf_deprecated, cf_incompatible_with_triggers, cf_looping
//				list_name,			// appears in event wizard list
//				category,			// category in event wizard list
//				display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//				description,		// appears in event wizard dialog when selected
//				script_name);		// corresponding runtime function name
				
AddCondition(0, cf_none, "Is authorized", "User", "Is authorized", "True if authorized (sdk is loaded)", "isAuthorized");
AddCondition(1, cf_none, "Is not authorized", "User", "Is not authorized", "True if not authorized", "isNotAuthorized");
AddCondition(2, cf_none, "Is user authorized", "User", "Is user authorized", "True if user is authorized", "UserIsAuthorized");
AddCondition(3, cf_none, "Is user not authorized", "User", "Is user not authorized", "True if user is not authorized", "UserIsNotAuthorized");

////////////////////////////////////////
// Actions

// AddAction(id,				// any positive integer to uniquely identify this action
//			 flags,				// (see docs) af_none, af_deprecated
//			 list_name,			// appears in event wizard list
//			 category,			// category in event wizard list
//			 display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//			 description,		// appears in event wizard dialog when selected
//			 script_name);		// corresponding runtime function name

AddStringParam("Appid", "appId");
AddAction(0, 0, "Init", "Init", "Init", "Initialisation of Idnet", "Init");

AddAction(1, 0, "Show registration box", "User", "Show registration box", "Show a dialog prompting the user to register an account.", "RegisterPopup");
AddAction(2, 0, "Show login box", "User", "Show login box", "Show a dialog prompting the user to login an account.", "LoginPopup");

AddNumberParam("Score", "The value to submit for the statistic.  Must be a positive integer.");
AddStringParam("Table", "Table name");
AddNumberParam("Allowduplicates", "Set to 1 if player’s can submit more than one score.");
AddNumberParam("Highest", "Table name");
AddStringParam("Playername", "Set playername");
AddAction(3, 0, "Submit statistic", "Statistics", "Submit scores {0}", "Submit a statistic to the IDNet statistics system.", "SubmitScore");

AddStringParam("Image", "Text to add to the shout box.");
AddAction(4, 0, "Send image to profile", "Post to profile", "Send image {0}", "Allow the user to post image to page", "SubmitProfileImage");

AddStringParam("Table", "Table name");
AddStringParam("Mode", "Equals alltime, last30days, last7days, today, or newest.");
AddNumberParam("Highest", " Set to 0 if a lower score is better.");
AddNumberParam("Allowduplicates", "Set to 1 if player’s can have more than one score displayed.");
AddAction(5, 0, "Show leaderboard", "Statistics", "Show data leaderboard", "Show data leaderboard", "ShowLeaderBoard");

AddStringParam("AchievementTitle", "AchievementName");
AddStringParam("AchievementKey", "AchievementKey");
AddStringParam("Overwrite", "Allow players to unlock the same achievement more than once.");
AddStringParam("Allowduplicates", " Allow players to unlock the same achievement and display them seperatly.");
AddAction(6, 0, "Save achievement", "Achievements", "Save achievement with title {0} and key {1}", "Save achievement", "AchievementSave");

AddAction(7, 0, "Show achievements", "Achievements", "Show achievements", "Show achievements", "ShowAchievements");

AddStringParam("Key", "Key");
AddStringParam("Value", "Value");
AddAction(8, 0, "Save user data", "Saves", "Save data to online saves with title {0} and value {1}", "Save user data", "OnlineSavesSave");

AddStringParam("Key", "Key");
AddAction(9, 0, "Load user data", "Saves", "Load data from online saves with title {0}", "Load user data", "OnlineSavesLoad");

AddStringParam("Key", "Key");
AddAction(10, 0, "Remove user data", "Saves", "Remove data from online saves with title {0}", "Remove user data", "OnlineSavesRemove");


AddAction(11, 0, "CheckIsBlacklisted", "Protection and sponsor API", "Check is domaine on blacklist", "Check is domaine on blacklist", "CheckIsBlacklisted");
AddAction(12, 0, "CheckIsSponsor", "Protection and sponsor API", "Check is domaine on sponsorlist", "Check is domaine on sponsorlist", "CheckIsSponsor");


////////////////////////////////////////
// Expressions

// AddExpression(id,			// any positive integer to uniquely identify this expression
//				 flags,			// (see docs) ef_none, ef_deprecated, ef_return_number, ef_return_string,
//								// ef_return_any, ef_variadic_parameters (one return flag must be specified)
//				 list_name,		// currently ignored, but set as if appeared in event wizard
//				 category,		// category in expressions panel
//				 exp_name,		// the expression name after the dot, e.g. "foo" for "myobject.foo" - also the runtime function name
//				 description);	// description in expressions panel

// example
AddExpression(0, ef_return_string, "User name", "User", "UserName", "Return the current user's name, or a guest name if not logged in.");
AddExpression(1, ef_return_string, "Session Key", "User", "SessionKey", "Return session key");
AddExpression(2, ef_return_string, "User data", "Saves", "GateOnlineSavesData", "Return user data of online saves");

AddExpression(3, ef_return_number, "Get is blacklisted", "Protection and sponsor API", "GetIsBlacklisted", "Return is blacklisted");
AddExpression(4, ef_return_number, "Get is sponsor", "Protection and sponsor API", "GetIsSponsor", "Return get is sponsor");

////////////////////////////////////////
ACESDone();

////////////////////////////////////////
// Array of property grid properties for this plugin
// new cr.Property(ept_integer,		name,	initial_value,	description)		// an integer value
// new cr.Property(ept_float,		name,	initial_value,	description)		// a float value
// new cr.Property(ept_text,		name,	initial_value,	description)		// a string
// new cr.Property(ept_color,		name,	initial_value,	description)		// a color dropdown
// new cr.Property(ept_font,		name,	"Arial,-16", 	description)		// a font with the given face name and size
// new cr.Property(ept_combo,		name,	"Item 1",		description, "Item 1|Item 2|Item 3")	// a dropdown list (initial_value is string of initially selected item)
// new cr.Property(ept_link,		name,	link_text,		description, "firstonly")		// has no associated value; simply calls "OnPropertyChanged" on click

var property_list = [
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
		
	// Plugin-specific variables
	// this.myValue = 0...
}

// Called when inserted via Insert Object Dialog for the first time
IDEInstance.prototype.OnInserted = function()
{
}

// Called when double clicked in layout
IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called after a property has been changed in the properties bar
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

// For rendered objects to load fonts or textures
IDEInstance.prototype.OnRendererInit = function(renderer)
{
}

// Called to draw self in the editor if a layout object
IDEInstance.prototype.Draw = function(renderer)
{
}

// For rendered objects to release fonts or textures
IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}