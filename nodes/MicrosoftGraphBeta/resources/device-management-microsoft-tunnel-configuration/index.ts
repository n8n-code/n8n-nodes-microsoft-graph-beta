import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMicrosoftTunnelConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Microsoft Tunnel Configurations",
					"value": "Device Management List Microsoft Tunnel Configurations",
					"action": "Get microsoftTunnelConfigurations from deviceManagement",
					"description": "Collection of MicrosoftTunnelConfiguration settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelConfigurations"
						}
					}
				},
				{
					"name": "Device Management Create Microsoft Tunnel Configurations",
					"value": "Device Management Create Microsoft Tunnel Configurations",
					"action": "Create new navigation property to microsoftTunnelConfigurations for deviceManagement",
					"description": "Create new navigation property to microsoftTunnelConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelConfigurations"
						}
					}
				},
				{
					"name": "Device Management Delete Microsoft Tunnel Configurations",
					"value": "Device Management Delete Microsoft Tunnel Configurations",
					"action": "Delete navigation property microsoftTunnelConfigurations for deviceManagement",
					"description": "Delete navigation property microsoftTunnelConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/microsoftTunnelConfigurations/{{$parameter[\"microsoftTunnelConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Microsoft Tunnel Configurations",
					"value": "Device Management Get Microsoft Tunnel Configurations",
					"action": "Get microsoftTunnelConfigurations from deviceManagement",
					"description": "Collection of MicrosoftTunnelConfiguration settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelConfigurations/{{$parameter[\"microsoftTunnelConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Microsoft Tunnel Configurations",
					"value": "Device Management Update Microsoft Tunnel Configurations",
					"action": "Update the navigation property microsoftTunnelConfigurations in deviceManagement",
					"description": "Update the navigation property microsoftTunnelConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/microsoftTunnelConfigurations/{{$parameter[\"microsoftTunnelConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Configurations"
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
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Configuration"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Configurations"
					]
				}
			}
		},
];
