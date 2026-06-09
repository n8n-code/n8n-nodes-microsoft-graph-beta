import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMicrosoftTunnelServerLogCollectionResponseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Microsoft Tunnel Server Log Collection Responses",
					"value": "Device Management List Microsoft Tunnel Server Log Collection Responses",
					"action": "Get microsoftTunnelServerLogCollectionResponses from deviceManagement",
					"description": "Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses"
						}
					}
				},
				{
					"name": "Device Management Create Microsoft Tunnel Server Log Collection Responses",
					"value": "Device Management Create Microsoft Tunnel Server Log Collection Responses",
					"action": "Create new navigation property to microsoftTunnelServerLogCollectionResponses for deviceManagement",
					"description": "Create new navigation property to microsoftTunnelServerLogCollectionResponses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses"
						}
					}
				},
				{
					"name": "Device Management Delete Microsoft Tunnel Server Log Collection Responses",
					"value": "Device Management Delete Microsoft Tunnel Server Log Collection Responses",
					"action": "Delete navigation property microsoftTunnelServerLogCollectionResponses for deviceManagement",
					"description": "Delete navigation property microsoftTunnelServerLogCollectionResponses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses/{{$parameter[\"microsoftTunnelServerLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Microsoft Tunnel Server Log Collection Responses",
					"value": "Device Management Get Microsoft Tunnel Server Log Collection Responses",
					"action": "Get microsoftTunnelServerLogCollectionResponses from deviceManagement",
					"description": "Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses/{{$parameter[\"microsoftTunnelServerLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Microsoft Tunnel Server Log Collection Responses",
					"value": "Device Management Update Microsoft Tunnel Server Log Collection Responses",
					"action": "Update the navigation property microsoftTunnelServerLogCollectionResponses in deviceManagement",
					"description": "Update the navigation property microsoftTunnelServerLogCollectionResponses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses/{{$parameter[\"microsoftTunnelServerLogCollectionResponse-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelServerLogCollectionResponses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelServerLogCollectionResponses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelServerLogCollectionResponses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Server Log Collection Responses"
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
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Server Log Collection Response"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Server Log Collection Responses"
					]
				}
			}
		},
];
