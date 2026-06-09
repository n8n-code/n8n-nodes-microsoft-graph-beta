import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementManagedDeviceMobileAppConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Mobile App Configurations",
					"value": "Device App Management List Mobile App Configurations",
					"action": "Get mobileAppConfigurations from deviceAppManagement",
					"description": "The Managed Device Mobile Application Configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations"
						}
					}
				},
				{
					"name": "Device App Management Create Mobile App Configurations",
					"value": "Device App Management Create Mobile App Configurations",
					"action": "Create new navigation property to mobileAppConfigurations for deviceAppManagement",
					"description": "Create new navigation property to mobileAppConfigurations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileAppConfigurations"
						}
					}
				},
				{
					"name": "Device App Management Delete Mobile App Configurations",
					"value": "Device App Management Delete Mobile App Configurations",
					"action": "Delete navigation property mobileAppConfigurations for deviceAppManagement",
					"description": "Delete navigation property mobileAppConfigurations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Mobile App Configurations",
					"value": "Device App Management Get Mobile App Configurations",
					"action": "Get mobileAppConfigurations from deviceAppManagement",
					"description": "The Managed Device Mobile Application Configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Mobile App Configurations",
					"value": "Device App Management Update Mobile App Configurations",
					"action": "Update the navigation property mobileAppConfigurations in deviceAppManagement",
					"description": "Update the navigation property mobileAppConfigurations in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations List Assignments",
					"value": "Device App Management Mobile App Configurations List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The list of group assignemenets for app configration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Create Assignments",
					"value": "Device App Management Mobile App Configurations Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Delete Assignments",
					"value": "Device App Management Mobile App Configurations Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/assignments/{{$parameter[\"managedDeviceMobileAppConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Get Assignments",
					"value": "Device App Management Mobile App Configurations Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The list of group assignemenets for app configration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/assignments/{{$parameter[\"managedDeviceMobileAppConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Update Assignments",
					"value": "Device App Management Mobile App Configurations Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/assignments/{{$parameter[\"managedDeviceMobileAppConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Delete Device Status Summary",
					"value": "Device App Management Mobile App Configurations Delete Device Status Summary",
					"action": "Delete navigation property deviceStatusSummary for deviceAppManagement",
					"description": "Delete navigation property deviceStatusSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatusSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Get Device Status Summary",
					"value": "Device App Management Mobile App Configurations Get Device Status Summary",
					"action": "Get deviceStatusSummary from deviceAppManagement",
					"description": "App configuration device status summary.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatusSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Update Device Status Summary",
					"value": "Device App Management Mobile App Configurations Update Device Status Summary",
					"action": "Update the navigation property deviceStatusSummary in deviceAppManagement",
					"description": "Update the navigation property deviceStatusSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatusSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations List Device Statuses",
					"value": "Device App Management Mobile App Configurations List Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "List of ManagedDeviceMobileAppConfigurationDeviceStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Create Device Statuses",
					"value": "Device App Management Mobile App Configurations Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"description": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Delete Device Statuses",
					"value": "Device App Management Mobile App Configurations Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceAppManagement",
					"description": "Delete navigation property deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Get Device Statuses",
					"value": "Device App Management Mobile App Configurations Get Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "List of ManagedDeviceMobileAppConfigurationDeviceStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Update Device Statuses",
					"value": "Device App Management Mobile App Configurations Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceAppManagement",
					"description": "Update the navigation property deviceStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/deviceStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Delete User Status Summary",
					"value": "Device App Management Mobile App Configurations Delete User Status Summary",
					"action": "Delete navigation property userStatusSummary for deviceAppManagement",
					"description": "Delete navigation property userStatusSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatusSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Get User Status Summary",
					"value": "Device App Management Mobile App Configurations Get User Status Summary",
					"action": "Get userStatusSummary from deviceAppManagement",
					"description": "App configuration user status summary.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatusSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Update User Status Summary",
					"value": "Device App Management Mobile App Configurations Update User Status Summary",
					"action": "Update the navigation property userStatusSummary in deviceAppManagement",
					"description": "Update the navigation property userStatusSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatusSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations List User Statuses",
					"value": "Device App Management Mobile App Configurations List User Statuses",
					"action": "Get userStatuses from deviceAppManagement",
					"description": "List of ManagedDeviceMobileAppConfigurationUserStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Create User Statuses",
					"value": "Device App Management Mobile App Configurations Create User Statuses",
					"action": "Create new navigation property to userStatuses for deviceAppManagement",
					"description": "Create new navigation property to userStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Delete User Statuses",
					"value": "Device App Management Mobile App Configurations Delete User Statuses",
					"action": "Delete navigation property userStatuses for deviceAppManagement",
					"description": "Delete navigation property userStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Get User Statuses",
					"value": "Device App Management Mobile App Configurations Get User Statuses",
					"action": "Get userStatuses from deviceAppManagement",
					"description": "List of ManagedDeviceMobileAppConfigurationUserStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Update User Statuses",
					"value": "Device App Management Mobile App Configurations Update User Statuses",
					"action": "Update the navigation property userStatuses in deviceAppManagement",
					"description": "Update the navigation property userStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/userStatuses/{{$parameter[\"managedDeviceMobileAppConfigurationUserStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management List Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Create Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Create Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Delete Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Delete Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Get Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Get Mobile App Configurations"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Get Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Update Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Update Mobile App Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Assignments"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete Device Status Summary"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete Device Status Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Device Status Summary"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Device Status Summary"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Device Status Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update Device Status Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update Device Status Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Device Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete User Status Summary"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete User Status Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get User Status Summary"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get User Status Summary"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get User Status Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update User Status Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update User Status Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations List User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Delete User Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get User Statuses"
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
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Get User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed Device Mobile App Configuration"
					],
					"operation": [
						"Device App Management Mobile App Configurations Update User Statuses"
					]
				}
			}
		},
];
