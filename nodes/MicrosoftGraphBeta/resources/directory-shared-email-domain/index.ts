import type { INodeProperties } from 'n8n-workflow';

export const directorySharedEmailDomainDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Shared Email Domains",
					"value": "Directory List Shared Email Domains",
					"action": "Get sharedEmailDomains from directory",
					"description": "Get sharedEmailDomains from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/sharedEmailDomains"
						}
					}
				},
				{
					"name": "Directory Create Shared Email Domains",
					"value": "Directory Create Shared Email Domains",
					"action": "Create new navigation property to sharedEmailDomains for directory",
					"description": "Create new navigation property to sharedEmailDomains for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/sharedEmailDomains"
						}
					}
				},
				{
					"name": "Directory Delete Shared Email Domains",
					"value": "Directory Delete Shared Email Domains",
					"action": "Delete navigation property sharedEmailDomains for directory",
					"description": "Delete navigation property sharedEmailDomains for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/sharedEmailDomains/{{$parameter[\"sharedEmailDomain-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Shared Email Domains",
					"value": "Directory Get Shared Email Domains",
					"action": "Get sharedEmailDomains from directory",
					"description": "Get sharedEmailDomains from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/sharedEmailDomains/{{$parameter[\"sharedEmailDomain-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Shared Email Domains",
					"value": "Directory Update Shared Email Domains",
					"action": "Update the navigation property sharedEmailDomains in directory",
					"description": "Update the navigation property sharedEmailDomains in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/sharedEmailDomains/{{$parameter[\"sharedEmailDomain-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/sharedEmailDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory List Shared Email Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/sharedEmailDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Create Shared Email Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/sharedEmailDomains<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Create Shared Email Domains"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Delete Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Delete Shared Email Domains"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/sharedEmailDomains/{sharedEmailDomain-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Get Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Get Shared Email Domains"
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
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Get Shared Email Domains"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Update Shared Email Domains"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Shared Email Domain"
					],
					"operation": [
						"Directory Update Shared Email Domains"
					]
				}
			}
		},
];
