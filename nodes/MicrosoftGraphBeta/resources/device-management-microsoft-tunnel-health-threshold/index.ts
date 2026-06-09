import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMicrosoftTunnelHealthThresholdDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Microsoft Tunnel Health Thresholds",
					"value": "Device Management List Microsoft Tunnel Health Thresholds",
					"action": "Get microsoftTunnelHealthThresholds from deviceManagement",
					"description": "Collection of MicrosoftTunnelHealthThreshold settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelHealthThresholds"
						}
					}
				},
				{
					"name": "Device Management Create Microsoft Tunnel Health Thresholds",
					"value": "Device Management Create Microsoft Tunnel Health Thresholds",
					"action": "Create new navigation property to microsoftTunnelHealthThresholds for deviceManagement",
					"description": "Create new navigation property to microsoftTunnelHealthThresholds for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelHealthThresholds"
						}
					}
				},
				{
					"name": "Device Management Delete Microsoft Tunnel Health Thresholds",
					"value": "Device Management Delete Microsoft Tunnel Health Thresholds",
					"action": "Delete navigation property microsoftTunnelHealthThresholds for deviceManagement",
					"description": "Delete navigation property microsoftTunnelHealthThresholds for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/microsoftTunnelHealthThresholds/{{$parameter[\"microsoftTunnelHealthThreshold-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Microsoft Tunnel Health Thresholds",
					"value": "Device Management Get Microsoft Tunnel Health Thresholds",
					"action": "Get microsoftTunnelHealthThresholds from deviceManagement",
					"description": "Collection of MicrosoftTunnelHealthThreshold settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelHealthThresholds/{{$parameter[\"microsoftTunnelHealthThreshold-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Microsoft Tunnel Health Thresholds",
					"value": "Device Management Update Microsoft Tunnel Health Thresholds",
					"action": "Update the navigation property microsoftTunnelHealthThresholds in deviceManagement",
					"description": "Update the navigation property microsoftTunnelHealthThresholds in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/microsoftTunnelHealthThresholds/{{$parameter[\"microsoftTunnelHealthThreshold-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelHealthThresholds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelHealthThresholds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelHealthThresholds<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Health Thresholds"
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
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Health Threshold"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Health Thresholds"
					]
				}
			}
		},
];
