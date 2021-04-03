(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"campdate_atlas_1", frames: [[0,1161,363,187],[0,1350,363,187],[1651,1430,363,187],[600,1451,363,187],[1283,1478,363,187],[0,1539,363,187],[1648,1619,363,187],[365,1640,363,187],[730,1640,363,187],[1095,1667,363,187],[0,1728,363,187],[1460,1808,363,187],[365,1829,363,187],[730,1829,363,187],[1095,1856,363,187],[418,807,391,263],[1103,0,316,539],[437,0,331,551],[0,0,435,539],[1297,942,175,534],[1421,282,231,658],[770,0,331,551],[217,541,199,586],[0,541,215,618],[1103,541,192,569],[1474,942,175,534],[1654,282,218,614],[1841,898,191,513],[829,553,202,491],[1654,898,185,530],[418,1072,180,459],[418,553,409,252],[811,1046,268,339],[1421,0,547,280],[600,1072,200,377],[1081,1112,200,377]]},
		{name:"campdate_atlas_2", frames: [[475,554,53,92],[365,551,54,93],[365,455,56,94],[423,455,55,94],[59,567,52,91],[0,567,57,95],[67,893,51,91],[141,779,50,90],[193,774,49,89],[215,865,47,87],[306,764,46,87],[391,649,45,86],[438,649,44,85],[237,683,48,88],[143,683,50,89],[401,920,43,85],[528,648,41,84],[531,907,40,83],[613,556,39,82],[653,767,37,81],[690,683,37,81],[613,768,38,82],[484,648,42,84],[729,683,36,80],[699,842,35,79],[768,483,33,78],[838,529,32,78],[801,563,31,77],[872,529,30,77],[696,556,34,79],[768,893,29,76],[906,615,28,75],[996,683,26,74],[903,692,25,74],[799,877,27,75],[996,759,26,74],[874,692,27,74],[936,683,28,75],[966,683,28,75],[768,563,31,76],[875,615,29,75],[801,683,30,75],[571,655,33,77],[767,683,32,76],[732,556,34,78],[803,483,33,78],[654,931,37,80],[693,925,36,80],[731,923,35,79],[609,683,39,83],[488,916,41,84],[650,683,38,82],[571,821,40,83],[615,931,37,81],[524,734,41,85],[442,831,42,86],[397,831,43,87],[355,937,44,87],[308,853,45,88],[343,646,46,90],[158,567,48,92],[287,673,46,89],[208,567,47,91],[120,893,49,93],[46,797,50,94],[91,683,50,94],[580,455,51,95],[480,455,53,97],[421,551,52,96],[958,267,46,147],[865,385,45,142],[958,114,46,151],[910,114,46,155],[959,552,44,129],[912,416,45,138],[959,416,45,134],[0,810,44,121],[0,683,44,125],[46,683,43,112],[113,567,43,108],[257,567,42,100],[535,455,43,116],[171,871,42,104],[396,737,41,92],[264,876,42,96],[481,736,41,88],[528,821,41,84],[654,556,40,77],[657,850,40,73],[571,573,40,80],[716,483,39,65],[904,556,39,57],[530,573,39,69],[833,725,39,49],[815,776,39,45],[736,830,39,61],[777,642,39,37],[768,971,39,53],[613,640,39,41],[573,990,39,34],[654,637,39,44],[256,974,39,36],[809,954,39,49],[695,637,39,41],[171,977,39,47],[777,823,39,52],[736,642,39,39],[833,668,39,55],[733,765,39,63],[675,483,39,66],[834,609,39,57],[774,761,39,60],[215,954,39,68],[633,483,40,71],[692,766,39,74],[573,906,40,82],[486,826,40,88],[615,852,40,77],[567,734,40,85],[446,919,40,90],[308,943,40,79],[439,736,40,93],[355,839,40,96],[354,738,40,99],[264,773,40,101],[301,567,40,104],[984,0,40,109],[818,835,41,35],[195,661,40,107],[67,986,42,36],[98,779,41,112],[856,776,41,34],[899,795,41,31],[828,872,41,32],[871,868,41,24],[850,993,41,25],[850,936,41,27],[942,795,41,29],[828,906,41,28],[59,660,42,21],[488,1002,41,22],[871,894,41,23],[850,965,42,26],[893,993,42,24],[942,826,42,28],[861,835,42,31],[930,760,42,33],[912,385,42,29],[111,988,43,34],[0,0,363,187],[365,0,363,187],[0,189,363,187],[365,189,363,187],[693,1007,46,15],[0,1012,58,9],[0,378,363,187],[741,1004,19,20],[0,933,65,77],[401,1007,34,15],[871,919,34,15],[0,664,34,15],[856,812,34,15],[531,992,34,15],[531,1009,34,15],[942,856,34,15],[978,871,34,15],[937,873,34,15],[986,835,36,16],[986,853,36,16],[905,846,35,15],[158,661,35,16],[809,1005,37,17],[905,828,35,16],[365,378,290,75],[437,1007,7,13],[657,385,206,96],[446,1011,7,13],[730,0,252,112],[730,273,210,110],[730,114,178,157]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_329 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_330 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_332 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_331 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_328 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_333 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_327 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_326 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_324 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_322 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_321 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_320 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_319 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_323 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_325 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_318 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_316 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_315 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_314 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_311 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_312 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_313 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_317 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_310 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_309 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_307 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_306 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_305 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_304 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_308 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_303 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_302 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_300 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_299 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_301 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_298 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_297 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_296 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_295 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_292 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_294 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_293 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_290 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_291 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_288 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_289 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_285 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_286 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_287 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_282 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_280 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_283 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_281 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_284 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_279 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_278 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_277 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_276 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_275 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_273 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_271 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_274 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_272 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_270 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_269 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_268 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_267 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_265 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_266 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_262 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_261 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_263 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_264 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_258 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_260 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_259 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_256 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_257 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_254 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_253 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_251 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_255 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_252 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_249 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_250 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_248 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_247 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_245 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_244 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_246 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_242 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_240 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_243 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_238 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_237 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_241 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_235 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_239 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_236 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_234 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_230 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_233 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_228 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_231 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_229 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_227 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_232 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_226 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_223 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_222 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_225 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_224 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_221 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_220 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_219 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_216 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_214 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_218 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_215 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_213 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_217 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_212 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_211 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_210 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_209 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_208 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_206 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_203 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_207 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_204 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_205 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_202 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_200 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_201 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_195 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_196 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_199 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_194 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_349 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_348 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["campdate_atlas_2"]);
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["campdate_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2578,1465);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2578,1465);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2578,1465);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2578,1465);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_265();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_266();
	this.instance_1.setTransform(0,0.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_267();
	this.instance_2.setTransform(0,1.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_268();
	this.instance_3.setTransform(0,1.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_269();
	this.instance_4.setTransform(0,2.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_270();
	this.instance_5.setTransform(0,2.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_271();
	this.instance_6.setTransform(0,3.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_272();
	this.instance_7.setTransform(0,4.15,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_273();
	this.instance_8.setTransform(0,4.7,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_274();
	this.instance_9.setTransform(0,5.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_275();
	this.instance_10.setTransform(0,5.8,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_276();
	this.instance_11.setTransform(0,6.4,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_277();
	this.instance_12.setTransform(0,6.9,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_278();
	this.instance_13.setTransform(0,7.5,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_279();
	this.instance_14.setTransform(0,8,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_280();
	this.instance_15.setTransform(0,8.55,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_281();
	this.instance_16.setTransform(0,9.05,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_282();
	this.instance_17.setTransform(0,9.6,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_283();
	this.instance_18.setTransform(0,10.15,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_284();
	this.instance_19.setTransform(0,10.65,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_285();
	this.instance_20.setTransform(0,11.15,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_286();
	this.instance_21.setTransform(0,11.65,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_287();
	this.instance_22.setTransform(0,12.15,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_288();
	this.instance_23.setTransform(0,12.65,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_289();
	this.instance_24.setTransform(0,13.2,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_290();
	this.instance_25.setTransform(0,13.65,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_291();
	this.instance_26.setTransform(0,14.15,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_292();
	this.instance_27.setTransform(0,14.65,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_293();
	this.instance_28.setTransform(0,15.1,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_294();
	this.instance_29.setTransform(0,15.6,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_295();
	this.instance_30.setTransform(0,16.05,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_296();
	this.instance_31.setTransform(0,16.5,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_297();
	this.instance_32.setTransform(0,16.95,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_298();
	this.instance_33.setTransform(0,17.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_299();
	this.instance_34.setTransform(0,17.9,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_300();
	this.instance_35.setTransform(0,17.45,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_301();
	this.instance_36.setTransform(0,17,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_302();
	this.instance_37.setTransform(0,16.55,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_303();
	this.instance_38.setTransform(0,16.1,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_304();
	this.instance_39.setTransform(0,15.7,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_305();
	this.instance_40.setTransform(0,15.25,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_306();
	this.instance_41.setTransform(0,14.8,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_307();
	this.instance_42.setTransform(0,14.35,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_308();
	this.instance_43.setTransform(0,13.9,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_309();
	this.instance_44.setTransform(0,13.45,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_310();
	this.instance_45.setTransform(0,13,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_311();
	this.instance_46.setTransform(0,12.55,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_312();
	this.instance_47.setTransform(0,12.05,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_313();
	this.instance_48.setTransform(0,11.6,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_314();
	this.instance_49.setTransform(0,11.1,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_315();
	this.instance_50.setTransform(0,10.65,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_316();
	this.instance_51.setTransform(0,10.2,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_317();
	this.instance_52.setTransform(0,9.7,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_318();
	this.instance_53.setTransform(0,9.25,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_319();
	this.instance_54.setTransform(0,8.75,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_320();
	this.instance_55.setTransform(0,8.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_321();
	this.instance_56.setTransform(0,7.75,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_322();
	this.instance_57.setTransform(0,7.25,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_323();
	this.instance_58.setTransform(0,6.75,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_324();
	this.instance_59.setTransform(0,6.25,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_325();
	this.instance_60.setTransform(0,5.75,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_326();
	this.instance_61.setTransform(0,5.25,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_327();
	this.instance_62.setTransform(0,4.75,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_328();
	this.instance_63.setTransform(0,4.2,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_329();
	this.instance_64.setTransform(0,3.7,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_330();
	this.instance_65.setTransform(0,3.2,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_331();
	this.instance_66.setTransform(0,2.65,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_332();
	this.instance_67.setTransform(0,2.15,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_333();
	this.instance_68.setTransform(0,1.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.5,54.9);


(lib.whand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_205();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_206();
	this.instance_1.setTransform(0.05,1.35,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_207();
	this.instance_2.setTransform(0.1,2.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_208();
	this.instance_3.setTransform(0.15,4.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_209();
	this.instance_4.setTransform(0.15,5.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_210();
	this.instance_5.setTransform(0.2,6.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_211();
	this.instance_6.setTransform(0.25,8.2,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_212();
	this.instance_7.setTransform(0.3,9.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_213();
	this.instance_8.setTransform(0.35,11,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_214();
	this.instance_9.setTransform(0.4,12.35,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_215();
	this.instance_10.setTransform(0.45,13.7,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_216();
	this.instance_11.setTransform(0.45,15.1,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_217();
	this.instance_12.setTransform(0.5,16.45,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_218();
	this.instance_13.setTransform(0.55,17.8,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_219();
	this.instance_14.setTransform(0.6,19.2,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_220();
	this.instance_15.setTransform(0.65,20.55,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_221();
	this.instance_16.setTransform(0.7,21.9,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_222();
	this.instance_17.setTransform(0.75,23.3,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_223();
	this.instance_18.setTransform(0.8,24.65,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_224();
	this.instance_19.setTransform(0.8,26,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_225();
	this.instance_20.setTransform(0.85,27.4,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_226();
	this.instance_21.setTransform(0.9,28.75,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_227();
	this.instance_22.setTransform(0.95,30.1,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_228();
	this.instance_23.setTransform(1,31.45,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_229();
	this.instance_24.setTransform(1.05,32.8,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_230();
	this.instance_25.setTransform(1.1,34.15,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_231();
	this.instance_26.setTransform(1.1,35.45,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_232();
	this.instance_27.setTransform(1.15,36.7,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_233();
	this.instance_28.setTransform(1.2,37.9,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_234();
	this.instance_29.setTransform(1.25,39,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_235();
	this.instance_30.setTransform(1.1,37.4,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_236();
	this.instance_31.setTransform(1,35.5,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_237();
	this.instance_32.setTransform(0.85,33.55,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_238();
	this.instance_33.setTransform(0.75,31.6,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_239();
	this.instance_34.setTransform(0.6,29.65,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_240();
	this.instance_35.setTransform(0.5,27.65,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_241();
	this.instance_36.setTransform(0.35,25.7,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_242();
	this.instance_37.setTransform(0.2,23.75,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_243();
	this.instance_38.setTransform(0.1,21.75,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_244();
	this.instance_39.setTransform(-0.05,19.8,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_245();
	this.instance_40.setTransform(-0.2,17.8,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_246();
	this.instance_41.setTransform(-0.3,15.85,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_247();
	this.instance_42.setTransform(-0.45,13.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_248();
	this.instance_43.setTransform(-0.6,11.9,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_249();
	this.instance_44.setTransform(-0.7,9.95,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_250();
	this.instance_45.setTransform(-0.85,8,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_251();
	this.instance_46.setTransform(-1,6,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_252();
	this.instance_47.setTransform(-1.15,4.05,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_253();
	this.instance_48.setTransform(-1.3,2.1,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_254();
	this.instance_49.setTransform(-1.45,0.15,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_255();
	this.instance_50.setTransform(-1.55,-2,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_256();
	this.instance_51.setTransform(-1.7,-4.15,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_257();
	this.instance_52.setTransform(-1.85,-6.3,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_258();
	this.instance_53.setTransform(-2,-8.45,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_259();
	this.instance_54.setTransform(-2.15,-10.65,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_260();
	this.instance_55.setTransform(-2.3,-12.8,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_261();
	this.instance_56.setTransform(-2.45,-15,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_262();
	this.instance_57.setTransform(-2.6,-17.15,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_263();
	this.instance_58.setTransform(-2.7,-19.35,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_264();
	this.instance_59.setTransform(-2.85,-21.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-21.5,23.6,77.9);


(lib.strum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_185();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_186();
	this.instance_1.setTransform(0.05,0.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_187();
	this.instance_2.setTransform(0.1,1.65,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_188();
	this.instance_3.setTransform(0.15,2.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_189();
	this.instance_4.setTransform(0.2,3.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_190();
	this.instance_5.setTransform(0.2,4.15,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_191();
	this.instance_6.setTransform(0.25,4.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_192();
	this.instance_7.setTransform(0.3,5.8,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_193();
	this.instance_8.setTransform(0.35,6.6,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_194();
	this.instance_9.setTransform(0.35,5.9,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_195();
	this.instance_10.setTransform(0.35,5.2,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_196();
	this.instance_11.setTransform(0.4,4.5,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_197();
	this.instance_12.setTransform(0.4,3.85,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_198();
	this.instance_13.setTransform(0.4,3.15,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_199();
	this.instance_14.setTransform(0.4,2.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_200();
	this.instance_15.setTransform(0.4,1.75,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_201();
	this.instance_16.setTransform(0.4,1.05,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_202();
	this.instance_17.setTransform(0.45,0.35,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_203();
	this.instance_18.setTransform(0.45,-0.35,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_204();
	this.instance_19.setTransform(0.45,-1.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,21.5,18.4);


(lib.string = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_165();
	this.instance.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_1 = new lib.CachedBmp_166();
	this.instance_1.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_2 = new lib.CachedBmp_167();
	this.instance_2.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_3 = new lib.CachedBmp_168();
	this.instance_3.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_4 = new lib.CachedBmp_169();
	this.instance_4.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_5 = new lib.CachedBmp_170();
	this.instance_5.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_6 = new lib.CachedBmp_171();
	this.instance_6.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_7 = new lib.CachedBmp_172();
	this.instance_7.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_8 = new lib.CachedBmp_173();
	this.instance_8.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_9 = new lib.CachedBmp_174();
	this.instance_9.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_10 = new lib.CachedBmp_175();
	this.instance_10.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_11 = new lib.CachedBmp_176();
	this.instance_11.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_12 = new lib.CachedBmp_177();
	this.instance_12.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_13 = new lib.CachedBmp_178();
	this.instance_13.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_14 = new lib.CachedBmp_179();
	this.instance_14.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_15 = new lib.CachedBmp_180();
	this.instance_15.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_16 = new lib.CachedBmp_181();
	this.instance_16.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_17 = new lib.CachedBmp_182();
	this.instance_17.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_18 = new lib.CachedBmp_183();
	this.instance_18.setTransform(-2,0.85,0.4226,0.4226);

	this.instance_19 = new lib.CachedBmp_184();
	this.instance_19.setTransform(-2,0.85,0.4226,0.4226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0.9,153.4,79);


(lib.star2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_163();
	this.instance.setTransform(11.3,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_164();
	this.instance_1.setTransform(14.2,1.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star2, new cjs.Rectangle(11.3,0,31.900000000000002,10), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_163();
	this.instance.setTransform(11.3,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_162();
	this.instance_1.setTransform(-6.4,-1.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-6.4,-1.4,27.200000000000003,11.4), null);


(lib.Scene_1_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drawing
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-2.55,-8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-2.55,-8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-2.55,-8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-2.55,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},599).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.pohand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_160();
	this.instance.setTransform(0,-0.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,32.5,38.5);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_145();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_146();
	this.instance_1.setTransform(0,0.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_147();
	this.instance_2.setTransform(0,0.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_148();
	this.instance_3.setTransform(0,0.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_149();
	this.instance_4.setTransform(0,0.55,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_150();
	this.instance_5.setTransform(0,0.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_151();
	this.instance_6.setTransform(0,0.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_152();
	this.instance_7.setTransform(0,0.95,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_153();
	this.instance_8.setTransform(0,1.05,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_154();
	this.instance_9.setTransform(0,1.05,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_155();
	this.instance_10.setTransform(0,1,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_156();
	this.instance_11.setTransform(0,0.95,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_157();
	this.instance_12.setTransform(0,0.9,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_158();
	this.instance_13.setTransform(0,0.85,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_159();
	this.instance_14.setTransform(0,0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,8.6);


(lib.Mashina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_144();
	this.instance.setTransform(-54,-20.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_143();
	this.instance_1.setTransform(-51.5,-22.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-22.4,145,48);


(lib.guitar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_140();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.5,131.5);


(lib.fireplace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_126();
	this.instance.setTransform(1.15,-32.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_127();
	this.instance_1.setTransform(-2.7,-50.85,0.5,0.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.CachedBmp_128();
	this.instance_2.setTransform(3.7,-56.7,0.5,0.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.CachedBmp_129();
	this.instance_3.setTransform(3.6,-64.5,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.CachedBmp_110();
	this.instance_4.setTransform(2.65,-71.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_131();
	this.instance_5.setTransform(-4.3,-85.45,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.CachedBmp_132();
	this.instance_6.setTransform(-1.15,-102.3,0.5,0.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.CachedBmp_133();
	this.instance_7.setTransform(-2.35,-108.4,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.CachedBmp_134();
	this.instance_8.setTransform(3.75,-97.5,0.5,0.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.CachedBmp_135();
	this.instance_9.setTransform(-3.4,-130.1,0.5,0.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.CachedBmp_130();
	this.instance_10.setTransform(2.65,-71.2,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-130.1,116.39999999999999,334.79999999999995);


(lib.Elvis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-57,-29.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-54.5,-25.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-29.7,126,59.3);


(lib.choose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-48.4,-32.5,0.2529,0.2529);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-65.55,-36.95,0.2529,0.2529);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.choose, new cjs.Rectangle(-65.5,-36.9,138.3,70.8), null);


(lib.chair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,169.5);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Scene_1_strings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// strings
	this.instance = new lib.string("synched",0);
	this.instance.setTransform(257.5,460.45,1.0787,1.0787,0,0,0,76.3,38.3);

	this.instance_1 = new lib.string("synched",0);
	this.instance_1.setTransform(259.85,457.35,1.0984,1.0984,0.4466,0,0,76.3,38.2);

	this.instance_2 = new lib.string("synched",0);
	this.instance_2.setTransform(256.45,463.35,1,1,0,0,0,76.2,38.2);

	this.instance_3 = new lib.string("synched",0);
	this.instance_3.setTransform(250.6,456.95,1,1,0,0,0,76.2,38.2);

	this.instance_4 = new lib.string("synched",0);
	this.instance_4.setTransform(254.35,455,1.0505,1.0505,-1.2543,0,0,76.3,38.5);

	this.instance_5 = new lib.string("synched",0);
	this.instance_5.setTransform(256.55,451.9,1.0918,1.1832,0,0,0,76.2,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{startPosition:0}},{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_5,p:{startPosition:19}},{t:this.instance_4,p:{startPosition:19}},{t:this.instance_3,p:{startPosition:19}},{t:this.instance_2,p:{startPosition:19}},{t:this.instance_1,p:{startPosition:19}},{t:this.instance,p:{startPosition:19}}]},599).to({state:[{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{startPosition:0}},{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{startPosition:19}},{t:this.instance_4,p:{startPosition:19}},{t:this.instance_3,p:{startPosition:19}},{t:this.instance_2,p:{startPosition:19}},{t:this.instance_1,p:{startPosition:19}},{t:this.instance,p:{startPosition:19}}]},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_star_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_2
	this.instance = new lib.star2();
	this.instance.setTransform(1084.25,-39.8,1,1,0,0,0,27.4,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1043.25,y:-32.15},0).wait(1).to({x:1002.5,y:-24.65},0).wait(1).to({x:961.7,y:-17.15},0).wait(1).to({x:920.95,y:-9.6},0).wait(1).to({x:880.15,y:-2.1},0).wait(1).to({x:839.4,y:5.35},0).wait(1).to({x:798.6,y:12.9},0).wait(1).to({x:757.85,y:20.4},0).wait(1).to({x:717.05,y:27.9},0).wait(1).to({x:676.3,y:35.4},0).wait(1).to({x:635.5,y:42.95},0).wait(1).to({x:594.75,y:50.45},0).wait(1).to({x:553.95,y:57.95},0).wait(1).to({x:513.2,y:65.5},0).wait(1).to({x:472.4,y:73},0).wait(1).to({x:431.65,y:80.5},0).wait(1).to({x:390.85,y:88},0).wait(1).to({x:350.1,y:95.55},0).wait(1).to({x:309.3,y:103.05},0).wait(1).to({x:268.55,y:110.55},0).wait(1).to({x:227.75,y:118.1},0).wait(1).to({x:187,y:125.6},0).wait(1).to({x:146.2,y:133.1},0).wait(1).to({x:105.45,y:140.6},0).wait(1).to({x:64.65,y:148.15},0).wait(1).to({x:23.9,y:155.65},0).wait(1).to({x:-16.85,y:163.15},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1071.75,y:-37.4},0).wait(1).to({x:1059.45,y:-35.15},0).wait(1).to({x:1047.2,y:-32.9},0).wait(1).to({x:1034.9,y:-30.65},0).wait(1).to({x:1022.65,y:-28.35},0).wait(1).to({x:1010.35,y:-26.1},0).wait(1).to({x:998.1,y:-23.85},0).wait(1).to({x:985.8,y:-21.6},0).wait(1).to({x:973.55,y:-19.3},0).wait(1).to({x:961.25,y:-17.05},0).wait(1).to({x:949,y:-14.8},0).wait(1).to({x:936.7,y:-12.55},0).wait(1).to({x:924.45,y:-10.25},0).wait(1).to({x:912.15,y:-8},0).wait(1).to({x:899.9,y:-5.75},0).wait(1).to({x:887.6,y:-3.5},0).wait(1).to({x:875.35,y:-1.2},0).wait(1).to({x:863.05,y:1.05},0).wait(1).to({x:850.75,y:3.3},0).wait(1).to({x:838.5,y:5.5},0).wait(1).to({x:826.2,y:7.8},0).wait(1).to({x:813.95,y:10.05},0).wait(1).to({x:801.65,y:12.3},0).wait(1).to({x:789.4,y:14.55},0).wait(1).to({x:777.1,y:16.85},0).wait(1).to({x:764.85,y:19.1},0).wait(1).to({x:752.55,y:21.35},0).wait(1).to({x:740.3,y:23.6},0).wait(1).to({x:728,y:25.9},0).wait(1).to({x:715.75,y:28.15},0).wait(1).to({x:703.45,y:30.4},0).wait(1).to({x:691.2,y:32.65},0).wait(1).to({x:678.9,y:34.95},0).wait(1).to({x:666.65,y:37.2},0).wait(1).to({x:654.35,y:39.45},0).wait(1).to({x:642.1,y:41.7},0).wait(1).to({x:629.8,y:44},0).wait(1).to({x:617.5,y:46.25},0).wait(1).to({x:605.25,y:48.5},0).wait(1).to({x:592.95,y:50.75},0).wait(1).to({x:580.7,y:53.05},0).wait(1).to({x:568.4,y:55.3},0).wait(1).to({x:556.15,y:57.55},0).wait(1).to({x:543.85,y:59.8},0).wait(1).to({x:531.6,y:62.1},0).wait(1).to({x:519.3,y:64.35},0).wait(1).to({x:507.05,y:66.6},0).wait(1).to({x:494.75,y:68.85},0).wait(1).to({x:482.5,y:71.15},0).wait(1).to({x:470.2,y:73.4},0).wait(1).to({x:457.95,y:75.65},0).wait(1).to({x:445.65,y:77.9},0).wait(1).to({x:433.4,y:80.2},0).wait(1).to({x:421.1,y:82.45},0).wait(1).to({x:408.85,y:84.7},0).wait(1).to({x:396.55,y:86.95},0).wait(1).to({x:384.25,y:89.25},0).wait(1).to({x:372,y:91.5},0).wait(1).to({x:359.7,y:93.75},0).wait(1).to({x:347.45,y:96},0).wait(1).to({x:335.15,y:98.3},0).wait(1).to({x:322.9,y:100.55},0).wait(1).to({x:310.6,y:102.8},0).wait(1).to({x:298.35,y:105.05},0).wait(1).to({x:286.05,y:107.35},0).wait(1).to({x:273.8,y:109.6},0).wait(1).to({x:261.5,y:111.85},0).wait(1).to({x:249.25,y:114.1},0).wait(1).to({x:236.95,y:116.4},0).wait(1).to({x:224.7,y:118.65},0).wait(1).to({x:212.4,y:120.9},0).wait(1).to({x:200.15,y:123.15},0).wait(1).to({x:187.85,y:125.45},0).wait(1).to({x:175.6,y:127.7},0).wait(1).to({x:163.3,y:129.95},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:138.75,y:134.5},0).wait(1).to({x:126.45,y:136.75},0).wait(1).to({x:114.2,y:139},0).wait(1).to({x:101.9,y:141.25},0).wait(1).to({x:89.65,y:143.55},0).wait(1).to({x:77.35,y:145.8},0).wait(1).to({x:65.1,y:148.05},0).wait(1).to({x:52.8,y:150.3},0).wait(1).to({x:40.55,y:152.6},0).wait(1).to({x:28.25,y:154.85},0).wait(1).to({x:16.05,y:157.1},0).wait(1).to({x:3.75,y:159.35},0).wait(1).to({x:-8.5,y:161.65},0).wait(1).to({x:-20.8,y:163.9},0).wait(1).to({x:-33.05,y:166.15},0).wait(1).to({x:-45.35,y:168.4},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(2).to({regX:27.2,regY:5,x:1043.25,y:-32.15},0).wait(1).to({x:1002.5,y:-24.65},0).wait(1).to({x:961.7,y:-17.15},0).wait(1).to({x:920.95,y:-9.6},0).wait(1).to({x:880.15,y:-2.1},0).wait(1).to({x:839.4,y:5.35},0).wait(1).to({x:798.6,y:12.9},0).wait(1).to({x:757.85,y:20.4},0).wait(1).to({x:717.05,y:27.9},0).wait(1).to({x:676.3,y:35.4},0).wait(1).to({x:635.5,y:42.95},0).wait(1).to({x:594.75,y:50.45},0).wait(1).to({x:553.95,y:57.95},0).wait(1).to({x:513.2,y:65.5},0).wait(1).to({x:472.4,y:73},0).wait(1).to({x:431.65,y:80.5},0).wait(1).to({x:390.85,y:88},0).wait(1).to({x:350.1,y:95.55},0).wait(1).to({x:309.3,y:103.05},0).wait(1).to({x:268.55,y:110.55},0).wait(1).to({x:227.75,y:118.1},0).wait(1).to({x:187,y:125.6},0).wait(1).to({x:146.2,y:133.1},0).wait(1).to({x:105.45,y:140.6},0).wait(1).to({x:64.65,y:148.15},0).wait(1).to({x:23.9,y:155.65},0).wait(1).to({x:-16.85,y:163.15},0).wait(1).to({x:-57.65,y:170.7},0).wait(1).to({regX:27.4,regY:4.9,x:1084.25,y:-39.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.instance = new lib.star();
	this.instance.setTransform(189.4,-49.8,1,1,0,0,0,7.3,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:234.1,y:-36.25},0).wait(1).to({x:278.9,y:-22.85},0).wait(1).to({x:323.7,y:-9.45},0).wait(1).to({x:368.5,y:3.95},0).wait(1).to({x:413.35,y:17.3},0).wait(1).to({x:458.15,y:30.7},0).wait(1).to({x:502.95,y:44.15},0).wait(1).to({x:547.75,y:57.55},0).wait(1).to({x:592.55,y:70.95},0).wait(1).to({x:637.4,y:84.35},0).wait(1).to({x:682.2,y:97.75},0).wait(1).to({x:727,y:111.15},0).wait(1).to({x:771.8,y:124.55},0).wait(1).to({x:816.65,y:138},0).wait(1).to({x:861.45,y:151.4},0).wait(1).to({x:906.25,y:164.8},0).wait(1).to({x:951.05,y:178.2},0).wait(1).to({x:995.85,y:191.6},0).wait(1).to({x:1040.7,y:205},0).wait(1).to({x:1085.5,y:218.4},0).wait(1).to({x:1130.3,y:231.85},0).wait(1).to({x:1175.1,y:245.25},0).wait(1).to({x:1219.9,y:258.65},0).wait(1).to({x:1264.75,y:272.05},0).wait(1).to({x:1309.55,y:285.45},0).wait(1).to({x:1354.35,y:298.85},0).wait(1).to({x:1399.15,y:312.25},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:202.75,y:-45.65},0).wait(1).to({x:216.25,y:-41.6},0).wait(1).to({x:229.75,y:-37.55},0).wait(1).to({x:243.25,y:-33.55},0).wait(1).to({x:256.75,y:-29.5},0).wait(1).to({x:270.2,y:-25.45},0).wait(1).to({x:283.7,y:-21.4},0).wait(1).to({x:297.2,y:-17.4},0).wait(1).to({x:310.7,y:-13.35},0).wait(1).to({x:324.2,y:-9.3},0).wait(1).to({x:337.7,y:-5.25},0).wait(1).to({x:351.15,y:-1.25},0).wait(1).to({x:364.65,y:2.8},0).wait(1).to({x:378.15,y:6.8},0).wait(1).to({x:391.65,y:10.8},0).wait(1).to({x:405.15,y:14.85},0).wait(1).to({x:418.65,y:18.9},0).wait(1).to({x:432.1,y:22.95},0).wait(1).to({x:445.6,y:26.95},0).wait(1).to({x:459.1,y:31},0).wait(1).to({x:472.6,y:35.05},0).wait(1).to({x:486.1,y:39.1},0).wait(1).to({x:499.6,y:43.1},0).wait(1).to({x:513.05,y:47.15},0).wait(1).to({x:526.55,y:51.2},0).wait(1).to({x:540.05,y:55.25},0).wait(1).to({x:553.55,y:59.25},0).wait(1).to({x:567.05,y:63.3},0).wait(1).to({x:580.55,y:67.35},0).wait(1).to({x:594,y:71.35},0).wait(1).to({x:607.5,y:75.4},0).wait(1).to({x:621,y:79.45},0).wait(1).to({x:634.5,y:83.5},0).wait(1).to({x:648,y:87.5},0).wait(1).to({x:661.45,y:91.55},0).wait(1).to({x:674.95,y:95.6},0).wait(1).to({x:688.45,y:99.65},0).wait(1).to({x:701.95,y:103.65},0).wait(1).to({x:715.45,y:107.7},0).wait(1).to({x:728.95,y:111.75},0).wait(1).to({x:742.4,y:115.75},0).wait(1).to({x:755.9,y:119.8},0).wait(1).to({x:769.4,y:123.85},0).wait(1).to({x:782.9,y:127.9},0).wait(1).to({x:796.4,y:131.9},0).wait(1).to({x:809.9,y:135.95},0).wait(1).to({x:823.35,y:140},0).wait(1).to({x:836.85,y:144.05},0).wait(1).to({x:850.35,y:148.05},0).wait(1).to({x:863.85,y:152.1},0).wait(1).to({x:877.35,y:156.15},0).wait(1).to({x:890.85,y:160.2},0).wait(1).to({x:904.3,y:164.2},0).wait(1).to({x:917.8,y:168.25},0).wait(1).to({x:931.3,y:172.3},0).wait(1).to({x:944.8,y:176.3},0).wait(1).to({x:958.3,y:180.35},0).wait(1).to({x:971.8,y:184.4},0).wait(1).to({x:985.25,y:188.45},0).wait(1).to({x:998.75,y:192.45},0).wait(1).to({x:1012.25,y:196.5},0).wait(1).to({x:1025.75,y:200.55},0).wait(1).to({x:1039.25,y:204.6},0).wait(1).to({x:1052.7,y:208.6},0).wait(1).to({x:1066.2,y:212.65},0).wait(1).to({x:1079.7,y:216.7},0).wait(1).to({x:1093.2,y:220.7},0).wait(1).to({x:1106.7,y:224.75},0).wait(1).to({x:1120.2,y:228.8},0).wait(1).to({x:1133.65,y:232.85},0).wait(1).to({x:1147.15,y:236.85},0).wait(1).to({x:1160.65,y:240.9},0).wait(1).to({x:1174.15,y:244.95},0).wait(1).to({x:1187.65,y:249},0).wait(1).to({x:1201.15,y:253},0).wait(1).to({x:1214.6,y:257.05},0).wait(1).to({x:1228.1,y:261.1},0).wait(1).to({x:1241.6,y:265.15},0).wait(1).to({x:1255.1,y:269.15},0).wait(1).to({x:1268.6,y:273.2},0).wait(1).to({x:1282.1,y:277.25},0).wait(1).to({x:1295.55,y:281.25},0).wait(1).to({x:1309.05,y:285.3},0).wait(1).to({x:1322.55,y:289.35},0).wait(1).to({x:1336.05,y:293.4},0).wait(1).to({x:1349.55,y:297.4},0).wait(1).to({x:1363.05,y:301.45},0).wait(1).to({x:1376.5,y:305.5},0).wait(1).to({x:1390,y:309.55},0).wait(1).to({x:1403.5,y:313.55},0).wait(1).to({x:1417,y:317.6},0).wait(1).to({x:1430.5,y:321.65},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(2).to({regX:7.2,regY:4.3,x:234.1,y:-36.25},0).wait(1).to({x:278.9,y:-22.85},0).wait(1).to({x:323.7,y:-9.45},0).wait(1).to({x:368.5,y:3.95},0).wait(1).to({x:413.35,y:17.3},0).wait(1).to({x:458.15,y:30.7},0).wait(1).to({x:502.95,y:44.15},0).wait(1).to({x:547.75,y:57.55},0).wait(1).to({x:592.55,y:70.95},0).wait(1).to({x:637.4,y:84.35},0).wait(1).to({x:682.2,y:97.75},0).wait(1).to({x:727,y:111.15},0).wait(1).to({x:771.8,y:124.55},0).wait(1).to({x:816.65,y:138},0).wait(1).to({x:861.45,y:151.4},0).wait(1).to({x:906.25,y:164.8},0).wait(1).to({x:951.05,y:178.2},0).wait(1).to({x:995.85,y:191.6},0).wait(1).to({x:1040.7,y:205},0).wait(1).to({x:1085.5,y:218.4},0).wait(1).to({x:1130.3,y:231.85},0).wait(1).to({x:1175.1,y:245.25},0).wait(1).to({x:1219.9,y:258.65},0).wait(1).to({x:1264.75,y:272.05},0).wait(1).to({x:1309.55,y:285.45},0).wait(1).to({x:1354.35,y:298.85},0).wait(1).to({x:1399.15,y:312.25},0).wait(1).to({x:1444,y:325.7},0).wait(1).to({regX:7.3,regY:4.2,x:189.4,y:-49.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.strum();
	this.instance.setTransform(221.7,483.1,1,1,0,0,0,10.6,8.6);

	this.instance_1 = new lib.pohand("synched",0);
	this.instance_1.setTransform(221.45,509.6,1,1,0,0,0,16.2,18.9);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(256.9,425.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_guitar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// guitar
	this.instance = new lib.guitar("synched",0);
	this.instance.setTransform(254.35,466.85,1,1,0,0,0,97.8,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(599).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(599).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fireplace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fireplace
	this.instance = new lib.fireplace("synched",0);
	this.instance.setTransform(855.9,481.9,1,1,0,0,0,47.6,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(599).to({startPosition:119},0).wait(1).to({startPosition:0},0).wait(599).to({startPosition:119},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_choose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// choose
	this.instance = new lib.choose("synched",0);
	this.instance.setTransform(1128.55,480.8,1.9767,1.9767,0,0,0,3.5,-1.4);

	this.elvisbtn = new lib.Elvis();
	this.elvisbtn.name = "elvisbtn";
	this.elvisbtn.setTransform(1194.9,657.15);
	new cjs.ButtonHelper(this.elvisbtn, 0, 1, 1);

	this.mashinabtn = new lib.Mashina();
	this.mashinabtn.name = "mashinabtn";
	this.mashinabtn.setTransform(1190.15,583.5);
	new cjs.ButtonHelper(this.mashinabtn, 0, 1, 1);

	this.instance_1 = new lib.Elvis();
	this.instance_1.setTransform(1194.9,657.15);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mashinabtn},{t:this.elvisbtn},{t:this.instance,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.mashinabtn},{t:this.instance_1},{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},599).wait(601));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_chairs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chairs
	this.instance = new lib.chair("synched",0);
	this.instance.setTransform(438,541.9,1,1,0,0,180,67.1,84.8);

	this.instance_1 = new lib.chair("synched",0);
	this.instance_1.setTransform(187,541.95,1,1,0,0,0,67.1,84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},599).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mouth();
	this.instance.setTransform(24.35,38.9,1,1,0,0,0,9.1,4.2);

	this.instance_1 = new lib.CachedBmp_141();
	this.instance_1.setTransform(0,-5.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_142();
	this.instance_2.setTransform(0,-5.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance}]},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.5,217.5,269.5);


(lib.girl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_139();
	this.instance.setTransform(97.7,142.5,0.5,0.5);

	this.instance_1 = new lib.whand2();
	this.instance_1.setTransform(174.75,147.1,1,1,0,0,0,13.2,27.4);

	this.instance_2 = new lib.whand();
	this.instance_2.setTransform(58.45,156.3,1,1,0,0,0,10.3,28.1);

	this.instance_3 = new lib.CachedBmp_136();
	this.instance_3.setTransform(4,105.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_349();
	this.instance_4.setTransform(97.7,142.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_348();
	this.instance_5.setTransform(4,105.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_2},{t:this.instance_1},{t:this.instance_4}]},598).to({state:[]},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.1,381.1);


(lib.Scene_1_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl
	this.instance = new lib.girl2("synched",0);
	this.instance.setTransform(450.75,446.75,1,1,0,0,0,94.4,190.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(599).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(599).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("song");
	}
	this.frame_601 = function() {
		playSound("song2wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(599).call(this.frame_601).wait(600));

	// boy
	this.instance = new lib.man("synched",0);
	this.instance.setTransform(263,492.95,1,1,0,0,0,108.8,131.9);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(176,413.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(176,413.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{startPosition:0}}]},2).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:599}}]},598).to({state:[{t:this.instance,p:{startPosition:0}}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{startPosition:599}}]},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.campdate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,2,599,1200];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.mashinabtn = this.choose.mashinabtn;
		this.elvisbtn = this.choose.elvisbtn;
		var self = this;
		
		self.stop();
		
		self.mashinabtn.addEventListener("click", playSong2);
		
		function playSong2()
		{
			self.gotoAndPlay(601);
			self.mashinabtn.visible = false;
			self.question.visible = false;
		}
		
		self.elvisbtn.addEventListener("click", playSong1);
		
		 function playSong1()
		{
			self.gotoAndPlay(1);
			self.elvisbtn.visible = false;
			self.question.visible = false;
		}
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.mashinabtn = undefined;this.elvisbtn = undefined;this.mashinabtn = this.choose.mashinabtn;
	}
	this.frame_1200 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(597).call(this.frame_599).wait(601).call(this.frame_1200).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(639.6,363.4,1,1,0,0,0,0,0.1);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:0.7,regY:0.8,scaleX:0.3979,scaleY:0.3979,x:364.2,y:445.1},23).to({regX:0.4,regY:0.5,scaleX:0.4929,scaleY:0.4929,x:667.7,y:182.2},126).to({regX:0,regY:0.1,scaleX:0.5,scaleY:0.5,x:866.2,y:429.4},150).to({scaleX:1,scaleY:1,x:639.6,y:363.4},148).to({regX:0.3,regY:0.6,scaleX:0.1757,scaleY:0.1757,x:269.8,y:473.3},152).to({regX:0,regY:0.1,scaleX:1,scaleY:1,x:639.6,y:363.4},1).to({regX:0.7,regY:0.8,scaleX:0.3979,scaleY:0.3979,x:364.2,y:445.1},23).to({regX:0.4,regY:0.5,scaleX:0.4929,scaleY:0.4929,x:667.7,y:182.2},126).to({regX:0,regY:0.1,scaleX:0.5,scaleY:0.5,x:866.2,y:429.4},150).to({scaleX:1,scaleY:1,x:639.6,y:363.4},148).to({regX:0.3,regY:0.6,scaleX:0.1757,scaleY:0.1757,x:269.8,y:473.3},152).to({_off:true},1).wait(1));

	// star_obj_
	this.star = new lib.Scene_1_star();
	this.star.name = "star";
	this.star.setTransform(189.3,-49.8,1,1,0,0,0,188.9,-46.5);
	this.star.depth = 0;
	this.star.isAttachedToCamera = 0
	this.star.isAttachedToMask = 0
	this.star.layerDepth = 0
	this.star.layerIndex = 0
	this.star.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star).wait(1).to({regX:816.7,regY:138,x:817.1,y:134.7},0).wait(93).to({regX:331.4,regY:111.5,scaleX:2.2152,scaleY:2.2152,x:189.3,y:-49.9},0).wait(1).to({regX:333.4,regY:109.2,scaleX:2.2114,scaleY:2.2114,x:189.2,y:-49.6},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:672.55,y:-20.85},0).wait(93).to({regX:497.4,regY:45.1,scaleX:2.021,scaleY:2.021,x:189.3,y:-49.6},0).wait(1).to({regX:498.7,regY:46.6,scaleX:2.0208,scaleY:2.0208,x:189.4,y:-49.9},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:507.35,y:41.6},0).wait(93).to({regX:621.1,regY:199.8,scaleX:2.0029,scaleY:2.0029,x:189.35,y:-49.75},0).wait(1).to({regX:622.4,regY:201.5,scaleX:2.0027,scaleY:2.0027,y:-49.65},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:383.65,y:-113.2},0).wait(93).to({regX:396.6,regY:78,scaleX:1.2982,scaleY:1.2982,x:189.35,y:-49.7},0).wait(1).to({regX:393.5,regY:76.2,scaleX:1.2926,scaleY:1.2926,x:189.3,y:-49.75},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:612.55,y:12.05},0).wait(93).to({regX:189.2,regY:33.1,scaleX:1.1715,scaleY:1.1715,x:189.3,y:-49.7},0).wait(1).to({regY:36,scaleX:1.179,scaleY:1.179,x:189.25},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:816.75,y:52.3},0).wait(93).to({regX:190.3,regY:312.9,scaleX:2.9554,scaleY:2.9554,x:189.3,y:-49.75},0).wait(1).to({regX:190.2,regY:315.9,scaleX:3.0035,scaleY:3.0035,x:189.1,y:-49.7},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:815.75,y:-227.6},0).wait(28).to({regX:190.5,regY:401.2,scaleX:5.6933,scaleY:5.6933,x:189.35,y:-49.8},0).wait(1).to({regX:188.9,regY:-46.5,scaleX:1,scaleY:1,x:189.3},0).wait(1).to({regX:816.7,regY:138,x:817.1,y:134.7},0).wait(93).to({regX:331.4,regY:111.5,scaleX:2.2152,scaleY:2.2152,x:189.3,y:-49.9},0).wait(1).to({regX:333.4,regY:109.2,scaleX:2.2114,scaleY:2.2114,x:189.2,y:-49.6},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:672.55,y:-20.85},0).wait(93).to({regX:497.4,regY:45.1,scaleX:2.021,scaleY:2.021,x:189.3,y:-49.6},0).wait(1).to({regX:498.7,regY:46.6,scaleX:2.0208,scaleY:2.0208,x:189.4,y:-49.9},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:507.35,y:41.6},0).wait(93).to({regX:621.1,regY:199.8,scaleX:2.0029,scaleY:2.0029,x:189.35,y:-49.75},0).wait(1).to({regX:622.4,regY:201.5,scaleX:2.0027,scaleY:2.0027,y:-49.65},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:383.65,y:-113.2},0).wait(93).to({regX:396.6,regY:78,scaleX:1.2982,scaleY:1.2982,x:189.35,y:-49.7},0).wait(1).to({regX:393.5,regY:76.2,scaleX:1.2926,scaleY:1.2926,x:189.3,y:-49.75},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:612.55,y:12.05},0).wait(93).to({regX:189.2,regY:33.1,scaleX:1.1715,scaleY:1.1715,x:189.3,y:-49.7},0).wait(1).to({regY:36,scaleX:1.179,scaleY:1.179,x:189.25},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:816.75,y:52.3},0).wait(93).to({regX:190.3,regY:312.9,scaleX:2.9554,scaleY:2.9554,x:189.3,y:-49.75},0).wait(1).to({regX:190.2,regY:315.9,scaleX:3.0035,scaleY:3.0035,x:189.1,y:-49.7},0).wait(1).to({regX:816.7,regY:138,scaleX:1,scaleY:1,x:815.75,y:-227.6},0).wait(28).to({regX:190.6,regY:401.2,scaleX:5.6928,scaleY:5.6928,x:189.6,y:-49.8},0).to({_off:true},1).wait(1));

	// star_2_obj_
	this.star_2 = new lib.Scene_1_star_2();
	this.star_2.name = "star_2";
	this.star_2.setTransform(1084.1,-39.7,1,1,0,0,0,1083.7,-36.4);
	this.star_2.depth = 0;
	this.star_2.isAttachedToCamera = 0
	this.star_2.isAttachedToMask = 0
	this.star_2.layerDepth = 0
	this.star_2.layerIndex = 1
	this.star_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star_2).wait(1).to({regX:513.2,regY:65.5,x:513.6,y:62.2},0).wait(93).to({regX:735.4,regY:116.1,scaleX:2.2152,scaleY:2.2152,x:1084.2,y:-39.7},0).wait(1).to({regX:738.1,regY:113.7,scaleX:2.2114,scaleY:2.2114,x:1084.15,y:-39.65},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:859.25,y:-87.85},0).wait(93).to({regX:940.1,regY:50,scaleX:2.021,scaleY:2.021,x:1084,y:-39.7},0).wait(1).to({regX:941.5,regY:51.6,scaleX:2.0208,scaleY:2.0208,x:1084.2,y:-39.75},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:655.85,y:-25.8},0).wait(93).to({regX:1067.8,regY:204.8,scaleX:2.0029,scaleY:2.0029,x:1084.05,y:-39.7},0).wait(1).to({regX:1069.2,regY:206.5,scaleX:2.0027,scaleY:2.0027,x:1084.15,y:-39.65},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:528.1,y:-180.65},0).wait(93).to({regX:1085.8,regY:85.7,scaleX:1.2982,scaleY:1.2982,x:1084.1,y:-39.7},0).wait(1).to({regY:84,scaleX:1.2926,scaleY:1.2926,x:1084.15},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:511.6,y:-58.15},0).wait(93).to({regX:953,regY:41.6,scaleX:1.1715,scaleY:1.1715,x:1084.15,y:-39.75},0).wait(1).to({regX:948.1,regY:44.5,scaleX:1.179,scaleY:1.179,x:1084,y:-39.7},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:649.1,y:-18.65},0).wait(93).to({regX:493.1,regY:316.3,scaleX:2.9554,scaleY:2.9554,x:1084.2,y:-39.7},0).wait(1).to({regX:488.2,regY:319.2,scaleX:3.0035,scaleY:3.0035,x:1084.15,y:-39.8},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:1109.1,y:-293.35},0).wait(28).to({regX:347.7,regY:402.9,scaleX:5.6933,scaleY:5.6933,x:1084.3,y:-40.1},0).wait(1).to({regX:1083.7,regY:-36.4,scaleX:1,scaleY:1,x:1084.1,y:-39.7},0).wait(1).to({regX:513.2,regY:65.5,x:513.6,y:62.2},0).wait(93).to({regX:735.4,regY:116.1,scaleX:2.2152,scaleY:2.2152,x:1084.2,y:-39.7},0).wait(1).to({regX:738.1,regY:113.7,scaleX:2.2114,scaleY:2.2114,x:1084.15,y:-39.65},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:859.25,y:-87.85},0).wait(93).to({regX:940.1,regY:50,scaleX:2.021,scaleY:2.021,x:1084,y:-39.7},0).wait(1).to({regX:941.5,regY:51.6,scaleX:2.0208,scaleY:2.0208,x:1084.2,y:-39.75},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:655.85,y:-25.8},0).wait(93).to({regX:1067.8,regY:204.8,scaleX:2.0029,scaleY:2.0029,x:1084.05,y:-39.7},0).wait(1).to({regX:1069.2,regY:206.5,scaleX:2.0027,scaleY:2.0027,x:1084.15,y:-39.65},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:528.1,y:-180.65},0).wait(93).to({regX:1085.8,regY:85.7,scaleX:1.2982,scaleY:1.2982,x:1084.1,y:-39.7},0).wait(1).to({regY:84,scaleX:1.2926,scaleY:1.2926,x:1084.15},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:511.6,y:-58.15},0).wait(93).to({regX:953,regY:41.6,scaleX:1.1715,scaleY:1.1715,x:1084.15,y:-39.75},0).wait(1).to({regX:948.1,regY:44.5,scaleX:1.179,scaleY:1.179,x:1084,y:-39.7},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:649.1,y:-18.65},0).wait(93).to({regX:493.1,regY:316.3,scaleX:2.9554,scaleY:2.9554,x:1084.2,y:-39.7},0).wait(1).to({regX:488.2,regY:319.2,scaleX:3.0035,scaleY:3.0035,x:1084.15,y:-39.8},0).wait(1).to({regX:513.2,regY:65.5,scaleX:1,scaleY:1,x:1109.1,y:-293.35},0).wait(28).to({regX:347.8,regY:402.9,scaleX:5.6928,scaleY:5.6928,x:1084.5,y:-40.1},0).to({_off:true},1).wait(1));

	// hand_obj_
	this.hand = new lib.Scene_1_hand();
	this.hand.name = "hand";
	this.hand.setTransform(275.6,477.1,1,1,0,0,0,275.2,480.4);
	this.hand.depth = 0;
	this.hand.isAttachedToCamera = 0
	this.hand.isAttachedToMask = 0
	this.hand.layerDepth = 0
	this.hand.layerIndex = 2
	this.hand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(599).to({regX:205.7,regY:493.8,scaleX:5.6933,scaleY:5.6933,x:275.85,y:477.4},0).wait(1).to({regX:275.2,regY:480.4,scaleX:1,scaleY:1,x:275.6,y:477.1},0).wait(599).to({regX:205.7,regY:493.8,scaleX:5.6928,scaleY:5.6928,x:275.55,y:477.35},0).to({_off:true},1).wait(1));

	// strings_obj_
	this.strings = new lib.Scene_1_strings();
	this.strings.name = "strings";
	this.strings.setTransform(256.9,456.5,1,1,0,0,0,256.5,459.8);
	this.strings.depth = 0;
	this.strings.isAttachedToCamera = 0
	this.strings.isAttachedToMask = 0
	this.strings.layerDepth = 0
	this.strings.layerIndex = 3
	this.strings.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.strings).wait(599).to({regX:202.3,regY:490.2,scaleX:5.6933,scaleY:5.6933,x:256.5,y:456.9},0).wait(1).to({regX:256.5,regY:459.8,scaleX:1,scaleY:1,x:256.9,y:456.5},0).wait(599).to({regX:202.4,regY:490.2,scaleX:5.6928,scaleY:5.6928,x:256.8,y:456.9},0).to({_off:true},1).wait(1));

	// guitar_obj_
	this.guitar = new lib.Scene_1_guitar();
	this.guitar.name = "guitar";
	this.guitar.setTransform(254.3,466.8,1,1,0,0,0,253.9,470.1);
	this.guitar.depth = 0;
	this.guitar.isAttachedToCamera = 0
	this.guitar.isAttachedToMask = 0
	this.guitar.layerDepth = 0
	this.guitar.layerIndex = 4
	this.guitar.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.guitar).wait(599).to({regX:201.9,regY:491.9,scaleX:5.6933,scaleY:5.6933,x:254.25,y:466.6},0).wait(1).to({regX:253.9,regY:470.1,scaleX:1,scaleY:1,x:254.3,y:466.8},0).wait(599).to({regX:202,regY:491.9,scaleX:5.6928,scaleY:5.6928,x:254.5,y:466.55},0).to({_off:true},1).wait(1));

	// choose_obj_
	this.choose = new lib.Scene_1_choose();
	this.choose.name = "choose";
	this.choose.setTransform(1136.6,548.6,1,1,0,0,0,1136.6,548.6);
	this.choose.depth = 0;
	this.choose.isAttachedToCamera = 1
	this.choose.isAttachedToMask = 0
	this.choose.layerDepth = 0
	this.choose.layerIndex = 5
	this.choose.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.choose).wait(599).to({_off:true},601).wait(1));

	// boy_obj_
	this.boy = new lib.Scene_1_boy();
	this.boy.name = "boy";
	this.boy.setTransform(0,0,1,1,0,0,0,-0.4,3.3);
	this.boy.depth = 0;
	this.boy.isAttachedToCamera = 0
	this.boy.isAttachedToMask = 0
	this.boy.layerDepth = 0
	this.boy.layerIndex = 6
	this.boy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy).wait(2).to({regX:9.2,regY:29.2,scaleX:1.0552,scaleY:1.0552,x:0.05,y:-0.05},0).wait(598).to({regX:-0.4,regY:3.3,scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({regX:4.4,regY:16.2,scaleX:1.0269,scaleY:1.0269,y:-0.05},0).wait(599).to({regX:0,regY:0,scaleX:1,scaleY:1,y:0},0).wait(1));

	// girl_obj_
	this.girl = new lib.Scene_1_girl();
	this.girl.name = "girl";
	this.girl.setTransform(452.3,499.5,1,1,0,0,0,451.9,502.8);
	this.girl.depth = 0;
	this.girl.isAttachedToCamera = 0
	this.girl.isAttachedToMask = 0
	this.girl.layerDepth = 0
	this.girl.layerIndex = 7
	this.girl.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(599).to({regX:236.7,regY:497.7,scaleX:5.6933,scaleY:5.6933,x:452.35,y:499.6},0).wait(1).to({regX:451.9,regY:502.8,scaleX:1,scaleY:1,x:452.3,y:499.5},0).wait(599).to({regX:236.8,regY:497.7,scaleX:5.6928,scaleY:5.6928,x:452.6,y:499.6},0).to({_off:true},1).wait(1));

	// chairs_obj_
	this.chairs = new lib.Scene_1_chairs();
	this.chairs.name = "chairs";
	this.chairs.setTransform(312.5,541.8,1,1,0,0,0,312.1,545.1);
	this.chairs.depth = 0;
	this.chairs.isAttachedToCamera = 0
	this.chairs.isAttachedToMask = 0
	this.chairs.layerDepth = 0
	this.chairs.layerIndex = 8
	this.chairs.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.chairs).wait(599).to({regX:212.2,regY:505.1,scaleX:5.6933,scaleY:5.6933,x:312.85,y:541.75},0).wait(1).to({regX:312.1,regY:545.1,scaleX:1,scaleY:1,x:312.5,y:541.8},0).wait(599).to({regX:212.2,regY:505.2,scaleX:5.6928,scaleY:5.6928,x:312.55,y:542.25},0).to({_off:true},1).wait(1));

	// fireplace_obj_
	this.fireplace = new lib.Scene_1_fireplace();
	this.fireplace.name = "fireplace";
	this.fireplace.setTransform(854.5,467.2,1,1,0,0,0,854.1,470.5);
	this.fireplace.depth = 0;
	this.fireplace.isAttachedToCamera = 0
	this.fireplace.isAttachedToMask = 0
	this.fireplace.layerDepth = 0
	this.fireplace.layerIndex = 9
	this.fireplace.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fireplace).wait(599).to({regX:307.3,regY:492,scaleX:5.6933,scaleY:5.6933,x:854.3,y:467.15},0).wait(1).to({regX:854.1,regY:470.5,scaleX:1,scaleY:1,x:854.5,y:467.2},0).wait(599).to({regX:307.4,regY:492,scaleX:5.6928,scaleY:5.6928,x:854.55,y:467.15},0).to({_off:true},1).wait(1));

	// drawing_obj_
	this.drawing = new lib.Scene_1_drawing();
	this.drawing.name = "drawing";
	this.drawing.setTransform(642,358.3,1,1,0,0,0,641.6,361.6);
	this.drawing.depth = 0;
	this.drawing.isAttachedToCamera = 0
	this.drawing.isAttachedToMask = 0
	this.drawing.layerDepth = 0
	this.drawing.layerIndex = 10
	this.drawing.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.drawing).wait(599).to({regX:270,regY:472.9,scaleX:5.6933,scaleY:5.6933,x:641.95,y:358.45},0).wait(1).to({regX:641.6,regY:361.6,scaleX:1,scaleY:1,x:642,y:358.3},0).wait(599).to({regX:270.1,regY:472.9,scaleX:5.6928,scaleY:5.6928,x:642.2,y:358.4},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(566.5,304.6,891.0999999999999,419.9);
// library properties:
lib.properties = {
	id: '70B81A3B0C2D7E46B4A17D29A43DA846',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_10.png?1617464926916", id:"CachedBmp_10"},
		{src:"images/CachedBmp_7.png?1617464926916", id:"CachedBmp_7"},
		{src:"images/CachedBmp_8.png?1617464926916", id:"CachedBmp_8"},
		{src:"images/CachedBmp_9.png?1617464926916", id:"CachedBmp_9"},
		{src:"images/campdate_atlas_1.png?1617464926489", id:"campdate_atlas_1"},
		{src:"images/campdate_atlas_2.png?1617464926491", id:"campdate_atlas_2"},
		{src:"sounds/song.mp3?1617464926916", id:"song"},
		{src:"sounds/song2wav.mp3?1617464926916", id:"song2wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['70B81A3B0C2D7E46B4A17D29A43DA846'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;