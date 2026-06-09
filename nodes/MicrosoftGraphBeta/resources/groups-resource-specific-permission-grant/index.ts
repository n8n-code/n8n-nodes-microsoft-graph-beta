import type { INodeProperties } from 'n8n-workflow';

export const groupsResourceSpecificPermissionGrantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Permission Grants",
					"value": "Groups List Permission Grants",
					"action": "List permissionGrants of a group",
					"description": "List all resource-specific permission grants on the group. This list specifies the Azure AD apps that have access to the **group**, along with the corresponding kind of resource-specific access that each app has.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Groups Create Permission Grants",
					"value": "Groups Create Permission Grants",
					"action": "Create new navigation property to permissionGrants for groups",
					"description": "Create new navigation property to permissionGrants for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Groups Delete Permission Grants",
					"value": "Groups Delete Permission Grants",
					"action": "Delete navigation property permissionGrants for groups",
					"description": "Delete navigation property permissionGrants for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Permission Grants",
					"value": "Groups Get Permission Grants",
					"action": "Get permissionGrants from groups",
					"description": "The permissions that have been granted for a group to a specific application. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update Permission Grants",
					"value": "Groups Update Permission Grants",
					"action": "Update the navigation property permissionGrants in groups",
					"description": "Update the navigation property permissionGrants in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups List Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Delete Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Delete Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Get Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Get Permission Grants"
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
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Get Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Resource Specific Permission Grant"
					],
					"operation": [
						"Groups Update Permission Grants"
					]
				}
			}
		},
];
