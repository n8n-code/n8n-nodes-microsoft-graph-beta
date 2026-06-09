import type { INodeProperties } from 'n8n-workflow';

export const bookingBusinessesBookingBusinessDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					]
				}
			},
			"options": [
				{
					"name": "Booking Businesses Booking Business List Booking Business",
					"value": "Booking Businesses Booking Business List Booking Business",
					"action": "List bookingBusinesses",
					"description": "Get a collection of bookingBusiness objects that has been created for the tenant. This operation returns only the **id** and **displayName** of each Microsoft Bookings business in the collection. For performance considerations, it does not return other properties. You can get the other properties of a Bookings business by specifying its **id** in a GET operation. You can also query for Bookings businesses by specifying a string in a `query` parameter to do substring matching among the businesses of a tenant. See an example below.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Create Booking Business",
					"value": "Booking Businesses Booking Business Create Booking Business",
					"action": "Create bookingBusiness",
					"description": "Create a new Microsoft Bookings business in a tenant. This is the first step in setting up a Bookings business where you must specify the business display name. You can include other information such as business address, web site address, and scheduling policy, or set that information later by updating the **bookingBusiness**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Delete Booking Business",
					"value": "Booking Businesses Booking Business Delete Booking Business",
					"action": "Delete bookingBusiness",
					"description": "Delete a bookingBusiness object.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Get Booking Business",
					"value": "Booking Businesses Booking Business Get Booking Business",
					"action": "Get bookingBusiness",
					"description": "Get the properties and relationships of a bookingBusiness object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Update Booking Business",
					"value": "Booking Businesses Booking Business Update Booking Business",
					"action": "Update bookingbusiness",
					"description": "Update the properties of a bookingBusiness object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bookingBusinesses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business List Booking Business"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Create Booking Business"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Create Booking Business"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingBusinesses/{bookingBusiness-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Delete Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Delete Booking Business"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Get Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Get Booking Business"
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
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Get Booking Business"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Update Booking Business"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Business"
					],
					"operation": [
						"Booking Businesses Booking Business Update Booking Business"
					]
				}
			}
		},
];
