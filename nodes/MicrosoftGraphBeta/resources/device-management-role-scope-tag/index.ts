import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementRoleScopeTagDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Role Scope Tags",
					"value": "Device Management List Role Scope Tags",
					"action": "Get roleScopeTags from deviceManagement",
					"description": "The Role Scope Tags.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleScopeTags"
						}
					}
				},
				{
					"name": "Device Management Create Role Scope Tags",
					"value": "Device Management Create Role Scope Tags",
					"action": "Create new navigation property to roleScopeTags for deviceManagement",
					"description": "Create new navigation property to roleScopeTags for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleScopeTags"
						}
					}
				},
				{
					"name": "Device Management Delete Role Scope Tags",
					"value": "Device Management Delete Role Scope Tags",
					"action": "Delete navigation property roleScopeTags for deviceManagement",
					"description": "Delete navigation property roleScopeTags for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Role Scope Tags",
					"value": "Device Management Get Role Scope Tags",
					"action": "Get roleScopeTags from deviceManagement",
					"description": "The Role Scope Tags.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Role Scope Tags",
					"value": "Device Management Update Role Scope Tags",
					"action": "Update the navigation property roleScopeTags in deviceManagement",
					"description": "Update the navigation property roleScopeTags in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags List Assignments",
					"value": "Device Management Role Scope Tags List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for this Role Scope Tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Create Assignments",
					"value": "Device Management Role Scope Tags Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Delete Assignments",
					"value": "Device Management Role Scope Tags Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}/assignments/{{$parameter[\"roleScopeTagAutoAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Get Assignments",
					"value": "Device Management Role Scope Tags Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for this Role Scope Tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}/assignments/{{$parameter[\"roleScopeTagAutoAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Update Assignments",
					"value": "Device Management Role Scope Tags Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}/assignments/{{$parameter[\"roleScopeTagAutoAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/roleScopeTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management List Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleScopeTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Create Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleScopeTags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Create Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Delete Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Delete Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleScopeTags/{roleScopeTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Get Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Get Role Scope Tags"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Get Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Update Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Update Role Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Delete Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Get Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Get Assignments"
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
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Role Scope Tag"
					],
					"operation": [
						"Device Management Role Scope Tags Update Assignments"
					]
				}
			}
		},
];
