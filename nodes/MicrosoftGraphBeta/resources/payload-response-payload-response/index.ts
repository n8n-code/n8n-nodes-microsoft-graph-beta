import type { INodeProperties } from 'n8n-workflow';

export const payloadResponsePayloadResponseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					]
				}
			},
			"options": [
				{
					"name": "Payload Response Payload Response List Payload Response",
					"value": "Payload Response Payload Response List Payload Response",
					"action": "Get entities from payloadResponse",
					"description": "Get entities from payloadResponse",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/payloadResponse"
						}
					}
				},
				{
					"name": "Payload Response Payload Response Create Payload Response",
					"value": "Payload Response Payload Response Create Payload Response",
					"action": "Add new entity to payloadResponse",
					"description": "Add new entity to payloadResponse",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payloadResponse"
						}
					}
				},
				{
					"name": "Payload Response Payload Response Delete Payload Response",
					"value": "Payload Response Payload Response Delete Payload Response",
					"action": "Delete entity from payloadResponse",
					"description": "Delete entity from payloadResponse",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/payloadResponse/{{$parameter[\"payloadResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Payload Response Payload Response Get Payload Response",
					"value": "Payload Response Payload Response Get Payload Response",
					"action": "Get entity from payloadResponse by key",
					"description": "Get entity from payloadResponse by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/payloadResponse/{{$parameter[\"payloadResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Payload Response Payload Response Update Payload Response",
					"value": "Payload Response Payload Response Update Payload Response",
					"action": "Update entity in payloadResponse",
					"description": "Update entity in payloadResponse",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/payloadResponse/{{$parameter[\"payloadResponse-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /payloadResponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response List Payload Response"
					]
				}
			}
		},
		{
			"displayName": "POST /payloadResponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Create Payload Response"
					]
				}
			}
		},
		{
			"displayName": "POST /payloadResponse<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Create Payload Response"
					]
				}
			}
		},
		{
			"displayName": "DELETE /payloadResponse/{payloadResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Delete Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Delete Payload Response"
					]
				}
			}
		},
		{
			"displayName": "GET /payloadResponse/{payloadResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Get Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Get Payload Response"
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
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Get Payload Response"
					]
				}
			}
		},
		{
			"displayName": "PATCH /payloadResponse/{payloadResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Update Payload Response"
					]
				}
			}
		},
		{
			"displayName": "PATCH /payloadResponse/{payloadResponse-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payload Response Payload Response"
					],
					"operation": [
						"Payload Response Payload Response Update Payload Response"
					]
				}
			}
		},
];
