import type { INodeProperties } from 'n8n-workflow';

export const servicePrincipalsFederatedIdentityCredentialDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					]
				}
			},
			"options": [
				{
					"name": "Service Principals List Federated Identity Credentials",
					"value": "Service Principals List Federated Identity Credentials",
					"action": "Get federatedIdentityCredentials from servicePrincipals",
					"description": "Get federatedIdentityCredentials from servicePrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/federatedIdentityCredentials"
						}
					}
				},
				{
					"name": "Service Principals Create Federated Identity Credentials",
					"value": "Service Principals Create Federated Identity Credentials",
					"action": "Create new navigation property to federatedIdentityCredentials for servicePrincipals",
					"description": "Create new navigation property to federatedIdentityCredentials for servicePrincipals",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/federatedIdentityCredentials"
						}
					}
				},
				{
					"name": "Service Principals Delete Federated Identity Credentials",
					"value": "Service Principals Delete Federated Identity Credentials",
					"action": "Delete navigation property federatedIdentityCredentials for servicePrincipals",
					"description": "Delete navigation property federatedIdentityCredentials for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/federatedIdentityCredentials/{{$parameter[\"federatedIdentityCredential-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Get Federated Identity Credentials",
					"value": "Service Principals Get Federated Identity Credentials",
					"action": "Get federatedIdentityCredentials from servicePrincipals",
					"description": "Get federatedIdentityCredentials from servicePrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/federatedIdentityCredentials/{{$parameter[\"federatedIdentityCredential-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Update Federated Identity Credentials",
					"value": "Service Principals Update Federated Identity Credentials",
					"action": "Update the navigation property federatedIdentityCredentials in servicePrincipals",
					"description": "Update the navigation property federatedIdentityCredentials in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/federatedIdentityCredentials/{{$parameter[\"federatedIdentityCredential-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals List Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Create Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Create Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Delete Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Delete Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Get Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Get Federated Identity Credentials"
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
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Get Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Update Federated Identity Credentials"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Federated Identity Credential"
					],
					"operation": [
						"Service Principals Update Federated Identity Credentials"
					]
				}
			}
		},
];
