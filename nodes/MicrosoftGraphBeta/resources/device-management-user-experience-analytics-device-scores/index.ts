import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsDeviceScoresDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Device Scores",
					"value": "Device Management List User Experience Analytics Device Scores",
					"action": "Get userExperienceAnalyticsDeviceScores from deviceManagement",
					"description": "User experience analytics device scores",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScores"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Device Scores",
					"value": "Device Management Create User Experience Analytics Device Scores",
					"action": "Create new navigation property to userExperienceAnalyticsDeviceScores for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsDeviceScores for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScores"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Device Scores",
					"value": "Device Management Delete User Experience Analytics Device Scores",
					"action": "Delete navigation property userExperienceAnalyticsDeviceScores for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceScores for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScores/{{$parameter[\"userExperienceAnalyticsDeviceScores-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Scores",
					"value": "Device Management Get User Experience Analytics Device Scores",
					"action": "Get userExperienceAnalyticsDeviceScores from deviceManagement",
					"description": "User experience analytics device scores",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScores/{{$parameter[\"userExperienceAnalyticsDeviceScores-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Scores",
					"value": "Device Management Update User Experience Analytics Device Scores",
					"action": "Update the navigation property userExperienceAnalyticsDeviceScores in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceScores in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScores/{{$parameter[\"userExperienceAnalyticsDeviceScores-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceScores<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Scores"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Scores"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scores"
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
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Scores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scores"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Scores"
					]
				}
			}
		},
];
