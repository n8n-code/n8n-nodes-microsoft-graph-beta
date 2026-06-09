import type { INodeProperties } from 'n8n-workflow';

export const privilegedAccessPrivilegedAccessDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Access Privileged Access List Privileged Access",
					"value": "Privileged Access Privileged Access List Privileged Access",
					"action": "Get entities from privilegedAccess",
					"description": "Get entities from privilegedAccess",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Create Privileged Access",
					"value": "Privileged Access Privileged Access Create Privileged Access",
					"action": "Add new entity to privilegedAccess",
					"description": "Add new entity to privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Delete Privileged Access",
					"value": "Privileged Access Privileged Access Delete Privileged Access",
					"action": "Delete entity from privilegedAccess",
					"description": "Delete entity from privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Get Privileged Access",
					"value": "Privileged Access Privileged Access Get Privileged Access",
					"action": "Get entity from privilegedAccess by key",
					"description": "Get entity from privilegedAccess by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Privileged Access Update Privileged Access",
					"value": "Privileged Access Privileged Access Update Privileged Access",
					"action": "Update entity in privilegedAccess",
					"description": "Update entity in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access List Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Create Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Create Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Delete Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Delete Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Get Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Get Privileged Access"
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
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Get Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Update Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Privileged Access"
					],
					"operation": [
						"Privileged Access Privileged Access Update Privileged Access"
					]
				}
			}
		},
];
