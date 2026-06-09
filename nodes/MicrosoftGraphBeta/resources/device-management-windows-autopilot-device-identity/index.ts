import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsAutopilotDeviceIdentityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Autopilot Device Identities",
					"value": "Device Management List Windows Autopilot Device Identities",
					"action": "Get windowsAutopilotDeviceIdentities from deviceManagement",
					"description": "The Windows autopilot device identities contained collection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Create Windows Autopilot Device Identities",
					"value": "Device Management Create Windows Autopilot Device Identities",
					"action": "Create new navigation property to windowsAutopilotDeviceIdentities for deviceManagement",
					"description": "Create new navigation property to windowsAutopilotDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Autopilot Device Identities",
					"value": "Device Management Delete Windows Autopilot Device Identities",
					"action": "Delete navigation property windowsAutopilotDeviceIdentities for deviceManagement",
					"description": "Delete navigation property windowsAutopilotDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Autopilot Device Identities",
					"value": "Device Management Get Windows Autopilot Device Identities",
					"action": "Get windowsAutopilotDeviceIdentities from deviceManagement",
					"description": "The Windows autopilot device identities contained collection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Autopilot Device Identities",
					"value": "Device Management Update Windows Autopilot Device Identities",
					"action": "Update the navigation property windowsAutopilotDeviceIdentities in deviceManagement",
					"description": "Update the navigation property windowsAutopilotDeviceIdentities in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Get Deployment Profile",
					"value": "Device Management Windows Autopilot Device Identities Get Deployment Profile",
					"action": "Get deploymentProfile from deviceManagement",
					"description": "Deployment profile currently assigned to the Windows autopilot device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/deploymentProfile"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Get Intended Deployment Profile",
					"value": "Device Management Windows Autopilot Device Identities Get Intended Deployment Profile",
					"action": "Get intendedDeploymentProfile from deviceManagement",
					"description": "Deployment profile intended to be assigned to the Windows autopilot device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/intendedDeploymentProfile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management List Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Create Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Create Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Delete Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Delete Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Get Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Get Windows Autopilot Device Identities"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Get Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Update Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Update Windows Autopilot Device Identities"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Get Deployment Profile"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Get Deployment Profile"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Get Deployment Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Get Intended Deployment Profile"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Get Intended Deployment Profile"
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
						"Device Management Windows Autopilot Device Identity"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Get Intended Deployment Profile"
					]
				}
			}
		},
];
