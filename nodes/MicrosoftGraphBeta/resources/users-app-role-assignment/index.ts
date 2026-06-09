import type { INodeProperties } from 'n8n-workflow';

export const usersAppRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Users List App Role Assignments",
					"value": "Users List App Role Assignments",
					"action": "Get appRoleAssignments from users",
					"description": "Represents the app roles a user has been granted for an application. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appRoleAssignments"
						}
					}
				},
				{
					"name": "Users Create App Role Assignments",
					"value": "Users Create App Role Assignments",
					"action": "Grant an appRoleAssignment to a user",
					"description": "Use this API to assign an app role to a user. To grant an app role assignment to a user, you need three identifiers:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appRoleAssignments"
						}
					}
				},
				{
					"name": "Users Delete App Role Assignments",
					"value": "Users Delete App Role Assignments",
					"action": "Delete navigation property appRoleAssignments for users",
					"description": "Delete navigation property appRoleAssignments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get App Role Assignments",
					"value": "Users Get App Role Assignments",
					"action": "Get appRoleAssignments from users",
					"description": "Represents the app roles a user has been granted for an application. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update App Role Assignments",
					"value": "Users Update App Role Assignments",
					"action": "Update the navigation property appRoleAssignments in users",
					"description": "Update the navigation property appRoleAssignments in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/appRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users List App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Create App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Create App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Delete App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users Delete App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Get App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Get App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users Get App Role Assignments"
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
						"Users App Role Assignment"
					],
					"operation": [
						"Users Get App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Update App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Role Assignment"
					],
					"operation": [
						"Users Update App Role Assignments"
					]
				}
			}
		},
];
