import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementIntentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Intents",
					"value": "Device Management List Intents",
					"action": "Get intents from deviceManagement",
					"description": "The device management intents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents"
						}
					}
				},
				{
					"name": "Device Management Create Intents",
					"value": "Device Management Create Intents",
					"action": "Create new navigation property to intents for deviceManagement",
					"description": "Create new navigation property to intents for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents"
						}
					}
				},
				{
					"name": "Device Management Delete Intents",
					"value": "Device Management Delete Intents",
					"action": "Delete navigation property intents for deviceManagement",
					"description": "Delete navigation property intents for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Intents",
					"value": "Device Management Get Intents",
					"action": "Get intents from deviceManagement",
					"description": "The device management intents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Intents",
					"value": "Device Management Update Intents",
					"action": "Update the navigation property intents in deviceManagement",
					"description": "Update the navigation property intents in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents List Assignments",
					"value": "Device Management Intents List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Collection of assignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Intents Create Assignments",
					"value": "Device Management Intents Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Intents Delete Assignments",
					"value": "Device Management Intents Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/assignments/{{$parameter[\"deviceManagementIntentAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Get Assignments",
					"value": "Device Management Intents Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Collection of assignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/assignments/{{$parameter[\"deviceManagementIntentAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Update Assignments",
					"value": "Device Management Intents Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/assignments/{{$parameter[\"deviceManagementIntentAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents List Categories",
					"value": "Device Management Intents List Categories",
					"action": "Get categories from deviceManagement",
					"description": "Collection of setting categories within the intent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Device Management Intents Create Categories",
					"value": "Device Management Intents Create Categories",
					"action": "Create new navigation property to categories for deviceManagement",
					"description": "Create new navigation property to categories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Device Management Intents Delete Categories",
					"value": "Device Management Intents Delete Categories",
					"action": "Delete navigation property categories for deviceManagement",
					"description": "Delete navigation property categories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Get Categories",
					"value": "Device Management Intents Get Categories",
					"action": "Get categories from deviceManagement",
					"description": "Collection of setting categories within the intent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Update Categories",
					"value": "Device Management Intents Update Categories",
					"action": "Update the navigation property categories in deviceManagement",
					"description": "Update the navigation property categories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Categories List Settings",
					"value": "Device Management Intents Categories List Settings",
					"action": "Get settings from deviceManagement",
					"description": "The settings this category contains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Intents Categories Create Settings",
					"value": "Device Management Intents Categories Create Settings",
					"action": "Create new navigation property to settings for deviceManagement",
					"description": "Create new navigation property to settings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Intents Categories Delete Settings",
					"value": "Device Management Intents Categories Delete Settings",
					"action": "Delete navigation property settings for deviceManagement",
					"description": "Delete navigation property settings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Categories Get Settings",
					"value": "Device Management Intents Categories Get Settings",
					"action": "Get settings from deviceManagement",
					"description": "The settings this category contains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Categories Update Settings",
					"value": "Device Management Intents Categories Update Settings",
					"action": "Update the navigation property settings in deviceManagement",
					"description": "Update the navigation property settings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/categories/{{$parameter[\"deviceManagementIntentSettingCategory-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents List Device Setting State Summaries",
					"value": "Device Management Intents List Device Setting State Summaries",
					"action": "Get deviceSettingStateSummaries from deviceManagement",
					"description": "Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceSettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Intents Create Device Setting State Summaries",
					"value": "Device Management Intents Create Device Setting State Summaries",
					"action": "Create new navigation property to deviceSettingStateSummaries for deviceManagement",
					"description": "Create new navigation property to deviceSettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceSettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Intents Delete Device Setting State Summaries",
					"value": "Device Management Intents Delete Device Setting State Summaries",
					"action": "Delete navigation property deviceSettingStateSummaries for deviceManagement",
					"description": "Delete navigation property deviceSettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"deviceManagementIntentDeviceSettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Get Device Setting State Summaries",
					"value": "Device Management Intents Get Device Setting State Summaries",
					"action": "Get deviceSettingStateSummaries from deviceManagement",
					"description": "Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"deviceManagementIntentDeviceSettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Update Device Setting State Summaries",
					"value": "Device Management Intents Update Device Setting State Summaries",
					"action": "Update the navigation property deviceSettingStateSummaries in deviceManagement",
					"description": "Update the navigation property deviceSettingStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"deviceManagementIntentDeviceSettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Delete Device State Summary",
					"value": "Device Management Intents Delete Device State Summary",
					"action": "Delete navigation property deviceStateSummary for deviceManagement",
					"description": "Delete navigation property deviceStateSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStateSummary"
						}
					}
				},
				{
					"name": "Device Management Intents Get Device State Summary",
					"value": "Device Management Intents Get Device State Summary",
					"action": "Get deviceStateSummary from deviceManagement",
					"description": "A summary of device states and counts of devices that belong to corresponding state for all devices that the intent is applied to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStateSummary"
						}
					}
				},
				{
					"name": "Device Management Intents Update Device State Summary",
					"value": "Device Management Intents Update Device State Summary",
					"action": "Update the navigation property deviceStateSummary in deviceManagement",
					"description": "Update the navigation property deviceStateSummary in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStateSummary"
						}
					}
				},
				{
					"name": "Device Management Intents List Device States",
					"value": "Device Management Intents List Device States",
					"action": "Get deviceStates from deviceManagement",
					"description": "Collection of states of all devices that the intent is applied to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device Management Intents Create Device States",
					"value": "Device Management Intents Create Device States",
					"action": "Create new navigation property to deviceStates for deviceManagement",
					"description": "Create new navigation property to deviceStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device Management Intents Delete Device States",
					"value": "Device Management Intents Delete Device States",
					"action": "Delete navigation property deviceStates for deviceManagement",
					"description": "Delete navigation property deviceStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStates/{{$parameter[\"deviceManagementIntentDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Get Device States",
					"value": "Device Management Intents Get Device States",
					"action": "Get deviceStates from deviceManagement",
					"description": "Collection of states of all devices that the intent is applied to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStates/{{$parameter[\"deviceManagementIntentDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Update Device States",
					"value": "Device Management Intents Update Device States",
					"action": "Update the navigation property deviceStates in deviceManagement",
					"description": "Update the navigation property deviceStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/deviceStates/{{$parameter[\"deviceManagementIntentDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents List Settings",
					"value": "Device Management Intents List Settings",
					"action": "Get settings from deviceManagement",
					"description": "Collection of all settings to be applied",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Intents Create Settings",
					"value": "Device Management Intents Create Settings",
					"action": "Create new navigation property to settings for deviceManagement",
					"description": "Create new navigation property to settings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Intents Delete Settings",
					"value": "Device Management Intents Delete Settings",
					"action": "Delete navigation property settings for deviceManagement",
					"description": "Delete navigation property settings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Get Settings",
					"value": "Device Management Intents Get Settings",
					"action": "Get settings from deviceManagement",
					"description": "Collection of all settings to be applied",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Update Settings",
					"value": "Device Management Intents Update Settings",
					"action": "Update the navigation property settings in deviceManagement",
					"description": "Update the navigation property settings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Delete User State Summary",
					"value": "Device Management Intents Delete User State Summary",
					"action": "Delete navigation property userStateSummary for deviceManagement",
					"description": "Delete navigation property userStateSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStateSummary"
						}
					}
				},
				{
					"name": "Device Management Intents Get User State Summary",
					"value": "Device Management Intents Get User State Summary",
					"action": "Get userStateSummary from deviceManagement",
					"description": "A summary of user states and counts of users that belong to corresponding state for all users that the intent is applied to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStateSummary"
						}
					}
				},
				{
					"name": "Device Management Intents Update User State Summary",
					"value": "Device Management Intents Update User State Summary",
					"action": "Update the navigation property userStateSummary in deviceManagement",
					"description": "Update the navigation property userStateSummary in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStateSummary"
						}
					}
				},
				{
					"name": "Device Management Intents List User States",
					"value": "Device Management Intents List User States",
					"action": "Get userStates from deviceManagement",
					"description": "Collection of states of all users that the intent is applied to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStates"
						}
					}
				},
				{
					"name": "Device Management Intents Create User States",
					"value": "Device Management Intents Create User States",
					"action": "Create new navigation property to userStates for deviceManagement",
					"description": "Create new navigation property to userStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStates"
						}
					}
				},
				{
					"name": "Device Management Intents Delete User States",
					"value": "Device Management Intents Delete User States",
					"action": "Delete navigation property userStates for deviceManagement",
					"description": "Delete navigation property userStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStates/{{$parameter[\"deviceManagementIntentUserState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Get User States",
					"value": "Device Management Intents Get User States",
					"action": "Get userStates from deviceManagement",
					"description": "Collection of states of all users that the intent is applied to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStates/{{$parameter[\"deviceManagementIntentUserState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intents Update User States",
					"value": "Device Management Intents Update User States",
					"action": "Update the navigation property userStates in deviceManagement",
					"description": "Update the navigation property userStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/userStates/{{$parameter[\"deviceManagementIntentUserState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/intents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management List Intents"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Create Intents"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Create Intents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Delete Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Delete Intents"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Get Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Get Intents"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Get Intents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Update Intents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Update Intents"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Assignments"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/categories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Categories"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Delete Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Get Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Get Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Categories Update Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device Setting State Summaries"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Device State Summary"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device State Summary"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device State Summary"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Device States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Device States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Device States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Settings"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete User State Summary"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete User State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get User State Summary"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get User State Summary"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get User State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update User State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update User State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents List User States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create User States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Create User States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Delete User States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get User States"
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
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Get User States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update User States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Intent"
					],
					"operation": [
						"Device Management Intents Update User States"
					]
				}
			}
		},
];
