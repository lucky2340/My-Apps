sap.ui.define(
    [],
    function(){
        return {
            getStatus:function(status){
                var allStatuses = this.getOwnerComponent().getModel().getProperty("/status");
                for( let index = 0;  index < allStatuses.length; index++ ){
                    const element = allStatuses[index];
                    if(element.key === status){
                        return element.value;
                    }
                }
            }
        };
    });  