import type { INodeProperties } from 'n8n-workflow';

export const usersDeviceManagementTroubleshootingEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					]
				}
			},
			"options": [
				{
					"name": "Users List Device Management Troubleshooting Events",
					"value": "Users List Device Management Troubleshooting Events",
					"action": "Get deviceManagementTroubleshootingEvents from users",
					"description": "The list of troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceManagementTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Users Create Device Management Troubleshooting Events",
					"value": "Users Create Device Management Troubleshooting Events",
					"action": "Create new navigation property to deviceManagementTroubleshootingEvents for users",
					"description": "Create new navigation property to deviceManagementTroubleshootingEvents for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceManagementTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Users Delete Device Management Troubleshooting Events",
					"value": "Users Delete Device Management Troubleshooting Events",
					"action": "Delete navigation property deviceManagementTroubleshootingEvents for users",
					"description": "Delete navigation property deviceManagementTroubleshootingEvents for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceManagementTroubleshootingEvents/{{$parameter[\"deviceManagementTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Device Management Troubleshooting Events",
					"value": "Users Get Device Management Troubleshooting Events",
					"action": "Get deviceManagementTroubleshootingEvents from users",
					"description": "The list of troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceManagementTroubleshootingEvents/{{$parameter[\"deviceManagementTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Device Management Troubleshooting Events",
					"value": "Users Update Device Management Troubleshooting Events",
					"action": "Update the navigation property deviceManagementTroubleshootingEvents in users",
					"description": "Update the navigation property deviceManagementTroubleshootingEvents in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceManagementTroubleshootingEvents/{{$parameter[\"deviceManagementTroubleshootingEvent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/deviceManagementTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users List Device Management Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/deviceManagementTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Create Device Management Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/deviceManagementTroubleshootingEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Create Device Management Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Delete Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Delete Device Management Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Get Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Get Device Management Troubleshooting Events"
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
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Get Device Management Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Update Device Management Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Management Troubleshooting Event"
					],
					"operation": [
						"Users Update Device Management Troubleshooting Events"
					]
				}
			}
		},
];
