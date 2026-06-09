import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBatteryHealthOsPerformanceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Battery Health Os Performance",
					"value": "Device Management List User Experience Analytics Battery Health Os Performance",
					"action": "Get userExperienceAnalyticsBatteryHealthOsPerformance from deviceManagement",
					"description": "User Experience Analytics Battery Health Os Performance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Battery Health Os Performance",
					"value": "Device Management Create User Experience Analytics Battery Health Os Performance",
					"action": "Create new navigation property to userExperienceAnalyticsBatteryHealthOsPerformance for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsBatteryHealthOsPerformance for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Battery Health Os Performance",
					"value": "Device Management Delete User Experience Analytics Battery Health Os Performance",
					"action": "Delete navigation property userExperienceAnalyticsBatteryHealthOsPerformance for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBatteryHealthOsPerformance for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{{$parameter[\"userExperienceAnalyticsBatteryHealthOsPerformance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Battery Health Os Performance",
					"value": "Device Management Get User Experience Analytics Battery Health Os Performance",
					"action": "Get userExperienceAnalyticsBatteryHealthOsPerformance from deviceManagement",
					"description": "User Experience Analytics Battery Health Os Performance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{{$parameter[\"userExperienceAnalyticsBatteryHealthOsPerformance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Battery Health Os Performance",
					"value": "Device Management Update User Experience Analytics Battery Health Os Performance",
					"action": "Update the navigation property userExperienceAnalyticsBatteryHealthOsPerformance in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBatteryHealthOsPerformance in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{{$parameter[\"userExperienceAnalyticsBatteryHealthOsPerformance-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Os Performance"
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
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Os Performance"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Os Performance"
					]
				}
			}
		},
];
