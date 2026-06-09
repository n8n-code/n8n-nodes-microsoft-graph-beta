import type { INodeProperties } from 'n8n-workflow';

export const meUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me User"
					]
				}
			},
			"options": [
				{
					"name": "Me User Get User",
					"value": "Me User Get User",
					"action": "Get user",
					"description": "Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These _default_ properties are noted in the Properties section. To get properties that are _not_ returned by default, do a GET operation for the user and specify the properties in a `$select` OData query option. Because the **user** resource supports extensions, you can also use the `GET` operation to get custom properties and extension data in a **user** instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me"
						}
					}
				},
				{
					"name": "Me User Update User",
					"value": "Me User Update User",
					"action": "Update user",
					"description": "Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User"
					],
					"operation": [
						"Me User Get User"
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
						"Me User"
					],
					"operation": [
						"Me User Get User"
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
						"Me User"
					],
					"operation": [
						"Me User Get User"
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
						"Me User"
					],
					"operation": [
						"Me User Get User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User"
					],
					"operation": [
						"Me User Update User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User"
					],
					"operation": [
						"Me User Update User"
					]
				}
			}
		},
];
