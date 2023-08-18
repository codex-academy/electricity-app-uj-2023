import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './electricity.db',
    driver:  sqlite3.Database
});

await db.migrate();

export function topup(amount) {

}

export function useDevice(device) {

}

export function getTotals() {

}

function getDeviceUnits(device){

}

// units_available, 
// total_units_bought, 
// total_amount_spent,
// advance_taken

function updateUnitsAvailable(units){

}

function updateUnitsBought(units){

}

function updateAmountSpent(units){

}

// set the advance_taken field to 1 if 0 and to 0 if 1
function toggleAdvanceTaken(){

}

