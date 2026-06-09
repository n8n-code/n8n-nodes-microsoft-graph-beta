import type { INodeProperties } from 'n8n-workflow';

export const groupsGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					]
				}
			},
			"options": [
				{
					"name": "Groups Group List Group",
					"value": "Groups Group List Group",
					"action": "List groups",
					"description": "List all the groups available in an organization, excluding dynamic distribution groups. To retrieve dynamic distribution groups, use the Exchange admin center. This operation returns by default only a subset of the more commonly used properties for each group. These _default_ properties are noted in the Properties section. To get properties that are _not_ returned by default, do a GET operation for the group and specify the properties in a `$select` OData query option. The **hasMembersWithLicenseErrors** and **isArchived** properties are an exception and are not returned in the `$select` query.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups"
						}
					}
				},
				{
					"name": "Groups Group Create Group",
					"value": "Groups Group Create Group",
					"action": "Create group",
					"description": "Create a new group as specified in the request body. You can create one of the following groups: This operation returns by default only a subset of the properties for each group. These default properties are noted in the Properties section. To get properties that are _not_ returned by default, do a GET operation and specify the properties in a `$select` OData query option. **Note**: To create a team, first create a group then add a team to it, see create team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups"
						}
					}
				},
				{
					"name": "Groups Group Delete Group",
					"value": "Groups Group Delete Group",
					"action": "Delete group",
					"description": "Deletes a group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Group Get Group",
					"value": "Groups Group Get Group",
					"action": "Get group",
					"description": "Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that are _not_ returned by default, specify them in a `$select` OData query option. The **hasMembersWithLicenseErrors** and **isArchived** properties are an exception and are not returned in the `$select` query. Because the **group** resource supports extensions, you can also use the `GET` operation to get custom properties and extension data in a **group** instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Group Update Group",
					"value": "Groups Group Update Group",
					"action": "Update group",
					"description": "Update the properties of a group object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group List Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group Create Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group Create Group"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group Delete Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group Delete Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group Get Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group Get Group"
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
						"Groups Group"
					],
					"operation": [
						"Groups Group Get Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group Update Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group"
					],
					"operation": [
						"Groups Group Update Group"
					]
				}
			}
		},
];
