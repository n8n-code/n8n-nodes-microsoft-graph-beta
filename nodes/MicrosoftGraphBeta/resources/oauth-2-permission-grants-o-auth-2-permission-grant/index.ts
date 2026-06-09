import type { INodeProperties } from 'n8n-workflow';

export const oauth2PermissionGrantsOAuth2PermissionGrantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					]
				}
			},
			"options": [
				{
					"name": "Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant",
					"value": "Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant",
					"action": "List oauth2PermissionGrants (delegated permission grants)",
					"description": "Retrieve a list of oAuth2PermissionGrant objects, representing delegated permissions which have been granted for client applications to access APIs on behalf of signed-in users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/oauth2PermissionGrants"
						}
					}
				},
				{
					"name": "Oauth 2 Permission Grants O Auth 2 Permission Grant Create O Auth 2 Permission Grant",
					"value": "Oauth 2 Permission Grants O Auth 2 Permission Grant Create O Auth 2 Permission Grant",
					"action": "Create oAuth2PermissionGrant (a delegated permission grant)",
					"description": "Create a delegated permission grant, represented by an oAuth2PermissionGrant object. A delegated permission grant authorizes a client service principal (representing a client application) to access a resource service principal (representing an API), on behalf of a signed-in user, for the level of access limited by the delegated permissions which were granted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/oauth2PermissionGrants"
						}
					}
				},
				{
					"name": "Oauth 2 Permission Grants O Auth 2 Permission Grant Delete O Auth 2 Permission Grant",
					"value": "Oauth 2 Permission Grants O Auth 2 Permission Grant Delete O Auth 2 Permission Grant",
					"action": "Delete oAuth2PermissionGrant (a delegated permission grant)",
					"description": "Delete an oAuth2PermissionGrant, representing a delegated permission grant. When a delegated permission grant is deleted, the access it granted is revoked. Existing access tokens will continue to be valid for their lifetime, but new access tokens will not be granted for the delegated permissions identified in the deleted **oAuth2PermissionGrant**.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/oauth2PermissionGrants/{{$parameter[\"oAuth2PermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Oauth 2 Permission Grants O Auth 2 Permission Grant Get O Auth 2 Permission Grant",
					"value": "Oauth 2 Permission Grants O Auth 2 Permission Grant Get O Auth 2 Permission Grant",
					"action": "Get oAuth2PermissionGrant (a delegated permission grant)",
					"description": "Retrieve the properties of a single delegated permission grant represented by an oAuth2PermissionGrant object. An **oAuth2PermissionGrant** represents delegated permissions which have been granted for a client application to access an API on behalf of a signed-in user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/oauth2PermissionGrants/{{$parameter[\"oAuth2PermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Oauth 2 Permission Grants O Auth 2 Permission Grant Update O Auth 2 Permission Grant",
					"value": "Oauth 2 Permission Grants O Auth 2 Permission Grant Update O Auth 2 Permission Grant",
					"action": "Update oAuth2PermissionGrant (a delegated permission grant)",
					"description": "Update the properties of oAuth2PermissionGrant object, representing a delegated permission grant. An **oAuth2PermissionGrant** can be updated to change which delegated permissions are granted, by adding or removing items from the list in **scopes**.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/oauth2PermissionGrants/{{$parameter[\"oAuth2PermissionGrant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /oauth2PermissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant List O Auth 2 Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /oauth2PermissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Create O Auth 2 Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /oauth2PermissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Create O Auth 2 Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Delete O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Delete O Auth 2 Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Get O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Get O Auth 2 Permission Grant"
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
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Get O Auth 2 Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Update O Auth 2 Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant"
					],
					"operation": [
						"Oauth 2 Permission Grants O Auth 2 Permission Grant Update O Auth 2 Permission Grant"
					]
				}
			}
		},
];
