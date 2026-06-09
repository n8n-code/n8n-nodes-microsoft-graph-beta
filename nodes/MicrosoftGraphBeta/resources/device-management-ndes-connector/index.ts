import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementNdesConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Ndes Connectors",
					"value": "Device Management List Ndes Connectors",
					"action": "Get ndesConnectors from deviceManagement",
					"description": "The collection of Ndes connectors for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/ndesConnectors"
						}
					}
				},
				{
					"name": "Device Management Create Ndes Connectors",
					"value": "Device Management Create Ndes Connectors",
					"action": "Create new navigation property to ndesConnectors for deviceManagement",
					"description": "Create new navigation property to ndesConnectors for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/ndesConnectors"
						}
					}
				},
				{
					"name": "Device Management Delete Ndes Connectors",
					"value": "Device Management Delete Ndes Connectors",
					"action": "Delete navigation property ndesConnectors for deviceManagement",
					"description": "Delete navigation property ndesConnectors for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/ndesConnectors/{{$parameter[\"ndesConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Ndes Connectors",
					"value": "Device Management Get Ndes Connectors",
					"action": "Get ndesConnectors from deviceManagement",
					"description": "The collection of Ndes connectors for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/ndesConnectors/{{$parameter[\"ndesConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Ndes Connectors",
					"value": "Device Management Update Ndes Connectors",
					"action": "Update the navigation property ndesConnectors in deviceManagement",
					"description": "Update the navigation property ndesConnectors in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/ndesConnectors/{{$parameter[\"ndesConnector-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/ndesConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management List Ndes Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/ndesConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Create Ndes Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/ndesConnectors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Create Ndes Connectors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Delete Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Delete Ndes Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/ndesConnectors/{ndesConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Get Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Get Ndes Connectors"
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
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Get Ndes Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Update Ndes Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ndes Connector"
					],
					"operation": [
						"Device Management Update Ndes Connectors"
					]
				}
			}
		},
];
