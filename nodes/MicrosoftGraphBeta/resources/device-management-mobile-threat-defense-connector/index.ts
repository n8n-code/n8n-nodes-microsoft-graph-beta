import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMobileThreatDefenseConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Mobile Threat Defense Connectors",
					"value": "Device Management List Mobile Threat Defense Connectors",
					"action": "Get mobileThreatDefenseConnectors from deviceManagement",
					"description": "The list of Mobile threat Defense connectors configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/mobileThreatDefenseConnectors"
						}
					}
				},
				{
					"name": "Device Management Create Mobile Threat Defense Connectors",
					"value": "Device Management Create Mobile Threat Defense Connectors",
					"action": "Create new navigation property to mobileThreatDefenseConnectors for deviceManagement",
					"description": "Create new navigation property to mobileThreatDefenseConnectors for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/mobileThreatDefenseConnectors"
						}
					}
				},
				{
					"name": "Device Management Delete Mobile Threat Defense Connectors",
					"value": "Device Management Delete Mobile Threat Defense Connectors",
					"action": "Delete navigation property mobileThreatDefenseConnectors for deviceManagement",
					"description": "Delete navigation property mobileThreatDefenseConnectors for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/mobileThreatDefenseConnectors/{{$parameter[\"mobileThreatDefenseConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Mobile Threat Defense Connectors",
					"value": "Device Management Get Mobile Threat Defense Connectors",
					"action": "Get mobileThreatDefenseConnectors from deviceManagement",
					"description": "The list of Mobile threat Defense connectors configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/mobileThreatDefenseConnectors/{{$parameter[\"mobileThreatDefenseConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Mobile Threat Defense Connectors",
					"value": "Device Management Update Mobile Threat Defense Connectors",
					"action": "Update the navigation property mobileThreatDefenseConnectors in deviceManagement",
					"description": "Update the navigation property mobileThreatDefenseConnectors in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/mobileThreatDefenseConnectors/{{$parameter[\"mobileThreatDefenseConnector-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/mobileThreatDefenseConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management List Mobile Threat Defense Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileThreatDefenseConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Create Mobile Threat Defense Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileThreatDefenseConnectors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Create Mobile Threat Defense Connectors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Delete Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Delete Mobile Threat Defense Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Get Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Get Mobile Threat Defense Connectors"
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
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Get Mobile Threat Defense Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Update Mobile Threat Defense Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile Threat Defense Connector"
					],
					"operation": [
						"Device Management Update Mobile Threat Defense Connectors"
					]
				}
			}
		},
];
