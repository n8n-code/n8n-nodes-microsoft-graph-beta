import type { INodeProperties } from 'n8n-workflow';

export const groupsAppRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Groups List App Role Assignments",
					"value": "Groups List App Role Assignments",
					"action": "Get appRoleAssignments from groups",
					"description": "Represents the app roles a group has been granted for an application. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/appRoleAssignments"
						}
					}
				},
				{
					"name": "Groups Create App Role Assignments",
					"value": "Groups Create App Role Assignments",
					"action": "Grant an appRoleAssignment to a group",
					"description": "Use this API to assign an app role to a security group. All direct members of the group will be considered assigned. Security groups with dynamic memberships are supported. To grant an app role assignment to a group, you need three identifiers: Additional licenses might be required to use a group to manage access to applications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/appRoleAssignments"
						}
					}
				},
				{
					"name": "Groups Delete App Role Assignments",
					"value": "Groups Delete App Role Assignments",
					"action": "Delete navigation property appRoleAssignments for groups",
					"description": "Delete navigation property appRoleAssignments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get App Role Assignments",
					"value": "Groups Get App Role Assignments",
					"action": "Get appRoleAssignments from groups",
					"description": "Represents the app roles a group has been granted for an application. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update App Role Assignments",
					"value": "Groups Update App Role Assignments",
					"action": "Update the navigation property appRoleAssignments in groups",
					"description": "Update the navigation property appRoleAssignments in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/appRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups List App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/appRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Create App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/appRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Create App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Delete App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Delete App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Get App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Get App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Get App Role Assignments"
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
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Get App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Update App Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups App Role Assignment"
					],
					"operation": [
						"Groups Update App Role Assignments"
					]
				}
			}
		},
];
