import type { INodeProperties } from 'n8n-workflow';

export const domainsDomainDnsRecordDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					]
				}
			},
			"options": [
				{
					"name": "Domains List Service Configuration Records",
					"value": "Domains List Service Configuration Records",
					"action": "List serviceConfigurationRecords",
					"description": "Retrieves a list of domainDnsRecord objects needed to enable services for the domain. Use the returned list to add records to the zone file of the domain. This can be done through the domain registrar or DNS server configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/serviceConfigurationRecords"
						}
					}
				},
				{
					"name": "Domains Create Service Configuration Records",
					"value": "Domains Create Service Configuration Records",
					"action": "Create new navigation property to serviceConfigurationRecords for domains",
					"description": "Create new navigation property to serviceConfigurationRecords for domains",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/serviceConfigurationRecords"
						}
					}
				},
				{
					"name": "Domains Delete Service Configuration Records",
					"value": "Domains Delete Service Configuration Records",
					"action": "Delete navigation property serviceConfigurationRecords for domains",
					"description": "Delete navigation property serviceConfigurationRecords for domains",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/serviceConfigurationRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Get Service Configuration Records",
					"value": "Domains Get Service Configuration Records",
					"action": "Get serviceConfigurationRecords from domains",
					"description": "DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/serviceConfigurationRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Update Service Configuration Records",
					"value": "Domains Update Service Configuration Records",
					"action": "Update the navigation property serviceConfigurationRecords in domains",
					"description": "Update the navigation property serviceConfigurationRecords in domains",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/serviceConfigurationRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domains List Verification DNS Records",
					"value": "Domains List Verification DNS Records",
					"action": "List verificationDnsRecords",
					"description": "Retrieve a list of domainDnsRecord objects. You cannot use an associated domain with your Azure AD tenant until ownership is verified. To verify the ownership of the domain, retrieve the domain verification records and add the details to the zone file of the domain. This can be done through the domain registrar or DNS server configuration. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/verificationDnsRecords"
						}
					}
				},
				{
					"name": "Domains Create Verification DNS Records",
					"value": "Domains Create Verification DNS Records",
					"action": "Create new navigation property to verificationDnsRecords for domains",
					"description": "Create new navigation property to verificationDnsRecords for domains",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/verificationDnsRecords"
						}
					}
				},
				{
					"name": "Domains Delete Verification DNS Records",
					"value": "Domains Delete Verification DNS Records",
					"action": "Delete navigation property verificationDnsRecords for domains",
					"description": "Delete navigation property verificationDnsRecords for domains",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/verificationDnsRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Get Verification DNS Records",
					"value": "Domains Get Verification DNS Records",
					"action": "Get verificationDnsRecords from domains",
					"description": "DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/verificationDnsRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Update Verification DNS Records",
					"value": "Domains Update Verification DNS Records",
					"action": "Update the navigation property verificationDnsRecords in domains",
					"description": "Update the navigation property verificationDnsRecords in domains",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/verificationDnsRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domains/{domain-id}/serviceConfigurationRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/serviceConfigurationRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Create Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/serviceConfigurationRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Create Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Delete Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Delete Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Get Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Get Service Configuration Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Get Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Update Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Update Service Configuration Records"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domain-id}/verificationDnsRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains List Verification DNS Records"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/verificationDnsRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Create Verification DNS Records"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/verificationDnsRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Create Verification DNS Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Delete Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Delete Verification DNS Records"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Get Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Get Verification DNS Records"
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
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Get Verification DNS Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Update Verification DNS Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Domain DNS Record"
					],
					"operation": [
						"Domains Update Verification DNS Records"
					]
				}
			}
		},
];
