import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementServiceNowConnectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Service Now Connections",
					"value": "Device Management List Service Now Connections",
					"action": "Get serviceNowConnections from deviceManagement",
					"description": "A list of ServiceNowConnections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/serviceNowConnections"
						}
					}
				},
				{
					"name": "Device Management Create Service Now Connections",
					"value": "Device Management Create Service Now Connections",
					"action": "Create new navigation property to serviceNowConnections for deviceManagement",
					"description": "Create new navigation property to serviceNowConnections for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/serviceNowConnections"
						}
					}
				},
				{
					"name": "Device Management Delete Service Now Connections",
					"value": "Device Management Delete Service Now Connections",
					"action": "Delete navigation property serviceNowConnections for deviceManagement",
					"description": "Delete navigation property serviceNowConnections for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/serviceNowConnections/{{$parameter[\"serviceNowConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Service Now Connections",
					"value": "Device Management Get Service Now Connections",
					"action": "Get serviceNowConnections from deviceManagement",
					"description": "A list of ServiceNowConnections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/serviceNowConnections/{{$parameter[\"serviceNowConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Service Now Connections",
					"value": "Device Management Update Service Now Connections",
					"action": "Update the navigation property serviceNowConnections in deviceManagement",
					"description": "Update the navigation property serviceNowConnections in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/serviceNowConnections/{{$parameter[\"serviceNowConnection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/serviceNowConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management List Service Now Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/serviceNowConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Create Service Now Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/serviceNowConnections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Create Service Now Connections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Delete Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Delete Service Now Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Get Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Get Service Now Connections"
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
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Get Service Now Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Update Service Now Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Service Now Connection"
					],
					"operation": [
						"Device Management Update Service Now Connections"
					]
				}
			}
		},
];
