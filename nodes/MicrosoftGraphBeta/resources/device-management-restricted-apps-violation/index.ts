import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementRestrictedAppsViolationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Configuration Restricted Apps Violations",
					"value": "Device Management List Device Configuration Restricted Apps Violations",
					"action": "Get deviceConfigurationRestrictedAppsViolations from deviceManagement",
					"description": "Restricted apps violations for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationRestrictedAppsViolations"
						}
					}
				},
				{
					"name": "Device Management Create Device Configuration Restricted Apps Violations",
					"value": "Device Management Create Device Configuration Restricted Apps Violations",
					"action": "Create new navigation property to deviceConfigurationRestrictedAppsViolations for deviceManagement",
					"description": "Create new navigation property to deviceConfigurationRestrictedAppsViolations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurationRestrictedAppsViolations"
						}
					}
				},
				{
					"name": "Device Management Delete Device Configuration Restricted Apps Violations",
					"value": "Device Management Delete Device Configuration Restricted Apps Violations",
					"action": "Delete navigation property deviceConfigurationRestrictedAppsViolations for deviceManagement",
					"description": "Delete navigation property deviceConfigurationRestrictedAppsViolations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurationRestrictedAppsViolations/{{$parameter[\"restrictedAppsViolation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Configuration Restricted Apps Violations",
					"value": "Device Management Get Device Configuration Restricted Apps Violations",
					"action": "Get deviceConfigurationRestrictedAppsViolations from deviceManagement",
					"description": "Restricted apps violations for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationRestrictedAppsViolations/{{$parameter[\"restrictedAppsViolation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Configuration Restricted Apps Violations",
					"value": "Device Management Update Device Configuration Restricted Apps Violations",
					"action": "Update the navigation property deviceConfigurationRestrictedAppsViolations in deviceManagement",
					"description": "Update the navigation property deviceConfigurationRestrictedAppsViolations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurationRestrictedAppsViolations/{{$parameter[\"restrictedAppsViolation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationRestrictedAppsViolations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management List Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurationRestrictedAppsViolations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Create Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurationRestrictedAppsViolations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Create Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Delete Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Delete Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Get Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Get Device Configuration Restricted Apps Violations"
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
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Get Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Update Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Restricted Apps Violation"
					],
					"operation": [
						"Device Management Update Device Configuration Restricted Apps Violations"
					]
				}
			}
		},
];
