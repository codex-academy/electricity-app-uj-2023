document.addEventListener('alpine:init', () => {
    Alpine.data('electricity', () => {
        return {
            appVersion : '1.0.with-api',
            unitsAvailable : 0,
            init(){
                this.getBalances().then(result => {
                    this.unitsAvailable = result.data.units;
                })
            },
            appliances : {
                
            },
            topUpElectricity(amount) {
                
            },
            getBalances() {
                // return this.unitsAvailable;
                
                return axios.get('/api/balances')
                    

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