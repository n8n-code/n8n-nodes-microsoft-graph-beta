import type { INodeProperties } from 'n8n-workflow';

export const privilegedApprovalActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Approval Actions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Approval Privileged Approval Role Info Self Activate",
					"value": "Privileged Approval Privileged Approval Role Info Self Activate",
					"action": "Invoke action selfActivate",
					"description": "Activate the role that is assigned to the requester.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedApproval/{{$parameter[\"privilegedApproval-id\"]}}/roleInfo/microsoft.graph.selfActivate"
						}
					}
				},
				{
					"name": "Privileged Approval Privileged Approval Role Info Self Deactivate",
					"value": "Privileged Approval Privileged Approval Role Info Self Deactivate",
					"action": "Invoke action selfDeactivate",
					"description": "Deactivate the role that is assigned to the requestor.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedApproval/{{$parameter[\"privilegedApproval-id\"]}}/roleInfo/microsoft.graph.selfDeactivate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /privilegedApproval/{privilegedApproval-id}/roleInfo/microsoft.graph.selfActivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Approval Actions"
					],
					"operation": [
						"Privileged Approval Privileged Approval Role Info Self Activate"
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
						"Privileged Approval Actions"
					],
					"operation": [
						"Privileged Approval Privileged Approval Role Info Self Activate"
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
						"Privileged Approval Actions"
					],
					"operation": [
						"Privileged Approval Privileged Approval Role Info Self Activate"
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
						"Privileged Approval Actions"
					],
					"operation": [
						"Privileged Approval Privileged Approval Role Info Self Activate"
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
						"Privileged Approval Actions"
					],
					"operation": [
						"Privileged Approval Privileged Approval Role Info Self Activate"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedApproval/{privilegedApproval-id}/roleInfo/microsoft.graph.selfDeactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Approval Actions"
					],
					"operation": [
						"Privileged Approval Privileged Approval Role Info Self Deactivate"
					]
				}
			}
		},
];
