import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementChromeOsOnboardingSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Chrome OS Onboarding Settings",
					"value": "Device Management List Chrome OS Onboarding Settings",
					"action": "Get chromeOSOnboardingSettings from deviceManagement",
					"description": "Collection of ChromeOSOnboardingSettings settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/chromeOSOnboardingSettings"
						}
					}
				},
				{
					"name": "Device Management Create Chrome OS Onboarding Settings",
					"value": "Device Management Create Chrome OS Onboarding Settings",
					"action": "Create new navigation property to chromeOSOnboardingSettings for deviceManagement",
					"description": "Create new navigation property to chromeOSOnboardingSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/chromeOSOnboardingSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Chrome OS Onboarding Settings",
					"value": "Device Management Delete Chrome OS Onboarding Settings",
					"action": "Delete navigation property chromeOSOnboardingSettings for deviceManagement",
					"description": "Delete navigation property chromeOSOnboardingSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/chromeOSOnboardingSettings/{{$parameter[\"chromeOSOnboardingSettings-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Chrome OS Onboarding Settings",
					"value": "Device Management Get Chrome OS Onboarding Settings",
					"action": "Get chromeOSOnboardingSettings from deviceManagement",
					"description": "Collection of ChromeOSOnboardingSettings settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/chromeOSOnboardingSettings/{{$parameter[\"chromeOSOnboardingSettings-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Chrome OS Onboarding Settings",
					"value": "Device Management Update Chrome OS Onboarding Settings",
					"action": "Update the navigation property chromeOSOnboardingSettings in deviceManagement",
					"description": "Update the navigation property chromeOSOnboardingSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/chromeOSOnboardingSettings/{{$parameter[\"chromeOSOnboardingSettings-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/chromeOSOnboardingSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management List Chrome OS Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/chromeOSOnboardingSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Create Chrome OS Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/chromeOSOnboardingSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Create Chrome OS Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Delete Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Delete Chrome OS Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Get Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Get Chrome OS Onboarding Settings"
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
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Get Chrome OS Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Update Chrome OS Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Chrome OS Onboarding Settings"
					],
					"operation": [
						"Device Management Update Chrome OS Onboarding Settings"
					]
				}
			}
		},
];
