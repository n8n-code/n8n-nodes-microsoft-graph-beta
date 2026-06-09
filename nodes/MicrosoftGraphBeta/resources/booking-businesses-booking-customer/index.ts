import type { INodeProperties } from 'n8n-workflow';

export const bookingBusinessesBookingCustomerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					]
				}
			},
			"options": [
				{
					"name": "Booking Businesses List Customers",
					"value": "Booking Businesses List Customers",
					"action": "List customers",
					"description": "Get a list of bookingCustomer objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customers"
						}
					}
				},
				{
					"name": "Booking Businesses Create Customers",
					"value": "Booking Businesses Create Customers",
					"action": "Create bookingCustomer",
					"description": "Create a new bookingCustomer object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customers"
						}
					}
				},
				{
					"name": "Booking Businesses Delete Customers",
					"value": "Booking Businesses Delete Customers",
					"action": "Delete navigation property customers for bookingBusinesses",
					"description": "Delete navigation property customers for bookingBusinesses",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customers/{{$parameter[\"bookingCustomer-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Get Customers",
					"value": "Booking Businesses Get Customers",
					"action": "Get customers from bookingBusinesses",
					"description": "All the customers of this business. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customers/{{$parameter[\"bookingCustomer-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Update Customers",
					"value": "Booking Businesses Update Customers",
					"action": "Update the navigation property customers in bookingBusinesses",
					"description": "Update the navigation property customers in bookingBusinesses",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customers/{{$parameter[\"bookingCustomer-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
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
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
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
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses List Customers"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Create Customers"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/customers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Create Customers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Delete Customers"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Delete Customers"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Get Customers"
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
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Get Customers"
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
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Get Customers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Update Customers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Customer"
					],
					"operation": [
						"Booking Businesses Update Customers"
					]
				}
			}
		},
];
