import type { INodeProperties } from 'n8n-workflow';

export const programControlsProgramControlDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					]
				}
			},
			"options": [
				{
					"name": "Program Controls Program Control List Program Control",
					"value": "Program Controls Program Control List Program Control",
					"action": "List programControls (deprecated)",
					"description": "In the Azure AD access reviews feature, list all the programControl objects, across all programs in the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programControls"
						}
					}
				},
				{
					"name": "Program Controls Program Control Create Program Control",
					"value": "Program Controls Program Control Create Program Control",
					"action": "Create programControl (deprecated)",
					"description": "In the Azure AD access reviews feature, create a new programControl object.  This links an access review to a program. Prior to making this request, the caller must have previously",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/programControls"
						}
					}
				},
				{
					"name": "Program Controls Program Control Delete Program Control",
					"value": "Program Controls Program Control Delete Program Control",
					"action": "Delete programControl (deprecated)",
					"description": "In the Azure AD access reviews feature, delete a programControl object.  This unlinks an access review from a program.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}"
						}
					}
				},
				{
					"name": "Program Controls Program Control Get Program Control",
					"value": "Program Controls Program Control Get Program Control",
					"action": "Get entity from programControls by key",
					"description": "Get entity from programControls by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}"
						}
					}
				},
				{
					"name": "Program Controls Program Control Update Program Control",
					"value": "Program Controls Program Control Update Program Control",
					"action": "Update entity in programControls",
					"description": "Update entity in programControls",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /programControls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control List Program Control"
					]
				}
			}
		},
		{
			"displayName": "POST /programControls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Create Program Control"
					]
				}
			}
		},
		{
			"displayName": "POST /programControls<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Create Program Control"
					]
				}
			}
		},
		{
			"displayName": "DELETE /programControls/{programControl-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Delete Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Delete Program Control"
					]
				}
			}
		},
		{
			"displayName": "GET /programControls/{programControl-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Get Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Get Program Control"
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
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Get Program Control"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programControls/{programControl-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Update Program Control"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programControls/{programControl-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program Control"
					],
					"operation": [
						"Program Controls Program Control Update Program Control"
					]
				}
			}
		},
];
