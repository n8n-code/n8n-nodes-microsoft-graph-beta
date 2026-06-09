import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsResourcePerformanceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Resource Performance",
					"value": "Device Management List User Experience Analytics Resource Performance",
					"action": "Get userExperienceAnalyticsResourcePerformance from deviceManagement",
					"description": "User experience analytics resource performance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsResourcePerformance"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Resource Performance",
					"value": "Device Management Create User Experience Analytics Resource Performance",
					"action": "Create new navigation property to userExperienceAnalyticsResourcePerformance for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsResourcePerformance for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsResourcePerformance"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Resource Performance",
					"value": "Device Management Delete User Experience Analytics Resource Performance",
					"action": "Delete navigation property userExperienceAnalyticsResourcePerformance for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsResourcePerformance for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsResourcePerformance/{{$parameter[\"userExperienceAnalyticsResourcePerformance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Resource Performance",
					"value": "Device Management Get User Experience Analytics Resource Performance",
					"action": "Get userExperienceAnalyticsResourcePerformance from deviceManagement",
					"description": "User experience analytics resource performance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsResourcePerformance/{{$parameter[\"userExperienceAnalyticsResourcePerformance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Resource Performance",
					"value": "Device Management Update User Experience Analytics Resource Performance",
					"action": "Update the navigation property userExperienceAnalyticsResourcePerformance in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsResourcePerformance in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsResourcePerformance/{{$parameter[\"userExperienceAnalyticsResourcePerformance-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsResourcePerformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management List User Experience Analytics Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsResourcePerformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Create User Experience Analytics Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsResourcePerformance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Create User Experience Analytics Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Resource Performance"
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
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Get User Experience Analytics Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Update User Experience Analytics Resource Performance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Resource Performance"
					],
					"operation": [
						"Device Management Update User Experience Analytics Resource Performance"
					]
				}
			}
		},
];
