/***********************************************************************************************************
 * com.oclib.javascript.lang.root.20070110.Root
 * Location: http://www.oclib.com/library/com/oclib/javascript/lang/Root.js
 * Version Location: http://www.oclib.com/library/com/oclib/javascript/lang/root/builds/20070512/index.html
 * Index Version Location: http://www.oclib.com/library/com/oclib/javascript/lang/root/builds/20070512/index.html
 * � Open Class Library (http://www.oclib.com/)
***********************************************************************************************************/
if (typeof com == "undefined") {com = {};};
if (typeof com.oclib == "undefined") {com.oclib = {};};
if (typeof com.oclib.javascript == "undefined") {com.oclib.javascript = {};};
if (typeof com.oclib.javascript.lang == "undefined") {com.oclib.javascript.lang = {};};

if (typeof com.oclib.javascript.lang.Root == "undefined") {
 com.oclib.javascript.lang.Root = function() {};

 com.oclib.javascript.lang.Root.prototype.classCreated = "20061018"; 
  com.oclib.javascript.lang.Root.prototype.getClassCreated = function () {return this.classCreated;};
 com.oclib.javascript.lang.Root.prototype.classCreator = "http://www.oclib.com/"; 
  com.oclib.javascript.lang.Root.prototype.getClassCreator = function () {return this.classCreator;};
 com.oclib.javascript.lang.Root.prototype.classIndexLocation = "http://www.oclib.com/library/com/oclib/javascript/lang/root/"; 
  com.oclib.javascript.lang.Root.prototype.getClassIndexLocation = function () {return this.classIndexLocation;};
 com.oclib.javascript.lang.Root.prototype.classLocation = "http://www.oclib.com/library/com/oclib/javascript/lang/Root.js"; 
  com.oclib.javascript.lang.Root.prototype.getClassLocation = function () {return this.classLocation;};
 com.oclib.javascript.lang.Root.prototype.className = "Root"; 
  com.oclib.javascript.lang.Root.prototype.getClassName = function () {return this.className;};
 com.oclib.javascript.lang.Root.prototype.classNamespace = "com.oclib.javascript.lang.Root"; 
  com.oclib.javascript.lang.Root.prototype.getClassNamespace = function () {return this.classNamespace;};
 com.oclib.javascript.lang.Root.prototype.classVersion = "20070512"; 
  com.oclib.javascript.lang.Root.prototype.getClassVersion = function () {return this.classVersion;};
 com.oclib.javascript.lang.Root.prototype.classVersionIndexLocation = "http://www.oclib.com/library/com/oclib/javascript/lang/root/builds/20070512/"; 
  com.oclib.javascript.lang.Root.prototype.getClassVersionIndexLocation = function () {return this.classVersionIndexLocation;};
 com.oclib.javascript.lang.Root.prototype.classVersionLocation = "http://www.oclib.com/library/com/oclib/javascript/lang/root/builds/20070512/Root.js"; 
  com.oclib.javascript.lang.Root.prototype.getClassVersionLocation = function () {return this.classVersionLocation;};
  
 com.oclib.javascript.lang.Root.prototype.clone = function () {var c = new this.constructor(); for(var p in this){c[p]=this[p];}; return c;};
 com.oclib.javascript.lang.Root.prototype.getClone = function () {return this.clone();};
 com.oclib.javascript.lang.Root.prototype.debugging = false;
  com.oclib.javascript.lang.Root.prototype.getDebugging = function () {return this.debugging;};
  com.oclib.javascript.lang.Root.prototype.getDebuging = function () {return this.getDebugging();};
  com.oclib.javascript.lang.Root.prototype.mustDebug = function () {return (this.getDebugging() && this.getLog());};
  com.oclib.javascript.lang.Root.prototype.setDebugging = function (debugging) {this.debugging = debugging;};
  com.oclib.javascript.lang.Root.prototype.setDebuging = function (debugging) {return this.setDebugging(debugging);};
 com.oclib.javascript.lang.Root.prototype.profile = false;
  com.oclib.javascript.lang.Root.prototype.getProfile = function () {return this.profile;};
  com.oclib.javascript.lang.Root.prototype.mustProfile = function () {return (this.getProfile() && this.getProfiler());};
  com.oclib.javascript.lang.Root.prototype.setProfile = function (profile) {this.profile = profile;};
 com.oclib.javascript.lang.Root.prototype.rootLog; 
  com.oclib.javascript.lang.Root.prototype.getLog = function () {return this.rootLog;};
  com.oclib.javascript.lang.Root.prototype.setLog = function (rootLog) {this.rootLog = rootLog;};
 com.oclib.javascript.lang.Root.prototype.rootProfiler; 
  com.oclib.javascript.lang.Root.prototype.getProfiler = function () {return this.rootProfiler;};
  com.oclib.javascript.lang.Root.prototype.setProfiler = function (rootProfiler) {this.rootProfiler = rootProfiler;};
 com.oclib.javascript.lang.Root.prototype.tracing = false;
  com.oclib.javascript.lang.Root.prototype.getTracing = function () {return this.tracing;};
  com.oclib.javascript.lang.Root.prototype.mustTrace = function () {return (this.getTracing() && this.getLog());};
  com.oclib.javascript.lang.Root.prototype.setTracing = function (tracing) {this.tracing = tracing;};
};
