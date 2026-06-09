import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBatteryHealthDevicePerformanceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Battery Health Device Performance",
					"value": "Device Management List User Experience Analytics Battery Health Device Performance",
					"action": "Get userExperienceAnalyticsBatteryHealthDevicePerformance from deviceManagement",
					"description": "User Experience Analytics Battery Health Device Performance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Battery Health Device Performance",
					"value": "Device Management Create User Experience Analytics Battery Health Device Performance",
					"action": "Create new navigation property to userExperienceAnalyticsBatteryHealthDevicePerformance for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsBatteryHealthDevicePerformance for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Battery Health Device Performance",
					"value": "Device Management Delete User Experience Analytics Battery Health Device Performance",
					"action": "Delete navigation property userExperienceAnalyticsBatteryHealthDevicePerformance for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBatteryHealthDevicePerformance for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{{$parameter[\"userExperienceAnalyticsBatteryHealthDevicePerformance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Battery Health Device Performance",
					"value": "Device Management Get User Experience Analytics Battery Health Device Performance",
					"action": "Get userExperienceAnalyticsBatteryHealthDevicePerformance from deviceManagement",
					"description": "User Experience Analytics Battery Health Device Performance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{{$parameter[\"userExperienceAnalyticsBatteryHealthDevicePerformance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Battery Health Device Performance",
					"value": "Device Management Update User Experience Analytics Battery Health Device Performance",
					"action": "Update the navigation property userExperienceAnalyticsBatteryHealthDevicePerformance in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBatteryHealthDevicePerformance in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{{$parameter[\"userExperienceAnalyticsBatteryHealthDevicePerformance-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device Performance"
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
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device Performance"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Device Performance"
					]
				}
			}
		},
];
