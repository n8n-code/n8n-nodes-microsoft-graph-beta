import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsAutopilotDeploymentProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Autopilot Deployment Profiles",
					"value": "Device Management List Windows Autopilot Deployment Profiles",
					"action": "Get windowsAutopilotDeploymentProfiles from deviceManagement",
					"description": "Windows auto pilot deployment profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Windows Autopilot Deployment Profiles",
					"value": "Device Management Create Windows Autopilot Deployment Profiles",
					"action": "Create new navigation property to windowsAutopilotDeploymentProfiles for deviceManagement",
					"description": "Create new navigation property to windowsAutopilotDeploymentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Autopilot Deployment Profiles",
					"value": "Device Management Delete Windows Autopilot Deployment Profiles",
					"action": "Delete navigation property windowsAutopilotDeploymentProfiles for deviceManagement",
					"description": "Delete navigation property windowsAutopilotDeploymentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Autopilot Deployment Profiles",
					"value": "Device Management Get Windows Autopilot Deployment Profiles",
					"action": "Get windowsAutopilotDeploymentProfiles from deviceManagement",
					"description": "Windows auto pilot deployment profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Autopilot Deployment Profiles",
					"value": "Device Management Update Windows Autopilot Deployment Profiles",
					"action": "Update the navigation property windowsAutopilotDeploymentProfiles in deviceManagement",
					"description": "Update the navigation property windowsAutopilotDeploymentProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles List Assigned Devices",
					"value": "Device Management Windows Autopilot Deployment Profiles List Assigned Devices",
					"action": "Get assignedDevices from deviceManagement",
					"description": "The list of assigned devices for the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Create Assigned Devices",
					"value": "Device Management Windows Autopilot Deployment Profiles Create Assigned Devices",
					"action": "Create new navigation property to assignedDevices for deviceManagement",
					"description": "Create new navigation property to assignedDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Delete Assigned Devices",
					"value": "Device Management Windows Autopilot Deployment Profiles Delete Assigned Devices",
					"action": "Delete navigation property assignedDevices for deviceManagement",
					"description": "Delete navigation property assignedDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Get Assigned Devices",
					"value": "Device Management Windows Autopilot Deployment Profiles Get Assigned Devices",
					"action": "Get assignedDevices from deviceManagement",
					"description": "The list of assigned devices for the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Update Assigned Devices",
					"value": "Device Management Windows Autopilot Deployment Profiles Update Assigned Devices",
					"action": "Update the navigation property assignedDevices in deviceManagement",
					"description": "Update the navigation property assignedDevices in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Deployment Profile",
					"value": "Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Deployment Profile",
					"action": "Get deploymentProfile from deviceManagement",
					"description": "Deployment profile currently assigned to the Windows autopilot device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/deploymentProfile"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Intended Deployment Profile",
					"value": "Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Intended Deployment Profile",
					"action": "Get intendedDeploymentProfile from deviceManagement",
					"description": "Deployment profile intended to be assigned to the Windows autopilot device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/intendedDeploymentProfile"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles List Assignments",
					"value": "Device Management Windows Autopilot Deployment Profiles List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Create Assignments",
					"value": "Device Management Windows Autopilot Deployment Profiles Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Delete Assignments",
					"value": "Device Management Windows Autopilot Deployment Profiles Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignments/{{$parameter[\"windowsAutopilotDeploymentProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Get Assignments",
					"value": "Device Management Windows Autopilot Deployment Profiles Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignments/{{$parameter[\"windowsAutopilotDeploymentProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Update Assignments",
					"value": "Device Management Windows Autopilot Deployment Profiles Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignments/{{$parameter[\"windowsAutopilotDeploymentProfileAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management List Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Create Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Create Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Delete Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Delete Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Get Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Get Windows Autopilot Deployment Profiles"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Get Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Update Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Update Windows Autopilot Deployment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Create Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Create Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Delete Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Delete Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Get Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Get Assigned Devices"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Get Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Update Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Update Assigned Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/deploymentProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Deployment Profile"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Deployment Profile"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Deployment Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Intended Deployment Profile"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Intended Deployment Profile"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Assigned Devices Get Intended Deployment Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Delete Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Get Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Get Assignments"
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
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Deployment Profile"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Update Assignments"
					]
				}
			}
		},
];
