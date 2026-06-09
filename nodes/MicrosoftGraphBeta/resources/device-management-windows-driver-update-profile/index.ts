import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsDriverUpdateProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Driver Update Profiles",
					"value": "Device Management List Windows Driver Update Profiles",
					"action": "Get windowsDriverUpdateProfiles from deviceManagement",
					"description": "A collection of windows driver update profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Windows Driver Update Profiles",
					"value": "Device Management Create Windows Driver Update Profiles",
					"action": "Create new navigation property to windowsDriverUpdateProfiles for deviceManagement",
					"description": "Create new navigation property to windowsDriverUpdateProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Driver Update Profiles",
					"value": "Device Management Delete Windows Driver Update Profiles",
					"action": "Delete navigation property windowsDriverUpdateProfiles for deviceManagement",
					"description": "Delete navigation property windowsDriverUpdateProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Driver Update Profiles",
					"value": "Device Management Get Windows Driver Update Profiles",
					"action": "Get windowsDriverUpdateProfiles from deviceManagement",
					"description": "A collection of windows driver update profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Driver Update Profiles",
					"value": "Device Management Update Windows Driver Update Profiles",
					"action": "Update the navigation property windowsDriverUpdateProfiles in deviceManagement",
					"description": "Update the navigation property windowsDriverUpdateProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles List Assignments",
					"value": "Device Management Windows Driver Update Profiles List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments of the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Create Assignments",
					"value": "Device Management Windows Driver Update Profiles Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Delete Assignments",
					"value": "Device Management Windows Driver Update Profiles Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/assignments/{{$parameter[\"windowsDriverUpdateProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Get Assignments",
					"value": "Device Management Windows Driver Update Profiles Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments of the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/assignments/{{$parameter[\"windowsDriverUpdateProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Update Assignments",
					"value": "Device Management Windows Driver Update Profiles Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/assignments/{{$parameter[\"windowsDriverUpdateProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles List Driver Inventories",
					"value": "Device Management Windows Driver Update Profiles List Driver Inventories",
					"action": "Get driverInventories from deviceManagement",
					"description": "Driver inventories for this profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/driverInventories"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Create Driver Inventories",
					"value": "Device Management Windows Driver Update Profiles Create Driver Inventories",
					"action": "Create new navigation property to driverInventories for deviceManagement",
					"description": "Create new navigation property to driverInventories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/driverInventories"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Delete Driver Inventories",
					"value": "Device Management Windows Driver Update Profiles Delete Driver Inventories",
					"action": "Delete navigation property driverInventories for deviceManagement",
					"description": "Delete navigation property driverInventories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/driverInventories/{{$parameter[\"windowsDriverUpdateInventory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Get Driver Inventories",
					"value": "Device Management Windows Driver Update Profiles Get Driver Inventories",
					"action": "Get driverInventories from deviceManagement",
					"description": "Driver inventories for this profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/driverInventories/{{$parameter[\"windowsDriverUpdateInventory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Update Driver Inventories",
					"value": "Device Management Windows Driver Update Profiles Update Driver Inventories",
					"action": "Update the navigation property driverInventories in deviceManagement",
					"description": "Update the navigation property driverInventories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/driverInventories/{{$parameter[\"windowsDriverUpdateInventory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsDriverUpdateProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management List Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Create Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Create Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Delete Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Delete Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Get Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Get Windows Driver Update Profiles"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Get Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Update Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Update Windows Driver Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Delete Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Get Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Get Assignments"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles List Driver Inventories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Create Driver Inventories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Create Driver Inventories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Delete Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Delete Driver Inventories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Get Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Get Driver Inventories"
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
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Get Driver Inventories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Update Driver Inventories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Driver Update Profile"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Update Driver Inventories"
					]
				}
			}
		},
];
