import type { INodeProperties } from 'n8n-workflow';

export const domainsInternalDomainFederationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					]
				}
			},
			"options": [
				{
					"name": "Domains List Federation Configuration",
					"value": "Domains List Federation Configuration",
					"action": "Get federationConfiguration from domains",
					"description": "Domain settings configured by customer when federated with Azure AD. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/federationConfiguration"
						}
					}
				},
				{
					"name": "Domains Create Federation Configuration",
					"value": "Domains Create Federation Configuration",
					"action": "Create federationConfiguration",
					"description": "Create a new internalDomainFederation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/federationConfiguration"
						}
					}
				},
				{
					"name": "Domains Delete Federation Configuration",
					"value": "Domains Delete Federation Configuration",
					"action": "Delete navigation property federationConfiguration for domains",
					"description": "Delete navigation property federationConfiguration for domains",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/federationConfiguration/{{$parameter[\"internalDomainFederation-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Get Federation Configuration",
					"value": "Domains Get Federation Configuration",
					"action": "Get federationConfiguration from domains",
					"description": "Domain settings configured by customer when federated with Azure AD. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/federationConfiguration/{{$parameter[\"internalDomainFederation-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Update Federation Configuration",
					"value": "Domains Update Federation Configuration",
					"action": "Update the navigation property federationConfiguration in domains",
					"description": "Update the navigation property federationConfiguration in domains",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/federationConfiguration/{{$parameter[\"internalDomainFederation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domains/{domain-id}/federationConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains List Federation Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/federationConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Create Federation Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/federationConfiguration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Create Federation Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Delete Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Delete Federation Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Get Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Get Federation Configuration"
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
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Get Federation Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Update Federation Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Internal Domain Federation"
					],
					"operation": [
						"Domains Update Federation Configuration"
					]
				}
			}
		},
];
