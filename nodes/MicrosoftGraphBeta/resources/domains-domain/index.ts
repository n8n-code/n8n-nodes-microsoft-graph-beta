import type { INodeProperties } from 'n8n-workflow';

export const domainsDomainDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					]
				}
			},
			"options": [
				{
					"name": "Domains Domain List Domain",
					"value": "Domains Domain List Domain",
					"action": "List domains",
					"description": "Retrieve a list of domain objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains"
						}
					}
				},
				{
					"name": "Domains Domain Create Domain",
					"value": "Domains Domain Create Domain",
					"action": "Create domain",
					"description": "Adds a domain to the tenant. **Important**: You cannot use an associated domain with your Azure AD tenant until ownership is verified. See List verificationDnsRecords for details. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains"
						}
					}
				},
				{
					"name": "Domains Domain Delete Domain",
					"value": "Domains Domain Delete Domain",
					"action": "Delete domain",
					"description": "Deletes a domain from a tenant.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Domain Get Domain",
					"value": "Domains Domain Get Domain",
					"action": "Get domain",
					"description": "Retrieve the properties and relationships of domain object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Domain Update Domain",
					"value": "Domains Domain Update Domain",
					"action": "Update domain",
					"description": "Update the properties of domain object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain List Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /domains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Create Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /domains<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Create Domain"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domain-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Delete Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domain-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Get Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Get Domain"
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
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Get Domain"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Update Domain"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain"
					],
					"operation": [
						"Domains Domain Update Domain"
					]
				}
			}
		},
];
