IN, AND, OR , NOT, IN BETWEEN
LIKE, REGEXP
IS NULL


STORED PROCEDURE
DELIMITER $$
CREATE PROCEDURE get_clients()
BEGIN
    SELECT * FROM clients;
END$$

DELIMITER ;

CALL get_clients()

DELIMITER $$
CREATE PROCEDURE get_invoices_with_balance*();
BEGIN

SELECT * FROM 
invoices
where invoices_with_balance 
where balance > 0

## DROP an procedure

DROP PROCEDURE IF EXISTS get_clients;

DELIMITER $$
CREATE PROCEDURE get_invoices_with_balance(
    state CHAR(2)
);
BEGIN
END$$

## Parameters
DROP PROCEDURE IF EXISTS get_client_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state(
    state CHAR(2)
);
BEGIN
    SELECT * FROM clients c
    WHERE c.state = IFNULL(state, c.state);
END$$



DROP PROCEDURE IF EXISTS get_payments;

DELIMITER $$
CREATE PROCEDURE get_payments(
    client_id INT,
    payment_method_id TINYINT
);
BEGIN
[    SELECT * FROM payments p
]    WHERE c.state = IFNULL(state, c.state);
END$$


use SQL_STORE;
START TRANSACTION

insert

insert into 

DELETE 

SHOW VARIALES LIKE 'autocommit'




