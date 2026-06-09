import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsAnomalyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Anomaly",
					"value": "Device Management List User Experience Analytics Anomaly",
					"action": "Get userExperienceAnalyticsAnomaly from deviceManagement",
					"description": "The user experience analytics anomaly entity contains anomaly details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomaly"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Anomaly",
					"value": "Device Management Create User Experience Analytics Anomaly",
					"action": "Create new navigation property to userExperienceAnalyticsAnomaly for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsAnomaly for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomaly"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Anomaly",
					"value": "Device Management Delete User Experience Analytics Anomaly",
					"action": "Delete navigation property userExperienceAnalyticsAnomaly for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAnomaly for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomaly/{{$parameter[\"userExperienceAnalyticsAnomaly-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Anomaly",
					"value": "Device Management Get User Experience Analytics Anomaly",
					"action": "Get userExperienceAnalyticsAnomaly from deviceManagement",
					"description": "The user experience analytics anomaly entity contains anomaly details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomaly/{{$parameter[\"userExperienceAnalyticsAnomaly-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Anomaly",
					"value": "Device Management Update User Experience Analytics Anomaly",
					"action": "Update the navigation property userExperienceAnalyticsAnomaly in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAnomaly in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAnomaly/{{$parameter[\"userExperienceAnalyticsAnomaly-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAnomaly",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management List User Experience Analytics Anomaly"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAnomaly",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Create User Experience Analytics Anomaly"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAnomaly<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Create User Experience Analytics Anomaly"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Anomaly"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Get User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Get User Experience Analytics Anomaly"
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
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Get User Experience Analytics Anomaly"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Update User Experience Analytics Anomaly"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Anomaly"
					],
					"operation": [
						"Device Management Update User Experience Analytics Anomaly"
					]
				}
			}
		},
];
