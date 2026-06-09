import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementExchangeConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Exchange Connectors",
					"value": "Device Management List Exchange Connectors",
					"action": "Get exchangeConnectors from deviceManagement",
					"description": "The list of Exchange Connectors configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeConnectors"
						}
					}
				},
				{
					"name": "Device Management Create Exchange Connectors",
					"value": "Device Management Create Exchange Connectors",
					"action": "Create new navigation property to exchangeConnectors for deviceManagement",
					"description": "Create new navigation property to exchangeConnectors for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/exchangeConnectors"
						}
					}
				},
				{
					"name": "Device Management Delete Exchange Connectors",
					"value": "Device Management Delete Exchange Connectors",
					"action": "Delete navigation property exchangeConnectors for deviceManagement",
					"description": "Delete navigation property exchangeConnectors for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/exchangeConnectors/{{$parameter[\"deviceManagementExchangeConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Exchange Connectors",
					"value": "Device Management Get Exchange Connectors",
					"action": "Get exchangeConnectors from deviceManagement",
					"description": "The list of Exchange Connectors configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeConnectors/{{$parameter[\"deviceManagementExchangeConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Exchange Connectors",
					"value": "Device Management Update Exchange Connectors",
					"action": "Update the navigation property exchangeConnectors in deviceManagement",
					"description": "Update the navigation property exchangeConnectors in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/exchangeConnectors/{{$parameter[\"deviceManagementExchangeConnector-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/exchangeConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management List Exchange Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/exchangeConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Create Exchange Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/exchangeConnectors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Create Exchange Connectors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Delete Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Delete Exchange Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Get Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Get Exchange Connectors"
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
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Get Exchange Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Update Exchange Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange Connector"
					],
					"operation": [
						"Device Management Update Exchange Connectors"
					]
				}
			}
		},
];
