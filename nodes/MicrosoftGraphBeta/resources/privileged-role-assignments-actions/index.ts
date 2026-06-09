import type { INodeProperties } from 'n8n-workflow';

export const privilegedRoleAssignmentsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignments Actions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Role Assignments Privileged Role Assignment Make Eligible",
					"value": "Privileged Role Assignments Privileged Role Assignment Make Eligible",
					"action": "Invoke action makeEligible",
					"description": "Make the role assignment eligible. If the role assignment is already eligible before the call, it does nothing. If the role assignment is permanent and the requestor is different from the target user, the role assignment will become eligible and the role will be deactivated for the target user. If the requestor is the target user and the role is Security Administrator or Privileged Role Administrator, the role will be activated with the default expiration.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignments/{{$parameter[\"privilegedRoleAssignment-id\"]}}/microsoft.graph.makeEligible"
						}
					}
				},
				{
					"name": "Privileged Role Assignments Privileged Role Assignment Make Permanent",
					"value": "Privileged Role Assignments Privileged Role Assignment Make Permanent",
					"action": "Invoke action makePermanent",
					"description": "Make the role assignment permanent.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignments/{{$parameter[\"privilegedRoleAssignment-id\"]}}/microsoft.graph.makePermanent"
						}
					}
				},
				{
					"name": "Privileged Role Assignments Privileged Role Assignment Role Info Self Activate",
					"value": "Privileged Role Assignments Privileged Role Assignment Role Info Self Activate",
					"action": "Invoke action selfActivate",
					"description": "Activate the role that is assigned to the requester.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignments/{{$parameter[\"privilegedRoleAssignment-id\"]}}/roleInfo/microsoft.graph.selfActivate"
						}
					}
				},
				{
					"name": "Privileged Role Assignments Privileged Role Assignment Role Info Self Deactivate",
					"value": "Privileged Role Assignments Privileged Role Assignment Role Info Self Deactivate",
					"action": "Invoke action selfDeactivate",
					"description": "Deactivate the role that is assigned to the requestor.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignments/{{$parameter[\"privilegedRoleAssignment-id\"]}}/roleInfo/microsoft.graph.selfDeactivate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/microsoft.graph.makeEligible",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Make Eligible"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/microsoft.graph.makePermanent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Make Permanent"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Make Permanent"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Make Permanent"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Make Permanent"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/microsoft.graph.selfActivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Role Info Self Activate"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Role Info Self Activate"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Role Info Self Activate"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Role Info Self Activate"
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
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Role Info Self Activate"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/microsoft.graph.selfDeactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignments Actions"
					],
					"operation": [
						"Privileged Role Assignments Privileged Role Assignment Role Info Self Deactivate"
					]
				}
			}
		},
];
