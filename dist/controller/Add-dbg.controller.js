sap.ui.define(
    ['ibm/cs/ps/controller/BaseController',
        'sap/m/MessageBox',
        'sap/m/MessageToast'
    ],
    function(BaseController,MessageToast){
        return BaseController.extend("ibm.cs.ps.controller.Add",{
            onInit:function(){
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    "prodData":{
                        "PRODUCT_ID": "",
                        "TYPE_CODE": "",
                        "CATEGORY": "",
                        "NAME": "",
                        "DESCRIPTION": "",
                        "SUPPLIER_ID": "0100000046",
                        "SUPPLIER_NAME": "SAP",
                        "TAX_TARIF_CODE": "1",
                        "MEASURE_UNIT": "EA",
                        "PRICE": "0.00",
                        "CURRENCY_CODE": "USD"
                    }
                });
                this.getView().setModel(oModel,"hunk");
                this.localModel = oModel;
            },
            onSave: function(){
                //Get the payload data
                var payload = this.localModel.getProperty("/prodData");
                //Validate the data
                // if (!payload.PRODUCT_ID) {
                //     MessageBox.error("Empty Product ID is not allowed");
                //     return;
                // }
                //Get the Odata model object
                var oDataModel = this.getOwnerComponent().getModel();
                // Trigger the POST call to SAP using odata model method CREATE
                oDataModel.create("/ProductSet", payload, {
                //Success: to handle if the post was successful
                    success: function(data){
                        MessageToast.show("WoW! the product is created in SAP")
                    },
                //Error: to handle if the POST failed
                    error: function(oErr){
                        debugger;
                        MessageToast.show(JSON.parse(oErr.responseText).error.innererror.errordetails[0].message
                    )
                    }
                });
            }
        });
});