Clazz.declarePackage ("JSV.common");
Clazz.load (["java.lang.Enum"], "JSV.common.ScriptToken", ["java.util.Hashtable", "JU.Lst", "$.PT", "$.SB", "JSV.common.ScriptTokenizer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.tip = null;
this.description = null;
Clazz.instantialize (this, arguments);
}, JSV.common, "ScriptToken", Enum);
Clazz.defineMethod (c$, "getTip", 
function () {
return "  " + (this.tip === "T" ? "TRUE/FALSE/TOGGLE" : this.tip === "TF" ? "TRUE or FALSE" : this.tip === "C" ? "COLOR" : this.tip);
});
Clazz.makeConstructor (c$, 
 function () {
});
Clazz.makeConstructor (c$, 
 function (tip) {
this.tip = tip;
this.description = "";
}, "~S");
Clazz.makeConstructor (c$, 
 function (tip, description) {
this.tip = tip;
this.description = "-- " + description;
}, "~S,~S");
c$.getScriptToken = Clazz.defineMethod (c$, "getScriptToken", 
function (name) {
if (JSV.common.ScriptToken.htParams == null) {
JSV.common.ScriptToken.htParams =  new java.util.Hashtable ();
for (var item, $item = 0, $$item = JSV.common.ScriptToken.values (); $item < $$item.length && ((item = $$item[$item]) || true); $item++) JSV.common.ScriptToken.htParams.put (item.name (), item);

}var st = JSV.common.ScriptToken.htParams.get (name.toUpperCase ());
return (st == null ? JSV.common.ScriptToken.UNKNOWN : st);
}, "~S");
c$.getScriptTokenList = Clazz.defineMethod (c$, "getScriptTokenList", 
function (name, isExact) {
if (name != null) name = name.toUpperCase ();
var list =  new JU.Lst ();
if (isExact) {
var st = JSV.common.ScriptToken.getScriptToken (name);
if (st != null) list.addLast (st);
} else {
for (var entry, $entry = JSV.common.ScriptToken.htParams.entrySet ().iterator (); $entry.hasNext () && ((entry = $entry.next ()) || true);) if ((name == null || entry.getKey ().startsWith (name)) && entry.getValue ().tip != null) list.addLast (entry.getValue ());

}return list;
}, "~S,~B");
c$.getValue = Clazz.defineMethod (c$, "getValue", 
function (st, params, cmd) {
if (!params.hasMoreTokens ()) return "";
switch (st) {
default:
return JSV.common.ScriptTokenizer.nextStringToken (params, true);
case JSV.common.ScriptToken.CLOSE:
case JSV.common.ScriptToken.GETPROPERTY:
case JSV.common.ScriptToken.INTEGRATION:
case JSV.common.ScriptToken.INTEGRATE:
case JSV.common.ScriptToken.JMOL:
case JSV.common.ScriptToken.LABEL:
case JSV.common.ScriptToken.LOAD:
case JSV.common.ScriptToken.PEAK:
case JSV.common.ScriptToken.PLOTCOLORS:
case JSV.common.ScriptToken.YSCALE:
case JSV.common.ScriptToken.WRITE:
return JSV.common.ScriptToken.removeCommandName (cmd);
case JSV.common.ScriptToken.SELECT:
case JSV.common.ScriptToken.OVERLAY:
case JSV.common.ScriptToken.VIEW:
case JSV.common.ScriptToken.ZOOM:
return JSV.common.ScriptToken.removeCommandName (cmd).$replace (',', ' ').trim ();
}
}, "JSV.common.ScriptToken,JSV.common.ScriptTokenizer,~S");
c$.removeCommandName = Clazz.defineMethod (c$, "removeCommandName", 
 function (cmd) {
var pt = cmd.indexOf (" ");
if (pt < 0) return "";
return cmd.substring (pt).trim ();
}, "~S");
c$.getKey = Clazz.defineMethod (c$, "getKey", 
function (eachParam) {
var key = eachParam.nextToken ();
if (key.startsWith ("#") || key.startsWith ("//")) return null;
if (key.equalsIgnoreCase ("SET")) key = eachParam.nextToken ();
return key.toUpperCase ();
}, "JSV.common.ScriptTokenizer");
c$.getTokens = Clazz.defineMethod (c$, "getTokens", 
function (value) {
if (value.startsWith ("'") && value.endsWith ("'")) value = "\"" + JU.PT.trim (value, "'") + "\"";
var tokens =  new JU.Lst ();
var st =  new JSV.common.ScriptTokenizer (value, false);
while (st.hasMoreTokens ()) {
var s = JSV.common.ScriptTokenizer.nextStringToken (st, false);
if (s.startsWith ("//") || s.startsWith ("#")) break;
tokens.addLast (s);
}
return tokens;
}, "~S");
c$.getNameList = Clazz.defineMethod (c$, "getNameList", 
function (list) {
if (list.size () == 0) return "";
var sb =  new JU.SB ();
for (var i = 0; i < list.size (); i++) sb.append (",").append (list.get (i).toString ());

return sb.toString ().substring (1);
}, "JU.Lst");
Clazz.defineMethod (c$, "getDescription", 
function () {
return this.description;
});
c$.htParams = null;
Clazz.defineEnumConstant (c$, "UNKNOWN", 0, []);
Clazz.defineEnumConstant (c$, "APPLETID", 1, []);
Clazz.defineEnumConstant (c$, "APPLETREADYCALLBACKFUNCTIONNAME", 2, []);
Clazz.defineEnumConstant (c$, "AUTOINTEGRATE", 3, ["TF", "automatically integrate an NMR spectrum"]);
Clazz.defineEnumConstant (c$, "BACKGROUNDCOLOR", 4, ["C", "set the background color"]);
Clazz.defineEnumConstant (c$, "CLOSE", 5, ["spectrumId or fileName or ALL or VIEWS or SIMULATIONS", "close one or more views or simulations"]);
Clazz.defineEnumConstant (c$, "COMPOUNDMENUON", 6, []);
Clazz.defineEnumConstant (c$, "COORDCALLBACKFUNCTIONNAME", 7, []);
Clazz.defineEnumConstant (c$, "COORDINATESCOLOR", 8, ["C", "set the color of the coordinates shown in the upper right-hand corner"]);
Clazz.defineEnumConstant (c$, "COORDINATESON", 9, ["T", "turn on or off the coordinates shown in the upper right-hand corner"]);
Clazz.defineEnumConstant (c$, "DEBUG", 10, ["TF", "turn debugging on and off"]);
Clazz.defineEnumConstant (c$, "DEFAULTLOADSCRIPT", 11, ["\"script...\"", "set the script to be run after each file is loaded"]);
Clazz.defineEnumConstant (c$, "DEFAULTNMRNORMALIZATION", 12, ["maxYvalue", "set the value to be given the largest peak in an HMR spectrum"]);
Clazz.defineEnumConstant (c$, "DISPLAYFONTNAME", 13, []);
Clazz.defineEnumConstant (c$, "DISPLAY1D", 14, ["T", "turn on or off display of 1D spectra when 1D and 2D spectra are loaded"]);
Clazz.defineEnumConstant (c$, "DISPLAY2D", 15, ["T", "turn on or off display of the 2D spectrum when 1D and 2D spectra are loaded"]);
Clazz.defineEnumConstant (c$, "ENABLEZOOM", 16, ["T", "allow or disallow zooming"]);
Clazz.defineEnumConstant (c$, "ENDINDEX", 17, []);
Clazz.defineEnumConstant (c$, "FINDX", 18, ["value", "move the vertical-line cursor to a specific x-axis value"]);
Clazz.defineEnumConstant (c$, "GETPROPERTY", 19, ["[propertyName] or ALL or NAMES", "get a property value or all property values as key/value pairs, or a list of names"]);
Clazz.defineEnumConstant (c$, "GETSOLUTIONCOLOR", 20, [" FILL or FILLNONE or FILLALL or FILLALLNONE", "estimate the solution color for UV/VIS spectra"]);
Clazz.defineEnumConstant (c$, "GRIDCOLOR", 21, ["C", "color of the grid"]);
Clazz.defineEnumConstant (c$, "GRIDON", 22, ["T", "turn the grid lines on or off"]);
Clazz.defineEnumConstant (c$, "HELP", 23, ["[command]", "get this listing or help for a specific command"]);
Clazz.defineEnumConstant (c$, "HIDDEN", 24, []);
Clazz.defineEnumConstant (c$, "HIGHLIGHTCOLOR", 25, ["C", "set the highlight color"]);
Clazz.defineEnumConstant (c$, "HIGHLIGHT", 26, ["OFF or X1 X2 [OFF] or X1 X2 r g b [a]", "turns on or off a highlight color, possibily setting its color, where r g b a are 0-255 or 0.0-1.0"]);
Clazz.defineEnumConstant (c$, "INTEGRALOFFSET", 27, ["percent", "sets the integral offset from baseline"]);
Clazz.defineEnumConstant (c$, "INTEGRALRANGE", 28, ["percent", "sets the height of the total integration"]);
Clazz.defineEnumConstant (c$, "INTEGRATE", 29, ["", "see INTEGRATION"]);
Clazz.defineEnumConstant (c$, "INTEGRATION", 30, ["ON/OFF/TOGGLE/AUTO/CLEAR/MIN value/MARK ppm1-ppm2:norm,ppm3-ppm4,...", "show/hide integration or set integrals (1D 1H NMR only)"]);
Clazz.defineEnumConstant (c$, "INTEGRALPLOTCOLOR", 31, ["C", "color of the integration line"]);
Clazz.defineEnumConstant (c$, "INTEGRATIONRATIOS", 32, ["'x:value,x:value,..'", "annotate the spectrum with numbers or text at specific x values"]);
Clazz.defineEnumConstant (c$, "INTERFACE", 33, ["SINGLE or OVERLAY", "set how multiple spectra are displayed"]);
Clazz.defineEnumConstant (c$, "IRMODE", 34, ["A or T or TOGGLE", "set the IR mode to absorption or transmission"]);
Clazz.defineEnumConstant (c$, "JMOL", 35, ["...Jmol command...", "send a command to Jmol (if present)"]);
Clazz.defineEnumConstant (c$, "JSV", 36, []);
Clazz.defineEnumConstant (c$, "LABEL", 37, ["x y [color and/or \"text\"]", "add a text label"]);
Clazz.defineEnumConstant (c$, "LINK", 38, ["AB or ABC or NONE or ALL", "synchronize the crosshair of a 2D spectrum with 1D cursors"]);
Clazz.defineEnumConstant (c$, "LOAD", 39, ["[APPEND] \"fileName\" [first] [last]; use \"\" for current file; $H1/name or $C13/name for simulation", "load a specturm"]);
Clazz.defineEnumConstant (c$, "LOADFILECALLBACKFUNCTIONNAME", 40, []);
Clazz.defineEnumConstant (c$, "LOADIMAGINARY", 41, ["TF", "set TRUE to load imaginary NMR component"]);
Clazz.defineEnumConstant (c$, "MENUON", 42, []);
Clazz.defineEnumConstant (c$, "OBSCURE", 43, []);
Clazz.defineEnumConstant (c$, "OVERLAY", 44, []);
Clazz.defineEnumConstant (c$, "OVERLAYSTACKED", 45, ["TF", "whether viewed spectra are shown separately, in a stack"]);
Clazz.defineEnumConstant (c$, "PEAK", 46, ["[IR,CNMR,HNMR,MS] [#nnn or ID=xxx or text] [ALL], for example: PEAK HNMR #3", "highlights a peak based on its number or title text, optionally checking all loade spectra"]);
Clazz.defineEnumConstant (c$, "PEAKCALLBACKFUNCTIONNAME", 47, []);
Clazz.defineEnumConstant (c$, "PEAKLIST", 48, ["[THRESHOLD=n] [INTERPOLATE=PARABOLIC or NONE]", "creates a peak list based on a threshold value and parabolic or no interpolation"]);
Clazz.defineEnumConstant (c$, "PEAKTABCOLOR", 49, ["C", "sets the color of peak marks for a peak listing"]);
Clazz.defineEnumConstant (c$, "PEAKTABSON", 50, ["T", "show peak tabs for simulated spectra"]);
Clazz.defineEnumConstant (c$, "PLOTAREACOLOR", 51, ["C", "sets the color of the plot background"]);
Clazz.defineEnumConstant (c$, "PLOTCOLOR", 52, ["C", "sets the color of the graph line"]);
Clazz.defineEnumConstant (c$, "PLOTCOLORS", 53, ["color,color,color,...", "sets the colors of multiple plots"]);
Clazz.defineEnumConstant (c$, "PRINT", 54, ["", "prints the current spectrum"]);
Clazz.defineEnumConstant (c$, "REVERSEPLOT", 55, ["T", "reverses the x-axis of a spectrum"]);
Clazz.defineEnumConstant (c$, "SCALEBY", 56, ["factor", "multiplies the y-scale of the spectrum by a factor"]);
Clazz.defineEnumConstant (c$, "SCALECOLOR", 57, ["C", "sets the color of the x-axis and y-axis scales"]);
Clazz.defineEnumConstant (c$, "SCRIPT", 58, ["filename.jsv", "runs a script from a file"]);
Clazz.defineEnumConstant (c$, "SELECT", 59, ["spectrumID, spectrumID,...", "selects one or more spectra based on IDs"]);
Clazz.defineEnumConstant (c$, "SETPEAK", 60, ["xNew, xOld xNew, ?, or NONE", "sets nearest peak to xOld ppm to a new value; NONE resets (1D NMR only)"]);
Clazz.defineEnumConstant (c$, "SETX", 61, ["xNew, xOld xNew, ?, or NONE", "sets an old ppm position in the spectrum to a new value; NONE resets (1D NMR only)"]);
Clazz.defineEnumConstant (c$, "SHIFTX", 62, ["dx or NONE", "shifts the x-axis of a 1D NMR spectrum by the given ppm; NONE resets (1D NMR only)"]);
Clazz.defineEnumConstant (c$, "SHOWERRORS", 63, ["shows recent errors"]);
Clazz.defineEnumConstant (c$, "SHOWINTEGRATION", 64, ["T", "shows an integration listing"]);
Clazz.defineEnumConstant (c$, "SHOWKEY", 65, ["T", "shows a color key when multiple spectra are displayed"]);
Clazz.defineEnumConstant (c$, "SHOWMEASUREMENTS", 66, ["T", "shows a listing of measurements"]);
Clazz.defineEnumConstant (c$, "SHOWMENU", 67, ["displays the popup menu"]);
Clazz.defineEnumConstant (c$, "SHOWPEAKLIST", 68, ["T", "shows a listing for peak picking"]);
Clazz.defineEnumConstant (c$, "SHOWPROPERTIES", 69, ["displays the header information of a JDX file"]);
Clazz.defineEnumConstant (c$, "SHOWSOURCE", 70, ["displays the source JDX file associated with the selected data"]);
Clazz.defineEnumConstant (c$, "SPECTRUM", 71, ["id", "displays a specific spectrum, where id is a number 1, 2, 3... or a file.spectrum number such as 2.1"]);
Clazz.defineEnumConstant (c$, "SPECTRUMNUMBER", 72, ["n", "displays the nth spectrum loaded"]);
Clazz.defineEnumConstant (c$, "STACKOFFSETY", 73, ["percent", "sets the y-axis offset of stacked spectra"]);
Clazz.defineEnumConstant (c$, "STARTINDEX", 74, []);
Clazz.defineEnumConstant (c$, "SYNCCALLBACKFUNCTIONNAME", 75, []);
Clazz.defineEnumConstant (c$, "SYNCID", 76, []);
Clazz.defineEnumConstant (c$, "TEST", 77, []);
Clazz.defineEnumConstant (c$, "TITLEON", 78, ["T", "turns the title in the bottom left corner on or off"]);
Clazz.defineEnumConstant (c$, "TITLEBOLDON", 79, ["T", "makes the title bold"]);
Clazz.defineEnumConstant (c$, "TITLECOLOR", 80, ["C", "sets the color of the title"]);
Clazz.defineEnumConstant (c$, "TITLEFONTNAME", 81, ["fontName", "sets the title font"]);
Clazz.defineEnumConstant (c$, "UNITSCOLOR", 82, ["C", "sets the color of the x-axis and y-axis units"]);
Clazz.defineEnumConstant (c$, "VERSION", 83, []);
Clazz.defineEnumConstant (c$, "VIEW", 84, ["spectrumID, spectrumID, ... Example: VIEW 3.1, 3.2  or  VIEW \"acetophenone\"", "creates a view of one or more spectra"]);
Clazz.defineEnumConstant (c$, "XSCALEON", 85, ["T", "set FALSE to turn off the x-axis scale"]);
Clazz.defineEnumConstant (c$, "XUNITSON", 86, ["T", "set FALSE to turn off the x-axis units"]);
Clazz.defineEnumConstant (c$, "YSCALE", 87, ["[ALL] lowValue highValue"]);
Clazz.defineEnumConstant (c$, "YSCALEON", 88, ["T", "set FALSE to turn off the y-axis scale"]);
Clazz.defineEnumConstant (c$, "YUNITSON", 89, ["T", "set FALSE to turn off the y-axis units"]);
Clazz.defineEnumConstant (c$, "WINDOW", 90, []);
Clazz.defineEnumConstant (c$, "WRITE", 91, ["[XY,DIF,DIFDUP,PAC,FIX,SQZ,AML,CML,JPG,PDF,PNG,SVG] \"filename\"", "writes a file in the specified format"]);
Clazz.defineEnumConstant (c$, "ZOOM", 92, ["OUT or PREVIOUS or NEXT or x1,x2 or x1,y1 x2,y2", "sets the zoom"]);
Clazz.defineEnumConstant (c$, "ZOOMBOXCOLOR", 93, []);
Clazz.defineEnumConstant (c$, "ZOOMBOXCOLOR2", 94, []);
});
