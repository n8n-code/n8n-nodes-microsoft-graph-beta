import type { INodeProperties } from 'n8n-workflow';

export const connectionsConnectionOperationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					]
				}
			},
			"options": [
				{
					"name": "Connections List Operations",
					"value": "Connections List Operations",
					"action": "Get operations from connections",
					"description": "Get operations from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Connections Create Operations",
					"value": "Connections Create Operations",
					"action": "Create new navigation property to operations for connections",
					"description": "Create new navigation property to operations for connections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Connections Delete Operations",
					"value": "Connections Delete Operations",
					"action": "Delete navigation property operations for connections",
					"description": "Delete navigation property operations for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/operations/{{$parameter[\"connectionOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Get Operations",
					"value": "Connections Get Operations",
					"action": "Get operations from connections",
					"description": "Get operations from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/operations/{{$parameter[\"connectionOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Update Operations",
					"value": "Connections Update Operations",
					"action": "Update the navigation property operations in connections",
					"description": "Update the navigation property operations in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/operations/{{$parameter[\"connectionOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Delete Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/operations/{connectionOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Get Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Get Operations"
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
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Operation"
					],
					"operation": [
						"Connections Update Operations"
					]
				}
			}
		},
];
