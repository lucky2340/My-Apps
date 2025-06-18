sap.ui.define(
    ['sap/ui/core/mvc/Controller',
     'ibm/cs/ps/util/formatter'   
    ],
    function(Controller,formatter){
        return Controller.extend("ibm.cs.ps.controller.BaseController",{
            formatter:formatter,
            onInit:function(){

            },
        });
});