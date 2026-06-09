import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByOsVersionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics App Health Application Performance By OS Version",
					"value": "Device Management List User Experience Analytics App Health Application Performance By OS Version",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by OS Version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics App Health Application Performance By OS Version",
					"value": "Device Management Create User Experience Analytics App Health Application Performance By OS Version",
					"action": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics App Health Application Performance By OS Version",
					"value": "Device Management Delete User Experience Analytics App Health Application Performance By OS Version",
					"action": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics App Health Application Performance By OS Version",
					"value": "Device Management Get User Experience Analytics App Health Application Performance By OS Version",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by OS Version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics App Health Application Performance By OS Version",
					"value": "Device Management Update User Experience Analytics App Health Application Performance By OS Version",
					"action": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By OS Version"
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
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By OS Version"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By OS Version"
					]
				}
			}
		},
];
