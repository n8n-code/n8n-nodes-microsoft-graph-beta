import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics App Health Device Performance Details",
					"value": "Device Management List User Experience Analytics App Health Device Performance Details",
					"action": "Get userExperienceAnalyticsAppHealthDevicePerformanceDetails from deviceManagement",
					"description": "User experience analytics device performance details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics App Health Device Performance Details",
					"value": "Device Management Create User Experience Analytics App Health Device Performance Details",
					"action": "Create new navigation property to userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics App Health Device Performance Details",
					"value": "Device Management Delete User Experience Analytics App Health Device Performance Details",
					"action": "Delete navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{{$parameter[\"userExperienceAnalyticsAppHealthDevicePerformanceDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics App Health Device Performance Details",
					"value": "Device Management Get User Experience Analytics App Health Device Performance Details",
					"action": "Get userExperienceAnalyticsAppHealthDevicePerformanceDetails from deviceManagement",
					"description": "User experience analytics device performance details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{{$parameter[\"userExperienceAnalyticsAppHealthDevicePerformanceDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics App Health Device Performance Details",
					"value": "Device Management Update User Experience Analytics App Health Device Performance Details",
					"action": "Update the navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{{$parameter[\"userExperienceAnalyticsAppHealthDevicePerformanceDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management List User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Create User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Device Performance Details"
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
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics App Health Device Performance Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Device Performance Details"
					]
				}
			}
		},
];
