import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics App Health Application Performance By App Version",
					"value": "Device Management List User Experience Analytics App Health Application Performance By App Version",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by App Version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics App Health Application Performance By App Version",
					"value": "Device Management Create User Experience Analytics App Health Application Performance By App Version",
					"action": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics App Health Application Performance By App Version",
					"value": "Device Management Delete User Experience Analytics App Health Application Performance By App Version",
					"action": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics App Health Application Performance By App Version",
					"value": "Device Management Get User Experience Analytics App Health Application Performance By App Version",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by App Version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics App Health Application Performance By App Version",
					"value": "Device Management Update User Experience Analytics App Health Application Performance By App Version",
					"action": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version"
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
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By App Version"
					]
				}
			}
		},
];
