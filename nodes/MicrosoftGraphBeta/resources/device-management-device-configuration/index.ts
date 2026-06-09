import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Configurations",
					"value": "Device Management List Device Configurations",
					"action": "Get deviceConfigurations from deviceManagement",
					"description": "The device configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations"
						}
					}
				},
				{
					"name": "Device Management Create Device Configurations",
					"value": "Device Management Create Device Configurations",
					"action": "Create new navigation property to deviceConfigurations for deviceManagement",
					"description": "Create new navigation property to deviceConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations"
						}
					}
				},
				{
					"name": "Device Management Delete Device Configurations",
					"value": "Device Management Delete Device Configurations",
					"action": "Delete navigation property deviceConfigurations for deviceManagement",
					"description": "Delete navigation property deviceConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Configurations",
					"value": "Device Management Get Device Configurations",
					"action": "Get deviceConfigurations from deviceManagement",
					"description": "The device configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Configurations",
					"value": "Device Management Update Device Configurations",
					"action": "Update the navigation property deviceConfigurations in deviceManagement",
					"description": "Update the navigation property deviceConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations List Assignments",
					"value": "Device Management Device Configurations List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for the device configuration profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Create Assignments",
					"value": "Device Management Device Configurations Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete Assignments",
					"value": "Device Management Device Configurations Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/assignments/{{$parameter[\"deviceConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Assignments",
					"value": "Device Management Device Configurations Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for the device configuration profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/assignments/{{$parameter[\"deviceConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update Assignments",
					"value": "Device Management Device Configurations Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/assignments/{{$parameter[\"deviceConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations List Device Setting State Summaries",
					"value": "Device Management Device Configurations List Device Setting State Summaries",
					"action": "Get deviceSettingStateSummaries from deviceManagement",
					"description": "Device Configuration Setting State Device Summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceSettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Create Device Setting State Summaries",
					"value": "Device Management Device Configurations Create Device Setting State Summaries",
					"action": "Create new navigation property to deviceSettingStateSummaries for deviceManagement",
					"description": "Create new navigation property to deviceSettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceSettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete Device Setting State Summaries",
					"value": "Device Management Device Configurations Delete Device Setting State Summaries",
					"action": "Delete navigation property deviceSettingStateSummaries for deviceManagement",
					"description": "Delete navigation property deviceSettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"settingStateDeviceSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Device Setting State Summaries",
					"value": "Device Management Device Configurations Get Device Setting State Summaries",
					"action": "Get deviceSettingStateSummaries from deviceManagement",
					"description": "Device Configuration Setting State Device Summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"settingStateDeviceSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update Device Setting State Summaries",
					"value": "Device Management Device Configurations Update Device Setting State Summaries",
					"action": "Update the navigation property deviceSettingStateSummaries in deviceManagement",
					"description": "Update the navigation property deviceSettingStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"settingStateDeviceSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete Device Status Overview",
					"value": "Device Management Device Configurations Delete Device Status Overview",
					"action": "Delete navigation property deviceStatusOverview for deviceManagement",
					"description": "Delete navigation property deviceStatusOverview for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Device Status Overview",
					"value": "Device Management Device Configurations Get Device Status Overview",
					"action": "Get deviceStatusOverview from deviceManagement",
					"description": "Device Configuration devices status overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update Device Status Overview",
					"value": "Device Management Device Configurations Update Device Status Overview",
					"action": "Update the navigation property deviceStatusOverview in deviceManagement",
					"description": "Update the navigation property deviceStatusOverview in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Configurations List Device Statuses",
					"value": "Device Management Device Configurations List Device Statuses",
					"action": "Get deviceStatuses from deviceManagement",
					"description": "Device configuration installation status by device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Create Device Statuses",
					"value": "Device Management Device Configurations Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceManagement",
					"description": "Create new navigation property to deviceStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete Device Statuses",
					"value": "Device Management Device Configurations Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceManagement",
					"description": "Delete navigation property deviceStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"deviceConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Device Statuses",
					"value": "Device Management Device Configurations Get Device Statuses",
					"action": "Get deviceStatuses from deviceManagement",
					"description": "Device configuration installation status by device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"deviceConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update Device Statuses",
					"value": "Device Management Device Configurations Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceManagement",
					"description": "Update the navigation property deviceStatuses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"deviceConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations List Group Assignments",
					"value": "Device Management Device Configurations List Group Assignments",
					"action": "Get groupAssignments from deviceManagement",
					"description": "The list of group assignments for the device configuration profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Create Group Assignments",
					"value": "Device Management Device Configurations Create Group Assignments",
					"action": "Create new navigation property to groupAssignments for deviceManagement",
					"description": "Create new navigation property to groupAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete Group Assignments",
					"value": "Device Management Device Configurations Delete Group Assignments",
					"action": "Delete navigation property groupAssignments for deviceManagement",
					"description": "Delete navigation property groupAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/groupAssignments/{{$parameter[\"deviceConfigurationGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Group Assignments",
					"value": "Device Management Device Configurations Get Group Assignments",
					"action": "Get groupAssignments from deviceManagement",
					"description": "The list of group assignments for the device configuration profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/groupAssignments/{{$parameter[\"deviceConfigurationGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update Group Assignments",
					"value": "Device Management Device Configurations Update Group Assignments",
					"action": "Update the navigation property groupAssignments in deviceManagement",
					"description": "Update the navigation property groupAssignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/groupAssignments/{{$parameter[\"deviceConfigurationGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Group Assignments Get Device Configuration",
					"value": "Device Management Device Configurations Group Assignments Get Device Configuration",
					"action": "Get deviceConfiguration from deviceManagement",
					"description": "The navigation link to the Device Configuration being targeted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/groupAssignments/{{$parameter[\"deviceConfigurationGroupAssignment-id\"]}}/deviceConfiguration"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete User Status Overview",
					"value": "Device Management Device Configurations Delete User Status Overview",
					"action": "Delete navigation property userStatusOverview for deviceManagement",
					"description": "Delete navigation property userStatusOverview for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get User Status Overview",
					"value": "Device Management Device Configurations Get User Status Overview",
					"action": "Get userStatusOverview from deviceManagement",
					"description": "Device Configuration users status overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update User Status Overview",
					"value": "Device Management Device Configurations Update User Status Overview",
					"action": "Update the navigation property userStatusOverview in deviceManagement",
					"description": "Update the navigation property userStatusOverview in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Configurations List User Statuses",
					"value": "Device Management Device Configurations List User Statuses",
					"action": "Get userStatuses from deviceManagement",
					"description": "Device configuration installation status by user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Create User Statuses",
					"value": "Device Management Device Configurations Create User Statuses",
					"action": "Create new navigation property to userStatuses for deviceManagement",
					"description": "Create new navigation property to userStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Delete User Statuses",
					"value": "Device Management Device Configurations Delete User Statuses",
					"action": "Delete navigation property userStatuses for deviceManagement",
					"description": "Delete navigation property userStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatuses/{{$parameter[\"deviceConfigurationUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get User Statuses",
					"value": "Device Management Device Configurations Get User Statuses",
					"action": "Get userStatuses from deviceManagement",
					"description": "Device configuration installation status by user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatuses/{{$parameter[\"deviceConfigurationUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Update User Statuses",
					"value": "Device Management Device Configurations Update User Statuses",
					"action": "Update the navigation property userStatuses in deviceManagement",
					"description": "Update the navigation property userStatuses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/userStatuses/{{$parameter[\"deviceConfigurationUserStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management List Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Create Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Create Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Delete Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Delete Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Get Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Get Device Configurations"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Get Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Update Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Update Device Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Setting State Summaries"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Device Status Overview"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Status Overview"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Status Overview"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Group Assignments"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Group Assignments Get Device Configuration"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Group Assignments Get Device Configuration"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Group Assignments Get Device Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete User Status Overview"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get User Status Overview"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get User Status Overview"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations List User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Delete User Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get User Statuses"
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
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Get User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration"
					],
					"operation": [
						"Device Management Device Configurations Update User Statuses"
					]
				}
			}
		},
];
