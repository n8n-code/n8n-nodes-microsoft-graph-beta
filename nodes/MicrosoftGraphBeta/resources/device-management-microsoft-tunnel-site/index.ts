import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMicrosoftTunnelSiteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Microsoft Tunnel Sites",
					"value": "Device Management List Microsoft Tunnel Sites",
					"action": "Get microsoftTunnelSites from deviceManagement",
					"description": "Collection of MicrosoftTunnelSite settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelSites"
						}
					}
				},
				{
					"name": "Device Management Create Microsoft Tunnel Sites",
					"value": "Device Management Create Microsoft Tunnel Sites",
					"action": "Create new navigation property to microsoftTunnelSites for deviceManagement",
					"description": "Create new navigation property to microsoftTunnelSites for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites"
						}
					}
				},
				{
					"name": "Device Management Delete Microsoft Tunnel Sites",
					"value": "Device Management Delete Microsoft Tunnel Sites",
					"action": "Delete navigation property microsoftTunnelSites for deviceManagement",
					"description": "Delete navigation property microsoftTunnelSites for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Microsoft Tunnel Sites",
					"value": "Device Management Get Microsoft Tunnel Sites",
					"action": "Get microsoftTunnelSites from deviceManagement",
					"description": "Collection of MicrosoftTunnelSite settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Microsoft Tunnel Sites",
					"value": "Device Management Update Microsoft Tunnel Sites",
					"action": "Update the navigation property microsoftTunnelSites in deviceManagement",
					"description": "Update the navigation property microsoftTunnelSites in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Configuration",
					"value": "Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Configuration",
					"action": "Delete navigation property microsoftTunnelConfiguration for deviceManagement",
					"description": "Delete navigation property microsoftTunnelConfiguration for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelConfiguration"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Configuration",
					"value": "Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Configuration",
					"action": "Get microsoftTunnelConfiguration from deviceManagement",
					"description": "The MicrosoftTunnelConfiguration that has been applied to this MicrosoftTunnelSite",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelConfiguration"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Configuration",
					"value": "Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Configuration",
					"action": "Update the navigation property microsoftTunnelConfiguration in deviceManagement",
					"description": "Update the navigation property microsoftTunnelConfiguration in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelConfiguration"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers",
					"value": "Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers",
					"action": "Get microsoftTunnelServers from deviceManagement",
					"description": "A list of MicrosoftTunnelServers that are registered to this MicrosoftTunnelSite",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Create Microsoft Tunnel Servers",
					"value": "Device Management Microsoft Tunnel Sites Create Microsoft Tunnel Servers",
					"action": "Create new navigation property to microsoftTunnelServers for deviceManagement",
					"description": "Create new navigation property to microsoftTunnelServers for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Servers",
					"value": "Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Servers",
					"action": "Delete navigation property microsoftTunnelServers for deviceManagement",
					"description": "Delete navigation property microsoftTunnelServers for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Servers",
					"value": "Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Servers",
					"action": "Get microsoftTunnelServers from deviceManagement",
					"description": "A list of MicrosoftTunnelServers that are registered to this MicrosoftTunnelSite",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Servers",
					"value": "Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Servers",
					"action": "Update the navigation property microsoftTunnelServers in deviceManagement",
					"description": "Update the navigation property microsoftTunnelServers in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management List Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Create Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Delete Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Sites"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Get Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Update Microsoft Tunnel Sites"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Configuration"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Configuration"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Configuration"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites List Microsoft Tunnel Servers"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Create Microsoft Tunnel Servers"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Create Microsoft Tunnel Servers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Delete Microsoft Tunnel Servers"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Servers"
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
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Get Microsoft Tunnel Servers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Servers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Microsoft Tunnel Site"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Update Microsoft Tunnel Servers"
					]
				}
			}
		},
];
