import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsDeviceTimelineEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Device Timeline Event",
					"value": "Device Management List User Experience Analytics Device Timeline Event",
					"action": "Get userExperienceAnalyticsDeviceTimelineEvent from deviceManagement",
					"description": "The user experience analytics device events entity contains NRT device timeline event details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Device Timeline Event",
					"value": "Device Management Create User Experience Analytics Device Timeline Event",
					"action": "Create new navigation property to userExperienceAnalyticsDeviceTimelineEvent for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsDeviceTimelineEvent for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Device Timeline Event",
					"value": "Device Management Delete User Experience Analytics Device Timeline Event",
					"action": "Delete navigation property userExperienceAnalyticsDeviceTimelineEvent for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceTimelineEvent for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{{$parameter[\"userExperienceAnalyticsDeviceTimelineEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Timeline Event",
					"value": "Device Management Get User Experience Analytics Device Timeline Event",
					"action": "Get userExperienceAnalyticsDeviceTimelineEvent from deviceManagement",
					"description": "The user experience analytics device events entity contains NRT device timeline event details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{{$parameter[\"userExperienceAnalyticsDeviceTimelineEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Timeline Event",
					"value": "Device Management Update User Experience Analytics Device Timeline Event",
					"action": "Update the navigation property userExperienceAnalyticsDeviceTimelineEvent in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceTimelineEvent in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{{$parameter[\"userExperienceAnalyticsDeviceTimelineEvent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Timeline Event"
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
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Timeline Event"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Timeline Event"
					]
				}
			}
		},
];
