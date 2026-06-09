import type { INodeProperties } from 'n8n-workflow';

export const meOutlookUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					]
				}
			},
			"options": [
				{
					"name": "Me Get Outlook",
					"value": "Me Get Outlook",
					"action": "Get outlook from me",
					"description": "Selective Outlook services available to the user. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/outlook"
						}
					}
				},
				{
					"name": "Me Outlook List Master Categories",
					"value": "Me Outlook List Master Categories",
					"action": "List Outlook categories",
					"description": "Get all the categories that have been defined for the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/outlook/masterCategories"
						}
					}
				},
				{
					"name": "Me Outlook Create Master Categories",
					"value": "Me Outlook Create Master Categories",
					"action": "Create Outlook category",
					"description": "Create an outlookCategory object in the user's master list of categories.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/outlook/masterCategories"
						}
					}
				},
				{
					"name": "Me Outlook Delete Master Categories",
					"value": "Me Outlook Delete Master Categories",
					"action": "Delete navigation property masterCategories for me",
					"description": "Delete navigation property masterCategories for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/outlook/masterCategories/{{$parameter[\"outlookCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Me Outlook Get Master Categories",
					"value": "Me Outlook Get Master Categories",
					"action": "Get masterCategories from me",
					"description": "A list of categories defined for the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/outlook/masterCategories/{{$parameter[\"outlookCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Me Outlook Update Master Categories",
					"value": "Me Outlook Update Master Categories",
					"action": "Update the navigation property masterCategories in me",
					"description": "Update the navigation property masterCategories in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/outlook/masterCategories/{{$parameter[\"outlookCategory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/outlook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Get Outlook"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Get Outlook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/outlook/masterCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook List Master Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /me/outlook/masterCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Create Master Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /me/outlook/masterCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Create Master Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/outlook/masterCategories/{outlookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Delete Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Delete Master Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /me/outlook/masterCategories/{outlookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Get Master Categories"
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
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Get Master Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/outlook/masterCategories/{outlookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Update Master Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/outlook/masterCategories/{outlookCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Outlook User"
					],
					"operation": [
						"Me Outlook Update Master Categories"
					]
				}
			}
		},
];
