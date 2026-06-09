import type { INodeProperties } from 'n8n-workflow';

export const directoryAdministrativeUnitDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Administrative Units",
					"value": "Directory List Administrative Units",
					"action": "Get administrativeUnits from directory",
					"description": "Conceptual container for user and group directory objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits"
						}
					}
				},
				{
					"name": "Directory Create Administrative Units",
					"value": "Directory Create Administrative Units",
					"action": "Create new navigation property to administrativeUnits for directory",
					"description": "Create new navigation property to administrativeUnits for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits"
						}
					}
				},
				{
					"name": "Directory Delete Administrative Units",
					"value": "Directory Delete Administrative Units",
					"action": "Delete navigation property administrativeUnits for directory",
					"description": "Delete navigation property administrativeUnits for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Administrative Units",
					"value": "Directory Get Administrative Units",
					"action": "Get administrativeUnits from directory",
					"description": "Conceptual container for user and group directory objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Administrative Units",
					"value": "Directory Update Administrative Units",
					"action": "Update the navigation property administrativeUnits in directory",
					"description": "Update the navigation property administrativeUnits in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Administrative Units List Extensions",
					"value": "Directory Administrative Units List Extensions",
					"action": "Get extensions from directory",
					"description": "The collection of open extensions defined for this administrative unit. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Directory Administrative Units Create Extensions",
					"value": "Directory Administrative Units Create Extensions",
					"action": "Create new navigation property to extensions for directory",
					"description": "Create new navigation property to extensions for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Directory Administrative Units Delete Extensions",
					"value": "Directory Administrative Units Delete Extensions",
					"action": "Delete navigation property extensions for directory",
					"description": "Delete navigation property extensions for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Administrative Units Get Extensions",
					"value": "Directory Administrative Units Get Extensions",
					"action": "Get extensions from directory",
					"description": "The collection of open extensions defined for this administrative unit. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Administrative Units Update Extensions",
					"value": "Directory Administrative Units Update Extensions",
					"action": "Update the navigation property extensions in directory",
					"description": "Update the navigation property extensions in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Administrative Units List Members",
					"value": "Directory Administrative Units List Members",
					"action": "Get members from directory",
					"description": "Users and groups that are members of this administrative unit. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members"
						}
					}
				},
				{
					"name": "Directory Administrative Units List Ref Members",
					"value": "Directory Administrative Units List Ref Members",
					"action": "Get ref of members from directory",
					"description": "Users and groups that are members of this administrative unit. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/$ref"
						}
					}
				},
				{
					"name": "Directory Administrative Units Create Ref Members",
					"value": "Directory Administrative Units Create Ref Members",
					"action": "Add a member",
					"description": "Use this API to add a member (user, group, or device) to an administrative unit or to create a new group within an administrative unit. All group types can be created within an administrative unit. **Note:** Currently, it's only possible to add one member at a time to an administrative unit.`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/$ref"
						}
					}
				},
				{
					"name": "Directory Administrative Units Delete Ref Members",
					"value": "Directory Administrative Units Delete Ref Members",
					"action": "Delete ref of navigation property members for directory",
					"description": "Delete ref of navigation property members for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Directory Administrative Units List Scoped Role Members",
					"value": "Directory Administrative Units List Scoped Role Members",
					"action": "List scopedRoleMembers",
					"description": "List Azure Active Directory (Azure AD) role assignments with administrative unit scope.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers"
						}
					}
				},
				{
					"name": "Directory Administrative Units Create Scoped Role Members",
					"value": "Directory Administrative Units Create Scoped Role Members",
					"action": "Add a scopedRoleMember",
					"description": "Assign an Azure Active Directory (Azure AD) role with administrative unit scope. For a list of roles that can be assigned with administrative unit scope, see Assign Azure AD roles with administrative unit scope.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers"
						}
					}
				},
				{
					"name": "Directory Administrative Units Delete Scoped Role Members",
					"value": "Directory Administrative Units Delete Scoped Role Members",
					"action": "Delete navigation property scopedRoleMembers for directory",
					"description": "Delete navigation property scopedRoleMembers for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Administrative Units Get Scoped Role Members",
					"value": "Directory Administrative Units Get Scoped Role Members",
					"action": "Get scopedRoleMembers from directory",
					"description": "Scoped-role members of this administrative unit.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Administrative Units Update Scoped Role Members",
					"value": "Directory Administrative Units Update Scoped Role Members",
					"action": "Update the navigation property scopedRoleMembers in directory",
					"description": "Update the navigation property scopedRoleMembers in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/administrativeUnits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory List Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Create Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Create Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/administrativeUnits/{administrativeUnit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Delete Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Delete Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Get Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Get Administrative Units"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Get Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/administrativeUnits/{administrativeUnit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Update Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/administrativeUnits/{administrativeUnit-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Update Administrative Units"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Get Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Get Extensions"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Members"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Ref Members"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/members/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Create Ref Members"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Create Ref Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Ref Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Ref Members"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Ref Members"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units List Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Create Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Create Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Delete Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Get Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Get Scoped Role Members"
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
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Get Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Update Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Administrative Unit"
					],
					"operation": [
						"Directory Administrative Units Update Scoped Role Members"
					]
				}
			}
		},
];
