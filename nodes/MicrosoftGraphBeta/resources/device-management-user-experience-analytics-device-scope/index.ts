import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsDeviceScopeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete User Experience Analytics Device Scope",
					"value": "Device Management Delete User Experience Analytics Device Scope",
					"action": "Delete navigation property userExperienceAnalyticsDeviceScope for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceScope for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScope"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Scope",
					"value": "Device Management Get User Experience Analytics Device Scope",
					"action": "Get userExperienceAnalyticsDeviceScope from deviceManagement",
					"description": "The user experience analytics device scope entity endpoint to trigger on the service to either START or STOP computing metrics data based on a device scope configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScope"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Scope",
					"value": "Device Management Update User Experience Analytics Device Scope",
					"action": "Update the navigation property userExperienceAnalyticsDeviceScope in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceScope in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScope"
						}
					}
				},
				{
					"name": "Device Management List User Experience Analytics Device Scopes",
					"value": "Device Management List User Experience Analytics Device Scopes",
					"action": "Get userExperienceAnalyticsDeviceScopes from deviceManagement",
					"description": "The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScopes"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Device Scopes",
					"value": "Device Management Create User Experience Analytics Device Scopes",
					"action": "Create new navigation property to userExperienceAnalyticsDeviceScopes for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsDeviceScopes for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScopes"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Device Scopes",
					"value": "Device Management Delete User Experience Analytics Device Scopes",
					"action": "Delete navigation property userExperienceAnalyticsDeviceScopes for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsDeviceScopes for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScopes/{{$parameter[\"userExperienceAnalyticsDeviceScope-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Device Scopes",
					"value": "Device Management Get User Experience Analytics Device Scopes",
					"action": "Get userExperienceAnalyticsDeviceScopes from deviceManagement",
					"description": "The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScopes/{{$parameter[\"userExperienceAnalyticsDeviceScope-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Device Scopes",
					"value": "Device Management Update User Experience Analytics Device Scopes",
					"action": "Update the navigation property userExperienceAnalyticsDeviceScopes in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsDeviceScopes in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScopes/{{$parameter[\"userExperienceAnalyticsDeviceScope-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Scope"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scope"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scope"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management List User Experience Analytics Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceScopes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Create User Experience Analytics Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scopes"
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
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Get User Experience Analytics Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Scopes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Device Scope"
					],
					"operation": [
						"Device Management Update User Experience Analytics Device Scopes"
					]
				}
			}
		},
];
