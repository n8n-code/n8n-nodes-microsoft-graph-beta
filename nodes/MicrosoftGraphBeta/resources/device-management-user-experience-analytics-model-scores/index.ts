import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsModelScoresDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Model Scores",
					"value": "Device Management List User Experience Analytics Model Scores",
					"action": "Get userExperienceAnalyticsModelScores from deviceManagement",
					"description": "User experience analytics model scores",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsModelScores"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Model Scores",
					"value": "Device Management Create User Experience Analytics Model Scores",
					"action": "Create new navigation property to userExperienceAnalyticsModelScores for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsModelScores for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsModelScores"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Model Scores",
					"value": "Device Management Delete User Experience Analytics Model Scores",
					"action": "Delete navigation property userExperienceAnalyticsModelScores for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsModelScores for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsModelScores/{{$parameter[\"userExperienceAnalyticsModelScores-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Model Scores",
					"value": "Device Management Get User Experience Analytics Model Scores",
					"action": "Get userExperienceAnalyticsModelScores from deviceManagement",
					"description": "User experience analytics model scores",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsModelScores/{{$parameter[\"userExperienceAnalyticsModelScores-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Model Scores",
					"value": "Device Management Update User Experience Analytics Model Scores",
					"action": "Update the navigation property userExperienceAnalyticsModelScores in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsModelScores in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsModelScores/{{$parameter[\"userExperienceAnalyticsModelScores-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsModelScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management List User Experience Analytics Model Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsModelScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Create User Experience Analytics Model Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsModelScores<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Create User Experience Analytics Model Scores"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Model Scores"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Get User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Get User Experience Analytics Model Scores"
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
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Get User Experience Analytics Model Scores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Update User Experience Analytics Model Scores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Model Scores"
					],
					"operation": [
						"Device Management Update User Experience Analytics Model Scores"
					]
				}
			}
		},
];
