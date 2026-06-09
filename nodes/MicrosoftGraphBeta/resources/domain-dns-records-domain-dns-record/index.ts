import type { INodeProperties } from 'n8n-workflow';

export const domainDnsRecordsDomainDnsRecordDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					]
				}
			},
			"options": [
				{
					"name": "Domain Dns Records Domain Dns Record List Domain Dns Record",
					"value": "Domain Dns Records Domain Dns Record List Domain Dns Record",
					"action": "Get entities from domainDnsRecords",
					"description": "Get entities from domainDnsRecords",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domainDnsRecords"
						}
					}
				},
				{
					"name": "Domain Dns Records Domain Dns Record Create Domain Dns Record",
					"value": "Domain Dns Records Domain Dns Record Create Domain Dns Record",
					"action": "Add new entity to domainDnsRecords",
					"description": "Add new entity to domainDnsRecords",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domainDnsRecords"
						}
					}
				},
				{
					"name": "Domain Dns Records Domain Dns Record Delete Domain Dns Record",
					"value": "Domain Dns Records Domain Dns Record Delete Domain Dns Record",
					"action": "Delete entity from domainDnsRecords",
					"description": "Delete entity from domainDnsRecords",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domainDnsRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domain Dns Records Domain Dns Record Get Domain Dns Record",
					"value": "Domain Dns Records Domain Dns Record Get Domain Dns Record",
					"action": "Get entity from domainDnsRecords by key",
					"description": "Get entity from domainDnsRecords by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domainDnsRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Domain Dns Records Domain Dns Record Update Domain Dns Record",
					"value": "Domain Dns Records Domain Dns Record Update Domain Dns Record",
					"action": "Update entity in domainDnsRecords",
					"description": "Update entity in domainDnsRecords",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/domainDnsRecords/{{$parameter[\"domainDnsRecord-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domainDnsRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record List Domain Dns Record"
					]
				}
			}
		},
		{
			"displayName": "POST /domainDnsRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Create Domain Dns Record"
					]
				}
			}
		},
		{
			"displayName": "POST /domainDnsRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Create Domain Dns Record"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domainDnsRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Delete Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Delete Domain Dns Record"
					]
				}
			}
		},
		{
			"displayName": "GET /domainDnsRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Get Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Get Domain Dns Record"
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
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Get Domain Dns Record"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domainDnsRecords/{domainDnsRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Update Domain Dns Record"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domainDnsRecords/{domainDnsRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domain Dns Records Domain Dns Record"
					],
					"operation": [
						"Domain Dns Records Domain Dns Record Update Domain Dns Record"
					]
				}
			}
		},
];
