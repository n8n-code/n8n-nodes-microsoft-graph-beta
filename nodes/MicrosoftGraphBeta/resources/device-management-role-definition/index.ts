import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementRoleDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Role Definitions",
					"value": "Device Management List Role Definitions",
					"action": "Get roleDefinitions from deviceManagement",
					"description": "The Role Definitions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleDefinitions"
						}
					}
				},
				{
					"name": "Device Management Create Role Definitions",
					"value": "Device Management Create Role Definitions",
					"action": "Create new navigation property to roleDefinitions for deviceManagement",
					"description": "Create new navigation property to roleDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleDefinitions"
						}
					}
				},
				{
					"name": "Device Management Delete Role Definitions",
					"value": "Device Management Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for deviceManagement",
					"description": "Delete navigation property roleDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Role Definitions",
					"value": "Device Management Get Role Definitions",
					"action": "Get roleDefinitions from deviceManagement",
					"description": "The Role Definitions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Role Definitions",
					"value": "Device Management Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in deviceManagement",
					"description": "Update the navigation property roleDefinitions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Definitions List Role Assignments",
					"value": "Device Management Role Definitions List Role Assignments",
					"action": "Get roleAssignments from deviceManagement",
					"description": "List of Role assignments for this role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Device Management Role Definitions Create Role Assignments",
					"value": "Device Management Role Definitions Create Role Assignments",
					"action": "Create new navigation property to roleAssignments for deviceManagement",
					"description": "Create new navigation property to roleAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Device Management Role Definitions Delete Role Assignments",
					"value": "Device Management Role Definitions Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for deviceManagement",
					"description": "Delete navigation property roleAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}/roleAssignments/{{$parameter[\"roleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Definitions Get Role Assignments",
					"value": "Device Management Role Definitions Get Role Assignments",
					"action": "Get roleAssignments from deviceManagement",
					"description": "List of Role assignments for this role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}/roleAssignments/{{$parameter[\"roleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Definitions Update Role Assignments",
					"value": "Device Management Role Definitions Update Role Assignments",
					"action": "Update the navigation property roleAssignments in deviceManagement",
					"description": "Update the navigation property roleAssignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}/roleAssignments/{{$parameter[\"roleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Definitions Role Assignments Get Role Definition",
					"value": "Device Management Role Definitions Role Assignments Get Role Definition",
					"action": "Get roleDefinition from deviceManagement",
					"description": "Role definition this assignment is part of.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleDefinitions/{{$parameter[\"roleDefinition-id\"]}}/roleAssignments/{{$parameter[\"roleAssignment-id\"]}}/roleDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Delete Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleDefinitions/{roleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Get Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Get Role Definitions"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Delete Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Get Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Get Role Assignments"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Role Assignments Get Role Definition"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Role Assignments Get Role Definition"
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
						"Device Management Role Definition"
					],
					"operation": [
						"Device Management Role Definitions Role Assignments Get Role Definition"
					]
				}
			}
		},
];
