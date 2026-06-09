import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceConfigurationConflictSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Configuration Conflict Summary",
					"value": "Device Management List Device Configuration Conflict Summary",
					"action": "Get deviceConfigurationConflictSummary from deviceManagement",
					"description": "Summary of policies in conflict state for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationConflictSummary"
						}
					}
				},
				{
					"name": "Device Management Create Device Configuration Conflict Summary",
					"value": "Device Management Create Device Configuration Conflict Summary",
					"action": "Create new navigation property to deviceConfigurationConflictSummary for deviceManagement",
					"description": "Create new navigation property to deviceConfigurationConflictSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurationConflictSummary"
						}
					}
				},
				{
					"name": "Device Management Delete Device Configuration Conflict Summary",
					"value": "Device Management Delete Device Configuration Conflict Summary",
					"action": "Delete navigation property deviceConfigurationConflictSummary for deviceManagement",
					"description": "Delete navigation property deviceConfigurationConflictSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurationConflictSummary/{{$parameter[\"deviceConfigurationConflictSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Configuration Conflict Summary",
					"value": "Device Management Get Device Configuration Conflict Summary",
					"action": "Get deviceConfigurationConflictSummary from deviceManagement",
					"description": "Summary of policies in conflict state for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationConflictSummary/{{$parameter[\"deviceConfigurationConflictSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Configuration Conflict Summary",
					"value": "Device Management Update Device Configuration Conflict Summary",
					"action": "Update the navigation property deviceConfigurationConflictSummary in deviceManagement",
					"description": "Update the navigation property deviceConfigurationConflictSummary in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurationConflictSummary/{{$parameter[\"deviceConfigurationConflictSummary-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationConflictSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management List Device Configuration Conflict Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurationConflictSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Create Device Configuration Conflict Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurationConflictSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Create Device Configuration Conflict Summary"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Delete Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Delete Device Configuration Conflict Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Get Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Get Device Configuration Conflict Summary"
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
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Get Device Configuration Conflict Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Update Device Configuration Conflict Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Conflict Summary"
					],
					"operation": [
						"Device Management Update Device Configuration Conflict Summary"
					]
				}
			}
		},
];
