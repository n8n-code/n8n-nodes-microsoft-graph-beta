import type { INodeProperties } from 'n8n-workflow';

export const connectionsExternalConnectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					]
				}
			},
			"options": [
				{
					"name": "Connections External Connection List External Connection",
					"value": "Connections External Connection List External Connection",
					"action": "Get entities from connections",
					"description": "Get entities from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections"
						}
					}
				},
				{
					"name": "Connections External Connection Create External Connection",
					"value": "Connections External Connection Create External Connection",
					"action": "Add new entity to connections",
					"description": "Add new entity to connections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections"
						}
					}
				},
				{
					"name": "Connections External Connection Delete External Connection",
					"value": "Connections External Connection Delete External Connection",
					"action": "Delete entity from connections",
					"description": "Delete entity from connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Connections External Connection Get External Connection",
					"value": "Connections External Connection Get External Connection",
					"action": "Get entity from connections by key",
					"description": "Get entity from connections by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Connections External Connection Update External Connection",
					"value": "Connections External Connection Update External Connection",
					"action": "Update entity in connections",
					"description": "Update entity in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection List External Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Create External Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /connections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Create External Connection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Delete External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Delete External Connection"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Get External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Get External Connection"
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
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Get External Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Update External Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Connection"
					],
					"operation": [
						"Connections External Connection Update External Connection"
					]
				}
			}
		},
];
