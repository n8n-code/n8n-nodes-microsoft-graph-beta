import type { INodeProperties } from 'n8n-workflow';

export const meLicenseDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					]
				}
			},
			"options": [
				{
					"name": "Me List License Details",
					"value": "Me List License Details",
					"action": "List licenseDetails",
					"description": "Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/licenseDetails"
						}
					}
				},
				{
					"name": "Me Create License Details",
					"value": "Me Create License Details",
					"action": "Create new navigation property to licenseDetails for me",
					"description": "Create new navigation property to licenseDetails for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/licenseDetails"
						}
					}
				},
				{
					"name": "Me Delete License Details",
					"value": "Me Delete License Details",
					"action": "Delete navigation property licenseDetails for me",
					"description": "Delete navigation property licenseDetails for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/licenseDetails/{{$parameter[\"licenseDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get License Details",
					"value": "Me Get License Details",
					"action": "Get licenseDetails from me",
					"description": "Get licenseDetails from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/licenseDetails/{{$parameter[\"licenseDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update License Details",
					"value": "Me Update License Details",
					"action": "Update the navigation property licenseDetails in me",
					"description": "Update the navigation property licenseDetails in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/licenseDetails/{{$parameter[\"licenseDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/licenseDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me List License Details"
					]
				}
			}
		},
		{
			"displayName": "POST /me/licenseDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me Create License Details"
					]
				}
			}
		},
		{
			"displayName": "POST /me/licenseDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me Create License Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/licenseDetails/{licenseDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me Delete License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me Delete License Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/licenseDetails/{licenseDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me Get License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me Get License Details"
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
						"Me License Details"
					],
					"operation": [
						"Me Get License Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/licenseDetails/{licenseDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me Update License Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/licenseDetails/{licenseDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me License Details"
					],
					"operation": [
						"Me Update License Details"
					]
				}
			}
		},
];
