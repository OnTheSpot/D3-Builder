// Configuration Object
//
// sets the options for the interface for each chart type. This is a purely data object

Config = {
	dataAllowed : {
		"pie" : 		["flat", "nested"],
		"pack" : 		["nested"],
		"sunburst" : 	["nested"],
		"force" : 		["nested"],
		"area" : 		["quantitative", "flat"],
		"bar" : 		["quantitative", "flat"],
		"chord" : 		["matrix"]
	},
	dataAttributes : {
		"pie" : 		["name", "value", "children"],
		"pack" : 		["name", "value", "children"],
		"sunburst" : 	["name", "value", "children"],
		"force" : 		["name", "value", "children"],
		"area" : 		["x", "y"],
		"bar" : 		["x", "y"],
		"chord" : 		["x", "y"]
	}
	dataScaleX : {
		"pie" : 		[],
		"pack" : 		[],
		"sunburst" : 	[],
		"force" : 		[],
		"area" : 		["ordinal"],
		"bar" : 		["ordinal"],
		"chord" : 		[]
	}
	dataScaleY : {
		"pie" : 		[],
		"pack" : 		[],
		"sunburst" : 	[],
		"force" : 		[],
		"area" : 		["qualitative"],
		"bar" : 		["qualitative"],
		"chord" : 		[]
	}
}