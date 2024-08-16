sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	'sap/ui/model/FilterOperator',
	'sap/ui/model/Filter',
	"sap/m/MessageBox"
], function(Controller, Fragment, FilterOperator, Filter, MessageBox) {
	"use strict";

	return Controller.extend("zInvoiceCustomzInvoiceCustom.controller.View1", {

		onInit: function() {
			sap.ui.core.BusyIndicator.show();
			//var table = this.getView().byId("table");
			var that = this;
			var invoiceModel = new sap.ui.model.odata.v2.ODataModel("/northwind/v2/northwind/northwind.svc/");

			invoiceModel.read("/Invoices", {
				success: function(odata) {

					var model = new sap.ui.model.json.JSONModel();
					model.setData(odata.results);
					that.getView().setModel(model);
					sap.ui.core.BusyIndicator.hide();
				}

			});
			// var columns = this.getView().byId("table").getColumns();

			// for (var i = 0; i < columns.length; i++) {
			// 	columns[i].setVisible(false);

		},

		// onInit: function() {
		// 	sap.ui.core.BusyIndicator.show();
		// 	var table = this.getView().byId("table");
		// 	var that = this;
		// 	var orderModel = new sap.ui.model.odata.v2.ODataModel("/northwind/v2/northwind/northwind.svc/");

		// 	orderModel.read("/Invoices", {
		// 		success: function(odata) {
		// 			var uniqueData = {};

		// 			// Function to remove duplicates for a specific field
		// 			function removeDuplicates(field) {
		// 				var uniqueArray = [];
		// 				odata.results.forEach(function(item) {
		// 					if (!uniqueData[item[field]]) {
		// 						uniqueData[item[field]] = true;
		// 						uniqueArray.push(item);
		// 					}
		// 				});
		// 				return uniqueArray;
		// 			}

		// 			var uniqueData1 = removeDuplicates("CustomerName");
		// 			// var uniqueData2 = removeDuplicates("Salesperson");
		// 			// var uniqueData3 = removeDuplicates("OrderID");
		// 			// var uniqueData4 = removeDuplicates("ShipperName");
		// 			//var uniqueData5 = removeDuplicates("ProductID");
		// 			// var uniqueData6 = removeDuplicates("ProductName");
		// 			// var uniqueData7 = removeDuplicates("UnitPrice");
		// 			// var uniqueData8 = removeDuplicates("Quantity");
		//                  var uniquesData9 = removeDuplicates("Discount");
		// 			var model = new sap.ui.model.json.JSONModel();
		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			sap.ui.core.BusyIndicator.hide();
		// 		}
		// 	});
		// },

		// onInit: function() {
		// 	sap.ui.core.BusyIndicator.show();
		// 	// MessageBox.information("Please Select the Columns");
		// 	var table = this.getView().byId("table");
		// 	var that = this;
		// 	var orderModel = new sap.ui.model.odata.v2.ODataModel("/northwind/v2/northwind/northwind.svc/");

		// 	orderModel.read("/Invoices", {
		// 		success: function(odata) {
		// 			// var model = new sap.ui.model.json.JSONModel();
		// 			// model.setData(odata.results);
		// 			// that.getView().setModel(model);
		// 			var uniqueData1 = [];
		// 			var uniqueData2 = [];
		// 			var uniqueData3 = [];
		// 			var uniqueData4 = [];
		// 			var uniqueData5 = [];
		// 			var uniqueData6 = [];
		// 			var uniqueData7 = [];
		// 			var uniqueData8 = [];
		// 			var uniqueData9 = [];
		// 			var uniqueCustomerNames = {};
		// 			var uiquesalesperson = {};
		// 			var uiqueorderid = {};
		// 			var uniqueshippername = {};
		// 			var uniqueproductid = {};
		// 			var uiqueproductname = {};
		// 			var uniqueunitprice = {};
		// 			var uniquequanty = {};

		// 			odata.results.forEach(function(item) {
		// 				if (!uniqueCustomerNames[item.CustomerName]) {
		// 					uniqueCustomerNames[item.CustomerName] = true;
		// 					uniqueData1.push(item);
		// 				}
		// 			});
		// 			odata.results.forEach(function(item) {
		// 				if (!uiquesalesperson[item.Salesperson]) {
		// 					uiquesalesperson[item.Salesperson] = true;
		// 					uniqueData2.push(item);
		// 				}
		// 			});

		// 			odata.results.forEach(function(item) {
		// 				if (!uiqueorderid[item.OrderID]) {
		// 					uiqueorderid[item.OrderID] = true;
		// 					uniqueData3.push(item);
		// 				}
		// 			});
		// 			odata.results.forEach(function(item) {
		// 				if (!uniqueshippername[item.ShipperName]) {
		// 					uniqueshippername[item.ShipperName] = true;
		// 					uniqueData4.push(item);
		// 				}
		// 			});
		// 			odata.results.forEach(function(item) {
		// 				if (!uniqueproductid[item.ProductID]) {
		// 					uniqueproductid[item.ProductID] = true;
		// 					uniqueData5.push(item);
		// 				}
		// 			});

		// 			odata.results.forEach(function(item) {
		// 				if (!uiqueproductname[item.ProductName]) {
		// 					uiqueproductname[item.ProductName] = true;
		// 					uniqueData6.push(item);
		// 				}
		// 			});
		// 			odata.results.forEach(function(item) {
		// 				if (!uniqueunitprice[item.UnitPrice]) {
		// 					uniqueunitprice[item.UnitPrice] = true;
		// 					uniqueData7.push(item);
		// 				}
		// 			});
		// 			odata.results.forEach(function(item) {
		// 				if (!uniquequanty[item.Quantity]) {
		// 					uniquequanty[item.Quantity] = true;
		// 					uniqueData7.push(item);
		// 				}
		// 			});

		// 			var model = new sap.ui.model.json.JSONModel();
		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData5);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);

		// 			model.setData(uniqueData1);
		// 			that.getView().setModel(model);
		// 			sap.ui.core.BusyIndicator.hide();
		// 		}

		// 	});
		// var columns = this.getView().byId("table").getColumns();
		// for (var i = 0; i < columns.length; i++) {
		// 	columns[i].setVisible(false);

		// }
		//},

		ProductValueHelp1: function() {

			if (!this.Dailog1) {
				this.Dailog1 = sap.ui.xmlfragment("myFrag1", "zInvoiceCustomzInvoiceCustom/Fragments/one", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"CustomerName": oModel[i].CustomerName
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.CustomerName)) {
					oNew.push(item.CustomerName);
					data.push({
						"CustomerName": item.CustomerName
					});

				}
			});
			var model1 = new sap.ui.model.json.JSONModel(data);
			this.Dailog1.setModel(model1);
			this.Dailog1.open();
		},
		close1: function() {
			this.Dailog1.close();
		},

		ProductValueHelp2: function() {
			if (!this.Dailog2) {
				this.Dailog2 = sap.ui.xmlfragment("myFrag2", "zInvoiceCustomzInvoiceCustom/Fragments/two", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"Salesperson": oModel[i].Salesperson
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.Salesperson)) {
					oNew.push(item.Salesperson);
					data.push({
						"Salesperson": item.Salesperson
					});

				}
			});
			var model2 = new sap.ui.model.json.JSONModel(data);
			this.Dailog2.setModel(model2);
			this.Dailog2.open();
		},
		close2: function() {
			this.Dailog2.close();

		},
		ProductValueHelp3: function() {
			if (!this.Dailog3) {
				this.Dailog3 = sap.ui.xmlfragment("myFrag3", "zInvoiceCustomzInvoiceCustom/Fragments/three", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"OrderID": oModel[i].OrderID
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.OrderID)) {
					oNew.push(item.OrderID);
					data.push({
						"OrderID": item.OrderID
					});

				}
			});
			var model3 = new sap.ui.model.json.JSONModel(data);
			this.Dailog3.setModel(model3);
			this.Dailog3.open();
		},
		close3: function() {
			this.Dailog3.close();
		},
		ProductValueHelp4: function() {
			if (!this.Dailog4) {
				this.Dailog4 = sap.ui.xmlfragment("myFrag4", "zInvoiceCustomzInvoiceCustom/Fragments/four", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"ShipperName": oModel[i].ShipperName
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.ShipperName)) {
					oNew.push(item.ShipperName);
					data.push({
						"ShipperName": item.ShipperName
					});

				}
			});
			var model4 = new sap.ui.model.json.JSONModel(data);
			this.Dailog4.setModel(model4);
			this.Dailog4.open();
		},
		close4: function() {
			this.Dailog4.close();
		},
		ProductValueHelp5: function() {
			if (!this.Dailog5) {
				this.Dailog5 = sap.ui.xmlfragment("myFrag5", "zInvoiceCustomzInvoiceCustom/Fragments/five", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"ProductID": oModel[i].ProductID
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.ProductID)) {
					oNew.push(item.ProductID);
					data.push({
						"ProductID": item.ProductID
					});

				}
			});
			var model5 = new sap.ui.model.json.JSONModel(data);
			this.Dailog5.setModel(model5);
			this.Dailog5.open();
		},
		close5: function() {
			this.Dailog5.close();
		},
		ProductValueHelp6: function() {
			if (!this.Dailog6) {
				this.Dailog6 = sap.ui.xmlfragment("myFrag6", "zInvoiceCustomzInvoiceCustom/Fragments/six", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"ProductName": oModel[i].ProductName
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.ProductName)) {
					oNew.push(item.ProductName);
					data.push({
						"ProductName": item.ProductName
					});

				}
			});
			var model6 = new sap.ui.model.json.JSONModel(data);
			this.Dailog6.setModel(model6);
			this.Dailog6.open();
		},
		close6: function() {
			this.Dailog6.close();
		},
		ProductValueHelp7: function() {
			if (!this.Dailog7) {
				this.Dailog7 = sap.ui.xmlfragment("myFrag7", "zInvoiceCustomzInvoiceCustom/Fragments/seven", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"UnitPrice": oModel[i].UnitPrice
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.UnitPrice)) {
					oNew.push(item.UnitPrice);
					data.push({
						"UnitPrice": item.UnitPrice
					});

				}
			});
			var model7 = new sap.ui.model.json.JSONModel(data);
			this.Dailog7.setModel(model7);
			this.Dailog7.open();
		},
		close7: function() {
			this.Dailog7.close();
		},
		ProductValueHelp8: function() {
			if (!this.Dailog8) {
				this.Dailog8 = sap.ui.xmlfragment("myFrag8", "zInvoiceCustomzInvoiceCustom/Fragments/eight", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"Quantity": oModel[i].Quantity
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.Quantity)) {
					oNew.push(item.Quantity);
					data.push({
						"Quantity": item.Quantity
					});

				}
			});
			var model8 = new sap.ui.model.json.JSONModel(data);
			this.Dailog8.setModel(model8);
			this.Dailog8.open();
		},
		close8: function() {
			this.Dailog8.close();
		},
		ProductValueHelp9: function() {
			if (!this.Dailog9) {
				this.Dailog9 = sap.ui.xmlfragment("myFrag9", "zInvoiceCustomzInvoiceCustom/Fragments/nine", this);
			}
			var oModel = this.getView().getModel().getData();
			var oArray = [];
			var data = [];
			var oNew = [];

			for (var i = 0; i < oModel.length; i++) {
				oArray.push({
					"Discount": oModel[i].Discount
				});
			}
			oArray.forEach(function(item) {
				if (!oNew.includes(item.Discount)) {
					oNew.push(item.Discount);
					data.push({
						"Discount": item.Discount
					});

				}
			});
			var model9 = new sap.ui.model.json.JSONModel(data);
			this.Dailog9.setModel(model9);
			this.Dailog9.open();
		},
		close9: function() {
			this.Dailog9.close();
		},
		// var value1 = sap.ui.core.Fragment.byId("frag1", "list1").getSelectedItem().getTitle();
		// this.getView().byId("one").setValue(value1);
		// this.close1();
		save1: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag1", "listitems1");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("one");
				oInput.setValue(sSelectedTitles);
			}
			this.close1();
		},

		save2: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag2", "listitems2");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("two");
				oInput.setValue(sSelectedTitles);
			}
			this.close2();
		},
		save3: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag3", "listitems3");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("three");
				oInput.setValue(sSelectedTitles);
			}
			this.close3();
		},
		save4: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag4", "listitems4");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("four");
				oInput.setValue(sSelectedTitles);
			}
			this.close4();
		},
		save5: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag5", "listitems5");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("five");
				oInput.setValue(sSelectedTitles);
			}
			this.close5();
		},
		save6: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag6", "listitems6");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("six");
				oInput.setValue(sSelectedTitles);
			}
			this.close6();
		},
		save7: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag7", "listitems7");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("seven");
				oInput.setValue(sSelectedTitles);
			}
			this.close7();
		},
		save8: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag8", "listitems8");
			var aSelectedItems = oList.getSelectedItems();
			if (aSelectedItems.length > 0) {
				var sSelectedTitles = "";
				for (var i = 0; i < aSelectedItems.length; i++) {
					var sTitle = aSelectedItems[i].getTitle();
					sSelectedTitles += sTitle;
					if (i < aSelectedItems.length - 1) {
						sSelectedTitles += ", ";
					}
				}
				var oInput = this.getView().byId("eight");
				oInput.setValue(sSelectedTitles);
			}
			this.close8();
		},
		save9: function() {
			var oList = sap.ui.core.Fragment.byId("myFrag9", "list9");
			var oSelectedItem = oList.getSelectedItem();
			if (oSelectedItem) {
				var sSelectedTitle = oSelectedItem.getTitle();
				var oInput = this.getView().byId("nine");
				oInput.setValue(sSelectedTitle);
			}
			this.close9();
		},
		ongoto: function() {
			var oView = this.getView();
			var oTable = oView.byId("table");
			var oBinding = oTable.getBinding("items");
			var oModel = oTable.getModel();
			var aSelectedValues1 = oView.byId("one").getValue().split(",");
			var aSelectedValue2 = oView.byId("two").getValue().split(",");
			var aSelectedValues3 = oView.byId("three").getValue().split(",");
			var aSelectedValues4 = oView.byId("four").getValue().split(",");
			var aSelectedValues5 = oView.byId("five").getValue().split(",");
			var aSelectedValues6 = oView.byId("six").getValue().split(",");
			var aSelectedValues7 = oView.byId("seven").getValue().split(",");
			var aSelectedValues8 = oView.byId("eight").getValue().split(",");
			// var aSelectedValues9 = oView.byId("nine").getValue().split(",");
			// var aSelectedValues = oView.byId("one").getValue().split(",");
			var oFilters = [];
			if (aSelectedValues1.length > 0 && aSelectedValues1[0] !== "") {
				aSelectedValues1.forEach(function(value) {
					var oFilter1 = new sap.ui.model.Filter("CustomerName", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter1);
				});
			}
			if (aSelectedValue2.length > 0 && aSelectedValue2[0] !== "") {
				aSelectedValue2.forEach(function(value) {
					var oFilter2 = new sap.ui.model.Filter("Salesperson", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter2);
				});
			}
			if (aSelectedValues3.length > 0 && aSelectedValues3[0] !== "") {
				aSelectedValues3.forEach(function(value) {
					var oFilter3 = new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter3);
				});
			}
			if (aSelectedValues4.length > 0 && aSelectedValues4[0] !== "") {
				aSelectedValues4.forEach(function(value) {
					var oFilter4 = new sap.ui.model.Filter("ShipperName", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter4);
				});
			}
			if (aSelectedValues5.length > 0 && aSelectedValues5[0] !== "") {
				aSelectedValues5.forEach(function(value) {
					var oFilter5 = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter5);
				});
			}
			if (aSelectedValues6.length > 0 && aSelectedValues6[0] !== "") {
				aSelectedValues6.forEach(function(value) {
					var oFilter6 = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter6);
				});
			}
			if (aSelectedValues7.length > 0 && aSelectedValues7[0] !== "") {
				aSelectedValues7.forEach(function(value) {
					var oFilter7 = new sap.ui.model.Filter("UnitPrice", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter7);
				});
			}
			if (aSelectedValues8.length > 0 && aSelectedValues8[0] !== "") {
				aSelectedValues8.forEach(function(value) {
					var oFilter8 = new sap.ui.model.Filter("Quantity", sap.ui.model.FilterOperator.EQ, value.trim());
					oFilters.push(oFilter8);
				});
			}
			if (oFilters.length === 0) {
				MessageBox.error("Please Select Atleast One Column in Table Fields");
			} else {
				var oFinalFilter = new sap.ui.model.Filter(oFilters, false);
				oBinding.filter([oFinalFilter]);
			}
		},

		settings: function() {
			if (!this.Settings) {
				this.Settings = sap.ui.xmlfragment("settings1", "zInvoiceCustomzInvoiceCustom/Fragments/settings", this);
			}
			// var table= this.getView().byId("table");
			// var column=this.getView().byId("table").getColumns();
			// var Array1 =[];
			// for(var i=0;i<column.length;i++){
			// 	var columns = column[i].getHeader().getText();
			// 	Array1.push(columns);
			// }
			// var model = new sap.ui.model.json.JSONModel(Array1);
			// this.Settings.setModel(model);
			// this.Settings.open
			var table = this.getView().byId("table");
			var columns = table.getColumns();
			var columnHeaders = columns.map(function(column) {
				return column.getHeader().getText();
			});

			var model = new sap.ui.model.json.JSONModel(columnHeaders);
			this.Settings.setModel(model);
			this.Settings.open();
		},
		settingsclose: function() {
			this.Settings.close();
		},
		settingssave: function() {
			var columns = this.getView().byId("table").getColumns();
			var selectedItems = sap.ui.core.Fragment.byId("settings1", "myList").getSelectedItems();
			columns.forEach(function(column) {
				var headerText = column.getHeader().getText();
				var isVisible = false;
				selectedItems.forEach(function(item) {
					if (headerText === item.getTitle()) {
						isVisible = true;
					}
				});
				column.setVisible(isVisible);
			});

			this.Settings.close();
		},

		selectall: function() {
			var list = sap.ui.core.Fragment.byId("settings1", "myList");
			var allItems = list.getItems();
			var allSelected = allItems.every(function(item) {
				return item.getSelected();
			});
			if (allSelected) {
				allItems.forEach(function(item) {
					list.setSelectedItem(item, false);
				});
			} else {
				allItems.forEach(function(item) {
					list.setSelectedItem(item, true);
				});
			}
		},

		searchfield1: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("CustomerName", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag1", "listitems1");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield2: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Salesperson", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag2", "listitems2");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield3: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();

			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("OrderID", FilterOperator.EQ, parseFloat(sQuery));
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag3", "listitems3");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield4: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("ShipperName", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag4", "listitems4");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield5: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("ProductID", FilterOperator.EQ, parseFloat(sQuery));
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag5", "listitems5");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield6: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("ProductName", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag6", "listitems6");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield7: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("UnitPrice", FilterOperator.EQ, parseFloat(sQuery));
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag7", "listitems7");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},
		searchfield8: function(oEvent) {
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Quantity", FilterOperator.EQ, parseFloat(sQuery));
				aFilters.push(filter);
			}
			var oList = sap.ui.core.Fragment.byId("myFrag8", "listitems8");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},

	});
});
// settingssave: function() {

// 	var columns = this.getView().byId("table").getColumns();
// 	var data1 = sap.ui.core.Fragment.byId("settings1", "myList").getSelectedItems();
// 	var columnArray = [];
// 	for (var i = 0; i < columns.length; i++) {
// 		var data = columns[i].getHeader().getText();
// 		columnArray.push(data);
// 	}
// 	if (columnArray) {
// 		for (var j = 0; j < columnArray.length; j++) {

// 			for (var k = 0; k < data1.length; k++) {

// 				if (columnArray[j] === data1[k].getProperty("title")) {
// 					columns[j].setVisible(true);

// 				}

// 			}

// 		}

// 	}

// 	this.Settings.close();
// },
// ongoto: function() {
// 	var oView = this.getView();
// 	var oTable = oView.byId("table");
// 	var oBinding = oTable.getBinding("items");
// 	var oModel = oTable.getModel();
// 	var oValue1 = oView.byId("one").getValue();
// 	var oValue2 = oView.byId("two").getValue();
// 	var oValue3 = oView.byId("three").getValue();
// 	var oValue4 = oView.byId("four").getValue();
// 	var oValue5 = oView.byId("five").getValue();
// 	var oValue6 = oView.byId("six").getValue();
// 	var oValue7 = oView.byId("seven").getValue();
// 	var oValue8 = oView.byId("eight").getValue();
// 	var oValue9 = oView.byId("nine").getValue();
// 	var oFilters = [];
// 	var oFilter1 = new sap.ui.model.Filter("CustomerName", sap.ui.model.FilterOperator.EQ, oValue1);
// 	var oFilter2 = new sap.ui.model.Filter("Salesperson", sap.ui.model.FilterOperator.EQ, oValue2);
// 	var oFilter3 = new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.EQ, oValue3);
// 	var oFilter4 = new sap.ui.model.Filter("ShipperName", sap.ui.model.FilterOperator.EQ, oValue4);
// 	var oFilter5 = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.EQ, oValue5);
// 	var oFilter6 = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.EQ, oValue6);
// 	var oFilter7 = new sap.ui.model.Filter("UnitPrice", sap.ui.model.FilterOperator.EQ, oValue7);
// 	var oFilter8 = new sap.ui.model.Filter("Quantity", sap.ui.model.FilterOperator.EQ, oValue8);
// 	var oFilter9 = new sap.ui.model.Filter("Discount", sap.ui.model.FilterOperator.EQ, oValue9);

// 	if (oValue1.length > 0) {
// 		oFilters.push(oFilter1);
// 	}
// 	if (oValue2.length > 0) {
// 		oFilters.push(oFilter2);
// 	}
// 	if (oValue3 > 0) {
// 		oFilters.push(oFilter3);
// 	}
// 	if (oValue4.length > 0) {
// 		oFilters.push(oFilter4);
// 	}
// 	if (oValue5 > 0) {
// 		oFilters.push(oFilter5);
// 	}
// 	if (oValue6.length > 0) {
// 		oFilters.push(oFilter6);
// 	}
// 	if (oValue7 > 0) {
// 		oFilters.push(oFilter7);
// 	}
// 	if (oValue8 > 0) {
// 		oFilters.push(oFilter8);
// 	}
// 	if (oValue9 > 0) {
// 		oFilters.push(oFilter9);
// 	}
// 	if (oFilters.length === 0) {
// 		MessageBox.error("Please Select Atleast One Column in Table Fields");
// 	} else {
// 		oBinding.filter(oFilters);
// 	}

// },
// var aFilters = [];
// var sQuery = oEvent.getSource().getValue();
// if (sQuery && sQuery.length > 0) {
// 	var filter = new Filter("CustomerName", FilterOperator.EQ, sQuery);
// 	aFilters.push(filter);
// }

// var data1 = sap.ui.core.Fragment.byId("myFrag1", "list1").getSelectedItems();
// var obinding = data1.getBinding("items");
// obinding.filter(aFilters);
// var oView = this.getView();

// if (!this._pDialog) {
// 	this._pDialog = Fragment.load({
// 		id: oView.getId(),
// 		name: "sap.m.sample.zInvoiceCustomzInvoiceCustom/Fragments/one",
// 		controller: this
// 	}).then(function(oDialog) {
// 		oView.addDependent(oDialog);
// 		return oDialog;
// 	});
// }
// this._pDialog.then(function(oDialog) {
// 	oDialog.open();
// });

// this._pDialog.then(function(oDialog) {
// 	oDialog.open();
// });

// var value1 = sap.ui.core.Fragment.byId("frag1", "list1").getSelectedItem().getTitle();
// this.getView().byId("one").setValue(value1);
// this.close1();
// var oList = sap.ui.core.Fragment.byId("frag1", "list1");
// var oSelectedItem = oList.getSelectedItem();
// if (oSelectedItem) {
// 	var sSelectedTitle = oSelectedItem.getTitle();
// 	var oInput = sap.ui.core.Fragment.byId("myFrag1", "one");
// 	oInput.setValue(sSelectedTitle);
// }
// 			this.close1();
// settings: function() {
// 		if (!this.Settings) {
// 			this.Settings = sap.ui.xmlfragment("settings1", "zInvoiceCustomzInvoiceCustom/Fragments/settings", this);
// 		}

// 		this.Settings.open();
// 	}
// goto: function() {
// 	var oView = this.getView();
// 	var oTable = oView.byId("table");
// 	var oValue1 = oView.byId("one").getValue();
// 	var oValue2 = oView.byId("two").getValue();
// 	var oFilters = [];
// 	var oFilters2 = [];

// 	if (oValue1) {
// 		var oFilter1 = new Filter("CustomerName", FilterOperator.EQ, oValue1);
// 		oFilters.push(oFilter1);
// 	}

// 	if (oFilters.length > 0) {
// 		var oBinding = oTable.getBinding("items");
// 		oBinding.filter(oFilters);
// 	}

// 	if (oValue2) {
// 		var oFilter2 = new Filter("CustomerName", FilterOperator.EQ, oValue1);
// 		oFilters2.push(oFilter2);
// 	}
// 	if (oFilters2.length > 0) {
// 		var oBinding = oTable.getBinding("items");
// 		oBinding.filter(oFilters2);
// 	}

// }
// oFilters.push(oFilter2);
// oFilters.push(oFilter3);
// oFilters.push(oFilter4);
// oFilters.push(oFilter5);
// oFilters.push(oFilter6);
// oFilters.push(oFilter7);
// oFilters.push(oFilter8);
// oFilters.push(oFilter9);