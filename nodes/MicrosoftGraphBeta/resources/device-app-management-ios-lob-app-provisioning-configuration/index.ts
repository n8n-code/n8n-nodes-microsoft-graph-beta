import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementIosLobAppProvisioningConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Ios Lob App Provisioning Configurations",
					"value": "Device App Management List Ios Lob App Provisioning Configurations",
					"action": "Get iosLobAppProvisioningConfigurations from deviceAppManagement",
					"description": "The IOS Lob App Provisioning Configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations"
						}
					}
				},
				{
					"name": "Device App Management Create Ios Lob App Provisioning Configurations",
					"value": "Device App Management Create Ios Lob App Provisioning Configurations",
					"action": "Create new navigation property to iosLobAppProvisioningConfigurations for deviceAppManagement",
					"description": "Create new navigation property to iosLobAppProvisioningConfigurations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations"
						}
					}
				},
				{
					"name": "Device App Management Delete Ios Lob App Provisioning Configurations",
					"value": "Device App Management Delete Ios Lob App Provisioning Configurations",
					"action": "Delete navigation property iosLobAppProvisioningConfigurations for deviceAppManagement",
					"description": "Delete navigation property iosLobAppProvisioningConfigurations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Ios Lob App Provisioning Configurations",
					"value": "Device App Management Get Ios Lob App Provisioning Configurations",
					"action": "Get iosLobAppProvisioningConfigurations from deviceAppManagement",
					"description": "The IOS Lob App Provisioning Configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Ios Lob App Provisioning Configurations",
					"value": "Device App Management Update Ios Lob App Provisioning Configurations",
					"action": "Update the navigation property iosLobAppProvisioningConfigurations in deviceAppManagement",
					"description": "Update the navigation property iosLobAppProvisioningConfigurations in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations List Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The associated group assignments for IosLobAppProvisioningConfiguration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Create Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Delete Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/assignments/{{$parameter[\"iosLobAppProvisioningConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Get Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The associated group assignments for IosLobAppProvisioningConfiguration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/assignments/{{$parameter[\"iosLobAppProvisioningConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Update Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/assignments/{{$parameter[\"iosLobAppProvisioningConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations List Device Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations List Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The list of device installation states for this mobile app configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Create Device Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"description": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Delete Device Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceAppManagement",
					"description": "Delete navigation property deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Get Device Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Get Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The list of device installation states for this mobile app configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Update Device Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceAppManagement",
					"description": "Update the navigation property deviceStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations List Group Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations List Group Assignments",
					"action": "Get groupAssignments from deviceAppManagement",
					"description": "The associated group assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Create Group Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Create Group Assignments",
					"action": "Create new navigation property to groupAssignments for deviceAppManagement",
					"description": "Create new navigation property to groupAssignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Delete Group Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Delete Group Assignments",
					"action": "Delete navigation property groupAssignments for deviceAppManagement",
					"description": "Delete navigation property groupAssignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/groupAssignments/{{$parameter[\"mobileAppProvisioningConfigGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Get Group Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Get Group Assignments",
					"action": "Get groupAssignments from deviceAppManagement",
					"description": "The associated group assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/groupAssignments/{{$parameter[\"mobileAppProvisioningConfigGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Update Group Assignments",
					"value": "Device App Management Ios Lob App Provisioning Configurations Update Group Assignments",
					"action": "Update the navigation property groupAssignments in deviceAppManagement",
					"description": "Update the navigation property groupAssignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/groupAssignments/{{$parameter[\"mobileAppProvisioningConfigGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations List User Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations List User Statuses",
					"action": "Get userStatuses from deviceAppManagement",
					"description": "The list of user installation states for this mobile app configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Create User Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Create User Statuses",
					"action": "Create new navigation property to userStatuses for deviceAppManagement",
					"description": "Create new navigation property to userStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Delete User Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Delete User Statuses",
					"action": "Delete navigation property userStatuses for deviceAppManagement",
					"description": "Delete navigation property userStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/userStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Get User Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Get User Statuses",
					"action": "Get userStatuses from deviceAppManagement",
					"description": "The list of user installation states for this mobile app configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/userStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Update User Statuses",
					"value": "Device App Management Ios Lob App Provisioning Configurations Update User Statuses",
					"action": "Update the navigation property userStatuses in deviceAppManagement",
					"description": "Update the navigation property userStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/userStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationUserStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management List Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Create Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Create Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Delete Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Delete Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Get Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Get Ios Lob App Provisioning Configurations"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Get Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Update Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Update Ios Lob App Provisioning Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Device Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Group Assignments"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations List User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Delete User Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get User Statuses"
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
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Get User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Lob App Provisioning Configuration"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Update User Statuses"
					]
				}
			}
		},
];
