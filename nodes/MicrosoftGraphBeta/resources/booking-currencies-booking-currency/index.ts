import type { INodeProperties } from 'n8n-workflow';

export const bookingCurrenciesBookingCurrencyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					]
				}
			},
			"options": [
				{
					"name": "Booking Currencies Booking Currency List Booking Currency",
					"value": "Booking Currencies Booking Currency List Booking Currency",
					"action": "List bookingCurrencies",
					"description": "Get a list of bookingCurrency objects available to a Microsoft Bookings business.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingCurrencies"
						}
					}
				},
				{
					"name": "Booking Currencies Booking Currency Create Booking Currency",
					"value": "Booking Currencies Booking Currency Create Booking Currency",
					"action": "Add new entity to bookingCurrencies",
					"description": "Add new entity to bookingCurrencies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingCurrencies"
						}
					}
				},
				{
					"name": "Booking Currencies Booking Currency Delete Booking Currency",
					"value": "Booking Currencies Booking Currency Delete Booking Currency",
					"action": "Delete entity from bookingCurrencies",
					"description": "Delete entity from bookingCurrencies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingCurrencies/{{$parameter[\"bookingCurrency-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Currencies Booking Currency Get Booking Currency",
					"value": "Booking Currencies Booking Currency Get Booking Currency",
					"action": "Get bookingCurrency",
					"description": "Get the properties of a bookingCurrency object that is available to a Microsoft Bookings business. Use the **id** property, which is the currency code, to specify the currency.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingCurrencies/{{$parameter[\"bookingCurrency-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Currencies Booking Currency Update Booking Currency",
					"value": "Booking Currencies Booking Currency Update Booking Currency",
					"action": "Update entity in bookingCurrencies",
					"description": "Update entity in bookingCurrencies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingCurrencies/{{$parameter[\"bookingCurrency-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bookingCurrencies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency List Booking Currency"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingCurrencies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Create Booking Currency"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingCurrencies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Create Booking Currency"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingCurrencies/{bookingCurrency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Delete Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Delete Booking Currency"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingCurrencies/{bookingCurrency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Get Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Get Booking Currency"
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
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Get Booking Currency"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingCurrencies/{bookingCurrency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Update Booking Currency"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingCurrencies/{bookingCurrency-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Currencies Booking Currency"
					],
					"operation": [
						"Booking Currencies Booking Currency Update Booking Currency"
					]
				}
			}
		},
];
