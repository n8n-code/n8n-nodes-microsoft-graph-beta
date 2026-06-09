import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentsGovernanceRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignments Governance Role Assignment List Governance Role Assignment",
					"value": "Governance Role Assignments Governance Role Assignment List Governance Role Assignment",
					"action": "Get entities from governanceRoleAssignments",
					"description": "Get entities from governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments"
						}
					}
				},
				{
					"name": "Governance Role Assignments Governance Role Assignment Create Governance Role Assignment",
					"value": "Governance Role Assignments Governance Role Assignment Create Governance Role Assignment",
					"action": "Add new entity to governanceRoleAssignments",
					"description": "Add new entity to governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceRoleAssignments"
						}
					}
				},
				{
					"name": "Governance Role Assignments Governance Role Assignment Delete Governance Role Assignment",
					"value": "Governance Role Assignments Governance Role Assignment Delete Governance Role Assignment",
					"action": "Delete entity from governanceRoleAssignments",
					"description": "Delete entity from governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Assignments Governance Role Assignment Get Governance Role Assignment",
					"value": "Governance Role Assignments Governance Role Assignment Get Governance Role Assignment",
					"action": "Get entity from governanceRoleAssignments by key",
					"description": "Get entity from governanceRoleAssignments by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Assignments Governance Role Assignment Update Governance Role Assignment",
					"value": "Governance Role Assignments Governance Role Assignment Update Governance Role Assignment",
					"action": "Update entity in governanceRoleAssignments",
					"description": "Update entity in governanceRoleAssignments",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Assignments Get Linked Eligible Role Assignment",
					"value": "Governance Role Assignments Get Linked Eligible Role Assignment",
					"action": "Get linkedEligibleRoleAssignment from governanceRoleAssignments",
					"description": "Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/linkedEligibleRoleAssignment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment List Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Create Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Create Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Delete Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Delete Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Get Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Get Governance Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Get Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Update Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Governance Role Assignment Update Governance Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Get Linked Eligible Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Get Linked Eligible Role Assignment"
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
						"Governance Role Assignments Governance Role Assignment"
					],
					"operation": [
						"Governance Role Assignments Get Linked Eligible Role Assignment"
					]
				}
			}
		},
];
