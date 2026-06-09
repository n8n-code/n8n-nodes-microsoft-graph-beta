import type { INodeProperties } from 'n8n-workflow';

export const privilegedAccessActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Access Privileged Access Resources Register",
					"value": "Privileged Access Privileged Access Resources Register",
					"action": "Invoke action register",
					"description": "Invoke action register",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/microsoft.graph.register"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Cancel",
					"value": "Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request",
					"value": "Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request",
					"action": "Invoke action updateRequest",
					"description": "Invoke action updateRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/resources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.updateRequest"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Cancel",
					"value": "Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request",
					"value": "Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request",
					"action": "Invoke action updateRequest",
					"description": "Invoke action updateRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.updateRequest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/microsoft.graph.register",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Register"
					]
				}
			}
		},
		{
			"displayName": "External Id",
			"name": "externalId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "externalId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Register"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.updateRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Assignment State",
			"name": "assignmentState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assignmentState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Decision",
			"name": "decision",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "decision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
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
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.updateRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Assignment State",
			"name": "assignmentState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assignmentState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Decision",
			"name": "decision",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "decision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request"
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
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Actions"
					],
					"operation": [
						"Privileged Access Privileged Access Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
];
