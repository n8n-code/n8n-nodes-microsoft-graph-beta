import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAnomalyDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Anomaly Device",
					"value": "Device Management List User Experience Analytics Anomaly Device",
					"action": "Get userExperienceAnalyticsAnomalyDevice from deviceManagement",
					"description": "The user experience analytics anomaly entity contains device details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomalyDevice"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Anomaly Device",
					"value": "Device Management Create User Experience Analytics Anomaly Device",
					"action": "Create new navigation property to userExperienceAnalyticsAnomalyDevice for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAnomalyDevice for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomalyDevice"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Anomaly Device",
					"value": "Device Management Delete User Experience Analytics Anomaly Device",
					"action": "Delete navigation property userExperienceAnalyticsAnomalyDevice for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAnomalyDevice for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomalyDevice/{{$parameter[\"userExperienceAnalyticsAnomalyDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Anomaly Device",
					"value": "Device Management Get User Experience Analytics Anomaly Device",
					"action": "Get userExperienceAnalyticsAnomalyDevice from deviceManagement",
					"description": "The user experience analytics anomaly entity contains device details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomalyDevice/{{$parameter[\"userExperienceAnalyticsAnomalyDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Anomaly Device",
					"value": "Device Management Update User Experience Analytics Anomaly Device",
					"action": "Update the navigation property userExperienceAnalyticsAnomalyDevice in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAnomalyDevice in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomalyDevice/{{$parameter[\"userExperienceAnalyticsAnomalyDevice-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAnomalyDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAnomalyDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Create User Experience Analytics Anomaly Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAnomalyDevice<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Create User Experience Analytics Anomaly Device"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Anomaly Device"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Get User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Get User Experience Analytics Anomaly Device"
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
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Get User Experience Analytics Anomaly Device"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Update User Experience Analytics Anomaly Device"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly Device"
					],
					"operation": [
						"Device Management Update User Experience Analytics Anomaly Device"
					]
				}
			}
		},
];
