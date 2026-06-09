import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementImportedWindowsAutopilotDeviceIdentityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Imported Windows Autopilot Device Identities",
					"value": "Device Management List Imported Windows Autopilot Device Identities",
					"action": "Get importedWindowsAutopilotDeviceIdentities from deviceManagement",
					"description": "Collection of imported Windows autopilot devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/importedWindowsAutopilotDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Create Imported Windows Autopilot Device Identities",
					"value": "Device Management Create Imported Windows Autopilot Device Identities",
					"action": "Create new navigation property to importedWindowsAutopilotDeviceIdentities for deviceManagement",
					"description": "Create new navigation property to importedWindowsAutopilotDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/importedWindowsAutopilotDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Delete Imported Windows Autopilot Device Identities",
					"value": "Device Management Delete Imported Windows Autopilot Device Identities",
					"action": "Delete navigation property importedWindowsAutopilotDeviceIdentities for deviceManagement",
					"description": "Delete navigation property importedWindowsAutopilotDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/importedWindowsAutopilotDeviceIdentities/{{$parameter[\"importedWindowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Imported Windows Autopilot Device Identities",
					"value": "Device Management Get Imported Windows Autopilot Device Identities",
					"action": "Get importedWindowsAutopilotDeviceIdentities from deviceManagement",
					"description": "Collection of imported Windows autopilot devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/importedWindowsAutopilotDeviceIdentities/{{$parameter[\"importedWindowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Imported Windows Autopilot Device Identities",
					"value": "Device Management Update Imported Windows Autopilot Device Identities",
					"action": "Update the navigation property importedWindowsAutopilotDeviceIdentities in deviceManagement",
					"description": "Update the navigation property importedWindowsAutopilotDeviceIdentities in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/importedWindowsAutopilotDeviceIdentities/{{$parameter[\"importedWindowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/importedWindowsAutopilotDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedWindowsAutopilotDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Create Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedWindowsAutopilotDeviceIdentities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Create Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Delete Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Delete Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Get Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Get Imported Windows Autopilot Device Identities"
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
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Get Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Update Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Update Imported Windows Autopilot Device Identities"
					]
				}
			}
		},
];
