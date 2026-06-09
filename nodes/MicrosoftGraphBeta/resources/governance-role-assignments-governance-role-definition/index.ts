import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentsGovernanceRoleDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignments Delete Role Definition",
					"value": "Governance Role Assignments Delete Role Definition",
					"action": "Delete navigation property roleDefinition for governanceRoleAssignments",
					"description": "Delete navigation property roleDefinition for governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Assignments Get Role Definition",
					"value": "Governance Role Assignments Get Role Definition",
					"action": "Get roleDefinition from governanceRoleAssignments",
					"description": "Read-only. The role definition associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Assignments Update Role Definition",
					"value": "Governance Role Assignments Update Role Definition",
					"action": "Update the navigation property roleDefinition in governanceRoleAssignments",
					"description": "Update the navigation property roleDefinition in governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Assignments Role Definition Get Resource",
					"value": "Governance Role Assignments Role Definition Get Resource",
					"action": "Get resource from governanceRoleAssignments",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Governance Role Assignments Role Definition Get Role Setting",
					"value": "Governance Role Assignments Role Definition Get Role Setting",
					"action": "Get roleSetting from governanceRoleAssignments",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Delete Role Definition"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Get Role Definition"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Get Role Definition"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Role Definition Get Resource"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Role Definition Get Resource"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Role Definition Get Role Setting"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Role Definition Get Role Setting"
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
						"Governance Role Assignments Governance Role Definition"
					],
					"operation": [
						"Governance Role Assignments Role Definition Get Role Setting"
					]
				}
			}
		},
];
