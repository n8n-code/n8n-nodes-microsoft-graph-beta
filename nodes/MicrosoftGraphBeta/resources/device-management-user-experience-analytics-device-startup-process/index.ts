import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsDeviceStartupProcessDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Device Startup Processes",
					"value": "Device Management List User Experience Analytics Device Startup Processes",
					"action": "Get userExperienceAnalyticsDeviceStartupProcesses from deviceManagement",
					"description": "User experience analytics device Startup Processes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Device Startup Processes",
					"value": "Device Management Create User Experience Analytics Device Startup Processes",
					"action": "Create new navigation property to userExperienceAnalyticsDeviceStartupProcesses for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsDeviceStartupProcesses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Device Startup Processes",
					"value": "Device Management Delete User Experience Analytics Device Startup Processes",
					"action": "Delete navigation property userExperienceAnalyticsDeviceStartupProcesses for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceStartupProcesses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{{$parameter[\"userExperienceAnalyticsDeviceStartupProcess-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Startup Processes",
					"value": "Device Management Get User Experience Analytics Device Startup Processes",
					"action": "Get userExperienceAnalyticsDeviceStartupProcesses from deviceManagement",
					"description": "User experience analytics device Startup Processes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{{$parameter[\"userExperienceAnalyticsDeviceStartupProcess-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Startup Processes",
					"value": "Device Management Update User Experience Analytics Device Startup Processes",
					"action": "Update the navigation property userExperienceAnalyticsDeviceStartupProcesses in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceStartupProcesses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{{$parameter[\"userExperienceAnalyticsDeviceStartupProcess-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Startup Processes"
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
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Startup Process"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Startup Processes"
					]
				}
			}
		},
];
