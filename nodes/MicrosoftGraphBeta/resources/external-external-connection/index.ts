import type { INodeProperties } from 'n8n-workflow';

export const externalExternalConnectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					]
				}
			},
			"options": [
				{
					"name": "External List Connections",
					"value": "External List Connections",
					"action": "List connections",
					"description": "Retrieve a list of externalConnections.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections"
						}
					}
				},
				{
					"name": "External Create Connections",
					"value": "External Create Connections",
					"action": "Create connection",
					"description": "Create a new externalConnection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections"
						}
					}
				},
				{
					"name": "External Delete Connections",
					"value": "External Delete Connections",
					"action": "Delete navigation property connections for external",
					"description": "Delete navigation property connections for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}"
						}
					}
				},
				{
					"name": "External Get Connections",
					"value": "External Get Connections",
					"action": "Get connections from external",
					"description": "Get connections from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}"
						}
					}
				},
				{
					"name": "External Update Connections",
					"value": "External Update Connections",
					"action": "Update the navigation property connections in external",
					"description": "Update the navigation property connections in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections List Groups",
					"value": "External Connections List Groups",
					"action": "Get groups from external",
					"description": "Get groups from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups"
						}
					}
				},
				{
					"name": "External Connections Create Groups",
					"value": "External Connections Create Groups",
					"action": "Create externalGroup",
					"description": "Create a new externalGroup object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups"
						}
					}
				},
				{
					"name": "External Connections Delete Groups",
					"value": "External Connections Delete Groups",
					"action": "Delete navigation property groups for external",
					"description": "Delete navigation property groups for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Get Groups",
					"value": "External Connections Get Groups",
					"action": "Get groups from external",
					"description": "Get groups from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Update Groups",
					"value": "External Connections Update Groups",
					"action": "Update the navigation property groups in external",
					"description": "Update the navigation property groups in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Groups List Members",
					"value": "External Connections Groups List Members",
					"action": "Get members from external",
					"description": "A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members"
						}
					}
				},
				{
					"name": "External Connections Groups Create Members",
					"value": "External Connections Groups Create Members",
					"action": "Create externalGroupMember",
					"description": "Create a new externalGroupMember object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members"
						}
					}
				},
				{
					"name": "External Connections Groups Delete Members",
					"value": "External Connections Groups Delete Members",
					"action": "Delete navigation property members for external",
					"description": "Delete navigation property members for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members/{{$parameter[\"identity-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Groups Get Members",
					"value": "External Connections Groups Get Members",
					"action": "Get members from external",
					"description": "A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members/{{$parameter[\"identity-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Groups Update Members",
					"value": "External Connections Groups Update Members",
					"action": "Update the navigation property members in external",
					"description": "Update the navigation property members in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members/{{$parameter[\"identity-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections List Items",
					"value": "External Connections List Items",
					"action": "Get items from external",
					"description": "Get items from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items"
						}
					}
				},
				{
					"name": "External Connections Create Items",
					"value": "External Connections Create Items",
					"action": "Create new navigation property to items for external",
					"description": "Create new navigation property to items for external",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items"
						}
					}
				},
				{
					"name": "External Connections Delete Items",
					"value": "External Connections Delete Items",
					"action": "Delete navigation property items for external",
					"description": "Delete navigation property items for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Get Items",
					"value": "External Connections Get Items",
					"action": "Get items from external",
					"description": "Get items from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Update Items",
					"value": "External Connections Update Items",
					"action": "Update the navigation property items in external",
					"description": "Update the navigation property items in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Items List Activities",
					"value": "External Connections Items List Activities",
					"action": "Get activities from external",
					"description": "Write-only property. Returns results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "External Connections Items Create Activities",
					"value": "External Connections Items Create Activities",
					"action": "Create new navigation property to activities for external",
					"description": "Create new navigation property to activities for external",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "External Connections Items Delete Activities",
					"value": "External Connections Items Delete Activities",
					"action": "Delete navigation property activities for external",
					"description": "Delete navigation property activities for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Items Get Activities",
					"value": "External Connections Items Get Activities",
					"action": "Get activities from external",
					"description": "Write-only property. Returns results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Items Update Activities",
					"value": "External Connections Items Update Activities",
					"action": "Update the navigation property activities in external",
					"description": "Update the navigation property activities in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Items Activities Get Performed By",
					"value": "External Connections Items Activities Get Performed By",
					"action": "Get performedBy from external",
					"description": "Represents an identity used to identify who is responsible for the activity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}/performedBy"
						}
					}
				},
				{
					"name": "External Connections List Operations",
					"value": "External Connections List Operations",
					"action": "Get operations from external",
					"description": "Get operations from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/operations"
						}
					}
				},
				{
					"name": "External Connections Create Operations",
					"value": "External Connections Create Operations",
					"action": "Create new navigation property to operations for external",
					"description": "Create new navigation property to operations for external",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/operations"
						}
					}
				},
				{
					"name": "External Connections Delete Operations",
					"value": "External Connections Delete Operations",
					"action": "Delete navigation property operations for external",
					"description": "Delete navigation property operations for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/operations/{{$parameter[\"connectionOperation-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Get Operations",
					"value": "External Connections Get Operations",
					"action": "Get operations from external",
					"description": "Get operations from external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/operations/{{$parameter[\"connectionOperation-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Update Operations",
					"value": "External Connections Update Operations",
					"action": "Update the navigation property operations in external",
					"description": "Update the navigation property operations in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/operations/{{$parameter[\"connectionOperation-id\"]}}"
						}
					}
				},
				{
					"name": "External Connections Delete Quota",
					"value": "External Connections Delete Quota",
					"action": "Delete navigation property quota for external",
					"description": "Delete navigation property quota for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/quota"
						}
					}
				},
				{
					"name": "External Connections Get Quota",
					"value": "External Connections Get Quota",
					"action": "Get connectionQuota",
					"description": "Retrieve the properties and relationships of a connectionQuota object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/quota"
						}
					}
				},
				{
					"name": "External Connections Update Quota",
					"value": "External Connections Update Quota",
					"action": "Update the navigation property quota in external",
					"description": "Update the navigation property quota in external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/quota"
						}
					}
				},
				{
					"name": "External Connections Delete Schema",
					"value": "External Connections Delete Schema",
					"action": "Delete navigation property schema for external",
					"description": "Delete navigation property schema for external",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/schema"
						}
					}
				},
				{
					"name": "External Connections Get Schema",
					"value": "External Connections Get Schema",
					"action": "Get schema",
					"description": "Retrieve the properties of a schema for an externalConnection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/schema"
						}
					}
				},
				{
					"name": "External Connections Update Schema",
					"value": "External Connections Update Schema",
					"action": "Update schema",
					"description": "Update the properties of a schema for an externalConnection.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/schema"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /external/connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
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
						"External External Connection"
					],
					"operation": [
						"External List Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Create Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Create Connections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Delete Connections"
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
						"External External Connection"
					],
					"operation": [
						"External Delete Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Get Connections"
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
						"External External Connection"
					],
					"operation": [
						"External Get Connections"
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
						"External External Connection"
					],
					"operation": [
						"External Get Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Update Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Update Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Create Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/groups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Create Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Get Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Groups"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Delete Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Get Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Get Members"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Groups Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/items/{externalItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Get Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Items"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Items"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Delete Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Get Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items Get Activities"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Items Activities Get Performed By"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items Activities Get Performed By"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Items Activities Get Performed By"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Get Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Operations"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Quota"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Quota"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Get Quota"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Quota"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Quota"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Quota"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/quota<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Quota"
					]
				}
			}
		},
		{
			"displayName": "DELETE /external/connections/{externalConnection-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Schema"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /external/connections/{externalConnection-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Get Schema"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Schema"
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
						"External External Connection"
					],
					"operation": [
						"External Connections Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external/connections/{externalConnection-id}/schema<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External Connection"
					],
					"operation": [
						"External Connections Update Schema"
					]
				}
			}
		},
];
