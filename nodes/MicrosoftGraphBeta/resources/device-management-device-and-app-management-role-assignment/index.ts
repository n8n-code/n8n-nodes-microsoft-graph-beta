import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceAndAppManagementRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Role Assignments",
					"value": "Device Management List Role Assignments",
					"action": "Get roleAssignments from deviceManagement",
					"description": "The Role Assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleAssignments"
						}
					}
				},
				{
					"name": "Device Management Create Role Assignments",
					"value": "Device Management Create Role Assignments",
					"action": "Create new navigation property to roleAssignments for deviceManagement",
					"description": "Create new navigation property to roleAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleAssignments"
						}
					}
				},
				{
					"name": "Device Management Delete Role Assignments",
					"value": "Device Management Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for deviceManagement",
					"description": "Delete navigation property roleAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/roleAssignments/{{$parameter[\"deviceAndAppManagementRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Role Assignments",
					"value": "Device Management Get Role Assignments",
					"action": "Get roleAssignments from deviceManagement",
					"description": "The Role Assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleAssignments/{{$parameter[\"deviceAndAppManagementRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Role Assignments",
					"value": "Device Management Update Role Assignments",
					"action": "Update the navigation property roleAssignments in deviceManagement",
					"description": "Update the navigation property roleAssignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/roleAssignments/{{$parameter[\"deviceAndAppManagementRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Assignments List Role Scope Tags",
					"value": "Device Management Role Assignments List Role Scope Tags",
					"action": "Get roleScopeTags from deviceManagement",
					"description": "The set of Role Scope Tags defined on the Role Assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleAssignments/{{$parameter[\"deviceAndAppManagementRoleAssignment-id\"]}}/roleScopeTags"
						}
					}
				},
				{
					"name": "Device Management Role Assignments Get Role Scope Tags",
					"value": "Device Management Role Assignments Get Role Scope Tags",
					"action": "Get roleScopeTags from deviceManagement",
					"description": "The set of Role Scope Tags defined on the Role Assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleAssignments/{{$parameter[\"deviceAndAppManagementRoleAssignment-id\"]}}/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Delete Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Get Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Get Role Assignments"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments List Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments Get Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments Get Role Scope Tags"
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
						"Device Management Device And App Management Role Assignment"
					],
					"operation": [
						"Device Management Role Assignments Get Role Scope Tags"
					]
				}
			}
		},
];
