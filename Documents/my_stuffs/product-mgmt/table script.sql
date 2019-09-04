CREATE TABLE `tbl_product_1419056` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `productname` varchar(100) DEFAULT NULL,
  `manufacturerdetails` varchar(100) DEFAULT NULL,
  `price` decimal(8,6) DEFAULT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

CREATE TABLE `tbl_supply_1419056` (
  `supplyid` int(11) NOT NULL,
  `purchasequantity` int(8) DEFAULT NULL,
  `supplydate` date DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `vendorid` int(11) DEFAULT NULL,
  PRIMARY KEY (`supplyid`),
  KEY `vendorid_idx` (`vendorid`),
  KEY `productid_idx` (`productid`),
  CONSTRAINT `productid` FOREIGN KEY (`productid`) REFERENCES `tbl_product_1419056` (`productid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `vendorid` FOREIGN KEY (`vendorid`) REFERENCES `tbl_vendor_1419056` (`vendorid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tbl_vendor_1419056` (
  `vendorid` int(11) NOT NULL,
  `vendorname` varchar(100) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phonenumber` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`vendorid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



