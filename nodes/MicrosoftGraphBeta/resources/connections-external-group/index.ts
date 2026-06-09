import type { INodeProperties } from 'n8n-workflow';

export const connectionsExternalGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					]
				}
			},
			"options": [
				{
					"name": "Connections List Groups",
					"value": "Connections List Groups",
					"action": "Get groups from connections",
					"description": "Get groups from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups"
						}
					}
				},
				{
					"name": "Connections Create Groups",
					"value": "Connections Create Groups",
					"action": "Create externalGroup",
					"description": "Create a new externalGroup object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups"
						}
					}
				},
				{
					"name": "Connections Delete Groups",
					"value": "Connections Delete Groups",
					"action": "Delete navigation property groups for connections",
					"description": "Delete navigation property groups for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Get Groups",
					"value": "Connections Get Groups",
					"action": "Get groups from connections",
					"description": "Get groups from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Update Groups",
					"value": "Connections Update Groups",
					"action": "Update the navigation property groups in connections",
					"description": "Update the navigation property groups in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Groups List Members",
					"value": "Connections Groups List Members",
					"action": "Get members from connections",
					"description": "A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members"
						}
					}
				},
				{
					"name": "Connections Groups Create Members",
					"value": "Connections Groups Create Members",
					"action": "Create externalGroupMember",
					"description": "Create a new externalGroupMember object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members"
						}
					}
				},
				{
					"name": "Connections Groups Delete Members",
					"value": "Connections Groups Delete Members",
					"action": "Delete navigation property members for connections",
					"description": "Delete navigation property members for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members/{{$parameter[\"identity-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Groups Get Members",
					"value": "Connections Groups Get Members",
					"action": "Get members from connections",
					"description": "A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members/{{$parameter[\"identity-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Groups Update Members",
					"value": "Connections Groups Update Members",
					"action": "Update the navigation property members in connections",
					"description": "Update the navigation property members in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/groups/{{$parameter[\"externalGroup-id\"]}}/members/{{$parameter[\"identity-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections List Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Create Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/groups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Create Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Delete Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Delete Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/groups/{externalGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Get Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Get Groups"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Get Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Update Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Update Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Delete Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Get Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Get Members"
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
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Group"
					],
					"operation": [
						"Connections Groups Update Members"
					]
				}
			}
		},
];
