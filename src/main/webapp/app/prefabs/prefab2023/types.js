wm.types = {
	"types": {
		"boolean": {
			"primitiveType": "Boolean",
			"internal": true
		},
		"byte": {
			"primitiveType": "Number",
			"internal": true
		},
		"char": {
			"primitiveType": "String",
			"internal": true
		},
		"classicmodelsgetCustomerrtnType": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"contactFirstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"contactLastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"creditLimit": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"customerName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"salesRepEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				}
			}
		},
		"classicmodelsgetFIrstnamertnType": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"firstname": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.hrdb.Department": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"budget": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"deptcode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"deptid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"employees": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.hrdb.Employee",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"q1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"q2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"q3": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"q4": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"tenantid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.hrdb.Employee": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"birthdate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"department": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.hrdb.Department",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"deptid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"eid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"employeeByManagerid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.hrdb.Employee",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"employeesForManagerid": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.hrdb.Employee",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"firstname": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"jobtitle": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"lastname": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"managerid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"password": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"picurl": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"role": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 14,
					"noChange": [],
					"include": []
				},
				"street": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 15,
					"noChange": [],
					"include": []
				},
				"tenantid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 16,
					"noChange": [],
					"include": []
				},
				"username": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 17,
					"noChange": [],
					"include": []
				},
				"vacations": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.hrdb.Vacation",
					"required": false,
					"fieldOrder": 18,
					"noChange": [],
					"include": []
				},
				"zip": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 19,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.hrdb.User": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"password": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"role": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"tenantid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"userid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"username": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.hrdb.Vacation": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"empid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"employee": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.hrdb.Employee",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"enddate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"startdate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"tenantid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.ArticleTags": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"articleId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"blank": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"tagId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Customers": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"contactFirstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"contactLastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"creditLimit": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"customerName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"employeesByEmployeesEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"employeesBySalesRepEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"employeesEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"ordersesForCustomerNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orders",
					"required": false,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"ordersesForCustomersCustomerNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orders",
					"required": false,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				},
				"paymentsesForCustomerNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Payments",
					"required": false,
					"fieldOrder": 14,
					"noChange": [],
					"include": []
				},
				"paymentsesForCustomersCustomerNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Payments",
					"required": false,
					"fieldOrder": 15,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 16,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 17,
					"noChange": [],
					"include": []
				},
				"salesRepEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 18,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 19,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Employees": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"customersesForEmployeesEmployeeNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Customers",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"customersesForSalesRepEmployeeNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Customers",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"email": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"employeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"employeesByEmployeesByReportsToEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"employeesByReportsTo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"employeesByReportsToEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"employeesesForEmployeesByReportsToEmployeeNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"employeesesForReportsTo": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"extension": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"firstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"jobTitle": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"lastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"officeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				},
				"officesByOfficeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Offices",
					"required": false,
					"fieldOrder": 14,
					"noChange": [],
					"include": []
				},
				"officesByOfficesOfficeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Offices",
					"required": false,
					"fieldOrder": 15,
					"noChange": [],
					"include": []
				},
				"officesOfficeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 16,
					"noChange": [],
					"include": []
				},
				"reportsTo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 17,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Offices": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"employeesesForOfficeCode": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"employeesesForOfficesOfficeCode": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Employees",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"officeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"territory": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Orderdetails": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"orderLineNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"ordersByOrderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orders",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"ordersByOrdersOrderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orders",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"ordersOrderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"priceEach": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"productCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"productsByProductCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Products",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"productsByProductsProductCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Products",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"productsProductCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"quantityOrdered": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Orders": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"comments": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"customersByCustomerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Customers",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"customersByCustomersCustomerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Customers",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"customersCustomerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"orderDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"orderdetailsesForOrderNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orderdetails",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"orderdetailsesForOrdersOrderNumber": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orderdetails",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"requiredDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"shippedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Payments": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"amount": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"checkNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"customersByCustomerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Customers",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"customersByCustomersCustomerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Customers",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"customersCustomerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"paymentDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Productlines": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"htmlDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"image": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Byte",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"productLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"productsesForProductLine": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Products",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"productsesForProductlinesProductLine": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Products",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"textDescriptio": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"textDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels.Products": {
			"service": "classicmodels",
			"liveService": false,
			"internal": false,
			"fields": {
				"buyPrice": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"msrp": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"orderdetailsesForProductCode": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orderdetails",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"orderdetailsesForProductsProductCode": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Orderdetails",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"productCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"productDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"productLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"productName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"productScale": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"productVendor": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"productlinesByProductLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Productlines",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"productlinesByProductlinesProductLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels.Productlines",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"productlinesProductLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"quantityInStock": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.ArticleTags": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"articleId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"blank": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"tagId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Customers": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"contactFirstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"contactLastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"creditLimit": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"customerName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"employees": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Employees",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"orderses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Orders",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"paymentses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Payments",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				},
				"salesRepEmployeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 14,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 15,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Employees": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"customerses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Customers",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"email": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"employeeNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"employeesByReportsTo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Employees",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"employeesesForReportsTo": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Employees",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"extension": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"firstName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"jobTitle": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"lastName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"officeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"offices": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Offices",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"reportsTo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Mytable": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"columnA": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"columnB": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"columnC": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Mytable2": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"col1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"col2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Offices": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"addressLine1": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"addressLine2": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"country": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"employeeses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Employees",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"officeCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"phone": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"postalCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"territory": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Orderdetails": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"orderLineNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"orders": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Orders",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"priceEach": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"productCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"products": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Products",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"quantityOrdered": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Orders": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"comments": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"customers": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Customers",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"orderDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"orderNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"orderdetailses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Orderdetails",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"requiredDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"shippedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Payments": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"amount": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"checkNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"customerNumber": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"customers": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Customers",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"paymentDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Productlines": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"htmlDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"image": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Byte",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"productLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"productses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Products",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"textDescriptio": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"textDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.classicmodels_ext.Products": {
			"service": "classicmodels_ext",
			"liveService": false,
			"internal": false,
			"fields": {
				"buyPrice": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"msrp": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"orderdetailses": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Orderdetails",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"productCode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"productDescription": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"productLine": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"productName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"productScale": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"productVendor": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"productlines": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.classicmodels_ext.Productlines",
					"required": false,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"quantityInStock": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": false,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.services.blzservice.DetailsType": {
			"service": "BLZService",
			"liveService": false,
			"internal": false,
			"fields": {
				"bezeichnung": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"bic": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"ort": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"plz": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.prefab2023.services.blzservice.GetBankResponseType": {
			"service": "BLZService",
			"liveService": false,
			"internal": false,
			"fields": {
				"details": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.prefab2023.services.blzservice.DetailsType",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.sun.syndication.feed.synd.SyndContent": {
			"service": "FeedService",
			"liveService": false,
			"internal": false,
			"fields": {
				"mode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.sun.syndication.feed.synd.SyndImage": {
			"service": "FeedService",
			"liveService": false,
			"internal": false,
			"fields": {
				"description": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"link": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"title": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"url": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.sun.syndication.feed.synd.SyndLink": {
			"service": "FeedService",
			"liveService": false,
			"internal": false,
			"fields": {
				"href": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"hreflang": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"length": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "long",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"rel": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"title": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.wavemaker.runtime.data.expression.QueryFilter": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"attributeName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"attributeType": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"attributeValue": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": null,
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"filterCondition": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.wavemaker.runtime.data.model.CustomProcedure": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"procedureParams": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.wavemaker.runtime.data.model.CustomProcedureParam",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"procedureStr": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.wavemaker.runtime.data.model.CustomQuery": {
			"service": "hrdb",
			"liveService": false,
			"internal": false,
			"fields": {
				"nativeSql": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Boolean",
					"required": false,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"queryParams": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.wavemaker.runtime.data.model.CustomQueryParam",
					"required": false,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"queryStr": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": false,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.wavemaker.runtime.feed.model.Entry": {
			"service": "FeedService",
			"liveService": false,
			"internal": false,
			"fields": {
				"author": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"description": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"link": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"publishedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"title": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"updatedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"uri": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"com.wavemaker.runtime.feed.model.Feed": {
			"service": "FeedService",
			"liveService": false,
			"internal": false,
			"fields": {
				"author": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"copyright": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"description": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"encoding": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"entries": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "com.wavemaker.runtime.feed.model.Entry",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"feedType": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"language": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"link": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"publishedDate": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Date",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"title": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"uri": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				}
			}
		},
		"double": {
			"primitiveType": "Number",
			"internal": true
		},
		"float": {
			"primitiveType": "Number",
			"internal": true
		},
		"google_atom.RootResponse": {
			"service": "google_atom",
			"liveService": false,
			"internal": false,
			"fields": {
				"fullcount": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"link": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "google_atom.link",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"modified": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"tagline": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"title": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"version": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"xmlns": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"google_atom.link": {
			"service": "google_atom",
			"liveService": false,
			"internal": false,
			"fields": {
				"href": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"rel": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.RootResponse": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"geocoded_waypoint": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.geocoded_waypointEntryItem",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"route": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.route",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.bounds": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"northeast": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.northeast",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"southwest": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.southwest",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.distance": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"text": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.duration": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"text": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.end_location": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.geocoded_waypointEntryItem": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"geocoder_status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"place_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.leg": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"distance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.distance",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"duration": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.duration",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"end_address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"end_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.end_location",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"start_address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"start_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.start_location",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"step": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.stepEntryItem",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.northeast": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.overview_polyline": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"points": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.polyline": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"points": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.route": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"bounds": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.bounds",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"copyrights": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"leg": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.leg",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"overview_polyline": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.overview_polyline",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"summary": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.southwest": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.start_location": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.stepEntryItem": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"distance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.distance",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"duration": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.duration",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"end_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.end_location",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"html_instructions": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"maneuver": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"polyline": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.polyline",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"start_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.start_location",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"travel_mode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				}
			}
		},
		"int": {
			"primitiveType": "Number",
			"internal": true
		},
		"java.lang.Boolean": {
			"primitiveType": "Boolean",
			"internal": false
		},
		"java.lang.Byte": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Character": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.Double": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Float": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Integer": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Long": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Short": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.String": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.StringBuffer": {
			"primitiveType": "String",
			"internal": false
		},
		"java.math.BigDecimal": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.math.BigInteger": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.sql.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Time": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Timestamp": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.util.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"long": {
			"primitiveType": "Number",
			"internal": true
		},
		"org.joda.time.LocalDateTime": {
			"primitiveType": "DateTime",
			"internal": true
		},
		"reimaginebanking_createAccount.RootRequest": {
			"service": "reimaginebanking_createAccount",
			"liveService": false,
			"internal": false,
			"fields": {
				"account_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"balance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"nickname": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"rewards": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_createAccount.RootResponse": {
			"service": "reimaginebanking_createAccount",
			"liveService": false,
			"internal": false,
			"fields": {
				"code": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"message": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"objectCreated": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "reimaginebanking_createAccount.objectCreated",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_createAccount.objectCreated": {
			"service": "reimaginebanking_createAccount",
			"liveService": false,
			"internal": false,
			"fields": {
				"_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"account_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"balance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"customer_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"nickname": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"rewards": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"type": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_editAccount.RootRequest": {
			"service": "reimaginebanking_editAccount",
			"liveService": false,
			"internal": false,
			"fields": {
				"account_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"nickname": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_editAccount.RootResponse": {
			"service": "reimaginebanking_editAccount",
			"liveService": false,
			"internal": false,
			"fields": {
				"code": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"message": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_getBranches.RootResponse": {
			"service": "reimaginebanking_getBranches",
			"liveService": false,
			"internal": false,
			"fields": {
				"RootResponseROOT": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "reimaginebanking_getBranches.RootResponseROOTEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_getBranches.RootResponseROOTEntryItem": {
			"service": "reimaginebanking_getBranches",
			"liveService": false,
			"internal": false,
			"fields": {
				"_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "reimaginebanking_getBranches.address",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"geocode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "reimaginebanking_getBranches.geocode",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"hours": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"notes": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"phone_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_getBranches.address": {
			"service": "reimaginebanking_getBranches",
			"liveService": false,
			"internal": false,
			"fields": {
				"city": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"street_name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"street_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"zip": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_getBranches.geocode": {
			"service": "reimaginebanking_getBranches",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"reimaginebanking_getBranches.java.lang.Object": {
			"service": "reimaginebanking_getBranches",
			"liveService": false,
			"internal": false,
			"fields": {
			}
		},
		"short": {
			"primitiveType": "Number",
			"internal": true
		},
		"yahooapis.RootResponse": {
			"service": "yahooapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"results": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "yahooapis.results",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"xmlns:yahoo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"yahoo:count": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"yahoo:created": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"yahoo:lang": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"yahooapis.quoteEntryItem": {
			"service": "yahooapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"Adj_Close": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"Close": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"Date": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"High": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"Low": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"Open": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"Symbol": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"Volume": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				}
			}
		},
		"yahooapis.results": {
			"service": "yahooapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"quote": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "yahooapis.quoteEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		}
	}
};