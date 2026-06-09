import type { INodeProperties } from 'n8n-workflow';

export const financialsFinancialsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					]
				}
			},
			"options": [
				{
					"name": "Financials Financials Get Financials",
					"value": "Financials Financials Get Financials",
					"action": "Get financials",
					"description": "Get financials",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/financials"
						}
					}
				},
				{
					"name": "Financials Financials Update Financials",
					"value": "Financials Financials Update Financials",
					"action": "Update financials",
					"description": "Update financials",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/financials"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /financials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					],
					"operation": [
						"Financials Financials Get Financials"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					],
					"operation": [
						"Financials Financials Get Financials"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					],
					"operation": [
						"Financials Financials Get Financials"
					]
				}
			}
		},
		{
			"displayName": "PATCH /financials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					],
					"operation": [
						"Financials Financials Update Financials"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					],
					"operation": [
						"Financials Financials Update Financials"
					]
				}
			}
		},
		{
			"displayName": "Companies",
			"name": "companies",
			"type": "json",
			"default": "[\n  {\n    \"accounts\": [\n      {}\n    ],\n    \"agedAccountsPayable\": [\n      {}\n    ],\n    \"agedAccountsReceivable\": [\n      {}\n    ],\n    \"companyInformation\": [\n      {\n        \"address\": {}\n      }\n    ],\n    \"countriesRegions\": [\n      {}\n    ],\n    \"currencies\": [\n      {}\n    ],\n    \"customerPaymentJournals\": [\n      {\n        \"account\": {},\n        \"customerPayments\": [\n          {\n            \"customer\": {\n              \"address\": {},\n              \"currency\": {},\n              \"paymentMethod\": {},\n              \"paymentTerm\": {},\n              \"picture\": [\n                {}\n              ],\n              \"shipmentMethod\": {}\n            }\n          }\n        ]\n      }\n    ],\n    \"customerPayments\": [\n      {}\n    ],\n    \"customers\": [\n      {}\n    ],\n    \"dimensionValues\": [\n      {}\n    ],\n    \"dimensions\": [\n      {\n        \"dimensionValues\": [\n          {}\n        ]\n      }\n    ],\n    \"employees\": [\n      {\n        \"address\": {},\n        \"picture\": [\n          {}\n        ]\n      }\n    ],\n    \"generalLedgerEntries\": [\n      {\n        \"account\": {}\n      }\n    ],\n    \"itemCategories\": [\n      {}\n    ],\n    \"items\": [\n      {\n        \"itemCategory\": {},\n        \"picture\": [\n          {}\n        ]\n      }\n    ],\n    \"journalLines\": [\n      {\n        \"account\": {}\n      }\n    ],\n    \"journals\": [\n      {\n        \"account\": {},\n        \"journalLines\": [\n          {}\n        ]\n      }\n    ],\n    \"paymentMethods\": [\n      {}\n    ],\n    \"paymentTerms\": [\n      {}\n    ],\n    \"picture\": [\n      {}\n    ],\n    \"purchaseInvoiceLines\": [\n      {\n        \"account\": {},\n        \"item\": {}\n      }\n    ],\n    \"purchaseInvoices\": [\n      {\n        \"buyFromAddress\": {},\n        \"currency\": {},\n        \"payToAddress\": {},\n        \"purchaseInvoiceLines\": [\n          {}\n        ],\n        \"shipToAddress\": {},\n        \"vendor\": {\n          \"address\": {},\n          \"currency\": {},\n          \"paymentMethod\": {},\n          \"paymentTerm\": {},\n          \"picture\": [\n            {}\n          ]\n        }\n      }\n    ],\n    \"salesCreditMemoLines\": [\n      {\n        \"account\": {},\n        \"item\": {}\n      }\n    ],\n    \"salesCreditMemos\": [\n      {\n        \"billingPostalAddress\": {},\n        \"currency\": {},\n        \"customer\": {},\n        \"paymentTerm\": {},\n        \"salesCreditMemoLines\": [\n          {}\n        ],\n        \"sellingPostalAddress\": {}\n      }\n    ],\n    \"salesInvoiceLines\": [\n      {\n        \"account\": {},\n        \"item\": {}\n      }\n    ],\n    \"salesInvoices\": [\n      {\n        \"billingPostalAddress\": {},\n        \"currency\": {},\n        \"customer\": {},\n        \"paymentTerm\": {},\n        \"salesInvoiceLines\": [\n          {}\n        ],\n        \"sellingPostalAddress\": {},\n        \"shipmentMethod\": {},\n        \"shippingPostalAddress\": {}\n      }\n    ],\n    \"salesOrderLines\": [\n      {\n        \"account\": {},\n        \"item\": {}\n      }\n    ],\n    \"salesOrders\": [\n      {\n        \"billingPostalAddress\": {},\n        \"currency\": {},\n        \"customer\": {},\n        \"paymentTerm\": {},\n        \"salesOrderLines\": [\n          {}\n        ],\n        \"sellingPostalAddress\": {},\n        \"shippingPostalAddress\": {}\n      }\n    ],\n    \"salesQuoteLines\": [\n      {\n        \"account\": {},\n        \"item\": {}\n      }\n    ],\n    \"salesQuotes\": [\n      {\n        \"billingPostalAddress\": {},\n        \"currency\": {},\n        \"customer\": {},\n        \"paymentTerm\": {},\n        \"salesQuoteLines\": [\n          {}\n        ],\n        \"sellingPostalAddress\": {},\n        \"shipmentMethod\": {},\n        \"shippingPostalAddress\": {}\n      }\n    ],\n    \"shipmentMethods\": [\n      {}\n    ],\n    \"taxAreas\": [\n      {}\n    ],\n    \"taxGroups\": [\n      {}\n    ],\n    \"unitsOfMeasure\": [\n      {}\n    ],\n    \"vendors\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "companies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Financials"
					],
					"operation": [
						"Financials Financials Update Financials"
					]
				}
			}
		},
];
