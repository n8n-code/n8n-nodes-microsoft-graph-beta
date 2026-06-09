import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsRemoteConnectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Remote Connection",
					"value": "Device Management List User Experience Analytics Remote Connection",
					"action": "Get userExperienceAnalyticsRemoteConnection from deviceManagement",
					"description": "User experience analytics remote connection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsRemoteConnection"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Remote Connection",
					"value": "Device Management Create User Experience Analytics Remote Connection",
					"action": "Create new navigation property to userExperienceAnalyticsRemoteConnection for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsRemoteConnection for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsRemoteConnection"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Remote Connection",
					"value": "Device Management Delete User Experience Analytics Remote Connection",
					"action": "Delete navigation property userExperienceAnalyticsRemoteConnection for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsRemoteConnection for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsRemoteConnection/{{$parameter[\"userExperienceAnalyticsRemoteConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Remote Connection",
					"value": "Device Management Get User Experience Analytics Remote Connection",
					"action": "Get userExperienceAnalyticsRemoteConnection from deviceManagement",
					"description": "User experience analytics remote connection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsRemoteConnection/{{$parameter[\"userExperienceAnalyticsRemoteConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Remote Connection",
					"value": "Device Management Update User Experience Analytics Remote Connection",
					"action": "Update the navigation property userExperienceAnalyticsRemoteConnection in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsRemoteConnection in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsRemoteConnection/{{$parameter[\"userExperienceAnalyticsRemoteConnection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsRemoteConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management List User Experience Analytics Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsRemoteConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Create User Experience Analytics Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsRemoteConnection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Create User Experience Analytics Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Get User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Get User Experience Analytics Remote Connection"
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
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Get User Experience Analytics Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Update User Experience Analytics Remote Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Remote Connection"
					],
					"operation": [
						"Device Management Update User Experience Analytics Remote Connection"
					]
				}
			}
		},
];
