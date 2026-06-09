import type { INodeProperties } from 'n8n-workflow';

export const appRoleAssignmentsAppRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "App Role Assignments App Role Assignment List App Role Assignment",
					"value": "App Role Assignments App Role Assignment List App Role Assignment",
					"action": "Get entities from appRoleAssignments",
					"description": "Get entities from appRoleAssignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appRoleAssignments"
						}
					}
				},
				{
					"name": "App Role Assignments App Role Assignment Create App Role Assignment",
					"value": "App Role Assignments App Role Assignment Create App Role Assignment",
					"action": "Add new entity to appRoleAssignments",
					"description": "Add new entity to appRoleAssignments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/appRoleAssignments"
						}
					}
				},
				{
					"name": "App Role Assignments App Role Assignment Delete App Role Assignment",
					"value": "App Role Assignments App Role Assignment Delete App Role Assignment",
					"action": "Delete entity from appRoleAssignments",
					"description": "Delete entity from appRoleAssignments",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "App Role Assignments App Role Assignment Get App Role Assignment",
					"value": "App Role Assignments App Role Assignment Get App Role Assignment",
					"action": "Get entity from appRoleAssignments by key",
					"description": "Get entity from appRoleAssignments by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "App Role Assignments App Role Assignment Update App Role Assignment",
					"value": "App Role Assignments App Role Assignment Update App Role Assignment",
					"action": "Update entity in appRoleAssignments",
					"description": "Update entity in appRoleAssignments",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appRoleAssignments/{{$parameter[\"appRoleAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /appRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment List App Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "POST /appRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Create App Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "POST /appRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Create App Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Delete App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Delete App Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "GET /appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Get App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Get App Role Assignment"
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
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Get App Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appRoleAssignments/{appRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Update App Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appRoleAssignments/{appRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Role Assignments App Role Assignment"
					],
					"operation": [
						"App Role Assignments App Role Assignment Update App Role Assignment"
					]
				}
			}
		},
];
