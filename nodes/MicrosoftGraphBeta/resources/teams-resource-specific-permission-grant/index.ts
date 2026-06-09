import type { INodeProperties } from 'n8n-workflow';

export const teamsResourceSpecificPermissionGrantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					]
				}
			},
			"options": [
				{
					"name": "Teams List Permission Grants",
					"value": "Teams List Permission Grants",
					"action": "List permissionGrants of a team",
					"description": "List all resource-specific permission grants on the team. This list specifies the Azure AD apps that have access to the **team**, along with the corresponding kind of resource-specific access that each app has.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Teams Create Permission Grants",
					"value": "Teams Create Permission Grants",
					"action": "Create new navigation property to permissionGrants for teams",
					"description": "Create new navigation property to permissionGrants for teams",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Teams Delete Permission Grants",
					"value": "Teams Delete Permission Grants",
					"action": "Delete navigation property permissionGrants for teams",
					"description": "Delete navigation property permissionGrants for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Get Permission Grants",
					"value": "Teams Get Permission Grants",
					"action": "Get permissionGrants from teams",
					"description": "A collection of permissions granted to apps to access the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Update Permission Grants",
					"value": "Teams Update Permission Grants",
					"action": "Update the navigation property permissionGrants in teams",
					"description": "Update the navigation property permissionGrants in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teams/{team-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams List Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Delete Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Delete Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Get Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Get Permission Grants"
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
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Get Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Resource Specific Permission Grant"
					],
					"operation": [
						"Teams Update Permission Grants"
					]
				}
			}
		},
];
