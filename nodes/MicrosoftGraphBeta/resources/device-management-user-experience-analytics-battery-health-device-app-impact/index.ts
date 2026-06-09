import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBatteryHealthDeviceAppImpactDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Battery Health Device App Impact",
					"value": "Device Management List User Experience Analytics Battery Health Device App Impact",
					"action": "Get userExperienceAnalyticsBatteryHealthDeviceAppImpact from deviceManagement",
					"description": "User Experience Analytics Battery Health Device App Impact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Battery Health Device App Impact",
					"value": "Device Management Create User Experience Analytics Battery Health Device App Impact",
					"action": "Create new navigation property to userExperienceAnalyticsBatteryHealthDeviceAppImpact for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsBatteryHealthDeviceAppImpact for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Battery Health Device App Impact",
					"value": "Device Management Delete User Experience Analytics Battery Health Device App Impact",
					"action": "Delete navigation property userExperienceAnalyticsBatteryHealthDeviceAppImpact for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBatteryHealthDeviceAppImpact for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{{$parameter[\"userExperienceAnalyticsBatteryHealthDeviceAppImpact-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Battery Health Device App Impact",
					"value": "Device Management Get User Experience Analytics Battery Health Device App Impact",
					"action": "Get userExperienceAnalyticsBatteryHealthDeviceAppImpact from deviceManagement",
					"description": "User Experience Analytics Battery Health Device App Impact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{{$parameter[\"userExperienceAnalyticsBatteryHealthDeviceAppImpact-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Battery Health Device App Impact",
					"value": "Device Management Update User Experience Analytics Battery Health Device App Impact",
					"action": "Update the navigation property userExperienceAnalyticsBatteryHealthDeviceAppImpact in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBatteryHealthDeviceAppImpact in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{{$parameter[\"userExperienceAnalyticsBatteryHealthDeviceAppImpact-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management List User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Create User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device App Impact"
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
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Device App Impact"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Device App Impact"
					]
				}
			}
		},
];
