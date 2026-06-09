import type { INodeProperties } from 'n8n-workflow';

export const privilegedRoleAssignmentRequestsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Actions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Cancel",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Cancel",
					"action": "Invoke action cancel",
					"description": "Cancel a privilegedRoleAssignmentRequest.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate",
					"action": "Invoke action selfActivate",
					"description": "Activate the role that is assigned to the requester.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/microsoft.graph.selfActivate"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Deactivate",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Deactivate",
					"action": "Invoke action selfDeactivate",
					"description": "Deactivate the role that is assigned to the requestor.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/microsoft.graph.selfDeactivate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/microsoft.graph.selfActivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate"
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
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate"
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
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate"
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
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate"
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
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Activate"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/microsoft.graph.selfDeactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Actions"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Role Info Self Deactivate"
					]
				}
			}
		},
];
