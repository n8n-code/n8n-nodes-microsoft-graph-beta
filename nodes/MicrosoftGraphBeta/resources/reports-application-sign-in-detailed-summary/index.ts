import type { INodeProperties } from 'n8n-workflow';

export const reportsApplicationSignInDetailedSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					]
				}
			},
			"options": [
				{
					"name": "Reports List Application Sign In Detailed Summary",
					"value": "Reports List Application Sign In Detailed Summary",
					"action": "List applicationSignInDetailedSummary",
					"description": "Retrieve the applicationSignInDetailedSummary objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/applicationSignInDetailedSummary"
						}
					}
				},
				{
					"name": "Reports Create Application Sign In Detailed Summary",
					"value": "Reports Create Application Sign In Detailed Summary",
					"action": "Create new navigation property to applicationSignInDetailedSummary for reports",
					"description": "Create new navigation property to applicationSignInDetailedSummary for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/applicationSignInDetailedSummary"
						}
					}
				},
				{
					"name": "Reports Delete Application Sign In Detailed Summary",
					"value": "Reports Delete Application Sign In Detailed Summary",
					"action": "Delete navigation property applicationSignInDetailedSummary for reports",
					"description": "Delete navigation property applicationSignInDetailedSummary for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/applicationSignInDetailedSummary/{{$parameter[\"applicationSignInDetailedSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Application Sign In Detailed Summary",
					"value": "Reports Get Application Sign In Detailed Summary",
					"action": "Get applicationSignInDetailedSummary from reports",
					"description": "Represents a detailed summary of an application sign-in.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/applicationSignInDetailedSummary/{{$parameter[\"applicationSignInDetailedSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Application Sign In Detailed Summary",
					"value": "Reports Update Application Sign In Detailed Summary",
					"action": "Update the navigation property applicationSignInDetailedSummary in reports",
					"description": "Update the navigation property applicationSignInDetailedSummary in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/applicationSignInDetailedSummary/{{$parameter[\"applicationSignInDetailedSummary-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/applicationSignInDetailedSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports List Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/applicationSignInDetailedSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Create Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/applicationSignInDetailedSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Create Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Delete Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Delete Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Get Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Get Application Sign In Detailed Summary"
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
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Get Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Update Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Application Sign In Detailed Summary"
					],
					"operation": [
						"Reports Update Application Sign In Detailed Summary"
					]
				}
			}
		},
];
