sap.ui.define(
    ['ibm/cs/ps/controller/BaseController'],
    function(BaseController){
        return BaseController.extend("ibm.cs.ps.controller.View3",{
            onInit:function(){
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.getRoute("vendor").attachMatched(this.herculis,this);
            },
            herculis:function(oEvent){
                var sId = oEvent.getParameter("arguments").supplierId;
                var sAddress = "/supplier/" + sId;
                this.getView().bindElement(sAddress);
            }
        });
    });