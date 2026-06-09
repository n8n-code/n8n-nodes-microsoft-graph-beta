import type { INodeProperties } from 'n8n-workflow';

export const applicationsFederatedIdentityCredentialDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					]
				}
			},
			"options": [
				{
					"name": "Applications List Federated Identity Credentials",
					"value": "Applications List Federated Identity Credentials",
					"action": "List federatedIdentityCredentials",
					"description": "Get a list of the federatedIdentityCredential objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/federatedIdentityCredentials"
						}
					}
				},
				{
					"name": "Applications Create Federated Identity Credentials",
					"value": "Applications Create Federated Identity Credentials",
					"action": "Create federatedIdentityCredential",
					"description": "Create a new federatedIdentityCredential object for an application. By configuring a trust relationship between your Azure AD application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/federatedIdentityCredentials"
						}
					}
				},
				{
					"name": "Applications Delete Federated Identity Credentials",
					"value": "Applications Delete Federated Identity Credentials",
					"action": "Delete navigation property federatedIdentityCredentials for applications",
					"description": "Delete navigation property federatedIdentityCredentials for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/federatedIdentityCredentials/{{$parameter[\"federatedIdentityCredential-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Get Federated Identity Credentials",
					"value": "Applications Get Federated Identity Credentials",
					"action": "Get federatedIdentityCredentials from applications",
					"description": "Federated identities for applications. Supports $expand and $filter (startsWith, /$count eq 0, /$count ne 0).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/federatedIdentityCredentials/{{$parameter[\"federatedIdentityCredential-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Update Federated Identity Credentials",
					"value": "Applications Update Federated Identity Credentials",
					"action": "Update the navigation property federatedIdentityCredentials in applications",
					"description": "Update the navigation property federatedIdentityCredentials in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/federatedIdentityCredentials/{{$parameter[\"federatedIdentityCredential-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{application-id}/federatedIdentityCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications List Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/federatedIdentityCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Create Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/federatedIdentityCredentials<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Create Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Delete Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Delete Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Get Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Get Federated Identity Credentials"
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
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Get Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Update Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Federated Identity Credential"
					],
					"operation": [
						"Applications Update Federated Identity Credentials"
					]
				}
			}
		},
];
