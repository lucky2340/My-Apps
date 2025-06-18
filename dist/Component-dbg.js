sap.ui.define(
    ['sap/ui/core/UIComponent'],
    function(UIComponent){
        return UIComponent.extend("ibm.cs.ps.Component",{
            metadata:{
                manifest:"json"
            },
            init:function(){
                UIComponent.prototype.init.apply(this);
                var oRouter = this.getRouter();
                oRouter.initialize();
            },
            // createContent:function(){
            //     var oRoot = new sap.ui.view({
            //         "viewName":"ibm.cs.abap.view.App",
            //         "type":"XML",
            //         "id":"idRootView"
            //     });
                
            //     var oView1 = new sap.ui.view({
            //         "viewName":"ibm.cs.abap.view.View1",
            //         "type":"XML",
            //         "id":"idView1"
            //     });

            //     var oView2 = new sap.ui.view({
            //         "viewName":"ibm.cs.abap.view.View2",
            //         "type":"XML",
            //         "id":"idView2"
            //     });
                
            //     var oEmpty = new sap.ui.view({
            //         "viewName":"ibm.cs.abap.view.Empty",
            //         "type":"XML",
            //         "id":"idEmpty"
            //     });

            //     oRoot.byId("idApp").addMasterPage(oView1).addDetailPage(oEmpty).addDetailPage(oView2);

            //     return oRoot;
            // },
            destroy:function(){

            }
        });
    });