import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentRequestsGovernanceSubjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Subject"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignment Requests Delete Subject",
					"value": "Governance Role Assignment Requests Delete Subject",
					"action": "Delete navigation property subject for governanceRoleAssignmentRequests",
					"description": "Delete navigation property subject for governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Get Subject",
					"value": "Governance Role Assignment Requests Get Subject",
					"action": "Get subject from governanceRoleAssignmentRequests",
					"description": "Read-only. The user/group principal.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Update Subject",
					"value": "Governance Role Assignment Requests Update Subject",
					"action": "Update the navigation property subject in governanceRoleAssignmentRequests",
					"description": "Update the navigation property subject in governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Delete Subject"
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
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Get Subject"
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
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Get Subject"
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
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Subject"
					],
					"operation": [
						"Governance Role Assignment Requests Update Subject"
					]
				}
			}
		},
];
