/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZUpload/ZUpload/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});