import type { INodeProperties } from 'n8n-workflow';

export const identityIdentityProviderBaseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					]
				}
			},
			"options": [
				{
					"name": "Identity List Identity Providers",
					"value": "Identity List Identity Providers",
					"action": "List identityProviders",
					"description": "Get a collection of identity provider resources that are configured for a tenant, and that are derived from identityProviderBase. For an Azure AD tenant, the providers can be socialIdentityProviders or builtinIdentityProviders objects. For an Azure AD B2C, the providers can be socialIdentityProvider, openIdConnectIdentityProvider, or appleManagedIdentityProvider objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/identityProviders"
						}
					}
				},
				{
					"name": "Identity Create Identity Providers",
					"value": "Identity Create Identity Providers",
					"action": "Create identityProvider",
					"description": "Create an identity provider object that is of the type specified in the request body. Among the types of providers derived from identityProviderBase, you can currently create a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently create a socialIdentityProvider, openIdConnectIdentityProvider, or an appleManagedIdentityProvider resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/identityProviders"
						}
					}
				},
				{
					"name": "Identity Delete Identity Providers",
					"value": "Identity Delete Identity Providers",
					"action": "Delete navigation property identityProviders for identity",
					"description": "Delete navigation property identityProviders for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/identityProviders/{{$parameter[\"identityProviderBase-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Get Identity Providers",
					"value": "Identity Get Identity Providers",
					"action": "Get identityProviders from identity",
					"description": "Represents entry point for identity provider base.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/identityProviders/{{$parameter[\"identityProviderBase-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Update Identity Providers",
					"value": "Identity Update Identity Providers",
					"action": "Update the navigation property identityProviders in identity",
					"description": "Update the navigation property identityProviders in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/identityProviders/{{$parameter[\"identityProviderBase-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/identityProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity List Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/identityProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Create Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/identityProviders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Create Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/identityProviders/{identityProviderBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Delete Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Delete Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/identityProviders/{identityProviderBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Get Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Get Identity Providers"
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
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Get Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/identityProviders/{identityProviderBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Update Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/identityProviders/{identityProviderBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Provider Base"
					],
					"operation": [
						"Identity Update Identity Providers"
					]
				}
			}
		},
];
