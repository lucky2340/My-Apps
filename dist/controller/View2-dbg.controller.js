sap.ui.define(
    ['ibm/cs/ps/controller/BaseController',
     'sap/m/MessageBox',
     'sap/m/MessageToast',
     'sap/ui/core/Fragment'
    ],
    function(BaseController,MessageBox, MessageToast,Fragment){
        return BaseController.extend("ibm.cs.ps.controller.View2",{
            onInit:function(){
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.getRoute("detail").attachMatched(this.herculus,this);
            },
            herculus:function(oEvent){
                // this.ninja();
                debugger;
                var sFruitId = oEvent.getParameter("arguments").fruitId;
                var sAddress = "/" + sFruitId;
                this.getView().bindElement(sAddress,{
                    expand:'To_supplier'
                });
            },
            onBack:function(){
                this.getView().getParent().to(this.getView().getParent().getPages()[0]);
            },
            
            onSave:function(){
                MessageBox.confirm("Would you like to save the order?",{
                    title:"Sales order",
                    onClose: this.onClose.bind(this)
                })
            },

            onCancel:function(){

            },

            onClose:function(oStatus){
                this.ninja();
                debugger;
                if(oStatus == "OK"){
                    MessageToast.show("Purchase order has been created");
                }
                else{
                    MessageBox.alert("Order is not created");
                }
            },

            ninja:function(){
                alert("dammn");
            },

            onItemSelect:function(oEvent){
                var oSupplierId = oEvent.getParameter("listItem").getBindingContextPath();
                var sId = oSupplierId.split("/")[oSupplierId.split("/").length - 1];
                this.oRouter.navTo("vendor",{
                    supplierId: sId
                }) 
            },
            oSupplierPoPUp: null,
            oFieldValue:null,
            onF4:function(oEvent){
                debugger;
                this.oFieldValue = oEvent.getSource();
                var that = this;
                if(this.oSupplierPoPUp == null){
                    Fragment.load({
                        fragmentName:"ibm.cs.abap.fragment.popup",
                        type:"XML",
                        controller:this
                    }).then(function(oDialog){
                        that.oSupplierPoPUp = oDialog;
                        that.getView().addDependent(that.oSupplierPoPUp);
                        that.oSupplierPoPUp.bindAggregation("items",{
                            path:"/cities",
                            template: new sap.m.StandardListItem({
                                title :"{name}",
                                description:"{state}"
                            })
                        })
                        that.oSupplierPoPUp.open();
                    })
                }else{
                    this.oSupplierPoPUp.open();
                }
            },
            onConfirm:function(oEvent){
                debugger;
                var sId = oEvent.getParameter("selectedItem").getTitle();
                this.oFieldValue.setValue(sId);
            }
        });
});