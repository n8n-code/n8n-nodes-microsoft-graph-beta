import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsDeviceStartupHistoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Device Startup History",
					"value": "Device Management List User Experience Analytics Device Startup History",
					"action": "Get userExperienceAnalyticsDeviceStartupHistory from deviceManagement",
					"description": "User experience analytics device Startup History",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupHistory"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Device Startup History",
					"value": "Device Management Create User Experience Analytics Device Startup History",
					"action": "Create new navigation property to userExperienceAnalyticsDeviceStartupHistory for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsDeviceStartupHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupHistory"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Device Startup History",
					"value": "Device Management Delete User Experience Analytics Device Startup History",
					"action": "Delete navigation property userExperienceAnalyticsDeviceStartupHistory for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceStartupHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{{$parameter[\"userExperienceAnalyticsDeviceStartupHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Startup History",
					"value": "Device Management Get User Experience Analytics Device Startup History",
					"action": "Get userExperienceAnalyticsDeviceStartupHistory from deviceManagement",
					"description": "User experience analytics device Startup History",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{{$parameter[\"userExperienceAnalyticsDeviceStartupHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Startup History",
					"value": "Device Management Update User Experience Analytics Device Startup History",
					"action": "Update the navigation property userExperienceAnalyticsDeviceStartupHistory in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceStartupHistory in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{{$parameter[\"userExperienceAnalyticsDeviceStartupHistory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceStartupHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Startup History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceStartupHistory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Startup History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Startup History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Startup History"
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
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Startup History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Startup History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Startup History"
					]
				}
			}
		},
];
