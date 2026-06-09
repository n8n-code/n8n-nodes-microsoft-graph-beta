import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentRequestsGovernanceRoleDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignment Requests Delete Role Definition",
					"value": "Governance Role Assignment Requests Delete Role Definition",
					"action": "Delete navigation property roleDefinition for governanceRoleAssignmentRequests",
					"description": "Delete navigation property roleDefinition for governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Get Role Definition",
					"value": "Governance Role Assignment Requests Get Role Definition",
					"action": "Get roleDefinition from governanceRoleAssignmentRequests",
					"description": "Read-only. The role definition that the request aims to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Update Role Definition",
					"value": "Governance Role Assignment Requests Update Role Definition",
					"action": "Update the navigation property roleDefinition in governanceRoleAssignmentRequests",
					"description": "Update the navigation property roleDefinition in governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Role Definition Get Resource",
					"value": "Governance Role Assignment Requests Role Definition Get Resource",
					"action": "Get resource from governanceRoleAssignmentRequests",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Role Definition Get Role Setting",
					"value": "Governance Role Assignment Requests Role Definition Get Role Setting",
					"action": "Get roleSetting from governanceRoleAssignmentRequests",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Delete Role Definition"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Get Role Definition"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Get Role Definition"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Role Definition Get Resource"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Role Definition Get Resource"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Role Definition Get Role Setting"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Role Definition Get Role Setting"
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
						"Governance Role Assignment Requests Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignment Requests Role Definition Get Role Setting"
					]
				}
			}
		},
];
