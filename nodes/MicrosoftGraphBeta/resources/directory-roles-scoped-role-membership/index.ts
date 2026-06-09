import type { INodeProperties } from 'n8n-workflow';

export const directoryRolesScopedRoleMembershipDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					]
				}
			},
			"options": [
				{
					"name": "Directory Roles List Scoped Members",
					"value": "Directory Roles List Scoped Members",
					"action": "List scopedMembers for a directory role",
					"description": "Retrieve a list of scopedRoleMembership objects for a directory role.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/scopedMembers"
						}
					}
				},
				{
					"name": "Directory Roles Create Scoped Members",
					"value": "Directory Roles Create Scoped Members",
					"action": "Create new navigation property to scopedMembers for directoryRoles",
					"description": "Create new navigation property to scopedMembers for directoryRoles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/scopedMembers"
						}
					}
				},
				{
					"name": "Directory Roles Delete Scoped Members",
					"value": "Directory Roles Delete Scoped Members",
					"action": "Delete navigation property scopedMembers for directoryRoles",
					"description": "Delete navigation property scopedMembers for directoryRoles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/scopedMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Roles Get Scoped Members",
					"value": "Directory Roles Get Scoped Members",
					"action": "Get scopedMembers from directoryRoles",
					"description": "Members of this directory role that are scoped to administrative units. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/scopedMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Roles Update Scoped Members",
					"value": "Directory Roles Update Scoped Members",
					"action": "Update the navigation property scopedMembers in directoryRoles",
					"description": "Update the navigation property scopedMembers in directoryRoles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/scopedMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/scopedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles List Scoped Members"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryRoles/{directoryRole-id}/scopedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Create Scoped Members"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryRoles/{directoryRole-id}/scopedMembers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Create Scoped Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Delete Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Delete Scoped Members"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Get Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Get Scoped Members"
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
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Get Scoped Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Update Scoped Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Scoped Role Membership"
					],
					"operation": [
						"Directory Roles Update Scoped Members"
					]
				}
			}
		},
];
