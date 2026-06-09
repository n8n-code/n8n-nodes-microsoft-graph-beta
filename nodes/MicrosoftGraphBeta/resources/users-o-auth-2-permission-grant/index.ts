import type { INodeProperties } from 'n8n-workflow';

export const usersOAuth2PermissionGrantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users O Auth 2 Permission Grant"
					]
				}
			},
			"options": [
				{
					"name": "Users List OAuth 2 Permission Grants",
					"value": "Users List OAuth 2 Permission Grants",
					"action": "List oauth2PermissionGrants",
					"description": "Retrieve a list of oAuth2PermissionGrant entities, which represent delegated permissions granted to enable a client application to access an API on behalf of the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/oauth2PermissionGrants"
						}
					}
				},
				{
					"name": "Users Get OAuth 2 Permission Grants",
					"value": "Users Get OAuth 2 Permission Grants",
					"action": "Get oauth2PermissionGrants from users",
					"description": "Get oauth2PermissionGrants from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/oauth2PermissionGrants/{{$parameter[\"oAuth2PermissionGrant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/oauth2PermissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users List OAuth 2 Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users Get OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users Get OAuth 2 Permission Grants"
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
						"Users O Auth 2 Permission Grant"
					],
					"operation": [
						"Users Get OAuth 2 Permission Grants"
					]
				}
			}
		},
];
