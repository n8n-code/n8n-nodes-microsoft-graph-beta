import type { INodeProperties } from 'n8n-workflow';

export const connectionsSchemaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Schema"
					]
				}
			},
			"options": [
				{
					"name": "Connections Delete Schema",
					"value": "Connections Delete Schema",
					"action": "Delete navigation property schema for connections",
					"description": "Delete navigation property schema for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Connections Get Schema",
					"value": "Connections Get Schema",
					"action": "Get schema",
					"description": "Retrieve the properties of a schema for an externalConnection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Connections Update Schema",
					"value": "Connections Update Schema",
					"action": "Update schema",
					"description": "Update the properties of a schema for an externalConnection.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/schema"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Schema"
					],
					"operation": [
						"Connections Delete Schema"
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
						"Connections Schema"
					],
					"operation": [
						"Connections Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Schema"
					],
					"operation": [
						"Connections Get Schema"
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
						"Connections Schema"
					],
					"operation": [
						"Connections Get Schema"
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
						"Connections Schema"
					],
					"operation": [
						"Connections Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Schema"
					],
					"operation": [
						"Connections Update Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/schema<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Schema"
					],
					"operation": [
						"Connections Update Schema"
					]
				}
			}
		},
];
