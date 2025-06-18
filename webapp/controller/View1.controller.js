sap.ui.define(
    ['ibm/cs/ps/controller/BaseController'],
    function(BaseController){
        return BaseController.extend("ibm.cs.ps.controller.View1",{
            onInit:function(){
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            toNext:function(){
                this.getView().getParent().getParent().to("idView2");
            },
            onSingleDelete:function(oEvent){
                var idList = oEvent.getSource();
                var selectedItem = oEvent.getParameter("listItem");
                idList.removeItem(selectedItem);
             },

             onMultiDelete:function(){
                var oList = this.getView().byId("idList");
                var selectedItems = oList.getSelectedItems();
                selectedItems.forEach(element => {
                    oList.removeItem(element);
                });
             },

             onPressline:function(oEvent){
                debugger;
                var oRouter = this.getOwnerComponent().getRouter();
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                var fruitId = sPath.split("/")[sPath.split("/").length-1];
                oRouter.navTo("detail",{
                    fruitId: fruitId
                })

             },

             onSearch:function(oEvent){
                var query = oEvent.getParameter("query");
                if(!query){
                    var query = oEvent.getParameter("newValue");
                }
                var oFilter1 = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, query);
                var oFilter2 = new sap.ui.model.Filter("taste", sap.ui.model.FilterOperator.Contains, query);
                var oFilter = new sap.ui.model.Filter({
                    filters:[oFilter1,oFilter2],
                    and:false
                })
                var oList = this.getView().byId("idList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(oFilter);
             },
             onAdd:function(){
                this.oRouter.navTo("Add");
             }
        });
});