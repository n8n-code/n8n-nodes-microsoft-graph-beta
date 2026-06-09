import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics App Health Application Performance By App Version Device Id",
					"value": "Device Management List User Experience Analytics App Health Application Performance By App Version Device Id",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by App Version Device Id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics App Health Application Performance By App Version Device Id",
					"value": "Device Management Create User Experience Analytics App Health Application Performance By App Version Device Id",
					"action": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics App Health Application Performance By App Version Device Id",
					"value": "Device Management Delete User Experience Analytics App Health Application Performance By App Version Device Id",
					"action": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics App Health Application Performance By App Version Device Id",
					"value": "Device Management Get User Experience Analytics App Health Application Performance By App Version Device Id",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by App Version Device Id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics App Health Application Performance By App Version Device Id",
					"value": "Device Management Update User Experience Analytics App Health Application Performance By App Version Device Id",
					"action": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version Device Id"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Device Id"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By App Version Device Id"
					]
				}
			}
		},
];
