import type { INodeProperties } from 'n8n-workflow';

export const privilegedRolesPrivilegedRoleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Roles Privileged Role List Privileged Role",
					"value": "Privileged Roles Privileged Role List Privileged Role",
					"action": "List privilegedRoles",
					"description": "Retrieve a list of privilegedRole objects. To filter the results from the query, use the standard OData ``$filter`` expressions in the URIs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoles"
						}
					}
				},
				{
					"name": "Privileged Roles Privileged Role Create Privileged Role",
					"value": "Privileged Roles Privileged Role Create Privileged Role",
					"action": "Add new entity to privilegedRoles",
					"description": "Add new entity to privilegedRoles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoles"
						}
					}
				},
				{
					"name": "Privileged Roles Privileged Role Delete Privileged Role",
					"value": "Privileged Roles Privileged Role Delete Privileged Role",
					"action": "Delete entity from privilegedRoles",
					"description": "Delete entity from privilegedRoles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Roles Privileged Role Get Privileged Role",
					"value": "Privileged Roles Privileged Role Get Privileged Role",
					"action": "Get privilegedRole",
					"description": "Retrieve the properties and relationships of privilegedRole object. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Roles Privileged Role Update Privileged Role",
					"value": "Privileged Roles Privileged Role Update Privileged Role",
					"action": "Update entity in privilegedRoles",
					"description": "Update entity in privilegedRoles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role List Privileged Role"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Create Privileged Role"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Create Privileged Role"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedRoles/{privilegedRole-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Delete Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Delete Privileged Role"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoles/{privilegedRole-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Get Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Get Privileged Role"
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
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Get Privileged Role"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoles/{privilegedRole-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Update Privileged Role"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoles/{privilegedRole-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role"
					],
					"operation": [
						"Privileged Roles Privileged Role Update Privileged Role"
					]
				}
			}
		},
];
