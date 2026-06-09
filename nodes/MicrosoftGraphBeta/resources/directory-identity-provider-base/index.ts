import type { INodeProperties } from 'n8n-workflow';

export const directoryIdentityProviderBaseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Federation Configurations",
					"value": "Directory List Federation Configurations",
					"action": "Get federationConfigurations from directory",
					"description": "Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/federationConfigurations"
						}
					}
				},
				{
					"name": "Directory Create Federation Configurations",
					"value": "Directory Create Federation Configurations",
					"action": "Create new navigation property to federationConfigurations for directory",
					"description": "Create new navigation property to federationConfigurations for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/federationConfigurations"
						}
					}
				},
				{
					"name": "Directory Delete Federation Configurations",
					"value": "Directory Delete Federation Configurations",
					"action": "Delete navigation property federationConfigurations for directory",
					"description": "Delete navigation property federationConfigurations for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/federationConfigurations/{{$parameter[\"identityProviderBase-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Federation Configurations",
					"value": "Directory Get Federation Configurations",
					"action": "Get federationConfigurations from directory",
					"description": "Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/federationConfigurations/{{$parameter[\"identityProviderBase-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Federation Configurations",
					"value": "Directory Update Federation Configurations",
					"action": "Update the navigation property federationConfigurations in directory",
					"description": "Update the navigation property federationConfigurations in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/federationConfigurations/{{$parameter[\"identityProviderBase-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/federationConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory List Federation Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/federationConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Create Federation Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/federationConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Create Federation Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/federationConfigurations/{identityProviderBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Delete Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Delete Federation Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/federationConfigurations/{identityProviderBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Get Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Get Federation Configurations"
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
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Get Federation Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/federationConfigurations/{identityProviderBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Update Federation Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/federationConfigurations/{identityProviderBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Identity Provider Base"
					],
					"operation": [
						"Directory Update Federation Configurations"
					]
				}
			}
		},
];
