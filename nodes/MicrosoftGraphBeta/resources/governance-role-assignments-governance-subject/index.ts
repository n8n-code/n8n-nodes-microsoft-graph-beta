import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentsGovernanceSubjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Subject"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignments Delete Subject",
					"value": "Governance Role Assignments Delete Subject",
					"action": "Delete navigation property subject for governanceRoleAssignments",
					"description": "Delete navigation property subject for governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Governance Role Assignments Get Subject",
					"value": "Governance Role Assignments Get Subject",
					"action": "Get subject from governanceRoleAssignments",
					"description": "Read-only. The subject associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Governance Role Assignments Update Subject",
					"value": "Governance Role Assignments Update Subject",
					"action": "Update the navigation property subject in governanceRoleAssignments",
					"description": "Update the navigation property subject in governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Delete Subject"
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
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Get Subject"
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
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Get Subject"
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
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Subject"
					],
					"operation": [
						"Governance Role Assignments Update Subject"
					]
				}
			}
		},
];
