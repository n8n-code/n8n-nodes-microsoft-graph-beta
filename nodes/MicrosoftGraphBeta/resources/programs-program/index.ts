import type { INodeProperties } from 'n8n-workflow';

export const programsProgramDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					]
				}
			},
			"options": [
				{
					"name": "Programs Program List Program",
					"value": "Programs Program List Program",
					"action": "List programs (deprecated)",
					"description": "In the Azure AD access reviews feature, list all the program objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programs"
						}
					}
				},
				{
					"name": "Programs Program Create Program",
					"value": "Programs Program Create Program",
					"action": "Create program (deprecated)",
					"description": "In the Azure AD access reviews feature, create a new program object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/programs"
						}
					}
				},
				{
					"name": "Programs Program Delete Program",
					"value": "Programs Program Delete Program",
					"action": "Delete program (deprecated)",
					"description": "In the Azure AD access reviews feature, delete a program object. Do not delete a program which still has `programControl` linked to it, those access reviews should first be deleted or unlinked from the program and linked to a different program.  Also, please note that the built-in default program cannot be deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/programs/{{$parameter[\"program-id\"]}}"
						}
					}
				},
				{
					"name": "Programs Program Get Program",
					"value": "Programs Program Get Program",
					"action": "Get entity from programs by key",
					"description": "Get entity from programs by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programs/{{$parameter[\"program-id\"]}}"
						}
					}
				},
				{
					"name": "Programs Program Update Program",
					"value": "Programs Program Update Program",
					"action": "Update program (deprecated)",
					"description": "In the Azure AD access reviews feature, update an existing program object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/programs/{{$parameter[\"program-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /programs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program List Program"
					]
				}
			}
		},
		{
			"displayName": "POST /programs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program Create Program"
					]
				}
			}
		},
		{
			"displayName": "POST /programs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program Create Program"
					]
				}
			}
		},
		{
			"displayName": "DELETE /programs/{program-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program Delete Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program Delete Program"
					]
				}
			}
		},
		{
			"displayName": "GET /programs/{program-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program Get Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program Get Program"
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
						"Programs Program"
					],
					"operation": [
						"Programs Program Get Program"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programs/{program-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program Update Program"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programs/{program-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programs Program"
					],
					"operation": [
						"Programs Program Update Program"
					]
				}
			}
		},
];
