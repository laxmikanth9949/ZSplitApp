sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/UploadCollectionParameter",
	"sap/m/MessageToast"
], function (Controller, UploadCollectionParameter, MessageToast) {
	"use strict";

	return Controller.extend("ZUpload.ZUpload.controller.View1", {
			onInit: function () {
				this._oBusyDialog = new sap.m.BusyDialog();
					this.jsonModel = new sap.ui.model.json.JSONModel("model/uploadCollection.json");
					this.getView().setModel(this.jsonModel);
			},
			onUpload: function (oEvent) {
				
			}
	});
});