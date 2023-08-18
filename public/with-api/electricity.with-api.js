document.addEventListener('alpine:init', () => {
    Alpine.data('electricity', () => {
        return {
            appVersion : '1.0.with-api',
            appliances : {
                'Stove': 10, 
                'Kettle': 5, 
                'TV': 3, 
                'Fridge': 13
            },
            topUpElectricity(amount) {
                
            },
            getUnitsAvailable() {
                return this.unitsAvailable;
            },

            useAppliance(appliance) {
                 /*
                  * return true and substract from unit available 
                  * if there is enough units to use the appliance
                  * other wise return false and do nothing.
                */

            },
            advanceTaken() {
                // return true or false if an advance was taken
            },
            totalAmountSpent() {

            },
            totalUnitsBought(){

            }
        }
    })
})