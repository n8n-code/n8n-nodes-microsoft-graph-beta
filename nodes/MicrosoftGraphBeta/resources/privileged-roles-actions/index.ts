import type { INodeProperties } from 'n8n-workflow';

export const privilegedRolesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Roles Privileged Role Self Activate",
					"value": "Privileged Roles Privileged Role Self Activate",
					"action": "Invoke action selfActivate",
					"description": "Activate the role that is assigned to the requester.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/microsoft.graph.selfActivate"
						}
					}
				},
				{
					"name": "Privileged Roles Privileged Role Self Deactivate",
					"value": "Privileged Roles Privileged Role Self Deactivate",
					"action": "Invoke action selfDeactivate",
					"description": "Deactivate the role that is assigned to the requestor.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/microsoft.graph.selfDeactivate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /privilegedRoles/{privilegedRole-id}/microsoft.graph.selfActivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					],
					"operation": [
						"Privileged Roles Privileged Role Self Activate"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					],
					"operation": [
						"Privileged Roles Privileged Role Self Activate"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					],
					"operation": [
						"Privileged Roles Privileged Role Self Activate"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ticketNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					],
					"operation": [
						"Privileged Roles Privileged Role Self Activate"
					]
				}
			}
		},
		{
			"displayName": "Ticket System",
			"name": "ticketSystem",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ticketSystem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					],
					"operation": [
						"Privileged Roles Privileged Role Self Activate"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoles/{privilegedRole-id}/microsoft.graph.selfDeactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Actions"
					],
					"operation": [
						"Privileged Roles Privileged Role Self Deactivate"
					]
				}
			}
		},
];
