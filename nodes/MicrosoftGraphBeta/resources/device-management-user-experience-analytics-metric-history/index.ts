import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsMetricHistoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Device Metric History",
					"value": "Device Management List User Experience Analytics Device Metric History",
					"action": "Get userExperienceAnalyticsDeviceMetricHistory from deviceManagement",
					"description": "User experience analytics device metric history",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceMetricHistory"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Device Metric History",
					"value": "Device Management Create User Experience Analytics Device Metric History",
					"action": "Create new navigation property to userExperienceAnalyticsDeviceMetricHistory for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsDeviceMetricHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceMetricHistory"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Device Metric History",
					"value": "Device Management Delete User Experience Analytics Device Metric History",
					"action": "Delete navigation property userExperienceAnalyticsDeviceMetricHistory for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceMetricHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{{$parameter[\"userExperienceAnalyticsMetricHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Metric History",
					"value": "Device Management Get User Experience Analytics Device Metric History",
					"action": "Get userExperienceAnalyticsDeviceMetricHistory from deviceManagement",
					"description": "User experience analytics device metric history",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{{$parameter[\"userExperienceAnalyticsMetricHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Metric History",
					"value": "Device Management Update User Experience Analytics Device Metric History",
					"action": "Update the navigation property userExperienceAnalyticsDeviceMetricHistory in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceMetricHistory in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{{$parameter[\"userExperienceAnalyticsMetricHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management List User Experience Analytics Metric History",
					"value": "Device Management List User Experience Analytics Metric History",
					"action": "Get userExperienceAnalyticsMetricHistory from deviceManagement",
					"description": "User experience analytics metric history",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsMetricHistory"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Metric History",
					"value": "Device Management Create User Experience Analytics Metric History",
					"action": "Create new navigation property to userExperienceAnalyticsMetricHistory for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsMetricHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsMetricHistory"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Metric History",
					"value": "Device Management Delete User Experience Analytics Metric History",
					"action": "Delete navigation property userExperienceAnalyticsMetricHistory for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsMetricHistory for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsMetricHistory/{{$parameter[\"userExperienceAnalyticsMetricHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Metric History",
					"value": "Device Management Get User Experience Analytics Metric History",
					"action": "Get userExperienceAnalyticsMetricHistory from deviceManagement",
					"description": "User experience analytics metric history",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsMetricHistory/{{$parameter[\"userExperienceAnalyticsMetricHistory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Metric History",
					"value": "Device Management Update User Experience Analytics Metric History",
					"action": "Update the navigation property userExperienceAnalyticsMetricHistory in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsMetricHistory in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsMetricHistory/{{$parameter[\"userExperienceAnalyticsMetricHistory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceMetricHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceMetricHistory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Metric History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsMetricHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management List User Experience Analytics Metric History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsMetricHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Metric History"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsMetricHistory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Create User Experience Analytics Metric History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Metric History"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Metric History"
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
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Get User Experience Analytics Metric History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Metric History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Metric History"
					],
					"operation": [
						"Device Management Update User Experience Analytics Metric History"
					]
				}
			}
		},
];
