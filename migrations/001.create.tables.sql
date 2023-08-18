create table devices (
    id integer PRIMARY KEY AUTOINCREMENT,
    device_name text,
    units integer  
);

create table units(
    id integer PRIMARY KEY AUTOINCREMENT,
    units_available integer,
    total_units_bought integer,
    total_amount_spent integer,
    advance_taken integer -- 0 or 1,
    advance_amount_outstanding integer
);

