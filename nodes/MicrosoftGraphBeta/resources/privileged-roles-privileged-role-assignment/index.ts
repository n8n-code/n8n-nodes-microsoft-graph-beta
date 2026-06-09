import type { INodeProperties } from 'n8n-workflow';

export const privilegedRolesPrivilegedRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Roles List Assignments",
					"value": "Privileged Roles List Assignments",
					"action": "List assignments",
					"description": "Retrieve a list of privilegedRoleAssignment objects that are associated with the role. Each privilegedRoleAssignment represents a role assignment to a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Privileged Roles Get Assignments",
					"value": "Privileged Roles Get Assignments",
					"action": "Get assignments from privilegedRoles",
					"description": "The assignments for this role. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/assignments/{{$parameter[\"privilegedRoleAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedRoles/{privilegedRole-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles Get Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles Get Assignments"
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
						"Privileged Roles Privileged Role Assignment"
					],
					"operation": [
						"Privileged Roles Get Assignments"
					]
				}
			}
		},
];
