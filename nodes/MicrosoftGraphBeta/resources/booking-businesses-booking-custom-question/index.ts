import type { INodeProperties } from 'n8n-workflow';

export const bookingBusinessesBookingCustomQuestionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					]
				}
			},
			"options": [
				{
					"name": "Booking Businesses List Custom Questions",
					"value": "Booking Businesses List Custom Questions",
					"action": "List customQuestions",
					"description": "Get the bookingCustomQuestion resources associated with a bookingBusiness.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customQuestions"
						}
					}
				},
				{
					"name": "Booking Businesses Create Custom Questions",
					"value": "Booking Businesses Create Custom Questions",
					"action": "Create new navigation property to customQuestions for bookingBusinesses",
					"description": "Create new navigation property to customQuestions for bookingBusinesses",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customQuestions"
						}
					}
				},
				{
					"name": "Booking Businesses Delete Custom Questions",
					"value": "Booking Businesses Delete Custom Questions",
					"action": "Delete navigation property customQuestions for bookingBusinesses",
					"description": "Delete navigation property customQuestions for bookingBusinesses",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customQuestions/{{$parameter[\"bookingCustomQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Get Custom Questions",
					"value": "Booking Businesses Get Custom Questions",
					"action": "Get customQuestions from bookingBusinesses",
					"description": "All the custom questions of this business. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customQuestions/{{$parameter[\"bookingCustomQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Update Custom Questions",
					"value": "Booking Businesses Update Custom Questions",
					"action": "Update the navigation property customQuestions in bookingBusinesses",
					"description": "Update the navigation property customQuestions in bookingBusinesses",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/customQuestions/{{$parameter[\"bookingCustomQuestion-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/customQuestions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Delete Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Delete Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Get Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Get Custom Questions"
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
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Get Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Custom Question"
					],
					"operation": [
						"Booking Businesses Update Custom Questions"
					]
				}
			}
		},
];
