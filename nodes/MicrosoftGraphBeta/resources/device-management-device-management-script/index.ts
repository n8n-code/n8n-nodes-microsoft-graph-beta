import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementScriptDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Management Scripts",
					"value": "Device Management List Device Management Scripts",
					"action": "Get deviceManagementScripts from deviceManagement",
					"description": "The list of device management scripts associated with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts"
						}
					}
				},
				{
					"name": "Device Management Create Device Management Scripts",
					"value": "Device Management Create Device Management Scripts",
					"action": "Create new navigation property to deviceManagementScripts for deviceManagement",
					"description": "Create new navigation property to deviceManagementScripts for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts"
						}
					}
				},
				{
					"name": "Device Management Delete Device Management Scripts",
					"value": "Device Management Delete Device Management Scripts",
					"action": "Delete navigation property deviceManagementScripts for deviceManagement",
					"description": "Delete navigation property deviceManagementScripts for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Management Scripts",
					"value": "Device Management Get Device Management Scripts",
					"action": "Get deviceManagementScripts from deviceManagement",
					"description": "The list of device management scripts associated with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Management Scripts",
					"value": "Device Management Update Device Management Scripts",
					"action": "Update the navigation property deviceManagementScripts in deviceManagement",
					"description": "Update the navigation property deviceManagementScripts in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts List Assignments",
					"value": "Device Management Device Management Scripts List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Create Assignments",
					"value": "Device Management Device Management Scripts Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Delete Assignments",
					"value": "Device Management Device Management Scripts Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/assignments/{{$parameter[\"deviceManagementScriptAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Get Assignments",
					"value": "Device Management Device Management Scripts Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/assignments/{{$parameter[\"deviceManagementScriptAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Update Assignments",
					"value": "Device Management Device Management Scripts Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/assignments/{{$parameter[\"deviceManagementScriptAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts List Device Run States",
					"value": "Device Management Device Management Scripts List Device Run States",
					"action": "Get deviceRunStates from deviceManagement",
					"description": "List of run states for this script across all devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/deviceRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Create Device Run States",
					"value": "Device Management Device Management Scripts Create Device Run States",
					"action": "Create new navigation property to deviceRunStates for deviceManagement",
					"description": "Create new navigation property to deviceRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/deviceRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Delete Device Run States",
					"value": "Device Management Device Management Scripts Delete Device Run States",
					"action": "Delete navigation property deviceRunStates for deviceManagement",
					"description": "Delete navigation property deviceRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Get Device Run States",
					"value": "Device Management Device Management Scripts Get Device Run States",
					"action": "Get deviceRunStates from deviceManagement",
					"description": "List of run states for this script across all devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Update Device Run States",
					"value": "Device Management Device Management Scripts Update Device Run States",
					"action": "Update the navigation property deviceRunStates in deviceManagement",
					"description": "Update the navigation property deviceRunStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Device Run States Get Managed Device",
					"value": "Device Management Device Management Scripts Device Run States Get Managed Device",
					"action": "Get managedDevice from deviceManagement",
					"description": "The managed devices that executes the device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}/managedDevice"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts List Group Assignments",
					"value": "Device Management Device Management Scripts List Group Assignments",
					"action": "Get groupAssignments from deviceManagement",
					"description": "The list of group assignments for the device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Create Group Assignments",
					"value": "Device Management Device Management Scripts Create Group Assignments",
					"action": "Create new navigation property to groupAssignments for deviceManagement",
					"description": "Create new navigation property to groupAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Delete Group Assignments",
					"value": "Device Management Device Management Scripts Delete Group Assignments",
					"action": "Delete navigation property groupAssignments for deviceManagement",
					"description": "Delete navigation property groupAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/groupAssignments/{{$parameter[\"deviceManagementScriptGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Get Group Assignments",
					"value": "Device Management Device Management Scripts Get Group Assignments",
					"action": "Get groupAssignments from deviceManagement",
					"description": "The list of group assignments for the device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/groupAssignments/{{$parameter[\"deviceManagementScriptGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Update Group Assignments",
					"value": "Device Management Device Management Scripts Update Group Assignments",
					"action": "Update the navigation property groupAssignments in deviceManagement",
					"description": "Update the navigation property groupAssignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/groupAssignments/{{$parameter[\"deviceManagementScriptGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Get Run Summary",
					"value": "Device Management Device Management Scripts Get Run Summary",
					"action": "Get runSummary from deviceManagement",
					"description": "Run summary for device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/runSummary"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts List User Run States",
					"value": "Device Management Device Management Scripts List User Run States",
					"action": "Get userRunStates from deviceManagement",
					"description": "List of run states for this script across all users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Create User Run States",
					"value": "Device Management Device Management Scripts Create User Run States",
					"action": "Create new navigation property to userRunStates for deviceManagement",
					"description": "Create new navigation property to userRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Delete User Run States",
					"value": "Device Management Device Management Scripts Delete User Run States",
					"action": "Delete navigation property userRunStates for deviceManagement",
					"description": "Delete navigation property userRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Get User Run States",
					"value": "Device Management Device Management Scripts Get User Run States",
					"action": "Get userRunStates from deviceManagement",
					"description": "List of run states for this script across all users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Update User Run States",
					"value": "Device Management Device Management Scripts Update User Run States",
					"action": "Update the navigation property userRunStates in deviceManagement",
					"description": "Update the navigation property userRunStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts User Run States List Device Run States",
					"value": "Device Management Device Management Scripts User Run States List Device Run States",
					"action": "Get deviceRunStates from deviceManagement",
					"description": "List of run states for this script across all devices of specific user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}/deviceRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts User Run States Create Device Run States",
					"value": "Device Management Device Management Scripts User Run States Create Device Run States",
					"action": "Create new navigation property to deviceRunStates for deviceManagement",
					"description": "Create new navigation property to deviceRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}/deviceRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts User Run States Delete Device Run States",
					"value": "Device Management Device Management Scripts User Run States Delete Device Run States",
					"action": "Delete navigation property deviceRunStates for deviceManagement",
					"description": "Delete navigation property deviceRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts User Run States Get Device Run States",
					"value": "Device Management Device Management Scripts User Run States Get Device Run States",
					"action": "Get deviceRunStates from deviceManagement",
					"description": "List of run states for this script across all devices of specific user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts User Run States Update Device Run States",
					"value": "Device Management Device Management Scripts User Run States Update Device Run States",
					"action": "Update the navigation property deviceRunStates in deviceManagement",
					"description": "Update the navigation property deviceRunStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts User Run States Device Run States Get Managed Device",
					"value": "Device Management Device Management Scripts User Run States Device Run States Get Managed Device",
					"action": "Get managedDevice from deviceManagement",
					"description": "The managed devices that executes the device management script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/userRunStates/{{$parameter[\"deviceManagementScriptUserState-id\"]}}/deviceRunStates/{{$parameter[\"deviceManagementScriptDeviceState-id\"]}}/managedDevice"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management List Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Create Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Create Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Delete Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Delete Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Get Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Get Device Management Scripts"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Get Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Update Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Update Device Management Scripts"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Device Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create Device Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create Device Run States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete Device Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Device Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update Device Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update Device Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Device Run States Get Managed Device"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Device Run States Get Managed Device"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Device Run States Get Managed Device"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Group Assignments"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Run Summary"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Run Summary"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get Run Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts List User Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create User Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Create User Run States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Delete User Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get User Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Get User Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update User Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts Update User Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States List Device Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Create Device Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Create Device Run States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Delete Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Delete Device Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Get Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Get Device Run States"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Get Device Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Update Device Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Update Device Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Device Run States Get Managed Device"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Device Run States Get Managed Device"
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
						"Device Management Device Management Script"
					],
					"operation": [
						"Device Management Device Management Scripts User Run States Device Run States Get Managed Device"
					]
				}
			}
		},
];
