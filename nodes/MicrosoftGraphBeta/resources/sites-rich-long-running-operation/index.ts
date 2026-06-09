import type { INodeProperties } from 'n8n-workflow';

export const sitesRichLongRunningOperationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					]
				}
			},
			"options": [
				{
					"name": "Sites List Operations",
					"value": "Sites List Operations",
					"action": "List operations",
					"description": "Get the list of richLongRunningOperations associated with a site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Sites Create Operations",
					"value": "Sites Create Operations",
					"action": "Create new navigation property to operations for sites",
					"description": "Create new navigation property to operations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Sites Delete Operations",
					"value": "Sites Delete Operations",
					"action": "Delete navigation property operations for sites",
					"description": "Delete navigation property operations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Get Operations",
					"value": "Sites Get Operations",
					"action": "Get operations from sites",
					"description": "The collection of long running operations for the site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Update Operations",
					"value": "Sites Update Operations",
					"action": "Update the navigation property operations in sites",
					"description": "Update the navigation property operations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sites/{site-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Delete Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Get Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Get Operations"
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
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Rich Long Running Operation"
					],
					"operation": [
						"Sites Update Operations"
					]
				}
			}
		},
];
