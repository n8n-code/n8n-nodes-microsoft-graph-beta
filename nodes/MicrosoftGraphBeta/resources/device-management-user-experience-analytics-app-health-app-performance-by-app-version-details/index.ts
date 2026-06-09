import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics App Health Application Performance By App Version Details",
					"value": "Device Management List User Experience Analytics App Health Application Performance By App Version Details",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by App Version details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics App Health Application Performance By App Version Details",
					"value": "Device Management Create User Experience Analytics App Health Application Performance By App Version Details",
					"action": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics App Health Application Performance By App Version Details",
					"value": "Device Management Delete User Experience Analytics App Health Application Performance By App Version Details",
					"action": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics App Health Application Performance By App Version Details",
					"value": "Device Management Get User Experience Analytics App Health Application Performance By App Version Details",
					"action": "Get userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails from deviceManagement",
					"description": "User experience analytics appHealth Application Performance by App Version details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics App Health Application Performance By App Version Details",
					"value": "Device Management Update User Experience Analytics App Health Application Performance By App Version Details",
					"action": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{{$parameter[\"userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version Details"
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
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health App Performance By App Version Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Application Performance By App Version Details"
					]
				}
			}
		},
];
