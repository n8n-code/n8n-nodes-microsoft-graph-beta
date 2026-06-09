import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBatteryHealthDeviceRuntimeHistoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Battery Health Device Runtime History",
					"value": "Device Management List User Experience Analytics Battery Health Device Runtime History",
					"action": "Get userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory from deviceManagement",
					"description": "User Experience Analytics Battery Health Device Runtime History",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Battery Health Device Runtime History",
					"value": "Device Management Create User Experience Analytics Battery Health Device Runtime History",
					"action": "Create new navigation property to userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Battery Health Device Runtime History",
					"value": "Device Management Delete User Experience Analytics Battery Health Device Runtime History",
					"action": "Delete navigation property userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{{$parameter[\"userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Battery Health Device Runtime History",
					"value": "Device Management Get User Experience Analytics Battery Health Device Runtime History",
					"action": "Get userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory from deviceManagement",
					"description": "User Experience Analytics Battery Health Device Runtime History",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{{$parameter[\"userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Battery Health Device Runtime History",
					"value": "Device Management Update User Experience Analytics Battery Health Device Runtime History",
					"action": "Update the navigation property userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{{$parameter[\"userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device Runtime History"
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
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Runtime History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Device Runtime History"
					]
				}
			}
		},
];
