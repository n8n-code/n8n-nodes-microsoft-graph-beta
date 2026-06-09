import type { INodeProperties } from 'n8n-workflow';

export const privilegedRoleAssignmentRequestsPrivilegedRoleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Role Assignment Requests Delete Role Info",
					"value": "Privileged Role Assignment Requests Delete Role Info",
					"action": "Delete navigation property roleInfo for privilegedRoleAssignmentRequests",
					"description": "Delete navigation property roleInfo for privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Get Role Info",
					"value": "Privileged Role Assignment Requests Get Role Info",
					"action": "Get roleInfo from privilegedRoleAssignmentRequests",
					"description": "The roleInfo object of the role assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Update Role Info",
					"value": "Privileged Role Assignment Requests Update Role Info",
					"action": "Update the navigation property roleInfo in privilegedRoleAssignmentRequests",
					"description": "Update the navigation property roleInfo in privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info List Assignments",
					"value": "Privileged Role Assignment Requests Role Info List Assignments",
					"action": "List assignments",
					"description": "Retrieve a list of privilegedRoleAssignment objects that are associated with the role. Each privilegedRoleAssignment represents a role assignment to a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/assignments"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Get Assignments",
					"value": "Privileged Role Assignment Requests Role Info Get Assignments",
					"action": "Get assignments from privilegedRoleAssignmentRequests",
					"description": "The assignments for this role. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/assignments/{{$parameter[\"privilegedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Delete Settings",
					"value": "Privileged Role Assignment Requests Role Info Delete Settings",
					"action": "Delete navigation property settings for privilegedRoleAssignmentRequests",
					"description": "Delete navigation property settings for privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/settings"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Get Settings",
					"value": "Privileged Role Assignment Requests Role Info Get Settings",
					"action": "Get privilegedRoleSettings",
					"description": "Retrieve the role settings for the given role. A privilegedRoleSettings object will be returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/settings"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Update Settings",
					"value": "Privileged Role Assignment Requests Role Info Update Settings",
					"action": "Update privilegedRoleSettings",
					"description": "Update the role settings for the given role setting. A privilegedRoleSettings object will be returned.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/settings"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Delete Summary",
					"value": "Privileged Role Assignment Requests Role Info Delete Summary",
					"action": "Delete navigation property summary for privilegedRoleAssignmentRequests",
					"description": "Delete navigation property summary for privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/summary"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Get Summary",
					"value": "Privileged Role Assignment Requests Role Info Get Summary",
					"action": "Get privilegedRoleSummary",
					"description": "Retrieve the properties and relationships of privilegedRoleSummary object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/summary"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Role Info Update Summary",
					"value": "Privileged Role Assignment Requests Role Info Update Summary",
					"action": "Update the navigation property summary in privilegedRoleAssignmentRequests",
					"description": "Update the navigation property summary in privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}/roleInfo/summary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Delete Role Info"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Delete Role Info"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Get Role Info"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Get Role Info"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Get Role Info"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Update Role Info"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Update Role Info"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info List Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Assignments"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Delete Settings"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Settings"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Settings"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Update Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Delete Summary"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Delete Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Summary"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Summary"
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
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Get Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Update Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role"
					],
					"operation": [
						"Privileged Role Assignment Requests Role Info Update Summary"
					]
				}
			}
		},
];
